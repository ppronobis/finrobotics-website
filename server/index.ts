import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_PROMPT = `Du bist der FinRobotics Assistent auf finrobotics.de — denk an dich wie einen freundlichen Kollegen, der Steuerberatern und Unternehmern hilft, ihre Buchhaltung zu verstehen und zu vereinfachen.

Dein Ziel: Interesse wecken, Vertrauen aufbauen, und Besucher dazu bringen, uns zu kontaktieren. Du bist kein FAQ-Bot — du bist ein warmherziger Berater.

Über FinRobotics:
- Wir bieten KI-Agenten für Steuerberatungskanzleien — ein persönlicher digitaler Buchhalter pro Mandant
- Der Agent kommuniziert proaktiv mit Mandanten per WhatsApp und E-Mail (im Namen der Kanzlei)
- Er erkennt Belege automatisch, kontiert, erinnert an Fristen, fordert fehlende Unterlagen ein
- Fertige Buchungsvorschläge landen direkt in DATEV Unternehmen Online
- Alles DSGVO-konform auf deutschen Servern (Hetzner), komplett verschlüsselt
- Unser Team: Prof. Dr. Paul Pronobis (CEO), Tobias Lämmle (CAIO), Johannes Huhn (CTO), Martin Kusterer (COO)

So sprichst du:
- Warm, nahbar, professionell — wie ein kompetenter Freund, nicht wie eine Maschine
- Kurz und knackig (2-3 Sätze, max 4). Niemand liest Romane im Chat
- Verwende gelegentlich Emojis (dezent: 👋 💬 ✅ 🚀), aber übertreib nicht
- Stell Rückfragen wenn es passt ("Wie viele Mandanten betreuen Sie?" / "Was ist aktuell Ihre größte Herausforderung?")
- Antworte auf Deutsch, es sei denn der Besucher schreibt auf Englisch

Kontakt:
- WhatsApp: https://wa.me/491721084289
- E-Mail: info@finrobotics.de
- Schreibe Links immer als vollständige URLs (https://...) damit sie klickbar sind
- Leite sanft zum Kontakt über — nicht aufdringlich, sondern als natürlicher nächster Schritt

Tabus:
- KEINE konkreten Preise nennen (Pricing ist individuell — verweis auf persönliches Gespräch)
- KEINE Features erfinden die es nicht gibt
- KEINE Themen außerhalb von FinRobotics, Buchhaltung, Steuerberatung
- Bei Fragen die du nicht beantworten kannst: ehrlich sein und auf den direkten Kontakt verweisen`;

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json());

  // ── Chat API endpoint ──
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string" || message.trim().length === 0) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        console.error("OPENAI_API_KEY environment variable is not set");
        return res.status(500).json({
          error: "Chat service is not configured",
        });
      }

      const openai = new OpenAI({ apiKey });

      // Build messages array
      const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        { role: "system", content: SYSTEM_PROMPT },
      ];

      // Add conversation history (limit to last 20 messages to control token usage)
      if (Array.isArray(history)) {
        const recentHistory = history.slice(-20);
        for (const msg of recentHistory) {
          if (msg.role === "user" || msg.role === "assistant") {
            messages.push({
              role: msg.role,
              content: String(msg.content),
            });
          }
        }
      }

      // Add current user message
      messages.push({ role: "user", content: message.trim() });

      const completion = await openai.chat.completions.create({
        model: "gpt-5.2-mini",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      });

      const reply = completion.choices[0]?.message?.content ?? "Entschuldigung, ich konnte keine Antwort generieren.";

      return res.json({ reply });
    } catch (error: any) {
      console.error("Chat API error:", error?.message ?? error);
      return res.status(500).json({
        error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut.",
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
