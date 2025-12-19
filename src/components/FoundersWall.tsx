import { cn } from "@/lib/utils";

interface Founder {
  position: number;
  name: string | null;
  date?: string;
}

// Example data with some filled slots
const exampleFounders: Founder[] = [
  { position: 1, name: "Marie Dupont", date: "12 janvier 2024" },
  { position: 2, name: "J. Van der Berg", date: "15 janvier 2024" },
  { position: 3, name: "Un ami anonyme", date: "18 janvier 2024" },
  { position: 4, name: "Famille Lefebvre", date: "22 janvier 2024" },
  { position: 5, name: "C.M.", date: "25 janvier 2024" },
  { position: 6, name: "Pierre Martin", date: "28 janvier 2024" },
  { position: 7, name: "Association des Amis", date: "2 février 2024" },
  { position: 8, name: "Sophie B.", date: "5 février 2024" },
  { position: 9, name: "En mémoire de Louis", date: "8 février 2024" },
  { position: 10, name: "Un citoyen engagé", date: "12 février 2024" },
  { position: 11, name: "Hélène Moreau", date: "15 février 2024" },
  { position: 12, name: "F.D.", date: "18 février 2024" },
];

// Generate all 100 slots
const generateWallData = (): Founder[] => {
  return Array.from({ length: 100 }, (_, i) => {
    const existing = exampleFounders.find((f) => f.position === i + 1);
    return existing || { position: i + 1, name: null };
  });
};

interface FoundersWallProps {
  className?: string;
  compact?: boolean;
}

export function FoundersWall({ className, compact = false }: FoundersWallProps) {
  const founders = generateWallData();

  return (
    <div className={cn("w-full", className)}>
      {/* Wall Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-2 border-t border-b border-accent/30">
          <span className="text-sm uppercase tracking-[0.3em] text-accent font-medium">
            Registre des fondateurs
          </span>
        </div>
      </div>

      {/* The Wall Grid */}
      <div
        className={cn(
          "grid gap-2 commemorative-border p-4 md:p-6 bg-card/30",
          compact
            ? "grid-cols-5 md:grid-cols-10"
            : "grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10"
        )}
      >
        {founders.map((founder) => (
          <div
            key={founder.position}
            className={cn(
              "founder-slot group relative",
              founder.name ? "founder-slot-filled" : "founder-slot-empty"
            )}
            title={
              founder.name
                ? `${founder.name} — ${founder.date}`
                : `Emplacement ${founder.position} — disponible`
            }
          >
            <span className="absolute top-0.5 left-1 text-[10px] text-muted-foreground/50">
              {founder.position}
            </span>
            {founder.name ? (
              <span className="text-xs md:text-sm font-medium text-foreground block pt-3 pb-1 truncate">
                {founder.name}
              </span>
            ) : (
              <span className="text-xs text-muted-foreground/40 block pt-3 pb-1">—</span>
            )}
          </div>
        ))}
      </div>

      {/* Wall Footer */}
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          {exampleFounders.length} fondateurs inscrits sur 100 emplacements
        </p>
      </div>
    </div>
  );
}
