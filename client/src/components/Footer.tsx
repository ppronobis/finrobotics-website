import { Link } from "wouter";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produkt: [
      { href: "/fuer-steuerberater", label: "Für Steuerberater" },
    ],
    unternehmen: [
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    rechtliches: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/agb", label: "AGB" },
    ],
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradFooter" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1E3A5F"/>
                    <stop offset="100%" stopColor="#0D9488"/>
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="7" fill="url(#logoGradFooter)"/>
                <path d="M9 8h14v3H12.5v4h8v3h-8v6H9V8z" fill="white"/>
              </svg>
              <span className="text-lg font-semibold text-foreground">FinRobotics</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              KI-native Buchhaltung für Selbstständige und Unternehmer in Deutschland.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/finrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[...footerLinks.produkt, ...footerLinks.unternehmen].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} FinRobotics GmbH. Spin-off der Freien Universität Bozen.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              Alle Systeme operativ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
