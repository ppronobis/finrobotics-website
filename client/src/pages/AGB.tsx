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
              <h1 className="text-4xl font-semibold tracking-tight mb-8">Nutzungsbedingungen (AGB)</h1>

              <div className="prose prose-slate max-w-none">

                {/* § 1 Geltungsbereich */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 1 Geltungsbereich</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Diese Nutzungsbedingungen (nachfolgend „AGB") gelten für sämtliche Verträge zwischen FinRobotics, vertreten durch Prof. Dr. Paul Pronobis, c/o Freie Universität Bozen, Universitätsplatz 1, 39100 Bozen, Südtirol, Italien (nachfolgend „Anbieter"), und der jeweiligen Steuerberatungskanzlei, dem Unternehmen oder Selbstständigen (nachfolgend „Kunde") über die Nutzung der FinRobotics-Plattform und deren KI-Agenten.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Diese AGB richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB bzw. Art. 2082 Codice Civile, insbesondere Steuerberatungskanzleien, Unternehmen und Selbstständige. FinRobotics bietet keine Leistungen für Verbraucher an.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>

                {/* § 2 Leistungsbeschreibung */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 2 Leistungsbeschreibung</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter stellt dem Kunden KI-gestützte Agenten als Software-as-a-Service (SaaS) zur Verfügung. Die Agenten unterstützen den Kunden bei folgenden Aufgaben:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Automatisierte Bankdatensynchronisation über PSD2 Open Banking</li>
                  <li>Kategorisierung und Zuordnung von Banktransaktionen</li>
                  <li>Automatisierte Mandantenkommunikation (WhatsApp, E-Mail)</li>
                  <li>Belegverarbeitung und -zuordnung</li>
                  <li>Erstellung vorbereitender Buchhaltungsunterlagen</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  (2) Die Plattform dient ausschließlich der Unterstützung bei der Buchhaltung und ersetzt keine steuerliche, rechtliche oder wirtschaftliche Beratung. KI-generierte Buchungsvorschläge, Kategorisierungen und Auswertungen stellen keine steuerliche Beratung dar und sind vom Kunden bzw. dessen Steuerberater eigenverantwortlich zu prüfen. Die Verantwortung für die korrekte steuerliche Bearbeitung verbleibt beim Kunden.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der genaue Funktionsumfang richtet sich nach dem jeweils gewählten Tarif und der aktuellen Leistungsbeschreibung auf der Website des Anbieters.
                </p>

                {/* § 3 Vertragsschluss */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 3 Vertragsschluss</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Vertrag kommt zwischen dem Anbieter und dem Kunden (B2B) zustande. Der Kunde garantiert, dass er zum Vertragsschluss berechtigt ist und, sofern er im Namen eines Unternehmens oder einer Kanzlei handelt, zur Vertretung befugt ist.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot dar, sondern eine Einladung zur Abgabe eines Angebots (invitatio ad offerendum).
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Durch die Registrierung auf der Plattform gibt der Kunde ein verbindliches Angebot zum Abschluss eines Nutzungsvertrages ab. Der Vertrag kommt durch die Bestätigung der Registrierung durch den Anbieter zustande.
                </p>

                {/* § 4 Pflichten des Kunden */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 4 Pflichten des Kunden</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Kunde ist verpflichtet, bei der Registrierung und Nutzung der Plattform vollständige und korrekte Angaben zu machen und diese aktuell zu halten.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Der Kunde hat seine Zugangsdaten geheim zu halten und vor dem Zugriff unbefugter Dritter zu schützen. Bei Verdacht auf Missbrauch der Zugangsdaten ist der Anbieter unverzüglich zu informieren.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der Kunde ist verpflichtet, seine Mandanten über die Nutzung der FinRobotics-Plattform und die damit verbundene Datenverarbeitung zu informieren und die erforderlichen Einwilligungen einzuholen, insbesondere für:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Die Verknüpfung von Bankkonten über PSD2 Open Banking</li>
                  <li>Die automatisierte Kommunikation über WhatsApp oder E-Mail</li>
                  <li>Die Verarbeitung von Belegen und Finanzdaten</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  (4) Der Kunde darf die Plattform nicht für rechtswidrige Zwecke nutzen oder Dritten den Zugang zu seinem Konto gewähren.
                </p>

                {/* § 5 Haftung */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 5 Haftung</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung des Anbieters beruhen, sowie für Schäden, die durch Vorsatz oder grobe Fahrlässigkeit verursacht wurden.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der Anbieter haftet nicht für die Verfügbarkeit, Vollständigkeit oder Richtigkeit der über PSD2 Open Banking abgerufenen Bankdaten. Die Bereitstellung dieser Daten unterliegt der jeweiligen Bank und dem PSD2-Dienstleister (Enable Banking Oy). Technische Störungen oder Einschränkungen seitens der Banken oder des PSD2-Dienstleisters begründen keinen Haftungsanspruch gegen den Anbieter.
                </p>
                <p className="text-muted-foreground mb-4">
                  (4) Der Anbieter haftet nicht für die Richtigkeit von KI-generierten Buchungsvorschlägen, Kategorisierungen oder Auswertungen. Diese dienen ausschließlich als Arbeitshilfe und sind vom Kunden bzw. dessen Steuerberater zu prüfen und freizugeben.
                </p>
                <p className="text-muted-foreground mb-4">
                  (5) Die Haftung für mittelbare Schäden, Folgeschäden und entgangenen Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.
                </p>

                {/* § 6 Datenschutz */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 6 Datenschutz</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter verarbeitet personenbezogene Daten gemäß den Bestimmungen der DSGVO und der anwendbaren nationalen Datenschutzgesetze. Einzelheiten sind der <a href="/datenschutz" className="text-teal-600 hover:underline">Datenschutzerklärung</a> zu entnehmen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Soweit der Anbieter im Auftrag des Kunden personenbezogene Daten verarbeitet, wird ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der Kunde bleibt Eigentümer seiner Daten und kann diese jederzeit in einem gängigen Format exportieren.
                </p>

                {/* § 7 Verfügbarkeit */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 7 Verfügbarkeit</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter erbringt seine Leistungen nach bestem Bemühen (Best-Effort). Eine Garantie für eine ununterbrochene Verfügbarkeit der Plattform wird nicht übernommen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Geplante Wartungsarbeiten werden dem Kunden mit angemessener Vorlaufzeit angekündigt und nach Möglichkeit außerhalb der üblichen Geschäftszeiten durchgeführt.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Der Anbieter haftet nicht für Ausfälle, die durch höhere Gewalt, Störungen bei Drittanbietern (insbesondere Banken oder PSD2-Dienstleistern) oder Umstände außerhalb seines Einflussbereichs verursacht werden.
                </p>

                {/* § 8 Kündigung */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 8 Kündigung</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Vertrag kann von beiden Seiten jederzeit mit einer Frist von 30 Tagen zum Ende eines Kalendermonats gekündigt werden.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn der Kunde gegen wesentliche Pflichten aus diesen AGB verstößt.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Nach Beendigung des Vertrags werden die Daten des Kunden nach einer Übergangsfrist von 90 Tagen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Der Kunde kann seine Daten während dieser Frist exportieren.
                </p>

                {/* § 9 Änderungen der AGB */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 9 Änderungen der AGB</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern oder zu ergänzen, soweit dies sachlich gerechtfertigt ist und den Kunden nicht unangemessen benachteiligt.
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Der Anbieter wird den Kunden über Änderungen mindestens 30 Tage vor Inkrafttreten per E-Mail informieren. Widerspricht der Kunde nicht innerhalb von 30 Tagen nach Zugang der Änderungsmitteilung, gelten die geänderten AGB als angenommen.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Im Falle eines Widerspruchs hat der Kunde das Recht, den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung zu kündigen.
                </p>

                {/* § 10 Schlussbestimmungen */}
                <h2 className="text-xl font-semibold mt-8 mb-4">§ 10 Schlussbestimmungen</h2>
                <p className="text-muted-foreground mb-4">
                  (1) Für Kunden mit Sitz in Deutschland oder einem anderen EU-Mitgliedstaat (außer Italien) gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). Für Kunden mit Sitz in Italien gilt italienisches Recht. Die Rechtswahl erfolgt gemäß Art. 3 der Verordnung (EG) Nr. 593/2008 (Rom I).
                </p>
                <p className="text-muted-foreground mb-4">
                  (2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Bozen (Italien), soweit gesetzlich zulässig. Bei Kunden mit Sitz in Deutschland kann auch der Gerichtsstand Karlsruhe vereinbart werden.
                </p>
                <p className="text-muted-foreground mb-4">
                  (3) Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hierdurch nicht berührt. Anstelle der unwirksamen Bestimmung gilt eine Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt (salvatorische Klausel).
                </p>
                <p className="text-muted-foreground mb-4">
                  (4) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform. Dies gilt auch für die Aufhebung des Schriftformerfordernisses.
                </p>

                <p className="text-muted-foreground mb-4 mt-8">
                  <em>Stand: März 2026</em>
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
