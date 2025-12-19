import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FoundersWall } from "@/components/FoundersWall";
import { Heart, Users, Globe, Shield, Sparkles, ArrowRight, CheckCircle2, HandHeart, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern" />
        
        {/* Hero Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80')"
          }}
        />
        
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Nouveau concept pour les ONG</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-balance leading-tight">
                Honorez vos premiers donateurs
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-10 max-w-2xl mx-auto text-balance">
                Le Mur des Fondateurs célèbre les 100 premiers soutiens de votre organisation. 
                Sans hiérarchie de montant. Seul compte l'élan du cœur.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-button bg-background text-foreground hover:bg-background/90">
                  <Heart className="w-5 h-5 mr-2" />
                  Créer mon mur gratuitement
                </Button>
                <Button size="lg" variant="outline" className="cta-button-secondary border-background/50 text-background hover:bg-background hover:text-foreground">
                  Découvrir le concept
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section id="impact" className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "150+", label: "ONG partenaires", icon: Globe },
              { number: "12K+", label: "Fondateurs inscrits", icon: Users },
              { number: "€2.5M", label: "Collectés", icon: TrendingUp },
              { number: "98%", label: "Satisfaction", icon: Award },
            ].map((stat, index) => (
              <div key={index} className="stat-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="impact-number">{stat.number}</div>
                <div className="text-muted-foreground font-medium mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="concept" className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Comment ça marche</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Simple, transparent, <span className="humanitarian-gradient-text">impactant</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trois étapes pour transformer vos premiers donateurs en ambassadeurs de votre cause
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Créez votre mur",
                description: "Inscrivez votre organisation en quelques clics. Personnalisez l'apparence pour refléter votre identité.",
                icon: Sparkles,
              },
              {
                step: "02",
                title: "Partagez",
                description: "Intégrez le mur à votre site. Chaque nouveau don inscrit automatiquement le donateur.",
                icon: Globe,
              },
              {
                step: "03",
                title: "Célébrez",
                description: "Vos 100 premiers fondateurs restent gravés pour toujours. Une reconnaissance éternelle.",
                icon: Heart,
              },
            ].map((item, index) => (
              <div key={index} className="feature-card relative overflow-hidden group">
                <div className="absolute top-4 right-4 text-6xl font-heading font-bold text-primary/10">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Wall Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge mb-4">Exemple en direct</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Voyez le mur en action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Chaque case représente un fondateur. Les premiers arrivés occupent les premières places, pour toujours.
            </p>
          </div>
          <FoundersWall />
        </div>
      </section>

      {/* Benefits for NGOs */}
      <section id="organisations" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-4">Pour les ONG</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Boostez vos premières collectes
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Le Mur des Fondateurs transforme l'acte de donner en un geste fondateur. 
                Vos premiers soutiens deviennent les piliers de votre histoire.
              </p>

              <div className="space-y-4">
                {[
                  "Motivez les premiers dons avec une reconnaissance unique",
                  "Créez un sentiment d'urgence (places limitées)",
                  "Transformez vos donateurs en ambassadeurs",
                  "100% gratuit, sans commission, sans engagement",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 cta-button">
                Créer mon mur maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" 
                  alt="Équipe humanitaire en action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <HandHeart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-primary">+340%</div>
                    <div className="text-sm text-muted-foreground">de premiers dons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Donors */}
      <section id="donateurs" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80" 
                  alt="Communauté solidaire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground">Inscription à vie</div>
                    <div className="text-sm text-muted-foreground">Votre nom reste gravé</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="badge mb-4">Pour les Donateurs</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Laissez votre empreinte
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Être fondateur, c'est plus qu'un don. C'est croire en un projet avant qu'il ne grandisse. 
                C'est faire partie de l'histoire dès le premier chapitre.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Vous choisissez comment apparaître",
                    description: "Nom complet, initiales, pseudonyme ou anonyme — c'est votre choix"
                  },
                  {
                    title: "Pas de hiérarchie par montant",
                    description: "Seul compte l'ordre d'arrivée. Le premier don vaut le centième."
                  },
                  {
                    title: "Une trace permanente",
                    description: "Votre inscription reste visible aussi longtemps que l'organisation existe"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary hero-pattern relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Prêt à célébrer vos fondateurs ?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Rejoignez les centaines d'ONG qui utilisent déjà le Mur des Fondateurs pour engager leur communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="cta-button bg-background text-foreground hover:bg-background/90">
                Créer mon mur gratuitement
              </Button>
              <Button size="lg" variant="outline" className="cta-button-secondary border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Voir une démo
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-70">
              Aucune carte de crédit requise • Mise en place en 5 minutes
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;