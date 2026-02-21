import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot } from "lucide-react";
import { toast } from "sonner";

// ─── Data structure for scripted responses ───
interface ChatMessage {
  id: string;
  type: "bot" | "user";
  text: string;
}

const SCRIPTED_RESPONSES: Record<string, string> = {
  "Was kostet Finrobotics?":
    "Finrobotics startet ab 99\u00A0\u20AC/Monat für Selbstständige und Unternehmer. Du sparst im Vergleich zum Steuerberater oft mehrere hundert Euro im Jahr – bei weniger Aufwand.\n\nWillst du mehr Details? Schreib uns direkt per WhatsApp! 💬",
  "Wie funktioniert die Belegerfassung?":
    "Ganz einfach: Du lädst deine Belege hoch (Foto oder PDF) und unsere KI erkennt automatisch Betrag, Datum, Kategorie und Umsatzsteuer. Die Daten landen direkt in deiner Buchhaltung – kein Abtippen mehr. ✨",
  "Ist Finrobotics DATEV-kompatibel?":
    "Ja! Finrobotics exportiert deine Daten im DATEV-Format. Dein Steuerberater kann die Daten direkt in seine Software übernehmen – ohne Mehraufwand. 🔗",
  "Brauche ich noch einen Steuerberater?":
    "Finrobotics ersetzt keinen Steuerberater – wir bereiten alles so vor, dass dein Steuerberater deutlich weniger Arbeit hat. Das spart dir Zeit und Geld bei der Beratung. 🤝",
  "Wie sicher sind meine Daten?":
    "Deine Daten werden DSGVO-konform in Europa gehostet und verschlüsselt übertragen. Wir nehmen Datenschutz sehr ernst – schließlich geht es um deine Finanzdaten. 🔒",
};

const QUICK_REPLIES = Object.keys(SCRIPTED_RESPONSES);

// Abstracted so a real API can replace this later
function getResponse(question: string): string {
  return (
    SCRIPTED_RESPONSES[question] ??
    "Das kann ich leider noch nicht beantworten. Schreib uns per WhatsApp für sofortige Hilfe!"
  );
}

let msgCounter = 0;
function nextId() {
  return `msg-${++msgCounter}`;
}

export default function HeroChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [clickedQuestions, setClickedQuestions] = useState<Set<string>>(
    new Set()
  );
  const [showWelcome, setShowWelcome] = useState(false);
  const [visibleChips, setVisibleChips] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Entrance animation sequence
  useEffect(() => {
    const t1 = setTimeout(() => setShowWelcome(true), 500);
    const timers = QUICK_REPLIES.map((_, i) =>
      setTimeout(() => setVisibleChips((v) => Math.max(v, i + 1)), 900 + i * 100)
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

    // Add bot response
    const answer = getResponse(question);
    setMessages((prev) => [
      ...prev,
      { id: nextId(), type: "bot", text: answer },
    ]);
  };

  const handleInputClick = () => {
    toast(
      <div>
        Volle Chat-Funktion kommt bald!{" "}
        <a
          href="https://wa.me/491721084289"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium text-[#25D366]"
        >
          Schreib uns per WhatsApp
        </a>{" "}
        für sofortige Hilfe.
      </div>
    );
  };

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
            Finrobotics Assistent
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
                👋 Hi! Ich bin der Finrobotics Assistent. Ich helfe dir, deine
                Buchhaltung zu verstehen – und zu automatisieren.
                {"\n\n"}Worüber möchtest du mehr erfahren?
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick-reply chips */}
        {showWelcome && visibleChips > 0 && (
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
                  {msg.text}
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
        <div
          onClick={handleInputClick}
          className="flex items-center gap-2 bg-muted/40 rounded-xl px-3 py-2 cursor-pointer hover:bg-muted/60 transition-colors"
        >
          <span className="flex-1 text-sm text-muted-foreground select-none">
            Frag mich etwas über Finrobotics…
          </span>
          <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
            <Send className="h-4 w-4 text-secondary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
