import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FoundersWall } from "@/components/FoundersWall";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - sobre et direct */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Immortalisez vos 100 premiers donateurs
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl">
              Le Mur des Fondateurs célèbre ceux qui croient en vous dès le début. 
              Gratuit pour toutes les ONG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                Créer mon mur gratuitement
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/comment-ca-marche">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                  Comment ça marche
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-value">150+</div>
              <div className="stat-label">ONG partenaires</div>
            </div>
            <div>
              <div className="stat-value">12K</div>
              <div className="stat-label">Fondateurs inscrits</div>
            </div>
            <div>
              <div className="stat-value">2.5M€</div>
              <div className="stat-label">Collectés</div>
            </div>
            <div>
              <div className="stat-value">100%</div>
              <div className="stat-label">Gratuit</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - summary */}
      <section className="page-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple et efficace
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trois étapes pour transformer vos premiers donateurs en ambassadeurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "Créez", desc: "Inscrivez votre ONG en 2 minutes" },
              { icon: Globe, title: "Intégrez", desc: "Une ligne de code sur votre site" },
              { icon: Users, title: "Célébrez", desc: "Les 100 premiers restent gravés" },
            ].map((item, i) => (
              <div key={i} className="content-card text-center">
                <div className="step-number mx-auto mb-4">{i + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/comment-ca-marche">
              <Button variant="outline">
                Voir la documentation technique
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo wall */}
      <section className="page-section bg-secondary">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Voyez le mur en action
            </h2>
            <p className="text-muted-foreground">
              Chaque case représente un fondateur. Les premiers arrivés occupent les premières places.
            </p>
          </div>
          <FoundersWall />
        </div>
      </section>

      {/* For who */}
      <section className="page-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="content-card">
              <h3 className="text-2xl font-bold mb-4">Pour les ONG</h3>
              <ul className="space-y-3 mb-6">
                {["Boostez vos premiers dons", "Créez un sentiment d'urgence", "100% gratuit, sans commission"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pour-les-ong">
                <Button>En savoir plus <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
            <div className="content-card">
              <h3 className="text-2xl font-bold mb-4">Pour les donateurs</h3>
              <ul className="space-y-3 mb-6">
                {["Statut exclusif de fondateur", "Reconnaissance publique", "Soutenez dès le début"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pour-les-donateurs">
                <Button variant="outline">En savoir plus <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à célébrer vos fondateurs ?</h2>
          <p className="text-lg opacity-90 mb-8">Créez votre mur en 2 minutes. Gratuit pour toujours.</p>
          <Button size="lg" variant="secondary">
            Créer mon mur gratuitement
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;