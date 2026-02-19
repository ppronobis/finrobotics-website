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
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
                
                <p className="text-muted-foreground mb-4">
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Hosting</h2>
                <p className="text-muted-foreground mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Website wird auf Servern in der Europäischen Union gehostet. Die Server erfüllen alle Anforderungen der DSGVO.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Datenschutz</h3>
                <p className="text-muted-foreground mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-muted-foreground mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  Finrobotics GmbH (i.Gr.)<br />
                  c/o Freie Universität Bozen<br />
                  Universitätsplatz 1<br />
                  39100 Bozen, Italien<br /><br />
                  E-Mail: hello@finrobotics.de
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Speicherdauer</h3>
                <p className="text-muted-foreground mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-muted-foreground mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-muted-foreground mb-4">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Recht auf Datenübertragbarkeit</h3>
                <p className="text-muted-foreground mb-4">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Auskunft, Löschung und Berichtigung</h3>
                <p className="text-muted-foreground mb-4">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Kontaktformular</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Anfrage per E-Mail</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Plugins und Tools</h2>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Google Fonts (lokales Hosting)</h3>
                <p className="text-muted-foreground mb-4">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
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
