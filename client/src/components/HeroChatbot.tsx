import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot } from "lucide-react";

// ─── Linkify helper: turns URLs and emails into clickable links ───
function renderLinkedText(text: string): React.ReactNode[] {
  const urlRegex = /(https?:\/\/[^\s,)]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = urlRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const url = match[1];
    const email = match[2];
    if (url) {
      // Make wa.me links show as "WhatsApp" label
      const label = url.includes("wa.me") ? "WhatsApp schreiben 💬" : url.replace(/^https?:\/\//, "");
      parts.push(
        <a key={match.index} href={url} target="_blank" rel="noopener noreferrer"
          className="text-secondary underline underline-offset-2 hover:text-secondary/80 break-all">
          {label}
        </a>
      );
    } else if (email) {
      parts.push(
        <a key={match.index} href={`mailto:${email}`}
          className="text-secondary underline underline-offset-2 hover:text-secondary/80 break-all">
          {email}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

// ─── Data structures ───
interface ChatMessage {
  id: string;
  type: "bot" | "user";
  text: string;
}

interface HistoryMessage {
  role: "user" | "assistant";
  content: string;
}

const SCRIPTED_RESPONSES: Record<string, string> = {
  "Wie funktioniert der KI-Agent?":
    "Dein digitaler Mitarbeiter erfasst Belege automatisch, erstellt Buchungsvorschläge und kommuniziert proaktiv mit dir — per WhatsApp oder E-Mail. Du lädst Belege hoch oder leitest Rechnungen weiter, den Rest erledigt dein Agent. 🤖",
  "Wie funktioniert die Belegerfassung?":
    "Fotografiere Belege oder leite Rechnungen per E-Mail weiter. Dein Agent erkennt automatisch Betrag, Datum, Kategorie und Umsatzsteuer. Die Daten landen direkt in deiner Buchhaltung — kein Abtippen mehr. ✨",
  "Ist FinRobotics DATEV-kompatibel?":
    "Ja! FinRobotics erstellt fertige Buchungsvorschläge, die direkt in DATEV Unternehmen Online landen. Dein Steuerberater kann die Daten nahtlos übernehmen – ohne Mehraufwand. 🔗",
  "Brauche ich noch einen Steuerberater?":
    "FinRobotics ersetzt keinen Steuerberater. Dein digitaler Mitarbeiter übernimmt die Vorarbeit — Belege erfassen, kategorisieren, DATEV-Export vorbereiten. Dein Steuerberater bekommt alles fertig aufbereitet und hat deutlich weniger Routinearbeit. 🤝",
  "Wie sicher sind meine Daten?":
    "Deine Daten werden DSGVO-konform auf deutschen Servern gehostet und verschlüsselt übertragen. Wir nehmen Datenschutz sehr ernst — schließlich geht es um sensible Finanzdaten. 🔒",
};

const QUICK_REPLIES = Object.keys(SCRIPTED_RESPONSES);

const MAX_MESSAGES_PER_SESSION = 20;
const API_TIMEOUT_MS = 15_000;

let msgCounter = 0;
function nextId() {
  return `msg-${++msgCounter}`;
}

export default function HeroChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [history, setHistory] = useState<HistoryMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [clickedQuestions, setClickedQuestions] = useState<Set<string>>(
    new Set()
  );
  const [showWelcome, setShowWelcome] = useState(false);
  const [visibleChips, setVisibleChips] = useState<number>(0);
  const [inputValue, setInputValue] = useState("");
  const [sessionMessageCount, setSessionMessageCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Entrance animation sequence
  useEffect(() => {
    const t1 = setTimeout(() => setShowWelcome(true), 500);
    const timers = QUICK_REPLIES.map((_, i) =>
      setTimeout(
        () => setVisibleChips((v) => Math.max(v, i + 1)),
        900 + i * 100
      )
    );
    return () => {
      clearTimeout(t1);
      timers.forEach(clearTimeout);
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  // Send message to API
  const sendToAPI = useCallback(
    async (userMessage: string): Promise<string> => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage, history }),
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(data?.error ?? "API error");
        }

        const data = await response.json();
        return data.reply;
      } catch (error: any) {
        clearTimeout(timeout);
        if (error.name === "AbortError") {
          return "Entschuldigung, ich bin gerade nicht erreichbar. Schreib uns per WhatsApp (https://wa.me/491721084289) für sofortige Hilfe! 💬";
        }
        return "Entschuldigung, da ist etwas schiefgelaufen. Schreib uns per WhatsApp (https://wa.me/491721084289) für sofortige Hilfe! 💬";
      }
    },
    [history]
  );

  // Handle scripted quick reply buttons
  const handleQuickReply = async (question: string) => {
    if (isTyping) return;

    setClickedQuestions((prev) => new Set(prev).add(question));

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: nextId(), type: "user", text: question },
    ]);

    // Show typing indicator
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsTyping(false);

    // Add bot response (scripted)
    const answer = SCRIPTED_RESPONSES[question] ?? "";
    setMessages((prev) => [
      ...prev,
      { id: nextId(), type: "bot", text: answer },
    ]);

    // Also add to history for context
    setHistory((prev) => [
      ...prev,
      { role: "user", content: question },
      { role: "assistant", content: answer },
    ]);
  };

  // Handle free-text input submission
  const handleSendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;

    // Rate limiting
    if (sessionMessageCount >= MAX_MESSAGES_PER_SESSION) {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          type: "bot",
          text: "Du hast das Nachrichtenlimit für diese Session erreicht. Schreib uns per WhatsApp (https://wa.me/491721084289) oder E-Mail (info@finrobotics.de) für weitere Fragen! 💬",
        },
      ]);
      setInputValue("");
      return;
    }

    // Add user message
    const userMsg = text;
    setInputValue("");
    setSessionMessageCount((c) => c + 1);

    setMessages((prev) => [
      ...prev,
      { id: nextId(), type: "user", text: userMsg },
    ]);

    // Call API
    setIsTyping(true);
    const reply = await sendToAPI(userMsg);
    setIsTyping(false);

    // Add bot response
    setMessages((prev) => [
      ...prev,
      { id: nextId(), type: "bot", text: reply },
    ]);

    // Update history
    setHistory((prev) => [
      ...prev,
      { role: "user", content: userMsg },
      { role: "assistant", content: reply },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Hide quick-reply chips once user sends a free-text message
  const hasFreetextMessage = messages.some(
    (m) => m.type === "user" && !QUICK_REPLIES.includes(m.text)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-[450px] mx-auto lg:mx-0 rounded-2xl shadow-xl border border-border bg-card overflow-hidden flex flex-col"
      style={{ height: "min(540px, 70vh)" }}
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-primary/[0.03]">
        <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
          <Bot className="h-5 w-5 text-secondary" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground leading-tight truncate">
            FinRobotics Assistent
          </p>
          <p className="text-xs text-muted-foreground leading-tight">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1 align-middle" />
            Online
          </p>
        </div>
      </div>

      {/* ── Messages area ── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin"
      >
        {/* Welcome message */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-2 items-end"
            >
              <div className="w-7 h-7 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-secondary" />
              </div>
              <div className="bg-muted/60 rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[85%] text-sm text-foreground leading-relaxed whitespace-pre-line">
                👋 Hi! Ich bin der FinRobotics Assistent. Ich helfe dir, deine
                Buchhaltung zu verstehen – und zu automatisieren.
                {"\n\n"}Worüber möchtest du mehr erfahren?
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick-reply chips — hidden once user sends a free-text message */}
        {showWelcome && visibleChips > 0 && !hasFreetextMessage && (
          <div className="flex flex-wrap gap-1.5 pl-9">
            {QUICK_REPLIES.slice(0, visibleChips).map((q, i) => {
              const isClicked = clickedQuestions.has(q);
              return (
                <motion.button
                  key={q}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  onClick={() => handleQuickReply(q)}
                  disabled={isTyping}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    isClicked
                      ? "bg-secondary text-white border-secondary"
                      : "border-secondary/40 text-secondary hover:bg-secondary/10"
                  } disabled:opacity-50`}
                >
                  {q}
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Conversation messages */}
        <AnimatePresence mode="popLayout">
          {messages.map((msg) =>
            msg.type === "user" ? (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="flex justify-end"
              >
                <div className="bg-secondary text-white rounded-2xl rounded-br-md px-3.5 py-2.5 max-w-[80%] text-sm leading-relaxed">
                  {msg.text}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="flex gap-2 items-end"
              >
                <div className="w-7 h-7 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-secondary" />
                </div>
                <div className="bg-muted/60 rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[85%] text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {renderLinkedText(msg.text)}
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-2 items-end"
            >
              <div className="w-7 h-7 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-secondary" />
              </div>
              <div className="bg-muted/60 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Input bar ── */}
      <div className="border-t border-border px-3 py-2.5 bg-card">
        <div className="flex items-center gap-2 bg-muted/40 rounded-xl px-3 py-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}

            placeholder="Frag mich etwas über FinRobotics…"
            disabled={isTyping}
            className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground disabled:opacity-50"
            maxLength={500}
          />
          <button
            onClick={handleSendMessage}
            disabled={isTyping || !inputValue.trim()}
            className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 hover:bg-secondary/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4 text-secondary" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
