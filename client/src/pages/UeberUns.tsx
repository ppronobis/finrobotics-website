import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Lightbulb,
  ArrowRight,
  Linkedin,
} from "lucide-react";

export default function UeberUns() {
  const team = [
    {
      name: "Prof. Dr. Paul Pronobis",
      role: "CEO & Gründer",
      description: "Professor für Accounting und KI an der Freien Universität Bozen.",
      linkedin: "https://linkedin.com/in/paulpronobis",
      image: "/images/paul-pronobis-team.png",
    },
    {
      name: "Tobias Lämmle",
      role: "Chief AI Officer & Co-Founder",
      description:
        "Senior Architect, 18 Jahre IT-Erfahrung, ML/KI im Finanzsektor. Associate Prof ML an der ESCP Paris, Dozent IHK Karlsruhe.",
      linkedin: "#",
      image: "/images/tobias-laemmle-team.png",
    },
    {
      name: "Johannes Huhn",
      role: "Chief Technology Officer",
      description:
        "Doktorand FU Bozen, Expertise Analytics & Enterprise Software. HANA, Java, SQL, Python. Product Owner Erfahrung.",
      linkedin: "#",
      image: "/team-huhn.png",
    },
    {
      name: "Martin Kusterer",
      role: "Chief Operations Officer",
      description:
        "Data Engineering & KI-Spezialist. Zertifiziert: Master Professional Technical Management (IHK), BDP, Big Data Engineer, Business Data Analyst.",
      linkedin: "#",
      image: "/team-kusterer.png",
    },
  ];

  const values = [
    {
      icon: GraduationCap,
      title: "Akademische Exzellenz",
      description: "Als Spin-off der Freien Universität Bozen basiert unsere Technologie auf fundierter Forschung und wissenschaftlichen Erkenntnissen.",
    },
    {
      icon: Target,
      title: "Kundenzentrierung",
      description: "Wir entwickeln Finrobotics für Selbstständige und Unternehmer – Menschen, die ihre Zeit für produktive Arbeit nutzen wollen, nicht für Buchhaltung.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Wir nutzen modernste KI-Technologie, um Buchhaltung von Grund auf neu zu denken. Nicht digitalisieren, sondern automatisieren.",
    },
  ];

  const milestones = [
    { year: "2024", event: "Gründung als Spin-off der Freien Universität Bozen" },
    { year: "2024", event: "ESF+ Forschungszuschuss (€287.500)" },
    { year: "2025", event: "Erste Pilotkunden" },
    { year: "2025", event: "Public Launch geplant" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="section bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="h-4 w-4" />
                Spin-off der Freien Universität Bozen
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Buchhaltung neu gedacht.{" "}
                <span className="text-secondary">Wissenschaftlich fundiert.</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Wir sind ein Team aus Wissenschaftlern und Technologen mit einer Mission: Selbstständigen die Buchhaltung abnehmen, damit sie sich auf ihr Kerngeschäft konzentrieren können.
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
                  Selbstständige und Unternehmer verbringen durchschnittlich 5-10 Stunden pro Monat mit Buchhaltung. Das sind Stunden, die für produktive Arbeit, Kundenakquise oder einfach für das Leben fehlen.
                </p>
                <p className="text-muted-foreground mb-6">
                  Wir glauben, dass das nicht sein muss. Mit moderner KI-Technologie können wir die gesamte EÜR-Buchhaltung automatisieren – von der Belegerfassung bis zum ELSTER-Export.
                </p>
                <p className="text-foreground font-medium">
                  Unsere Vision: Eine Welt, in der Buchhaltung keine Belastung mehr ist, sondern einfach im Hintergrund passiert.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/images/paul-pronobis-team.png"
                  alt="KI-Automatisierung"
                  className="rounded-xl shadow-lg"
                />
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
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
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
                      <p className="text-muted-foreground text-sm">{value.description}</p>
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
            
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
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
                      <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                      <p className="text-secondary text-sm text-center mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm text-center mb-4">{member.description}</p>
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
              <h2 className="section-title">Unsere Geschichte</h2>
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
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-sm font-medium text-secondary mono-number">{milestone.year}</div>
                    <div className="text-foreground">{milestone.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Werde Teil der Revolution
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Teste Finrobotics kostenlos und erlebe, wie einfach Buchhaltung sein kann.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/kontakt">
                Kostenlos starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
