import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Datenschutz() {
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
              <h1 className="text-4xl font-semibold tracking-tight mb-8">Datenschutzerklärung</h1>

              <div className="prose prose-slate max-w-none">

                {/* 1. Verantwortlicher */}
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Verantwortlicher</h2>
                <p className="text-muted-foreground mb-4">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
                </p>
                <p className="text-muted-foreground mb-4">
                  FinRobotics<br />
                  Prof. Dr. Paul Pronobis<br />
                  E-Mail: paul.pronobis@finrobotics.de
                </p>

                {/* 2. Datenschutzbeauftragter */}
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Datenschutzbeauftragter</h2>
                <p className="text-muted-foreground mb-4">
                  Ansprechpartner für Datenschutzanfragen:<br />
                  Prof. Dr. Paul Pronobis<br />
                  E-Mail: paul.pronobis@finrobotics.de
                </p>

                {/* 3. Allgemeines zur Datenverarbeitung */}
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Allgemeines zur Datenverarbeitung</h2>
                <p className="text-muted-foreground mb-4">
                  FinRobotics bietet KI-gestützte Agenten für Steuerberatungskanzleien an. Im Rahmen unserer Leistungserbringung verarbeiten wir personenbezogene Daten ausschließlich, soweit dies zur Bereitstellung einer funktionsfähigen Plattform sowie zur Erbringung unserer vertraglich vereinbarten Leistungen erforderlich ist.
                </p>

                {/* 4. Rechtsgrundlagen */}
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Rechtsgrundlagen der Verarbeitung</h2>
                <p className="text-muted-foreground mb-4">
                  Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):</strong> Soweit wir die Einwilligung der betroffenen Person für die Verarbeitung einholen, insbesondere für die Verknüpfung von Bankkonten über PSD2 Open Banking.</li>
                  <li><strong>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung):</strong> Für die Verarbeitung, die zur Erfüllung eines Vertrags mit der betroffenen Person oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</li>
                  <li><strong>Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse):</strong> Für die Verarbeitung, die zur Wahrung berechtigter Interessen des Verantwortlichen oder eines Dritten erforderlich ist, z.B. zur Sicherstellung der IT-Sicherheit und des fehlerfreien Betriebs der Plattform.</li>
                </ul>

                {/* 5. Welche Daten wir erheben */}
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Art der verarbeiteten Daten</h2>

                <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Website-Nutzungsdaten</h3>
                <p className="text-muted-foreground mb-4">
                  Beim Besuch unserer Website werden automatisch technische Daten erhoben, die Ihr Browser an unseren Server übermittelt. Hierzu gehören:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>IP-Adresse (anonymisiert)</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Browsertyp und -version</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer-URL</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website und zur Verbesserung unseres Angebots verarbeitet. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">5.2 Bankdaten über PSD2 Open Banking</h3>
                <p className="text-muted-foreground mb-4">
                  Im Rahmen unserer automatisierten Buchhaltungsunterstützung verarbeiten wir Bankdaten unserer Kunden ausschließlich mit deren ausdrücklicher Einwilligung. Die Datenübermittlung erfolgt über den PSD2-konformen Open-Banking-Dienst unseres technischen Partners Enable Banking Oy. Dabei werden folgende Daten verarbeitet:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Kontostände</li>
                  <li>Kontotransaktionen (Zahlungseingänge und -ausgänge)</li>
                  <li>Kontoinformationen (IBAN, Kontoinhaber)</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Die Verknüpfung des Bankkontos erfolgt ausschließlich durch den Nutzer selbst über eine sichere Weiterleitung zum Online-Banking-Portal seiner Bank. FinRobotics hat zu keinem Zeitpunkt Zugriff auf die Online-Banking-Zugangsdaten des Nutzers.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">5.3 Kommunikationsdaten</h3>
                <p className="text-muted-foreground mb-4">
                  Im Rahmen der Mandantenbetreuung durch unsere KI-Agenten können folgende Kommunikationsdaten verarbeitet werden:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>WhatsApp-Nachrichten (im Rahmen der automatisierten Mandantenkommunikation)</li>
                  <li>E-Mail-Korrespondenz</li>
                  <li>Kontaktdaten (Name, Telefonnummer, E-Mail-Adresse)</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Diese Daten werden ausschließlich zur Erbringung der vertraglich vereinbarten Dienstleistungen verarbeitet und nicht zu Werbezwecken genutzt.
                </p>

                {/* 6. Zweck der Verarbeitung */}
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Zweck der Datenverarbeitung</h2>
                <p className="text-muted-foreground mb-4">
                  Die Verarbeitung der personenbezogenen Daten dient folgenden Zwecken:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Automatisierte Buchhaltungsunterstützung für Steuerberatungskanzleien</li>
                  <li>Synchronisation und Kategorisierung von Banktransaktionen</li>
                  <li>Automatisierte Kommunikation mit Mandanten im Auftrag der Kanzlei</li>
                  <li>Belegverarbeitung und -zuordnung</li>
                  <li>Bereitstellung und Verbesserung unserer Plattform</li>
                  <li>Gewährleistung der IT-Sicherheit</li>
                </ul>

                {/* 7. Drittanbieter */}
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Empfänger und Drittanbieter</h2>

                <h3 className="text-lg font-semibold mt-6 mb-3">7.1 Enable Banking Oy</h3>
                <p className="text-muted-foreground mb-4">
                  Für den Zugriff auf Bankdaten über PSD2 Open Banking nutzen wir den Dienst der Enable Banking Oy, einem in Finnland ansässigen und durch die finnische Finanzaufsichtsbehörde (FIN-FSA) regulierten Zahlungsdienstleister. Enable Banking fungiert als technischer Vermittler (AISP — Account Information Service Provider) und unterliegt den strengen Anforderungen der PSD2-Richtlinie. Die Datenverarbeitung erfolgt innerhalb der Europäischen Union.
                </p>
                <p className="text-muted-foreground mb-4">
                  Weitere Informationen: <a href="https://enablebanking.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">enablebanking.com/privacy</a>
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">7.2 Vercel Inc.</h3>
                <p className="text-muted-foreground mb-4">
                  Unsere Website wird über Vercel Inc. (San Francisco, USA) gehostet. Vercel verarbeitet dabei technische Zugriffsdaten (IP-Adresse, Zeitstempel). Die Datenübermittlung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln (Standard Contractual Clauses, SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO.
                </p>
                <p className="text-muted-foreground mb-4">
                  Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">vercel.com/legal/privacy-policy</a>
                </p>

                {/* 8. Speicherdauer */}
                <h2 className="text-xl font-semibold mt-8 mb-4">8. Speicherdauer</h2>
                <p className="text-muted-foreground mb-4">
                  Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Verarbeitungszwecke erforderlich ist:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Bankdaten:</strong> Werden nur für die Dauer der aktiven Mandantenbeziehung zwischen der Steuerberatungskanzlei und dem jeweiligen Mandanten gespeichert. Nach Beendigung der Geschäftsbeziehung werden die Bankdaten innerhalb von 90 Tagen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                  <li><strong>Kommunikationsdaten:</strong> Werden für die Dauer der Vertragsbeziehung gespeichert und nach Vertragsende gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
                  <li><strong>Website-Nutzungsdaten:</strong> Werden für maximal 30 Tage gespeichert und anschließend automatisch gelöscht.</li>
                </ul>

                {/* 9. Rechte der Betroffenen */}
                <h2 className="text-xl font-semibold mt-8 mb-4">9. Rechte der betroffenen Personen</h2>
                <p className="text-muted-foreground mb-4">
                  Als betroffene Person haben Sie folgende Rechte:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden, und gegebenenfalls Auskunft über diese Daten zu erhalten.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen hierfür vorliegen.</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: paul.pronobis@finrobotics.de
                </p>

                {/* 10. Widerruf */}
                <h2 className="text-xl font-semibold mt-8 mb-4">10. Widerruf der Einwilligung</h2>
                <p className="text-muted-foreground mb-4">
                  Soweit die Verarbeitung Ihrer personenbezogenen Daten auf einer Einwilligung beruht, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung wird durch den Widerruf nicht berührt.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Widerruf der Bankkonto-Verknüpfung:</strong> Die PSD2-Einwilligung zur Kontodatenabfrage kann jederzeit über Ihr Online-Banking-Portal widerrufen werden. Alternativ können Sie uns per E-Mail kontaktieren, und wir entfernen die Kontoverbindung umgehend aus unserem System.
                </p>

                {/* 11. SSL/TLS */}
                <h2 className="text-xl font-semibold mt-8 mb-4">11. SSL-/TLS-Verschlüsselung</h2>
                <p className="text-muted-foreground mb-4">
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>

                {/* 12. Aufsichtsbehörde */}
                <h2 className="text-xl font-semibold mt-8 mb-4">12. Zuständige Aufsichtsbehörde</h2>
                <p className="text-muted-foreground mb-4">
                  Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde ist:
                </p>
                <p className="text-muted-foreground mb-4">
                  Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                  Lautenschlagerstraße 20<br />
                  70173 Stuttgart<br />
                  Telefon: +49 711 615541-0<br />
                  E-Mail: poststelle@lfdi.bwl.de<br />
                  Website: <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.baden-wuerttemberg.datenschutz.de</a>
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
