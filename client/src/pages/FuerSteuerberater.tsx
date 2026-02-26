import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  UserPlus,
  Database,
  Bot,
  Check,
  X,
  ArrowRight,
  Shield,
  BadgeCheck,
  Lock,
  LayoutDashboard,
  BrainCircuit,
  Eye,
  CalendarCheck,
  Mail,
  Layers,
  ShieldCheck,
  Link,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const onboardingSteps = [
  {
    step: "1",
    icon: UserPlus,
    title: "Mandant einrichten",
    description:
      "Sie legen den Mandanten an und wählen die wichtigsten Einstellungen. FinRobotics richtet den Rest für Sie ein.",
    details: ["GmbH / eK / Freiberufler", "SKR03 oder SKR04", "Monatliche / Quartals-USt"],
  },
  {
    step: "2",
    icon: Database,
    title: "DATEV verbinden",
    description:
      "Wir docken an Ihre DATEV-Welt an. Vorhandene Daten werden übernommen, ohne dass Sie alles neu aufsetzen müssen.",
    details: ["Import vorhandener Daten", "Bisherige Buchungen als Grundlage", "Keine Doppelerfassung"],
  },
  {
    step: "3",
    icon: Bot,
    title: "Vorarbeit läuft automatisch",
    description:
      "Belege werden erkannt, kontiert und als Buchungsvorschläge vorbereitet. Sie prüfen nur noch das Wesentliche.",
    details: ["Weniger Routinearbeit", "Hinweise bei Auffälligkeiten", "Lernt je Mandant mit"],
  },
];

const comparisonRows = [
  {
    feature: "Einrichtung",
    butler: "Stunden bis Tage",
    sage: "Tage bis Wochen",
    finrobotics: "In wenigen Minuten",
    butlerCheck: false,
    sageCheck: false,
    finroboticsCheck: true,
    textOnly: true,
  },
  {
    feature: "Entlastung im Alltag",
    butler: "Teilweise",
    sage: "Gering",
    finrobotics: "Sehr hoch",
    butlerCheck: false,
    sageCheck: false,
    finroboticsCheck: true,
    textOnly: true,
  },
  {
    feature: "Eigener Bereich pro Mandant",
    butler: false,
    sage: false,
    finrobotics: true,
    butlerCheck: false,
    sageCheck: false,
    finroboticsCheck: true,
    textOnly: false,
  },
  {
    feature: "Übersicht für die Kanzlei",
    butler: "Grundfunktionen",
    sage: "Grundfunktionen",
    finrobotics: "Alles zentral im Blick",
    butlerCheck: false,
    sageCheck: false,
    finroboticsCheck: true,
    textOnly: true,
  },
  {
    feature: "Lernt je Mandant mit",
    butler: false,
    sage: false,
    finrobotics: true,
    butlerCheck: false,
    sageCheck: false,
    finroboticsCheck: true,
    textOnly: false,
  },
];

const agentFeatures = [
  {
    icon: Lock,
    title: "Klar getrennt",
    description:
      "Jeder Mandant hat seinen eigenen Bereich. Das verhindert Verwechslungen und schafft Sicherheit bei sensiblen Daten.",
  },
  {
    icon: ShieldCheck,
    title: "Schnell startklar",
    description:
      "Wichtige Regeln und Einstellungen sind vorbereitet. Sie starten ohne langes Einrichten.",
  },
  {
    icon: BrainCircuit,
    title: "Wird mit der Zeit besser",
    description:
      "FinRobotics merkt sich typische Buchungen pro Mandant und liefert immer passendere Vorschläge.",
  },
  {
    icon: Eye,
    title: "Sie behalten die Hoheit",
    description:
      "Im Dashboard sehen Sie alle Mandanten auf einen Blick und greifen ein, wenn etwas geprüft werden soll.",
  },
];

export default function FuerSteuerberater() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="container py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Layers className="h-4 w-4" />
                  Für Steuerberater & Kanzleien
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                  Mehr Zeit für Beratung.
                  <br />
                  <span className="text-secondary">Weniger Routine in der Buchhaltung.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  Sie und Ihre Mandanten arbeiten weiter mit DATEV. FinRobotics übernimmt die
                  Vorarbeit — von der Belegerkennung bis zum fertigen Buchungsvorschlag. Alles
                  passt in Ihren bestehenden Workflow.
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

                {/* Trust Badges */}
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
                    <Lock className="h-4 w-4 text-secondary" />
                    Eigener Bereich pro Mandant
                  </div>
                </div>
              </motion.div>

              {/* Visual: Dashboard-Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-md">
                  <Card className="border-secondary/20 shadow-2xl bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <LayoutDashboard className="h-5 w-5 text-secondary" />
                        <span className="font-semibold text-sm">Kanzlei-Dashboard</span>
                        <span className="ml-auto text-xs text-muted-foreground bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                          Live
                        </span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "Müller GmbH", status: "Aktiv", bookings: "142 Buchungsvorschläge" },
                          { name: "Schmidt eK", status: "Aktiv", bookings: "87 Buchungsvorschläge" },
                          { name: "Weber Freelancer", status: "Aktiv", bookings: "53 Buchungsvorschläge" },
                          { name: "+ Mandant anlegen", status: "", bookings: "" },
                        ].map((client, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-3 p-3 rounded-lg ${
                              i === 3
                                ? "border-2 border-dashed border-secondary/30 text-secondary cursor-pointer hover:bg-secondary/5 transition-colors"
                                : "bg-muted/50"
                            }`}
                          >
                            {i < 3 ? (
                              <>
                                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                  <Bot className="h-4 w-4 text-secondary" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">{client.name}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {client.bookings}
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 rounded-full bg-green-500" />
                                  <span className="text-xs text-muted-foreground">
                                    {client.status}
                                  </span>
                                </div>
                              </>
                            ) : (
                              <div className="flex items-center gap-2 text-sm font-medium w-full justify-center">
                                <UserPlus className="h-4 w-4" />
                                {client.name}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3-Step Onboarding */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Mandant in 3 Schritten startklar</h2>
              <p className="section-subtitle mx-auto">
                Von der Einrichtung bis zu fertigen Buchungsvorschlägen in wenigen Minuten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
              {/* Verbindungslinien Desktop */}
              <div className="hidden md:block absolute top-14 left-[33%] w-[16%] h-0.5 bg-gradient-to-r from-secondary/40 to-secondary/40" />
              <div className="hidden md:block absolute top-14 left-[66%] w-[16%] h-0.5 bg-gradient-to-r from-secondary/40 to-secondary/40" />

              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <Card className="h-full border-border hover:border-secondary/40 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
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

        {/* DATEV Integration */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-secondary/30 bg-secondary/5">
                <CardContent className="p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-5">
                    <Link className="h-4 w-4" />
                    DATEV bleibt Ihr Zuhause
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    FinRobotics ergänzt DATEV — es ersetzt DATEV nicht.
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Ihre Mandanten und Sie arbeiten weiter mit DATEV. FinRobotics übernimmt die
                    Vorarbeit und liefert fertige Buchungsvorschläge direkt zurück in DATEV
                    Unternehmen Online.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="rounded-lg bg-background/70 border p-4">
                      <p className="text-sm font-medium mb-1">1. Belege kommen rein</p>
                      <p className="text-sm text-muted-foreground">
                        Mandanten laden Belege wie gewohnt hoch.
                      </p>
                    </div>
                    <div className="rounded-lg bg-background/70 border p-4">
                      <p className="text-sm font-medium mb-1">2. FinRobotics bereitet vor</p>
                      <p className="text-sm text-muted-foreground">
                        KI erkennt, kontiert und erstellt Buchungsvorschläge.
                      </p>
                    </div>
                    <div className="rounded-lg bg-background/70 border p-4">
                      <p className="text-sm font-medium mb-1">3. Zurück in DATEV</p>
                      <p className="text-sm text-muted-foreground">
                        Übergabe über offizielle DATEV-Schnittstellen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">FinRobotics im Vergleich</h2>
              <p className="section-subtitle mx-auto">
                Klarer Mehrwert für Kanzleien, die DATEV nutzen und Routinearbeit reduzieren wollen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-x-auto"
            >
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground w-[30%]">
                      Bereich
                    </th>
                    <th className="p-4 text-center text-sm font-medium text-muted-foreground">
                      BuchhaltungsButler
                    </th>
                    <th className="p-4 text-center text-sm font-medium text-muted-foreground">
                      Sage
                    </th>
                    <th className="p-4 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="text-sm font-semibold text-secondary">FinRobotics</span>
                        <span className="text-xs text-secondary/70 font-normal">
                          Für DATEV-Kanzleien
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-t border-border ${index % 2 === 0 ? "bg-muted/20" : ""}`}
                    >
                      <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.textOnly ? (
                          <span className="text-sm text-muted-foreground">{row.butler as string}</span>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                              <X className="h-3.5 w-3.5 text-destructive" />
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.textOnly ? (
                          <span className="text-sm text-muted-foreground">{row.sage as string}</span>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                              <X className="h-3.5 w-3.5 text-destructive" />
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="p-4 text-center bg-secondary/5 border-l-2 border-r-2 border-secondary/20">
                        {row.textOnly ? (
                          <span className="text-sm font-semibold text-secondary">
                            {row.finrobotics as string}
                          </span>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                              <Check className="h-3.5 w-3.5 text-secondary" />
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-secondary/20">
                    <td className="p-4" />
                    <td className="p-4" />
                    <td className="p-4" />
                    <td className="p-4 bg-secondary/5 border-l-2 border-r-2 border-b-2 border-secondary/20 rounded-b-lg text-center">
                      <span className="text-xs text-secondary font-medium">Beste Wahl</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Agent-per-Mandant Feature Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Bot className="h-4 w-4" />
                  Ein Bereich pro Mandant
                </div>
                <h2 className="section-title">Jeder Mandant arbeitet in seinem eigenen Bereich</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  So bleiben Daten sauber getrennt und Buchungen eindeutig zugeordnet. Sie steuern
                  alles zentral und vermeiden Verwechslungen im Tagesgeschäft.
                </p>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {agentFeatures.map((feature, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="h-full border-border hover:border-secondary/40 transition-colors duration-300">
                        <CardContent className="p-5">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                            <feature.icon className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Visual: Agent Architecture */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-sm space-y-3">
                  {/* Dashboard Hub */}
                  <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <LayoutDashboard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Ihr Kanzlei-Dashboard</div>
                          <div className="text-xs text-muted-foreground">
                            Zentraler Überblick & Kontrolle
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-border" />
                  </div>

                  {/* Agents */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        label: "Müller GmbH",
                        color: "from-secondary/10 to-secondary/20",
                        border: "border-secondary/30",
                      },
                      {
                        label: "Schmidt eK",
                        color: "from-secondary/10 to-secondary/20",
                        border: "border-secondary/30",
                      },
                      {
                        label: "Weber FR",
                        color: "from-secondary/10 to-secondary/20",
                        border: "border-secondary/30",
                      },
                    ].map((agent, i) => (
                      <Card key={i} className={`bg-gradient-to-b ${agent.color} border ${agent.border}`}>
                        <CardContent className="p-3 text-center">
                          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-2">
                            <Bot className="h-4 w-4 text-secondary" />
                          </div>
                          <div className="text-xs font-medium leading-tight">{agent.label}</div>
                          <div className="text-[10px] text-secondary mt-1 flex items-center justify-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            Aktiv
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center">
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      Klar getrennt • Keine Datenvermischung
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Demo für Ihre Kanzlei vereinbaren
              </h2>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Erfahren Sie in einem persönlichen Gespräch, wie FinRobotics Ihr Team bei der
                Vorarbeit entlastet und dabei sauber in Ihre DATEV-Prozesse passt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white border-0"
                  asChild
                >
                  <a href="mailto:paul@finrobotics.de?subject=Demo%20Steuerberater">
                    <Mail className="mr-2 h-4 w-4" />
                    Demo vereinbaren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
