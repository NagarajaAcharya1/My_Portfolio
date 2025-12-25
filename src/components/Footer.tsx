import { Github, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 py-16 bg-card border-t border-border">
      <div className="section-container">
        <FadeIn>
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-6">
              <a
                href="mailto:nagarajaacharya517@gmail.com"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/NagarajaAcharya1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nagaraja._.acharya?igsh=bXNmZXAya2pxZnl4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1ACcFehQaD/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nagaraja-acharya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-foreground font-medium">
              © {currentYear} Nagaraja. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
