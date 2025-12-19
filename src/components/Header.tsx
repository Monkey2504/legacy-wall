export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg">M</span>
            </div>
            <span className="font-serif text-xl text-foreground">
              Mur des fondateurs
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#concept"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Le concept
            </a>
            <a
              href="#exemple"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Exemple
            </a>
            <a
              href="#asbl"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pour les ASBL
            </a>
            <a
              href="#donateurs"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pour les donateurs
            </a>
            <a
              href="#integration"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Intégration
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
