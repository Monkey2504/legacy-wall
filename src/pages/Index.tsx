import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FoundersWall } from "@/components/FoundersWall";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
              Le Mur des fondateurs
            </h1>
            <div className="section-divider"></div>
            <p className="text-lg md:text-xl text-muted-foreground prose-institutional mx-auto animate-fade-in-delayed">
              Un registre public et permanent qui honore les cent premiers donateurs
              d'une organisation à but non lucratif. Sans hiérarchie de montant.
              Sans avantage matériel. Seule compte l'antériorité du geste.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-center text-foreground mb-8">
              Le principe
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="prose-institutional">
                Chaque organisation commence par un premier don. Puis un deuxième.
                Les cent premiers donateurs d'une ASBL accomplissent un acte fondateur :
                ils permettent à un projet de naître et de se développer.
              </p>
              <p className="prose-institutional">
                Le Mur des fondateurs leur offre une place permanente et visible.
                Leur nom — ou le pseudonyme qu'ils choisissent — reste inscrit
                à vie sur la page de l'organisation qu'ils ont contribué à fonder.
              </p>
              <p className="prose-institutional">
                Il n'y a pas de classement par montant. Pas de distinction entre
                les donateurs. Seul l'ordre d'arrivée détermine la position sur le mur.
                Le premier don compte autant que le centième.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Wall Section */}
      <section id="exemple" className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl text-center text-foreground mb-4">
            Exemple de Mur
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Voici à quoi ressemble un Mur des fondateurs. Chaque emplacement numéroté
            accueille le nom d'un donateur, dans l'ordre chronologique des dons reçus.
          </p>
          <FoundersWall />
        </div>
      </section>

      {/* For ASBLs Section */}
      <section id="asbl" className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-center text-foreground mb-8">
              Pourquoi intégrer ce mur à votre organisation
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-accent/40 pl-6">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Encourager les premiers dons
                </h3>
                <p className="text-muted-foreground prose-institutional">
                  Les débuts sont les plus difficiles. Le Mur des fondateurs transforme
                  chaque premier donateur en acteur de l'histoire de votre organisation.
                  Cette reconnaissance symbolique encourage le passage à l'acte.
                </p>
              </div>

              <div className="border-l-2 border-accent/40 pl-6">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Créer un sentiment d'appartenance
                </h3>
                <p className="text-muted-foreground prose-institutional">
                  Les fondateurs forment un groupe à part. Leur inscription permanente
                  les lie durablement à votre projet. Ce lien va au-delà de la transaction :
                  il participe à la construction d'une communauté.
                </p>
              </div>

              <div className="border-l-2 border-accent/40 pl-6">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Affirmer vos valeurs
                </h3>
                <p className="text-muted-foreground prose-institutional">
                  L'absence de hiérarchie par montant dit quelque chose de votre organisation :
                  vous valorisez l'engagement plutôt que la capacité financière.
                  Le geste compte plus que la somme.
                </p>
              </div>

              <div className="border-l-2 border-accent/40 pl-6">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Aucune dépendance technique
                </h3>
                <p className="text-muted-foreground prose-institutional">
                  Le Mur des fondateurs est une page que vous hébergez vous-même.
                  Vous gardez le contrôle total de vos données et de la relation
                  avec vos donateurs. Aucun intermédiaire, aucun abonnement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Donors Section */}
      <section id="donateurs" className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-center text-foreground mb-8">
              Ce que signifie y figurer
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="prose-institutional">
                Apparaître sur le Mur des fondateurs n'est pas une récompense.
                C'est une trace. Votre nom — ou le pseudonyme que vous choisissez —
                reste inscrit de façon permanente sur la page de l'organisation
                que vous avez soutenue à ses débuts.
              </p>

              <p className="prose-institutional">
                Cette inscription témoigne que vous avez fait partie des premiers.
                Que vous avez cru en un projet avant qu'il ne fasse ses preuves.
                Que vous avez contribué à le rendre possible.
              </p>

              <div className="bg-card/50 commemorative-border p-6 my-8">
                <h3 className="font-serif text-lg text-foreground mb-4">
                  Vos choix sont respectés
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">◆</span>
                    <span>
                      Vous pouvez apparaître sous votre nom complet, vos initiales,
                      un pseudonyme ou une mention de votre choix.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">◆</span>
                    <span>
                      Vous pouvez demander l'anonymat : seul le numéro d'ordre
                      et la mention « Donateur anonyme » apparaîtront.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">◆</span>
                    <span>
                      Votre inscription est permanente, sauf si vous demandez
                      expressément son retrait.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">◆</span>
                    <span>
                      Le montant de votre don n'est jamais affiché ni communiqué.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-center text-foreground mb-8">
              Intégrer le Mur à votre site
            </h2>

            <p className="text-muted-foreground prose-institutional mb-8">
              Le Mur des fondateurs peut être intégré à n'importe quel site web
              existant. Trois méthodes sont possibles selon vos besoins techniques.
            </p>

            <div className="space-y-8">
              {/* Method 1 */}
              <div className="bg-card commemorative-border p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  1. Intégration par iframe
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  La méthode la plus simple. Ajoutez ce code à n'importe quelle page
                  de votre site pour afficher le Mur des fondateurs.
                </p>
                <div className="bg-primary/5 border border-border rounded p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-foreground">
                    {`<iframe
  src="https://votre-domaine.org/mur-fondateurs"
  width="100%"
  height="600"
  frameborder="0"
  title="Mur des fondateurs">
</iframe>`}
                  </code>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-card commemorative-border p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  2. Page autonome avec lien
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Créez une page dédiée sur votre site et ajoutez un lien depuis
                  votre navigation principale ou votre page de don.
                </p>
                <div className="bg-primary/5 border border-border rounded p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-foreground">
                    {`<a href="/mur-des-fondateurs">
  Voir notre Mur des fondateurs
</a>`}
                  </code>
                </div>
              </div>

              {/* Method 3 */}
              <div className="bg-card commemorative-border p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  3. Composant intégré
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Pour les sites utilisant des frameworks modernes (React, Vue, etc.),
                  le composant peut être directement importé et personnalisé.
                </p>
                <div className="bg-primary/5 border border-border rounded p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-foreground">
                    {`import { FoundersWall } from '@mur-fondateurs/react';

function DonationPage() {
  return <FoundersWall organizationId="votre-id" />;
}`}
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card/50 border border-accent/20 rounded">
              <h4 className="font-serif text-lg text-foreground mb-3">
                Données et responsabilité
              </h4>
              <p className="text-muted-foreground text-sm prose-institutional">
                Chaque ASBL reste responsable de la gestion de son propre Mur.
                Les données des donateurs (nom affiché, date du don) sont stockées
                sur vos propres serveurs. Aucune donnée n'est transmise à des tiers.
                Vous êtes seul responsable du respect du RGPD et des obligations
                légales applicables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="section-divider mb-8"></div>
            <p className="font-serif text-2xl text-foreground mb-6 text-balance">
              Chaque organisation a besoin de ses premiers soutiens.
              Le Mur des fondateurs leur donne une place.
            </p>
            <p className="text-muted-foreground text-sm">
              Concept libre d'utilisation pour toute organisation à but non lucratif.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
