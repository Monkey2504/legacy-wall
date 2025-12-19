import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Mur des Fondateurs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#impact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Notre Impact
            </a>
            <a
              href="#concept"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Comment ça marche
            </a>
            <a
              href="#organisations"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Pour les ONG
            </a>
            <a
              href="#donateurs"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Pour les Donateurs
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="rounded-full">
              Se connecter
            </Button>
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Créer mon mur
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#impact" className="text-foreground font-medium py-2">
                Notre Impact
              </a>
              <a href="#concept" className="text-foreground font-medium py-2">
                Comment ça marche
              </a>
              <a href="#organisations" className="text-foreground font-medium py-2">
                Pour les ONG
              </a>
              <a href="#donateurs" className="text-foreground font-medium py-2">
                Pour les Donateurs
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="rounded-full w-full">
                  Se connecter
                </Button>
                <Button className="rounded-full w-full bg-primary">
                  Créer mon mur
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}