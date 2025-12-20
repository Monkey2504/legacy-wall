import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Star, Users, Trophy, Shield, Clock } from "lucide-react";

export default function ForDonors() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Pour les donateurs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Devenez fondateur d'une cause qui vous tient à cœur
            </h1>
            <p className="text-lg text-muted-foreground">
              En faisant partie des 100 premiers donateurs, votre nom reste 
              gravé pour toujours sur le Mur des Fondateurs. Une reconnaissance 
              éternelle de votre engagement.
            </p>
          </div>
        </div>
      </section>

      {/* What it means */}
      <section className="page-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi devenir fondateur ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="content-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Statut exclusif</h3>
              <p className="text-muted-foreground">
                Seulement 100 places disponibles. Les premiers arrivés 
                occupent les premières positions, pour toujours.
              </p>
            </div>

            <div className="content-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reconnaissance publique</h3>
              <p className="text-muted-foreground">
                Votre nom apparaît sur le site de l'ONG, visible par tous 
                les visiteurs et futurs donateurs.
              </p>
            </div>

            <div className="content-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Communauté pionnière</h3>
              <p className="text-muted-foreground">
                Rejoignez le cercle des premiers soutiens. Ceux qui ont 
                cru en la cause dès le début.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for donors */}
      <section className="page-section bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comment ça marche ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="step-number flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Choisissez une cause</h3>
                    <p className="text-muted-foreground">
                      Trouvez une ONG dont le mur n'est pas encore complet.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="step-number flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Faites un don</h3>
                    <p className="text-muted-foreground">
                      Pas de montant minimum. C'est l'acte qui compte.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="step-number flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Apparaissez sur le mur</h3>
                    <p className="text-muted-foreground">
                      Votre nom s'inscrit instantanément à la prochaine position disponible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock wall preview */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="text-center mb-4">
                <h3 className="font-semibold">Mur des Fondateurs</h3>
                <p className="text-sm text-muted-foreground">Association Exemple</p>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded flex items-center justify-center text-xs ${
                      i < 18
                        ? "bg-primary/10 border border-primary/30 text-foreground"
                        : "bg-muted/50 border border-dashed border-border text-muted-foreground"
                    }`}
                  >
                    {i < 18 ? (
                      <span className="truncate px-1">
                        {["M.D.", "J.M.", "A.L.", "P.R.", "S.B.", "C.V.", "L.G.", "N.T.", "F.H.", "E.K.", "D.O.", "R.M.", "I.S.", "B.N.", "G.P.", "H.L.", "K.J.", "O.W."][i]}
                      </span>
                    ) : (
                      <span>{i + 1}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">18/100 fondateurs</p>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "18%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "Y a-t-il un montant minimum pour devenir fondateur ?",
                a: "Non, il n'y a pas de montant minimum. C'est l'acte de soutien qui compte, pas le montant. Chaque donateur, quel que soit son don, mérite sa place sur le mur."
              },
              {
                q: "Mon nom sera-t-il visible publiquement ?",
                a: "Oui, votre nom (ou initiales si vous préférez) apparaîtra sur le mur public de l'ONG. Vous pouvez choisir d'afficher votre nom complet, vos initiales, ou un pseudonyme."
              },
              {
                q: "Que se passe-t-il une fois le mur complet ?",
                a: "Les 100 noms restent affichés pour toujours. Le mur devient une archive historique des premiers soutiens de l'organisation."
              },
              {
                q: "Puis-je retirer mon nom du mur ?",
                a: "Oui, vous pouvez demander le retrait de votre nom à tout moment en contactant l'ONG concernée."
              },
              {
                q: "Mon don est-il déductible des impôts ?",
                a: "La déductibilité dépend de l'ONG et de son statut fiscal. L'ONG vous fournira un reçu fiscal si elle y est éligible."
              }
            ].map((item, index) => (
              <div key={index} className="content-card">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="page-section bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Vos données sont protégées
            </h2>
            <p className="text-muted-foreground mb-6">
              Nous ne stockons que votre nom (ou pseudonyme) pour l'affichage sur le mur. 
              Aucune donnée personnelle n'est partagée. Conforme RGPD. 
              Données hébergées en Union Européenne.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Hébergé en UE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}