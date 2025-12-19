import { cn } from "@/lib/utils";
import { User, Heart } from "lucide-react";

interface Founder {
  position: number;
  name: string | null;
  date?: string;
  avatar?: string;
}

// Example data with some filled slots
const exampleFounders: Founder[] = [
  { position: 1, name: "Marie Dupont", date: "12 janvier 2024" },
  { position: 2, name: "Jean Van der Berg", date: "15 janvier 2024" },
  { position: 3, name: "Un ami anonyme", date: "18 janvier 2024" },
  { position: 4, name: "Famille Lefebvre", date: "22 janvier 2024" },
  { position: 5, name: "Claire M.", date: "25 janvier 2024" },
  { position: 6, name: "Pierre Martin", date: "28 janvier 2024" },
  { position: 7, name: "Association Solidaire", date: "2 février 2024" },
  { position: 8, name: "Sophie Bernard", date: "5 février 2024" },
  { position: 9, name: "En mémoire de Louis", date: "8 février 2024" },
  { position: 10, name: "Un citoyen engagé", date: "12 février 2024" },
  { position: 11, name: "Hélène Moreau", date: "15 février 2024" },
  { position: 12, name: "François D.", date: "18 février 2024" },
  { position: 13, name: "Collectif Entraide", date: "20 février 2024" },
  { position: 14, name: "Anne-Sophie L.", date: "22 février 2024" },
  { position: 15, name: "Michel Durand", date: "25 février 2024" },
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
  const filledCount = exampleFounders.length;
  const percentage = Math.round((filledCount / 100) * 100);

  return (
    <div className={cn("w-full", className)}>
      {/* Wall Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-4">
          <Heart className="w-5 h-5 text-primary fill-current" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Registre des fondateurs
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-foreground">{filledCount} fondateurs</span>
            <span className="text-muted-foreground">Objectif: 100</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* The Wall Grid */}
      <div
        className={cn(
          "grid gap-3 p-6 md:p-8 bg-gradient-to-br from-secondary/50 to-secondary rounded-3xl shadow-inner",
          compact
            ? "grid-cols-5 md:grid-cols-10"
            : "grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10"
        )}
      >
        {founders.map((founder) => (
          <div
            key={founder.position}
            className={cn(
              "founder-slot group relative aspect-square flex flex-col items-center justify-center",
              founder.name ? "founder-slot-filled" : "founder-slot-empty"
            )}
            title={
              founder.name
                ? `${founder.name} — ${founder.date}`
                : `Emplacement ${founder.position} — disponible`
            }
          >
            {founder.name ? (
              <>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-1">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-foreground text-center leading-tight line-clamp-2 px-1">
                  {founder.name.split(' ')[0]}
                </span>
                <span className="absolute top-1 right-1 text-[9px] font-bold text-primary bg-primary/10 rounded px-1">
                  #{founder.position}
                </span>
              </>
            ) : (
              <>
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground/50">
                    {founder.position}
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Wall Footer */}
      <div className="text-center mt-8">
        <p className="text-muted-foreground mb-4">
          <span className="font-semibold text-primary">{100 - filledCount} places</span> encore disponibles pour les premiers donateurs
        </p>
        <button className="cta-button inline-flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Devenir fondateur
        </button>
      </div>
    </div>
  );
}