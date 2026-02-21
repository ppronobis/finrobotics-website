import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Camera,
  Building2,
  Bot,
  BarChart3,
  MessageSquare,
  FileOutput,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

export default function Funktionen() {
  const features = [
    {
      icon: Camera,
      title: "Intelligente Belegerfassung",
      description: "Fotografiere Belege mit deinem Smartphone oder leite Rechnungen per E-Mail weiter. Unsere KI erkennt automatisch alle relevanten Daten: Betrag, Datum, Kategorie und Umsatzsteuer.",
      benefits: [
        "OCR-Erkennung in Sekunden",
        "Automatische Kategorisierung",
        "E-Mail-Import mit eigener Adresse",
        "Unterstützung für alle gängigen Formate",
      ],
    },
    {
      icon: Building2,
      title: "Bank-Integration",
      description: "Verbinde dein Geschäftskonto sicher mit Finrobotics. Transaktionen werden automatisch importiert, abgeglichen und den richtigen Belegen zugeordnet.",
      benefits: [
        "Über 5.000 deutsche Banken",
        "Automatischer Belegabgleich",
        "Echtzeit-Synchronisation",
        "Bankgeheimnis gewahrt",
      ],
    },
    {
      icon: Bot,
      title: "Self-Driving Bookkeeping",
      description: "Die KI lernt kontinuierlich aus deinen Buchungen und wird mit jeder Transaktion besser. Nach kurzer Zeit kategorisiert sie automatisch – ohne dein Zutun.",
      benefits: [
        "Lernende Algorithmen",
        "Individuelle Buchungsmuster",
        "Automatische Vorkontierung",
        "SKR03/04 Kontenrahmen",
      ],
    },
    {
      icon: BarChart3,
      title: "Echtzeit-Dashboard",
      description: "Behalte den Überblick über deine Finanzen mit einem übersichtlichen Dashboard. Gewinn, Liquidität und USt-Vorauszahlung – immer aktuell.",
      benefits: [
        "Gewinn- und Verlustrechnung",
        "Cashflow-Übersicht",
        "USt-Voranmeldung",
        "Individuelle KPIs",
      ],
    },
    {
      icon: MessageSquare,
      title: "KI-Assistent",
      description: "Stell Fragen in natürlicher Sprache: 'Wie viel Umsatz habe ich im Q3 gemacht?' oder 'Welche Ausgaben hatte ich für Software?' – und bekomme sofort Antworten.",
      benefits: [
        "Natürliche Spracheingabe",
        "Sofortige Antworten",
        "Finanzielle Einblicke",
        "Steueroptimierungsvorschläge",
      ],
    },
    {
      icon: FileOutput,
      title: "ELSTER & DATEV Export",
      description: "Exportiere deine EÜR mit einem Klick zu ELSTER oder sende perfekt aufbereitete Daten an deinen Steuerberater im DATEV-Format.",
      benefits: [
        "ELSTER-konforme EÜR",
        "DATEV-Schnittstelle",
        "Vollständiger Audit-Trail",
        "Steuerberater-Zugang",
      ],
    },
  ];

  const comparisonData = [
    { feature: "Zeitaufwand pro Monat", manual: "5-10 Stunden", finrobotics: "30 Minuten", steuerberater: "1 Stunde" },
    { feature: "Kosten pro Monat", manual: "€0 (aber Zeit)", finrobotics: "ab €99", steuerberater: "€200-500" },
    { feature: "Automatisierung", manual: "Keine", finrobotics: "Vollständig", steuerberater: "Teilweise" },
    { feature: "Echtzeit-Einblicke", manual: "Nein", finrobotics: "Ja", steuerberater: "Verzögert" },
    { feature: "ELSTER-Export", manual: "Manuell", finrobotics: "Ein Klick", steuerberater: "Durch Berater" },
    { feature: "Lernende KI", manual: "Nein", finrobotics: "Ja", steuerberater: "Nein" },
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
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Alle Funktionen für deine{" "}
                <span className="text-secondary">automatisierte Buchhaltung</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Von der Belegerfassung bis zum ELSTER-Export – Finrobotics automatisiert jeden Schritt deiner EÜR-Buchhaltung.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/kontakt">
                  Kostenlos testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Detail */}
        <section className="section">
          <div className="container">
            <div className="space-y-24">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                      <feature.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">{feature.title}</h2>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-muted flex items-center justify-center">
                          <feature.icon className="h-24 w-24 text-muted-foreground/30" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Finrobotics vs. Alternativen</h2>
              <p className="section-subtitle mx-auto">
                Vergleiche Finrobotics mit manueller Buchhaltung und klassischen Steuerberatern.
              </p>
            </motion.div>
            
            <Card>
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Manuell</th>
                      <th className="text-center p-4 font-semibold bg-secondary/5">
                        <span className="text-secondary">Finrobotics</span>
                      </th>
                      <th className="text-center p-4 font-semibold">Steuerberater</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.manual}</td>
                        <td className="p-4 text-center bg-secondary/5 font-medium">{row.finrobotics}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.steuerberater}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="section">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Blitzschnell",
                  description: "Belege werden in Sekunden verarbeitet. Deine EÜR ist immer aktuell.",
                },
                {
                  icon: Shield,
                  title: "Sicher & Konform",
                  description: "DSGVO-konform, DATEV-kompatibel und bereit für jede Betriebsprüfung.",
                },
                {
                  icon: Clock,
                  title: "Zeit sparen",
                  description: "Reduziere deinen Buchhaltungsaufwand von Stunden auf Minuten.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Bereit für automatisierte Buchhaltung?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Starte jetzt kostenlos und erlebe, wie einfach Buchhaltung sein kann.
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
