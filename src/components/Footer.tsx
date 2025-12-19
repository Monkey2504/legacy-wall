import { Heart, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-heading font-bold text-xl">
                Mur des Fondateurs
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Ensemble, célébrons les premiers pas de la générosité. 
              Chaque don compte, chaque fondateur fait l'histoire.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#impact" className="hover:text-primary transition-colors">
                  Notre Impact
                </a>
              </li>
              <li>
                <a href="#concept" className="hover:text-primary transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#organisations" className="hover:text-primary transition-colors">
                  Pour les ONG
                </a>
              </li>
              <li>
                <a href="#donateurs" className="hover:text-primary transition-colors">
                  Pour les Donateurs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Ressources</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guide d'intégration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Questions fréquentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@murdesfondateurs.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+32 2 123 45 67</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Bruxelles, Belgique</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2024 Mur des Fondateurs. Projet open source pour les ONG.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}