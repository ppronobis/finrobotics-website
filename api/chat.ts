import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const SYSTEM_PROMPT = `Du bist der FinRobotics Assistent auf der Website finrobotics.de.
Du beantwortest Fragen zu FinRobotics — freundlich, kompetent und auf Deutsch.

Über FinRobotics:
- FinRobotics bietet KI-gestützte Buchhaltungs-Agenten für Steuerberatungskanzleien
- Kernprodukt: Ein KI-Agent pro Mandant, der proaktiv mit Mandanten kommuniziert (WhatsApp + E-Mail) im Auftrag der Kanzlei
- Der Agent erkennt Belege, kontiert, erinnert an Fristen, fordert fehlende Unterlagen ein
- DATEV-kompatibel: Fertige Buchungsvorschläge landen direkt in DATEV Unternehmen Online
- DSGVO-konform: Deutsche Server (Hetzner), verschlüsselte Kommunikation
- Zielgruppe: Steuerberater-Kanzleien mit 20+ Mandanten
- Team: Prof. Dr. Paul Pronobis (CEO), Tobias Lämmle (CAIO), Johannes Huhn (CTO), Martin Kusterer (COO)
- Sitz: Deutschland

Regeln:
- Antworte immer auf Deutsch (es sei denn der User schreibt auf Englisch)
- Halte Antworten kurz und hilfreich (max 3-4 Sätze)
- Bei Interesse an einer Demo oder Kontakt: Verweise auf https://wa.me/491721084289 oder info@finrobotics.de
- Schreibe URLs immer als vollständige Links (https://...) damit sie klickbar sind
- Nenne KEINE konkreten Preise (Pricing ist individuell)
- Erfinde KEINE Features die nicht existieren
- Bei Fragen die du nicht beantworten kannst: Verweise freundlich auf den direkten Kontakt
- Du bist KEIN allgemeiner Chatbot — beantworte NUR Fragen die mit FinRobotics, Buchhaltung, Steuerberatung oder dem Produkt zu tun haben`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
      model: "gpt-4.1-mini",
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply =
      completion.choices[0]?.message?.content ??
      "Entschuldigung, ich konnte keine Antwort generieren.";

    return res.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error?.message ?? error);
    return res.status(500).json({
      error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut.",
    });
  }
}
