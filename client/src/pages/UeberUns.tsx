import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CalendarCheck,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Rocket,
  Target,
  Users,
  Zap,
} from "lucide-react";

const team = [
  {
    name: "Prof. Dr. Paul Pronobis",
    role: "Gründer & Strategie",
    description:
      "Professor für Accounting und KI an der Freien Universität Bozen. Verbindet akademische Forschung mit unternehmerischer Praxis.",
    linkedin: "https://it.linkedin.com/in/paul-pronobis",
    image: "/images/paul-headshot.png",
  },
  {
    name: "Tobias Lämmle",
    role: "KI & Architektur",
    description:
      "Senior Architect mit 18 Jahren IT-Erfahrung. ML/KI im Finanzsektor. Associate Prof ML an der ESCP Paris.",
    linkedin: "https://de.linkedin.com/in/tobias-laemmle",
    image: "/images/tobi-headshot.png",
  },
  {
    name: "Martin Kusterer",
    role: "Operations & Data Engineering",
    description:
      "Data Engineering und KI-Spezialist. IHK-zertifiziert als Master Professional, Business Data Professional und Big Data Engineer.",
    linkedin: "https://de.linkedin.com/in/martin-kusterer",
    image: "/team-kusterer.png",
  },
];

const values = [
  {
    icon: GraduationCap,
    title: "Akademische Exzellenz",
    description:
      "Als Spin-off der Freien Universität Bozen basiert unsere Technologie auf fundierter Forschung und wissenschaftlichen Erkenntnissen im Bereich Accounting und KI.",
  },
  {
    icon: Target,
    title: "Kundenzentrierung",
    description:
      "Wir entwickeln FinRobotics für alle, die Buchhaltung effizienter gestalten wollen — Steuerberater, Unternehmer und Selbständige gleichermaßen.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Wir setzen auf proaktive KI-Agenten, die nicht nur digitalisieren, sondern eigenständig handeln — Belege einfordern, buchen und kommunizieren.",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Steuerberater",
    description:
      "Proaktive Mandantenkommunikation, automatische Belegerfassung und mehr Zeit für echte Beratung statt Routinearbeit.",
  },
  {
    icon: Users,
    title: "Unternehmer",
    description:
      "Automatisierte Belegverarbeitung und laufende Buchhaltung — ohne selbst daran denken zu müssen.",
  },
  {
    icon: Zap,
    title: "Selbständige",
    description:
      "EÜR ohne Aufwand. Belege abfotografieren, den Rest erledigt die KI. Fertig.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Gründung",
    event: "Spin-off der Freien Universität Bozen. ESF+ Forschungszuschuss für KI in der Buchhaltung.",
  },
  {
    year: "2025",
    title: "Technologie",
    event: "Entwicklung der KI-Agenten-Architektur. Erste funktionierende Prototypen.",
  },
  {
    year: "2026",
    title: "Pilotphase",
    event: "Pilotprojekte mit ersten Steuerberatungskanzleien und Unternehmen.",
  },
  {
    year: "Zukunft",
    title: "Public Launch",
    event: "Öffnung der Plattform für Steuerberater, Unternehmer und Selbständige.",
  },
];

export default function UeberUns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="container py-16 md:py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="h-4 w-4" />
                Spin-off der Freien Universität Bozen
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                KI-Agenten für die Finanzwelt.{" "}
                <span className="text-secondary">Aus Forschung geboren.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Wir automatisieren Buchhaltung für Steuerberater, Unternehmer und
                Selbständige — mit KI-Agenten, die eigenständig handeln, kommunizieren
                und buchen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-title">Unsere Mission</h2>
                <p className="text-muted-foreground mb-6">
                  80% der Buchhaltungsarbeit ist repetitiv: Belege sammeln, zuordnen,
                  buchen, nachfragen. Stunden, die Steuerberater, Unternehmer und
                  Selbständige besser nutzen könnten.
                </p>
                <p className="text-muted-foreground mb-6">
                  Wir glauben, dass KI diese Arbeit übernehmen kann — nicht als
                  passives Tool, sondern als proaktiver Agent, der selbstständig
                  kommuniziert, Belege einfordert und Buchungen erstellt.
                </p>
                <p className="text-foreground font-medium">
                  Unsere Vision: Eine Welt, in der Buchhaltung keine Belastung mehr
                  ist, sondern intelligent im Hintergrund passiert.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="grid grid-cols-2 gap-4 max-w-sm">
                  {audiences.map((audience, index) => (
                    <Card
                      key={audience.title}
                      className={`${index === 2 ? "col-span-2" : ""}`}
                    >
                      <CardContent className="p-5">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                          <audience.icon className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{audience.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {audience.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Unsere Werte</h2>
              <p className="section-subtitle mx-auto">
                Was uns antreibt und wie wir arbeiten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Das Team</h2>
              <p className="section-subtitle mx-auto">
                Wissenschaftler und Technologen mit einer gemeinsamen Vision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border border-border"
                      />
                      <h3 className="text-xl font-semibold text-center mb-1">
                        {member.name}
                      </h3>
                      <p className="text-secondary text-sm text-center mb-4">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm text-center mb-4">
                        {member.description}
                      </p>
                      <div className="flex justify-center gap-2">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-muted-foreground" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Unsere Reise</h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 mb-6 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-secondary mt-1.5" />
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-secondary tabular-nums">
                        {milestone.year}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        — {milestone.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-slate-900 text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-white/75 mb-8 text-lg">
                Ob Steuerberater, Unternehmer oder Selbständiger — wir zeigen Ihnen,
                wie KI Ihre Buchhaltung transformiert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  asChild
                >
                  <Link href="/kontakt">
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
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
