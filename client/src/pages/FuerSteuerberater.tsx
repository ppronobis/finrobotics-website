import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Users,
  FileOutput,
  Clock,
  TrendingUp,
  Check,
  ArrowRight,
  Handshake,
  BadgeCheck,
} from "lucide-react";

export default function FuerSteuerberater() {
  const benefits = [
    {
      icon: Clock,
      title: "Zeitersparnis",
      description: "Ihre Mandanten liefern perfekt vorbereitete Daten. Weniger Nachfragen, weniger Korrekturen.",
    },
    {
      icon: FileOutput,
      title: "DATEV-Integration",
      description: "Nahtloser Export im DATEV-Format. Die Daten fließen direkt in Ihre bestehenden Systeme.",
    },
    {
      icon: Users,
      title: "Mehr Mandanten",
      description: "Betreuen Sie mehr Mandanten mit gleicher Kapazität. Finrobotics übernimmt die Vorarbeit.",
    },
    {
      icon: TrendingUp,
      title: "Zusätzliche Einnahmen",
      description: "Verdienen Sie an jeder Empfehlung. Attraktive Provisionen für Partner.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Mandant nutzt Finrobotics",
      description: "Ihr Mandant erfasst Belege und Transaktionen mit Finrobotics. Die KI kategorisiert automatisch.",
    },
    {
      step: "2",
      title: "Daten werden aufbereitet",
      description: "Finrobotics erstellt eine vollständige EÜR mit allen Belegen und Buchungen.",
    },
    {
      step: "3",
      title: "DATEV-Export",
      description: "Mit einem Klick exportiert der Mandant alle Daten im DATEV-Format zu Ihnen.",
    },
    {
      step: "4",
      title: "Sie prüfen und finalisieren",
      description: "Sie erhalten perfekt vorbereitete Daten und können sich auf die Beratung konzentrieren.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="section bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Handshake className="h-4 w-4" />
                  Partnerprogramm
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                  Mehr Mandanten, weniger{" "}
                  <span className="text-secondary">Aufwand</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Ihre Mandanten nutzen Finrobotics für die Vorarbeit. Sie erhalten perfekt aufbereitete DATEV-Exporte. Win-Win für alle Beteiligten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/kontakt">
                      Partner werden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/kontakt">Demo anfragen</Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="/images/elster-export.png"
                  alt="DATEV Integration"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Ihre Vorteile als Partner</h2>
              <p className="section-subtitle mx-auto">
                Finrobotics macht Ihre Arbeit effizienter und Ihre Mandanten zufriedener.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
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
                        <benefit.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">So funktioniert die Zusammenarbeit</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DATEV Integration */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BadgeCheck className="h-6 w-6 text-secondary" />
                  <span className="font-medium">DATEV-kompatibel</span>
                </div>
                <h2 className="section-title">Nahtlose DATEV-Integration</h2>
                <p className="text-muted-foreground mb-6">
                  Finrobotics exportiert alle Daten im DATEV-Format. Ihre Mandanten können mit einem Klick alle Buchungen, Belege und die fertige EÜR an Sie übermitteln.
                </p>
                <ul className="space-y-3">
                  {[
                    "Export im DATEV-Standardformat",
                    "Alle Belege als digitale Anhänge",
                    "Vollständiger Audit-Trail",
                    "Automatische Kontenzuordnung (SKR03/04)",
                    "Direkte Übernahme in DATEV Unternehmen Online",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/images/bank-integration.png"
                  alt="DATEV Integration"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-title mb-8">Das Partnerprogramm</h2>
                
                <Card>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <div className="text-3xl font-bold text-secondary mono-number mb-2">20%</div>
                        <div className="text-muted-foreground">Provision auf alle Empfehlungen</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary mono-number mb-2">12</div>
                        <div className="text-muted-foreground">Monate Provisionslaufzeit</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary mono-number mb-2">€0</div>
                        <div className="text-muted-foreground">Kosten für Sie als Partner</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-border">
                      <h3 className="font-semibold mb-4">Als Partner erhalten Sie:</h3>
                      <ul className="grid md:grid-cols-2 gap-3 text-left">
                        {[
                          "Persönlicher Ansprechpartner",
                          "Marketing-Materialien",
                          "Schulung für Ihr Team",
                          "Priorisierter Support",
                          "Monatliche Abrechnungen",
                          "Partner-Badge für Ihre Website",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-secondary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Werden Sie Partner
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Kontaktieren Sie uns für eine persönliche Demo und erfahren Sie, wie Finrobotics Ihre Kanzlei effizienter macht.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/kontakt">
                Jetzt Kontakt aufnehmen
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
