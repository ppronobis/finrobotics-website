import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formulardaten sammeln
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // mailto-Fallback: E-Mail-Client öffnen mit vorausgefüllten Daten
    const mailtoSubject = encodeURIComponent(subject || "Kontaktanfrage über finrobotics.de");
    const mailtoBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `E-Mail: ${email}\n` +
      (company ? `Unternehmen: ${company}\n` : "") +
      `\n${message}`
    );
    
    window.location.href = `mailto:paul.pronobis@finrobotics.de?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Kurz warten, dann Erfolgsmeldung zeigen
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("E-Mail-Programm geöffnet! Alternativ schreib uns direkt an paul.pronobis@finrobotics.de");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      value: "hello@finrobotics.de",
      href: "mailto:hello@finrobotics.de",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Freie Universität Bozen, Südtirol, Italien",
      href: null,
    },
    {
      icon: Clock,
      title: "Antwortzeit",
      value: "Innerhalb von 24 Stunden",
      href: null,
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
                Kontaktiere uns
              </h1>
              <p className="text-lg text-muted-foreground">
                Hast du Fragen zu Finrobotics? Möchtest du eine Demo? Wir freuen uns, von dir zu hören.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section pt-0">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Dein E-Mail-Programm wurde geöffnet!</h3>
                        <p className="text-muted-foreground mb-6">
                          Bitte sende die vorausgefüllte E-Mail ab. Falls dein E-Mail-Programm sich nicht geöffnet hat, 
                          schreib uns direkt an{" "}
                          <a href="mailto:paul.pronobis@finrobotics.de" className="text-secondary hover:underline">
                            paul.pronobis@finrobotics.de
                          </a>
                        </p>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                          Weitere Nachricht senden
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Vorname</Label>
                            <Input id="firstName" name="firstName" placeholder="Max" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nachname</Label>
                            <Input id="lastName" name="lastName" placeholder="Mustermann" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail</Label>
                          <Input id="email" name="email" type="email" placeholder="max@beispiel.de" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Unternehmen (optional)</Label>
                          <Input id="company" name="company" placeholder="Dein Unternehmen" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subject">Betreff</Label>
                          <Input id="subject" name="subject" placeholder="Worum geht es?" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Nachricht</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Deine Nachricht an uns..."
                            rows={5}
                            required
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Wird gesendet..."
                          ) : (
                            <>
                              Nachricht senden
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Kontaktinformationen</h2>
                  <p className="text-muted-foreground mb-6">
                    Wir sind hier, um zu helfen. Kontaktiere uns über das Formular oder direkt per E-Mail.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{info.title}</h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-secondary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Kostenlose Demo</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Möchtest du Finrobotics in Aktion sehen? Wir zeigen dir gerne in einer persönlichen Demo, wie du deine Buchhaltung automatisieren kannst.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:hello@finrobotics.de?subject=Demo-Anfrage">
                        Demo anfragen
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
