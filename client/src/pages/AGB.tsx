import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AGB() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-semibold tracking-tight mb-8">Allgemeine Geschäftsbedingungen</h1>
              
              <div className="prose prose-slate max-w-none">
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 1 Geltungsbereich</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Finrobotics GmbH (i.Gr.), nachfolgend "Anbieter" genannt, und dem Kunden über die Nutzung der Finrobotics-Plattform.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 2 Vertragsgegenstand</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter stellt dem Kunden eine cloudbasierte Software zur automatisierten Buchhaltung (SaaS) zur Verfügung.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Der Funktionsumfang richtet sich nach dem gewählten Tarif und der aktuellen Leistungsbeschreibung auf der Website des Anbieters.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Die Software dient der Unterstützung bei der Buchhaltung und ersetzt keine steuerliche oder rechtliche Beratung.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 3 Vertragsschluss</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot dar.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Durch die Registrierung gibt der Kunde ein verbindliches Angebot zum Abschluss eines Nutzungsvertrages ab.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der Vertrag kommt durch die Freischaltung des Kundenkontos durch den Anbieter zustande.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 4 Kostenlose Testphase</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter gewährt dem Kunden eine kostenlose Testphase von 14 Tagen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Nach Ablauf der Testphase wird das Konto automatisch in den gewählten kostenpflichtigen Tarif überführt, sofern der Kunde nicht vorher kündigt.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Während der Testphase ist keine Zahlungsmethode erforderlich.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 5 Preise und Zahlung</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Es gelten die zum Zeitpunkt des Vertragsschlusses auf der Website angegebenen Preise.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Die Zahlung erfolgt monatlich oder jährlich im Voraus per Lastschrift oder Kreditkarte.
                </p>
                <p className="text-muted-foreground mb-4">
                  (4) Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang zur Plattform zu sperren.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 6 Pflichten des Kunden</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Kunde ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem Zugriff Dritter zu schützen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Der Kunde ist für die Richtigkeit und Vollständigkeit der von ihm eingegebenen Daten verantwortlich.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der Kunde darf die Plattform nicht für rechtswidrige Zwecke nutzen.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 7 Verfügbarkeit</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter strebt eine Verfügbarkeit der Plattform von 99,5% im Jahresmittel an.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Geplante Wartungsarbeiten werden dem Kunden rechtzeitig angekündigt.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der Anbieter haftet nicht für Ausfälle, die durch höhere Gewalt oder Umstände außerhalb seines Einflussbereichs verursacht werden.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 8 Datenschutz</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter verarbeitet personenbezogene Daten des Kunden gemäß der Datenschutzerklärung.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Der Kunde bleibt Eigentümer seiner Daten und kann diese jederzeit exportieren.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Nach Vertragsende werden die Daten des Kunden nach einer Frist von 90 Tagen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 9 Haftung</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vertragstypischen, vorhersehbaren Schaden.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Die Haftung für Datenverlust ist auf den typischen Wiederherstellungsaufwand beschränkt.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 10 Vertragslaufzeit und Kündigung</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Vertrag wird auf unbestimmte Zeit geschlossen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Der Kunde kann den Vertrag jederzeit zum Ende des jeweiligen Abrechnungszeitraums kündigen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 11 Schlussbestimmungen</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Gerichtsstand für alle Streitigkeiten ist, soweit gesetzlich zulässig, der Sitz des Anbieters.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
                
                <p className="text-muted-foreground mb-4 mt-8">
                  <em>Stand: Januar 2025</em>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
