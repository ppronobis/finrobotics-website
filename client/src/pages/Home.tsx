import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroChatbot from "@/components/HeroChatbot";
import { motion } from "framer-motion";
import {
  Camera,
  Building2,
  Bot,
  BarChart3,
  MessageSquare,
  FileOutput,
  Clock,
  Banknote,
  ShieldAlert,
  Check,
  ArrowRight,
  Shield,
  BadgeCheck,
  GraduationCap,
  CalendarCheck,
  Landmark,
  BrainCircuit,
  BookOpen,
  MessageCircle,
  BadgePercent,
  Wrench,
  Info,
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div className="container py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                  Deine Buchhaltung auf{" "}
                  <span className="text-secondary">Autopilot.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  Finrobotics sortiert deine Belege, klassifiziert Ausgaben und bereitet alles automatisch für deine Steuererklärung vor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-[#209173] hover:bg-[#1a7a60] text-white" asChild>
                    <a href="https://wa.me/491721084289" target="_blank" rel="noopener noreferrer">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Per WhatsApp starten
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#kontakt">
                      <CalendarCheck className="mr-2 h-4 w-4" />
                      Erstgespräch buchen
                    </a>
                  </Button>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="trust-badge">
                    <BadgeCheck className="h-4 w-4 text-secondary" />
                    DATEV-kompatibel
                  </div>
                  <div className="trust-badge">
                    <Shield className="h-4 w-4 text-secondary" />
                    DSGVO-konform
                  </div>
                  <div className="trust-badge">
                    <Check className="h-4 w-4 text-secondary" />
                    95+ Sprachen
                  </div>
                  <div className="trust-badge">
                    <GraduationCap className="h-4 w-4 text-secondary" />
                    Spin-off Freie Universität Bozen
                  </div>
                </div>
              </motion.div>
              
              <div className="flex justify-center lg:justify-end">
                <HeroChatbot />
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Buchhaltung nervt. Das wissen wir.</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch relative">
              {/* Pfeil zwischen den Karten (Desktop) */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border shadow-lg items-center justify-center">
                <ArrowRight className="h-5 w-5 text-secondary" />
              </div>

              {/* Linke Karte: Ohne Finrobotics */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-border bg-card/80">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                        <span className="text-destructive text-sm font-bold">✕</span>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Ohne Finrobotics</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-5">
                      Stunden mit Papierkram statt mit deinem Business
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "5–10 Stunden pro Monat für Belege sortieren und abtippen",
                        "Unsicherheit bei jeder Buchung: Ist das die richtige Kategorie?",
                        "Excel-Chaos und Schuhkarton voller Quittungen",
                        "Ständige Angst vor Fehlern bei der Steuererklärung",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-destructive text-xs">✕</span>
                          </div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Vertikaler Pfeil (Mobile) */}
              <div className="flex md:hidden justify-center -my-2">
                <div className="w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Rechte Karte: Mit Finrobotics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full border-secondary/30 bg-gradient-to-br from-secondary to-secondary/85 shadow-lg md:translate-y-[-4px]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-white/80 uppercase tracking-wide">Mit Finrobotics</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-5">
                      Buchhaltung erledigt sich, während du arbeitest
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Belege hochladen – KI erkennt alles automatisch",
                        "Ausgaben werden automatisch richtig zugeordnet",
                        "DATEV-Export per Klick – dein Steuerberater freut sich",
                        "Volle Kontrolle und Transparenz über deine Finanzen",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-white/90 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gründer Section */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Die Menschen hinter Finrobotics</h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">
              {/* Linke Spalte: Text, Icons, Pull-Quote */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="text-muted-foreground leading-relaxed text-base mb-8"
                >
                  Finrobotics wurde von Prof. Dr. Paul Pronobis und Dipl.-Wirtschaftsinformatiker Tobias Lämmle gegründet. Dabei haben wir unsere jahrzehntelange Erfahrung in Wirtschaftsprüfung, Industrie und KI-Forschung eingebracht. Als Spin-off der Freien Universität Bozen verbinden wir akademische Präzision mit praxisnaher Technologie.
                </motion.p>

                {/* Kompetenz-Icons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
                  {[
                    { icon: Landmark, label: "Rechnungswesen & Steuern", delay: 0.15 },
                    { icon: BrainCircuit, label: "KI & Data Science", delay: 0.3 },
                    { icon: BookOpen, label: "Forschung", delay: 0.45 },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: item.delay }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="h-9 w-9 rounded-full bg-secondary/80 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4.5 w-4.5 text-secondary-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Pull-Quote */}
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  className="relative pl-6 border-l-4 border-secondary"
                >
                  <p className="text-lg md:text-xl font-medium italic text-foreground/90 leading-relaxed">
                    „Unser Ziel: Finrobotics versteht deine Belege besser als du selbst."
                  </p>
                </motion.blockquote>
              </div>

              {/* Rechte Spalte: Foto */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="w-full lg:w-[45%] order-first lg:order-last"
              >
                <img
                  src="/images/paul-pronobis.webp"
                  alt="Prof. Dr. Paul Pronobis und Dipl.-Wirtsch.-Inf. Tobias Lämmle – Gründer von Finrobotics"
                  className="rounded-xl lg:rounded-l-xl lg:rounded-r-none shadow-lg w-full h-64 md:h-80 lg:h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* So funktioniert Finrobotics – Prozess-Section */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="section-title">So funktioniert Finrobotics</h2>
              <p className="section-subtitle">Von der Zettelwirtschaft zur automatisierten Buchhaltung.</p>
            </motion.div>

            <div className="relative">
              {/* Verbindungslinie Desktop */}
              <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-secondary/20 via-secondary/40 to-secondary/20" />

              <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
                {[
                  {
                    step: "1",
                    title: "Verbinden",
                    text: "Verbinde dein Geschäftskonto und schicke uns deine Belege – per Foto, PDF oder E-Mail-Weiterleitung. Dauert unter 5 Minuten.",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <rect x="8" y="12" width="18" height="26" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="17" cy="32" r="2" fill="currentColor" />
                        <rect x="12" y="16" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M30 20h8a2 2 0 012 2v12a2 2 0 01-2 2h-8" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
                        <circle cx="36" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M34.5 24h3M36 22.5v3" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    ),
                  },
                  {
                    step: "2",
                    title: "Automatisieren",
                    text: "Finrobotics erkennt, kategorisiert und verbucht automatisch – nach EÜR und SKR03/04. Die KI lernt mit jeder Buchung dazu.",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path d="M24 18v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M14 14l-2-2M34 14l2-2M14 34l-2 2M34 34l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <rect x="6" y="8" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M8 11h4M8 13h3M8 15h4" stroke="currentColor" strokeWidth="0.75" />
                        <rect x="34" y="8" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M36 11h4M36 13h3M36 15h4" stroke="currentColor" strokeWidth="0.75" />
                        <rect x="20" y="36" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M22 38.5h4" stroke="currentColor" strokeWidth="0.75" />
                      </svg>
                    ),
                  },
                  {
                    step: "3",
                    title: "Erledigt",
                    text: "Exportiere direkt zu ELSTER oder DATEV. Dein Steuerberater bekommt alles fix und fertig – du behältst den Überblick im Dashboard.",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <path d="M12 24l6 6 12-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="32" y="10" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M34 14h6M34 17h4M34 20h5" stroke="currentColor" strokeWidth="0.75" />
                        <path d="M38 28l4 4M42 28l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M40 32v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    className="text-center relative"
                  >
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-5">
                      {item.icon}
                    </div>

                    {/* Nummer */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-white flex items-center justify-center text-lg font-bold mx-auto mb-3 shadow-md shadow-secondary/25">
                      {item.step}
                    </div>

                    {/* Titel & Text */}
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{item.text}</p>

                    {/* Mobile Verbindungslinie */}
                    {index < 2 && (
                      <div className="md:hidden w-0.5 h-8 bg-secondary/20 mx-auto mt-6" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alles auf einen Blick – Feature-Section */}
        <section className="section bg-muted/20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="section-title">Alles auf einen Blick</h2>
              <p className="section-subtitle">Die wichtigsten Funktionen, die deine Buchhaltung automatisieren.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
              {[
                {
                  icon: Camera,
                  title: "Intelligente Belegerfassung",
                  text: "Fotografiere Belege oder leite Rechnungen per E-Mail weiter. Die KI erkennt Betrag, Datum und Kategorie automatisch.",
                },
                {
                  icon: Building2,
                  title: "Bank-Integration",
                  text: "Verbinde dein Geschäftskonto. Transaktionen werden automatisch abgeglichen und kategorisiert.",
                },
                {
                  icon: Bot,
                  title: "Lernende KI",
                  text: "Finrobotics lernt deine Buchungsmuster und wird mit jeder Transaktion genauer.",
                },
                {
                  icon: BarChart3,
                  title: "Echtzeit-Dashboard",
                  text: "Gewinn, Liquidität, USt-Vorauszahlung – immer aktuell, immer im Blick.",
                },
                {
                  icon: MessageSquare,
                  title: "KI-Assistent",
                  text: "Frag einfach: 'Wie viel Umsatz habe ich im Q3 gemacht?' – und bekomme sofort Antworten.",
                },
                {
                  icon: FileOutput,
                  title: "ELSTER & DATEV Export",
                  text: "Ein Klick für den ELSTER-Export. Oder sende alles direkt an deinen Steuerberater via DATEV.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Was du konkret bekommst */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="section-title">Was du konkret bekommst</h2>
              <p className="section-subtitle">Keine Buzzwords – wir liefern Ergebnisse.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 relative">
              {/* Vertikale Trennlinie Desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

              {/* Linke Spalte: Deine Buchhaltung */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Deine Buchhaltung</h3>
                <ul className="space-y-5">
                  {[
                    {
                      title: "Alle Belege erfasst und verbucht",
                      desc: "Du schickst Belege per Foto, E-Mail oder Upload. Finrobotics erledigt den Rest.",
                    },
                    {
                      title: "Automatische Kategorisierung nach EÜR und SKR03/04",
                      desc: "Jede Buchung korrekt zugeordnet, nachvollziehbar dokumentiert.",
                    },
                    {
                      title: "USt-Voranmeldung vorbereitet",
                      desc: "Deine Umsatzsteuer-Voranmeldung ist fertig, wenn du sie brauchst.",
                    },
                    {
                      title: "ELSTER-Export auf Knopfdruck",
                      desc: "Direkt ans Finanzamt, ohne Umwege.",
                    },
                    {
                      title: "Steuerberater-Übergabe per DATEV",
                      desc: "Alles strukturiert und vollständig aufbereitet für deinen Steuerberater.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{item.title}</span>
                        <span className="text-muted-foreground"> – {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Rechte Spalte: Dein Überblick */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Dein Überblick</h3>
                <ul className="space-y-5">
                  {[
                    {
                      title: "Echtzeit-Dashboard",
                      desc: "Gewinn, Liquidität und offene Posten immer im Blick.",
                    },
                    {
                      title: "Monatlicher Status-Report",
                      desc: "So stehen deine Zahlen – kurz, verständlich, automatisch.",
                    },
                    {
                      title: "KI-Assistent für Fragen",
                      desc: "\"Wie viel habe ich für Software ausgegeben?\" – sofortige Antwort.",
                    },
                    {
                      title: "Lücken-Erkennung",
                      desc: "Finrobotics meldet sich, wenn Belege fehlen oder etwas nicht stimmt.",
                    },
                    {
                      title: "Volle Transparenz",
                      desc: "Jede Buchung ist nachvollziehbar. Du behältst immer die Kontrolle.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{item.title}</span>
                        <span className="text-muted-foreground"> – {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Rechtlicher Hinweis */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-xs text-muted-foreground/70">
                <Shield className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
                Buchführungshilfe nach § 6 Nr. 4 StBerG
              </p>
            </motion.div>

          </div>
        </section>

        {/* Early Adopter Section */}
        <section className="section bg-secondary/[0.03]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Sei einer der ersten 50</h2>
              <p className="section-subtitle">Wir suchen Selbstständige und Unternehmer für unsere Closed Beta. Als Early Adopter profitierst du von:</p>
            </motion.div>

            {/* Drei Vorteile */}
            <div className="grid md:grid-cols-3 gap-8 mb-14">
              {[
                {
                  icon: MessageCircle,
                  title: "Direkter Draht zu den Gründern",
                  desc: "Persönlicher Support von Paul und Tobi per WhatsApp",
                },
                {
                  icon: BadgePercent,
                  title: "Early-Adopter-Preis",
                  desc: "Sichere dir dauerhaft den günstigsten Tarif",
                },
                {
                  icon: Wrench,
                  title: "Dein Feedback formt das Produkt",
                  desc: "Du beeinflusst direkt, welche Features als nächstes kommen",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Fortschrittsbalken */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-lg mx-auto mb-10"
            >
              <p className="text-sm text-muted-foreground text-center mb-3">12 von 50 Plätzen vergeben</p>
              <div className="h-3 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "24%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-secondary rounded-full"
                />
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <a
                href="https://wa.me/491721084289"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#209173] hover:bg-[#1a7a60] text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Jetzt Beta-Platz sichern
              </a>
              <p className="text-sm text-muted-foreground mt-3">Kostenlos anfragen – keine Verpflichtung</p>
            </motion.div>
          </div>
        </section>

        {/* Closed Beta Banner */}
        <section className="section bg-secondary/[0.03]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-secondary to-secondary/85 rounded-xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* Dezentes Hintergrund-Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/3 -translate-x-1/4" />
              </div>

              <div className="relative">
                <span className="inline-block px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
                  Closed Beta
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Aktuell in der Closed Beta: Persönlicher Support von den Gründern
                </h3>
                <p className="text-white/85 mb-6 max-w-2xl">
                  Als einer der ersten Nutzer bekommst du direkten Zugang zu Paul und Tobi. Jede Frage wird persönlich beantwortet – per WhatsApp, meist innerhalb von Minuten. Das gibt es nur jetzt.
                </p>
                <a
                  href="https://wa.me/491721084289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary font-semibold rounded-lg hover:bg-white/90 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Per WhatsApp beitreten
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="section-title">Einfach, transparent, fair.</h2>
              <p className="section-subtitle">Professionelle Buchhaltung – für einen Bruchteil dessen, was ein Buchhaltungsbüro kostet.</p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-12 gap-6 lg:gap-8 mb-16">

              {/* Starter Card – Hauptelement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-7"
              >
                <div className="relative bg-white border-2 border-secondary/30 rounded-xl shadow-lg p-8 h-full">
                  {/* Teal Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-secondary rounded-t-xl" />

                  {/* Beta Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-foreground">Starter</h3>
                    <span className="px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary rounded-full">BETA-PREIS</span>
                  </div>

                  {/* Preis */}
                  <div className="mb-2">
                    <span className="text-lg text-muted-foreground line-through mr-2">99€/Monat</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-5xl font-bold text-secondary">49€</span>
                    <span className="text-muted-foreground text-lg">/Monat</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Für Beta-Nutzer dauerhaft gesichert</p>

                  {/* Vergleichs-Anker */}
                  <div className="bg-muted/50 rounded-lg px-4 py-3 mb-8 flex items-center gap-2">
                    <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Zum Vergleich: Ein Buchhaltungsbüro kostet ab 149€/Monat</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {[
                      "Bis zu 50 Belege pro Monat",
                      "Automatische Belegerfassung & Kategorisierung",
                      "Lernende KI nach EÜR und SKR03/04",
                      "USt-Voranmeldung vorbereitet",
                      "ELSTER & DATEV Export",
                      "Echtzeit-Dashboard",
                      "KI-Assistent",
                      "95+ Sprachen unterstützt",
                      "Jederzeit kündbar",
                      "Persönlicher Support per WhatsApp",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button size="lg" className="w-full bg-[#209173] hover:bg-[#1a7a60] text-white" asChild>
                    <a href="https://wa.me/491721084289" target="_blank" rel="noopener noreferrer">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Beta-Platz sichern
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Business Card – dezenter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="md:col-span-5"
              >
                <div className="bg-muted/30 border border-border rounded-xl p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Business</h3>

                  {/* Auf Anfrage */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">Auf Anfrage</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8">
                    Für Selbstständige und Unternehmen mit höherem Belegvolumen. Wir erstellen dir ein individuelles Angebot.
                  </p>

                  {/* Features */}
                  <p className="text-sm font-medium text-foreground mb-4">Alles aus dem Starter-Tarif, plus:</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {[
                      "Unbegrenzte Belege",
                      "Mehrere Bankkonten",
                      "Priorisierter Support",
                      "Individuelle Einrichtung",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href="/kontakt">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Angebot anfragen
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Positionierungs-Vergleich */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
            >
              {/* Skala-Linie */}
              <div className="relative mb-4">
                <div className="hidden md:flex items-center justify-between text-xs text-muted-foreground px-8">
                  <span>Günstig + viel Aufwand</span>
                  <span>Teuer + kein Aufwand</span>
                </div>
                <div className="hidden md:block h-px bg-border mt-2 mx-8" />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* DIY-Software */}
                <div className="text-center p-6 rounded-xl">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">DIY-Software</p>
                  <p className="text-2xl font-bold text-muted-foreground/60 mb-1">ab ~25€</p>
                  <p className="text-xs text-muted-foreground">/Monat</p>
                  <p className="text-sm text-muted-foreground mt-3">Du machst alles selbst</p>
                </div>

                {/* Finrobotics – hervorgehoben */}
                <div className="text-center p-6 rounded-xl border-2 border-secondary bg-secondary/5 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold bg-secondary text-white rounded-full">Wir sind hier</span>
                  </div>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2 mt-2">Finrobotics</p>
                  <p className="text-3xl font-bold text-secondary mb-1">49€</p>
                  <p className="text-xs text-muted-foreground">/Monat</p>
                  <p className="text-sm text-foreground font-medium mt-3">KI erledigt die Arbeit</p>
                </div>

                {/* Buchhaltungsbüro */}
                <div className="text-center p-6 rounded-xl">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Buchhaltungsbüro</p>
                  <p className="text-2xl font-bold text-muted-foreground/60 mb-1">ab 149€</p>
                  <p className="text-xs text-muted-foreground">/Monat</p>
                  <p className="text-sm text-muted-foreground mt-3">Jemand anderes macht es</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Steuerberater Teaser */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Für Steuerberater: Mehr Mandanten, weniger Aufwand
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Ihre Mandanten nutzen Finrobotics für die Vorarbeit. Sie erhalten perfekt aufbereitete DATEV-Exporte. Win-Win.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/fuer-steuerberater">
                    Zum Partnerprogramm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/finrobotics-dashboard.png"
                  alt="Steuerberater-Integration"
                  className="max-w-sm rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-muted/20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="section-title">Häufige Fragen</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    Ist Finrobotics ein Ersatz für meinen Steuerberater?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nein. Finrobotics bereitet deine Buchhaltung so auf, dass dein Steuerberater deutlich weniger Arbeit hat. Du sparst Zeit und Geld bei der Steuerberatung – aber für den Jahresabschluss und die Steuererklärung empfehlen wir weiterhin einen Steuerberater.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    Wie sicher sind meine Finanzdaten?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Sehr sicher. Alle Daten werden DSGVO-konform in Europa gehostet und verschlüsselt übertragen. Wir haben keinen Zugriff auf dein Bankkonto – die Bank-Integration läuft über zertifizierte Schnittstellen mit reinem Lesezugriff.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    Was passiert mit meinen Daten, wenn ich kündige?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Deine Daten gehören dir. Bei Kündigung kannst du alles exportieren (DATEV, CSV). Nach einer Übergangsfrist werden deine Daten vollständig gelöscht.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    Muss ich mich mit Buchhaltung auskennen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nein. Finrobotics ist so gebaut, dass du kein Vorwissen brauchst. Die KI übernimmt die Kategorisierung und Verbuchung. Du musst nur deine Belege hochladen – den Rest erledigen wir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    Kann ich Finrobotics testen, bevor ich mich festlege?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Ja. Schreib uns per WhatsApp und wir zeigen dir in einem kurzen Gespräch, wie Finrobotics für deine Situation funktioniert. Kein Risiko, keine Verpflichtung.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-6">
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    Was unterscheidet Finrobotics von Buchhaltungssoftware wie sevDesk oder lexoffice?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Bei klassischer Buchhaltungssoftware machst du die Arbeit selbst – du kategorisierst, du verbuchst, du exportierst. Bei Finrobotics erledigt die KI diese Arbeit für dich. Du lädst Belege hoch, den Rest übernehmen wir.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="section-title">Bereit, deine Buchhaltung zu automatisieren?</h2>
              <p className="section-subtitle mx-auto mb-8">
                Schreib uns per WhatsApp – wir melden uns persönlich.
              </p>
              <a
                href="https://wa.me/491721084289"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#209173] hover:bg-[#1a7a60] text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Per WhatsApp starten
              </a>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-secondary" />
                  DATEV-kompatibel
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-secondary" />
                  DSGVO-konform
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-secondary" />
                  95+ Sprachen
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4 text-secondary" />
                  Spin-off Freie Universität Bozen
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
