import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Calendar,
  CalendarCheck,
  Check,
  Clock,
  Eye,
  FileSearch,
  FileText,
  Globe,
  History,
  Lock,
  Mail,
  MessageSquare,
  Send,
  Server,
  Shield,
  ShieldCheck,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const painPoints = [
  {
    icon: FileText,
    title: "Fehlende Belege nachfordern",
    description:
      "Belege fehlen regelmäßig — und Ihr Team muss jeden Mandanten manuell erinnern.",
  },
  {
    icon: MessageSquare,
    title: "Statusfragen beantworten",
    description:
      "\"Wo steht meine Buchhaltung?\" gehört zu den häufigsten Anfragen in der Kanzlei.",
  },
  {
    icon: Clock,
    title: "Fristenerinnerungen senden",
    description:
      "Fristen im Blick behalten und Erinnerungen verschicken kostet täglich wertvolle Zeit.",
  },
];

const onboardingSteps = [
  {
    step: "1",
    icon: UserPlus,
    title: "Mandant anlegen",
    description:
      "Rechtsform, Kontenrahmen und USt-Rhythmus auswählen — der Rest ist vorbereitet.",
    details: ["Rechtsform", "Kontenrahmen", "USt-Rhythmus"],
  },
  {
    step: "2",
    icon: MessageSquare,
    title: "Kommunikationskanal wählen",
    description:
      "WhatsApp oder E-Mail einrichten — je nachdem, wie Ihr Mandant am liebsten kommuniziert.",
    details: ["WhatsApp verbinden", "E-Mail aktivieren", "Branding der Kanzlei"],
  },
  {
    step: "3",
    icon: Bot,
    title: "Agent arbeitet proaktiv",
    description:
      "Der Agent kommuniziert automatisch, fordert Belege nach und hält Mandanten auf Kurs.",
    details: ["Belege nachfordern", "Fristen erinnern", "Status-Updates senden"],
  },
];

const agentFeatures = [
  {
    icon: Send,
    title: "Proaktiv",
    description:
      "Meldet sich von selbst bei Mandanten — keine manuelle Nachverfolgung mehr.",
  },
  {
    icon: MessageSquare,
    title: "Interaktiv",
    description:
      "Mandanten antworten direkt per WhatsApp oder E-Mail und erhalten sofort Rückmeldung.",
  },
  {
    icon: Bot,
    title: "Lernfähig",
    description:
      "Erkennt Muster je Mandant und verbessert Buchungsvorschläge mit jeder Interaktion.",
  },
  {
    icon: Users,
    title: "Isoliert",
    description:
      "Jeder Mandant hat einen eigenen Agenten — ohne Datenvermischung zwischen Mandaten.",
  },
];

const transparencyFeatures = [
  {
    icon: FileSearch,
    title: "Buchungsbegründung",
    description:
      "Jede Buchung kommt mit einer klaren Begründung. Der Agent erklärt, warum er so gebucht hat — nachvollziehbar und prüfbar.",
    example: "\u201EBewirtungskosten, weil Restaurant + Teilnehmerliste erkannt\u201C",
  },
  {
    icon: Eye,
    title: "Konfidenz-Score",
    description:
      "Jede Buchung hat einen Konfidenz-Wert. Ab 90%+ wird automatisch gebucht, darunter zur Prüfung markiert. Sie sehen immer, wie sicher sich die KI ist.",
    example: "Konfidenz: 94% → automatisch gebucht",
  },
  {
    icon: History,
    title: "Audit Trail",
    description:
      "Lückenlose Dokumentation: Wer hat was wann gebucht oder freigegeben. GoBD-konform und revisionssicher.",
    example: "Agent → gebucht am 14.02. um 09:12 Uhr",
  },
];

const securityFeatures = [
  { icon: Server, title: "Deutsche Rechenzentren" },
  { icon: Shield, title: "DSGVO-konform" },
  { icon: Lock, title: "Verschlüsselte Kommunikation" },
  { icon: BadgeCheck, title: "GoBD-konform" },
  { icon: Globe, title: "Keine US-Cloud" },
];

const comparisonRows = [
  {
    feature: "Proaktive Mandantenkommunikation",
    classic: false,
    finrobotics: true,
  },
  {
    feature: "24/7 Erreichbarkeit",
    classic: false,
    finrobotics: true,
  },
  {
    feature: "WhatsApp & E-Mail Integration",
    classic: false,
    finrobotics: true,
  },
  {
    feature: "Mandantenindividuelle Agenten",
    classic: false,
    finrobotics: true,
  },
  {
    feature: "Setup-Zeit",
    classic: "Stunden–Tage",
    finrobotics: "3 Minuten",
  },
  {
    feature: "Lernfähig pro Mandant",
    classic: false,
    finrobotics: true,
  },
  {
    feature: "DATEV-kompatibel",
    classic: "Teilweise",
    finrobotics: true,
  },
];

export default function FuerSteuerberater() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="container py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Bot className="h-4 w-4" />
                  Für Steuerberater & Kanzleien
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                  Digitale Mitarbeiter für die Steuerberatung der Zukunft
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                  Ein KI-Agent pro Mandant — Ihr digitaler Mitarbeiter, der selbstständig kommuniziert, Belege einfordert und bucht. Per WhatsApp oder E-Mail. Im Auftrag Ihrer Kanzlei.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="mailto:paul@finrobotics.de?subject=Demo%20Steuerberater">
                      <Mail className="mr-2 h-4 w-4" />
                      Demo vereinbaren
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a
                      href="https://cal.com/paul-pronobis-0704/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarCheck className="mr-2 h-4 w-4" />
                      Erstgespräch buchen
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="trust-badge">
                    <BadgeCheck className="h-4 w-4 text-secondary" />
                    GoBD-konform
                  </div>
                  <div className="trust-badge">
                    <BadgeCheck className="h-4 w-4 text-secondary" />
                    DATEV-kompatibel
                  </div>
                  <div className="trust-badge">
                    <Shield className="h-4 w-4 text-secondary" />
                    DSGVO-konform
                  </div>
                  <div className="trust-badge">
                    <Server className="h-4 w-4 text-secondary" />
                    Deutsche Server
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <Card className="w-full max-w-md border-secondary/20 shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Kanzlei Müller Dashboard</p>
                        <p className="text-xs text-muted-foreground">Kommunikation & Nachverfolgung</p>
                      </div>
                      <span className="ml-auto text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                        Live
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          name: "Weber GmbH",
                          channel: "WhatsApp aktiv",
                          status: "letzte Nachricht: vor 2h",
                        },
                        {
                          name: "Schneider eK",
                          channel: "E-Mail aktiv",
                          status: "letzte Nachricht: vor 37m",
                        },
                        {
                          name: "Meyer Consulting",
                          channel: "WhatsApp aktiv",
                          status: "Antwort ausstehend seit 1d",
                        },
                      ].map((entry, index) => (
                        <div key={index} className="rounded-lg bg-muted/40 border p-3">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{entry.name}</p>
                            <span className="text-[11px] text-secondary font-medium">{entry.channel}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{entry.status}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">80% der Mandantenanfragen sind Routine</h2>
              <p className="section-subtitle mx-auto">
                Ihr Team verbringt Stunden mit Kommunikation statt mit Steuerberatung.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={pain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <pain.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{pain.title}</h3>
                      <p className="text-sm text-muted-foreground">{pain.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Ihr Agent kommuniziert. Im Namen Ihrer Kanzlei.</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <Card className="border-[#25D366]/30 shadow-lg">
                <CardContent className="p-0 overflow-hidden">
                  <div className="bg-[#128C7E] text-white px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">FinRobotics im Auftrag von Kanzlei Müller</p>
                      <p className="text-xs text-white/80">zuletzt aktiv gerade eben</p>
                    </div>
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[280px]">
                    <div className="max-w-[85%] ml-auto bg-[#DCF8C6] rounded-xl rounded-br-sm px-3 py-2 text-sm shadow-sm">
                      Guten Morgen Herr Weber, uns fehlt noch der Bewirtungsbeleg vom 14.02. Können Sie den kurz abfotografieren?
                    </div>
                    <div className="max-w-[85%] bg-white rounded-xl rounded-bl-sm px-3 py-2 text-sm shadow-sm">
                      📸 Bewirtungsbeleg_Restaurant_Löwen.jpg
                    </div>
                    <div className="max-w-[85%] ml-auto bg-[#DCF8C6] rounded-xl rounded-br-sm px-3 py-2 text-sm shadow-sm">
                      Perfekt, 142,50€ Restaurant Löwen, als Bewirtungskosten verbucht. ✅
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-0 overflow-hidden">
                  <div className="bg-muted/60 border-b px-4 py-3">
                    <p className="text-xs text-muted-foreground">Von</p>
                    <p className="text-sm font-medium">buchhaltung@kanzlei-mueller.finrobotics.de</p>
                    <p className="text-xs text-muted-foreground mt-2">Betreff</p>
                    <p className="text-sm font-medium">Fehlender Bewirtungsbeleg vom 14.02.</p>
                  </div>
                  <div className="p-4 text-sm text-foreground space-y-3 min-h-[280px]">
                    <p>Guten Morgen Herr Weber,</p>
                    <p>
                      für die vollständige Buchhaltung fehlt uns noch der Bewirtungsbeleg vom 14.02.
                    </p>
                    <p>
                      Antworten Sie einfach auf diese E-Mail mit dem Beleg-Foto. Wir erfassen den Beleg automatisch und ordnen ihn direkt zu.
                    </p>
                    <p>
                      Vielen Dank und beste Grüße<br />
                      FinRobotics im Auftrag von Kanzlei Müller
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              WhatsApp oder E-Mail — Ihre Mandanten wählen den bevorzugten Kanal.
            </p>
          </div>
        </section>

        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">In 3 Schritten live</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          {step.step}
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <step.icon className="h-4 w-4 text-secondary" />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-3.5 w-3.5 text-secondary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Was den FinRobotics Agent besonders macht</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agentFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparenz Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Volle Transparenz. Jede Buchung nachvollziehbar.</h2>
              <p className="section-subtitle mx-auto">
                Die häufigste Frage: „Kann ich der KI vertrauen?" — Unsere Antwort: Sie müssen nicht vertrauen. Sie können prüfen.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left: 3 Feature Cards */}
              <div className="space-y-5">
                {transparencyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <feature.icon className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                            <p className="text-xs text-secondary font-medium italic">→ {feature.example}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Right: Mockup Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-secondary/20 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    {/* Card Header */}
                    <div className="bg-secondary/5 border-b px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-semibold">Buchungsdetail</span>
                      </div>
                      <Badge variant="secondary" className="text-[11px] font-semibold">
                        Automatisch gebucht
                      </Badge>
                    </div>

                    <div className="p-5 space-y-5">
                      {/* Booking Summary */}
                      <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Beleg</span>
                          <span className="text-sm font-medium">Restaurant Löwen, 142,50 €</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Konto</span>
                          <span className="text-sm font-medium">4650 · Bewirtungskosten</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Mandant</span>
                          <span className="text-sm font-medium">Weber GmbH</span>
                        </div>
                      </div>

                      {/* Begründung */}
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Buchungsbegründung</p>
                        <div className="rounded-lg bg-secondary/5 border border-secondary/15 px-4 py-3">
                          <p className="text-sm text-foreground leading-relaxed">
                            <span className="text-secondary font-medium">Bewirtungskosten</span> — Restaurant-Rechnung erkannt, 
                            Teilnehmerliste im Beleg vorhanden. Betrag 142,50 € auf Konto 4650 gebucht. 
                            Vorsteuer 19% = 22,77 € separat erfasst.
                          </p>
                        </div>
                      </div>

                      {/* Konfidenz */}
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Konfidenz-Score</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-green-500 rounded-full"
                              initial={{ width: "0%" }}
                              whileInView={{ width: "94%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-green-600 tabular-nums">94%</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1.5">
                          ≥ 90% → automatisch gebucht · &lt; 90% → zur manuellen Prüfung
                        </p>
                      </div>

                      {/* Audit Trail */}
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Audit Trail</p>
                        <div className="space-y-2">
                          {[
                            { time: "14.02.2025, 08:47", event: "Beleg empfangen via WhatsApp", actor: "Weber GmbH" },
                            { time: "14.02.2025, 08:47", event: "OCR & Klassifikation abgeschlossen", actor: "Agent" },
                            { time: "14.02.2025, 08:47", event: "Buchung erstellt (Konfidenz: 94%)", actor: "Agent" },
                            { time: "14.02.2025, 09:12", event: "Buchung automatisch bestätigt", actor: "System" },
                          ].map((entry, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-xs">
                              <span className="text-muted-foreground tabular-nums whitespace-nowrap mt-0.5">{entry.time}</span>
                              <div className="flex-1">
                                <span className="text-foreground">{entry.event}</span>
                                <span className="text-muted-foreground ml-1.5">· {entry.actor}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ihre Daten. In Deutschland. Geschützt.</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {securityFeatures.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-xl border border-white/20 bg-white/5 p-5 text-center"
                >
                  <item.icon className="h-6 w-6 mx-auto mb-3" />
                  <p className="text-sm font-medium text-primary-foreground/90">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Klassische Software vs. FinRobotics Agent</h2>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 text-sm text-muted-foreground">Feature</th>
                    <th className="p-4 text-sm text-muted-foreground">Klassische Software</th>
                    <th className="p-4 text-sm text-secondary font-semibold">FinRobotics</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b last:border-b-0">
                      <td className="p-4 text-sm font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-muted-foreground">
                        {typeof row.classic === "boolean" ? (
                          row.classic ? (
                            <Check className="h-4 w-4 mx-auto text-green-600" />
                          ) : (
                            <X className="h-4 w-4 mx-auto text-red-500" />
                          )
                        ) : (
                          row.classic
                        )}
                      </td>
                      <td className="p-4 text-center text-sm font-medium text-foreground">
                        {typeof row.finrobotics === "boolean" ? (
                          row.finrobotics ? (
                            <Check className="h-4 w-4 mx-auto text-green-600" />
                          ) : (
                            <X className="h-4 w-4 mx-auto text-red-500" />
                          )
                        ) : (
                          row.finrobotics
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section bg-slate-900 text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Demo für Ihre Kanzlei vereinbaren</h2>
              <p className="text-white/75 mb-8 text-lg">
                In einem persönlichen Gespräch zeigen wir Ihnen, wie FinRobotics in Ihre Kanzlei passt und welche Mandate zuerst profitieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                  <a href="mailto:paul@finrobotics.de?subject=Demo%20Steuerberater">
                    Demo vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a
                    href="https://cal.com/paul-pronobis-0704/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Erstgespräch buchen
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
