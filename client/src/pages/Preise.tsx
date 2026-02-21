import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Preise() {
  const plans = [
    {
      name: "Starter",
      price: "99",
      description: "Für Selbstständige mit wenigen Transaktionen",
      features: [
        "Bis 50 Transaktionen/Monat",
        "Intelligente Belegerfassung",
        "EÜR-Dashboard",
        "ELSTER-Export",
        "E-Mail-Support",
      ],
      notIncluded: [
        "Bank-Integration",
        "KI-Assistent",
        "DATEV-Export",
        "Priority Support",
      ],
      cta: "Kostenlos testen",
      featured: false,
    },
    {
      name: "Professional",
      price: "199",
      description: "Für aktive Selbstständige",
      features: [
        "Unbegrenzte Transaktionen",
        "Alles aus Starter",
        "Bank-Integration",
        "KI-Assistent",
        "Steueroptimierungsvorschläge",
        "DATEV-Export",
        "Priority Support",
      ],
      notIncluded: [
        "Multi-User",
        "Erweiterte Reports",
      ],
      cta: "Kostenlos testen",
      featured: true,
    },
    {
      name: "Kanzlei",
      price: "349",
      description: "Für kleine Unternehmen",
      features: [
        "Alles aus Professional",
        "Multi-User (bis 5)",
        "Erweiterte Reports",
        "Budgetierung & Forecasting",
        "Dedizierter Account Manager",
        "SLA mit 99.9% Uptime",
        "Onboarding-Support",
      ],
      notIncluded: [],
      cta: "Kontakt aufnehmen",
      featured: false,
    },
  ];

  const faqs = [
    {
      question: "Kann ich Finrobotics kostenlos testen?",
      answer: "Ja, du kannst Finrobotics 14 Tage lang kostenlos und unverbindlich testen. Keine Kreditkarte erforderlich. Nach der Testphase kannst du dich für einen Plan entscheiden oder dein Konto einfach löschen.",
    },
    {
      question: "Was passiert, wenn ich mehr Transaktionen habe als im Starter-Plan enthalten?",
      answer: "Wenn du regelmäßig mehr als 50 Transaktionen pro Monat hast, empfehlen wir den Professional-Plan mit unbegrenzten Transaktionen. Du kannst jederzeit upgraden.",
    },
    {
      question: "Ist die DATEV-Schnittstelle im Preis enthalten?",
      answer: "Die DATEV-Schnittstelle ist ab dem Professional-Plan enthalten. Im Starter-Plan kannst du deine Daten über den ELSTER-Export an deinen Steuerberater weitergeben.",
    },
    {
      question: "Kann ich meinen Plan jederzeit wechseln?",
      answer: "Ja, du kannst deinen Plan jederzeit upgraden oder downgraden. Bei einem Upgrade wird der neue Preis anteilig für den Rest des Abrechnungszeitraums berechnet.",
    },
    {
      question: "Gibt es Rabatte für jährliche Zahlung?",
      answer: "Ja, bei jährlicher Zahlung sparst du 2 Monate. Der Starter-Plan kostet dann €990/Jahr statt €1.188, der Professional-Plan €1.990/Jahr statt €2.388.",
    },
    {
      question: "Wie sicher sind meine Daten?",
      answer: "Deine Daten werden verschlüsselt in deutschen Rechenzentren gespeichert. Wir sind DSGVO-konform und erfüllen alle Anforderungen an die Datensicherheit im Finanzbereich.",
    },
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
                Einfache, transparente{" "}
                <span className="text-secondary">Preise</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Wähle den Plan, der zu dir passt. Alle Pläne beinhalten eine 14-tägige kostenlose Testphase.
              </p>
              <p className="text-sm text-muted-foreground">
                Keine Kreditkarte erforderlich. Jederzeit kündbar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section pt-0">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full flex flex-col ${plan.featured ? "border-secondary shadow-lg relative" : ""}`}>
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                          EMPFOHLEN
                        </span>
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <div className="mt-2">
                        <span className="text-4xl font-bold mono-number">€{plan.price}</span>
                        <span className="text-muted-foreground">/Monat</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-4 w-4 flex-shrink-0 mt-0.5 text-center">–</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full mt-6 ${plan.featured ? "bg-secondary hover:bg-secondary/90" : ""}`}
                        variant={plan.featured ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/kontakt">
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Alle Features im Vergleich</h2>
            </motion.div>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold bg-secondary/5">Professional</th>
                      <th className="text-center p-4 font-semibold">Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Transaktionen/Monat", starter: "50", professional: "Unbegrenzt", business: "Unbegrenzt" },
                      { feature: "Belegerfassung", starter: true, professional: true, business: true },
                      { feature: "EÜR-Dashboard", starter: true, professional: true, business: true },
                      { feature: "ELSTER-Export", starter: true, professional: true, business: true },
                      { feature: "Bank-Integration", starter: false, professional: true, business: true },
                      { feature: "KI-Assistent", starter: false, professional: true, business: true },
                      { feature: "Steueroptimierung", starter: false, professional: true, business: true },
                      { feature: "DATEV-Export", starter: false, professional: true, business: true },
                      { feature: "Multi-User", starter: false, professional: false, business: "Bis 5" },
                      { feature: "Erweiterte Reports", starter: false, professional: false, business: true },
                      { feature: "Dedizierter Support", starter: false, professional: false, business: true },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          {typeof row.starter === "boolean" ? (
                            row.starter ? <Check className="h-5 w-5 text-secondary mx-auto" /> : <span className="text-muted-foreground">–</span>
                          ) : (
                            row.starter
                          )}
                        </td>
                        <td className="p-4 text-center bg-secondary/5">
                          {typeof row.professional === "boolean" ? (
                            row.professional ? <Check className="h-5 w-5 text-secondary mx-auto" /> : <span className="text-muted-foreground">–</span>
                          ) : (
                            <span className="font-medium">{row.professional}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.business === "boolean" ? (
                            row.business ? <Check className="h-5 w-5 text-secondary mx-auto" /> : <span className="text-muted-foreground">–</span>
                          ) : (
                            row.business
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title flex items-center justify-center gap-2">
                <HelpCircle className="h-8 w-8 text-secondary" />
                Häufige Fragen
              </h2>
            </motion.div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Noch unsicher? Teste uns kostenlos.
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              14 Tage kostenlos, keine Kreditkarte, kein Risiko.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/kontakt">
                Jetzt kostenlos starten
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
