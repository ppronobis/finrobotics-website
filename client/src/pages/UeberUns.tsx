import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  GraduationCap,
  Linkedin,
  MapPin,
  Server,
  Sparkles,
  Microscope,
  Shield,
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

const differentiators = [
  {
    icon: Microscope,
    title: "Forschung trifft Praxis",
    description:
      "Unsere Technologie entsteht nicht im Vakuum. Sie basiert auf jahrelanger Forschung in Accounting und KI an der Freien Universität Bozen und wird direkt am Markt validiert.",
  },
  {
    icon: Shield,
    title: "Deutsche Server. GoBD-konform.",
    description:
      "Alle Daten bleiben auf deutschen Servern. Unsere KI-Agenten arbeiten von Anfang an GoBD-konform und erfüllen die Anforderungen der Finanzverwaltung.",
  },
  {
    icon: Zap,
    title: "Proaktiv statt passiv",
    description:
      "Unsere KI wartet nicht auf Eingaben. Sie fordert Belege selbstständig an, kommuniziert mit Mandanten per WhatsApp oder E-Mail und erstellt Buchungsvorschläge.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Forschungsprojekt",
    event:
      "Start als Forschungsprojekt an der Freien Universität Bozen. ESF+ Zuschuss für KI-gestützte Buchhaltungsautomatisierung.",
  },
  {
    year: "2025",
    title: "iNEST Accelerator",
    event:
      "Aufnahme in das iNEST Accelerator-Programm der Universität. Entwicklung der Multi-Agent-Architektur für Steuerberatungskanzleien.",
  },
  {
    year: "2026",
    title: "Pilotphase",
    event:
      "Erste Pilotprojekte mit Steuerberatungskanzleien. Launch der Plattform mit Banking-Integration und proaktiver Mandantenkommunikation.",
  },
  {
    year: "Zukunft",
    title: "Skalierung",
    event:
      "Expansion im DACH-Raum. Internationale Märkte. Aufbau eines Ökosystems für die digitale Steuerberatung.",
  },
];

export default function UeberUns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero with NOI Techpark Image */}
        <section className="relative overflow-hidden">
          <div className="relative h-[60vh] min-h-[400px] md:min-h-[500px]">
            <img
              src="/images/noi-techpark-building.jpg"
              alt="NOI Techpark Bozen mit Alpen-Panorama"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <div className="relative h-full container flex flex-col justify-end pb-12 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium mb-5">
                  <MapPin className="h-4 w-4" />
                  NOI Techpark Bozen · iNEST Accelerator 2025
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
                  Entstanden an der Schnittstelle von Wissenschaft und Innovation.
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                  FinRobotics ist ein Spin-off der Freien Universität Bozen. Wir
                  entwickeln KI-Agenten, die Steuerberatern die Routinearbeit abnehmen.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wo wir herkommen */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Wo wir herkommen</h2>
              <p className="section-subtitle mx-auto">
                Vom Forschungslabor in den Markt.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground mb-5">
                  FinRobotics entstand aus der Forschung an der{" "}
                  <span className="text-foreground font-medium">
                    Freien Universität Bozen
                  </span>{" "}
                  im Bereich Accounting und Künstliche Intelligenz. Die Frage, die uns
                  antrieb: Warum verbringen Steuerberater noch immer Stunden damit,
                  Belege einzufordern und Routinebuchungen zu erstellen?
                </p>
                <p className="text-muted-foreground mb-5">
                  Unser Standort ist der{" "}
                  <span className="text-foreground font-medium">NOI Techpark</span> in
                  Bozen, Südtirols Innovationszentrum. Als Teil des{" "}
                  <span className="text-foreground font-medium">
                    iNEST Accelerator-Programms
                  </span>{" "}
                  (gefördert durch den PNRR) erhalten wir gezieltes Coaching,
                  Zugang zu Investoren und ein Netzwerk aus Forschern und Gründern
                  in Nordost-Italien.
                </p>
                <p className="text-muted-foreground">
                  Mit einem ESF+ Forschungszuschuss haben wir die Grundlagen gelegt.
                  Jetzt bringen wir unsere Technologie in die Steuerberatungskanzleien,
                  die sie am meisten brauchen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <img
                  src="/images/noi-techpark-plaza.jpg"
                  alt="NOI Techpark Plaza mit NOI-Skulptur"
                  className="w-full rounded-xl shadow-lg"
                />
                <img
                  src="/images/noi-techpark-campus.jpg"
                  alt="NOI Techpark Campus mit Blick auf die Alpen"
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-title text-center">Unsere Mission</h2>
                <p className="text-muted-foreground mb-6 text-lg text-center">
                  80% der Arbeit in einer Steuerberatungskanzlei ist Routine: Belege
                  sammeln, zuordnen, buchen, bei Mandanten nachfragen. Das kostet
                  Zeit, die für echte Beratung fehlt.
                </p>
                <p className="text-muted-foreground mb-6 text-lg text-center">
                  Wir bauen KI-Agenten, die diese Arbeit übernehmen. Nicht als
                  passives Tool, das auf Eingaben wartet, sondern als proaktiver
                  digitaler Mitarbeiter. Ein Agent pro Mandant, der selbstständig
                  kommuniziert, Belege einfordert und Buchungsvorschläge erstellt.
                </p>
                <p className="text-foreground font-medium text-lg text-center">
                  Unser Ziel: Steuerberater sollen beraten, nicht verwalten.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Was uns unterscheidet */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Was uns unterscheidet</h2>
              <p className="section-subtitle mx-auto">
                Drei Prinzipien, die unsere Arbeit leiten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section bg-muted/30">
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
        <section className="section">
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
                        {milestone.title}
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
                Sie sind Steuerberater und wollen sehen, wie KI Ihre Kanzlei
                entlastet? Wir zeigen es Ihnen.
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
