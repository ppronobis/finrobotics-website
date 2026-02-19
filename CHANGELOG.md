# Changelog

## [Unreleased] — 2026-02-19

Alle Änderungen basierend auf dem Website-Review vom Juli 2026.

### 🔴 Kritische Fixes

- **Preis-Inkonsistenz behoben** — Funktionen-Vergleichstabelle zeigte "ab €39", korrigiert auf "ab €49" (konsistent mit Preise-Seite)
- **WhatsApp + Telefon Platzhalter ersetzt** — Alle `PLATZHALTER`-Texte durch echte Kontaktdaten ersetzt:
  - WhatsApp: `https://wa.me/491721084289`
  - Telefon: `+49 172 1084289`
  - Betroffen: Header, HeroChatbot, Home-Page

### 🟡 Wichtige Fixes

- **"Tobi" → "Tobias Lämmle"** — Vollständiger Name des CTO auf der Über-Uns Seite eingesetzt
- **Login-Button → Kontakt** — Irreführender "Login"-Button im Header zu "Kontakt" umbenannt (verwies bereits auf /kontakt)
- **Externe Bilder lokal gehostet** — 3 Bilder von `files.manuscdn.com` heruntergeladen und in `/public/images/` abgelegt:
  - `paul-pronobis.webp` (Gründer-Foto)
  - `finrobotics-dashboard.png` (Dashboard-Screenshot)
  - `paul-pronobis-team.png` (Team-Foto)

### 🟢 Nice-to-have

- **Kontaktformular: mailto-Fallback** — Simuliertes Formular (nur `setTimeout`) durch echte `mailto:`-Lösung ersetzt. Formular sammelt Daten und öffnet E-Mail-Client mit vorausgefüllter Mail an `paul.pronobis@finrobotics.de`

### Infrastruktur

- Manus Debug-Collector (`__manus__/debug-collector.js`) entfernt
- Sauberes `.gitignore` für Node/React/Vite erstellt
- Git-Repository initialisiert

---

## Noch offen (aus dem Review)

- [ ] USt-ID im Impressum aktualisieren (aktuell "[In Beantragung]")
- [ ] Handelsregister im Impressum aktualisieren (aktuell "[In Gründung]")
- [ ] LinkedIn-Profil für Tobias Lämmle verlinken (aktuell `#`)
- [ ] Martin Stähle auf Team-Seite ergänzen?
- [ ] Twitter/LinkedIn Firmenprofile prüfen
- [ ] Feature-Bilder: Echte Screenshots statt Platzhalter-Icons
- [ ] SEO: Meta-Tags, Open Graph, sitemap.xml
- [ ] Analytics einbauen (z.B. Plausible, Umami)
- [ ] Cookie-Banner (EU-Pflicht bei Tracking)
- [ ] Backend für Kontaktformular (Formspree, Resend, eigene API)
- [ ] Vite Analytics-Env-Variablen konfigurieren oder Script entfernen
