import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Users, TrendingUp, Heart, Shield, Clock, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForNGOs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transformez vos premiers donateurs en fondateurs
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Le Mur des Fondateurs crée un sentiment d'urgence et de reconnaissance 
              qui booste vos premières collectes. Gratuit, sans commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                Créer mon mur gratuitement
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Voir une démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-value">+340%</div>
              <div className="stat-label">de premiers dons</div>
            </div>
            <div>
              <div className="stat-value">150+</div>
              <div className="stat-label">ONG partenaires</div>
            </div>
            <div>
              <div className="stat-value">2.5M€</div>
              <div className="stat-label">collectés</div>
            </div>
            <div>
              <div className="stat-value">98%</div>
              <div className="stat-label">de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="page-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi ça fonctionne
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La psychologie du "premier donateur" au service de votre cause
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Urgence naturelle",
                description: "Seulement 100 places disponibles. Ceux qui hésitent agissent plus vite quand ils voient les places se remplir."
              },
              {
                icon: Heart,
                title: "Reconnaissance visible",
                description: "Les donateurs sont immortalisés publiquement. Une gratitude tangible qui renforce l'attachement à votre cause."
              },
              {
                icon: Users,
                title: "Effet de communauté",
                description: "Voir d'autres noms sur le mur rassure et encourage. Le don devient un acte collectif."
              },
              {
                icon: TrendingUp,
                title: "Boost du premier don",
                description: "Le passage à l'acte est le plus difficile. Le statut de 'fondateur' lève ce frein psychologique."
              },
              {
                icon: Shield,
                title: "Confiance renforcée",
                description: "Un mur public avec de vrais noms montre la transparence de votre organisation."
              },
              {
                icon: BarChart3,
                title: "Données exploitables",
                description: "Suivez en temps réel les inscriptions, identifiez vos ambassadeurs les plus engagés."
              }
            ].map((benefit, index) => (
              <div key={index} className="content-card">
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for NGOs */}
      <section className="page-section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comment l'utiliser
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Créez votre compte ONG",
                description: "Inscription en 2 minutes avec vérification automatique du statut associatif."
              },
              {
                step: "2",
                title: "Personnalisez votre mur",
                description: "Choisissez les couleurs, ajoutez votre logo, définissez le message d'accueil."
              },
              {
                step: "3",
                title: "Intégrez sur votre site",
                description: "Copiez une ligne de code ou utilisez notre plugin WordPress/Drupal."
              },
              {
                step: "4",
                title: "Connectez votre système de don",
                description: "Stripe, PayPal, HelloAsso... Les donateurs sont ajoutés automatiquement."
              },
              {
                step: "5",
                title: "Communiquez",
                description: "Partagez le lien du mur sur vos réseaux, newsletters, campagnes."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="step-number flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="page-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tarification transparente
            </h2>
            <p className="text-lg text-muted-foreground">
              100% gratuit. Pas de commission. Pas de frais cachés.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="content-card border-primary border-2">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary">0€</div>
                <div className="text-muted-foreground">pour toujours</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Mur des 100 fondateurs",
                  "Widget personnalisable",
                  "Intégrations (Stripe, PayPal, etc.)",
                  "Dashboard de suivi",
                  "Export des données",
                  "Support par email"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg">
                Créer mon mur gratuitement
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Aucune carte bancaire requise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à lancer votre collecte ?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Rejoignez les 150+ ONG qui utilisent le Mur des Fondateurs pour 
            booster leurs premières collectes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Créer mon mur
            </Button>
            <Link to="/comment-ca-marche">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Documentation technique
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}