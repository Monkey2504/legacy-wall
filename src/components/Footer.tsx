export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg">M</span>
              </div>
              <span className="font-serif text-xl text-foreground">
                Mur des fondateurs
              </span>
            </div>
            <p className="text-sm text-muted-foreground prose-institutional">
              Un registre public et permanent pour honorer les premiers soutiens
              des organisations à but non lucratif.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Principes</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Égalité entre donateurs</li>
              <li>Permanence de l'inscription</li>
              <li>Respect de l'anonymat</li>
              <li>Aucune exploitation commerciale</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Ressources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#integration" className="hover:text-foreground transition-colors">
                  Guide d'intégration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation technique
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Questions fréquentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Le Mur des fondateurs est un concept ouvert, libre d'utilisation par toute organisation
            à but non lucratif.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Aucune donnée personnelle n'est collectée par ce site de présentation.
          </p>
        </div>
      </div>
    </footer>
  );
}
