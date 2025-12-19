import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FoundersWall } from "@/components/FoundersWall";
import { AnimatedSection, AnimatedCard, FloatingElement, PulseElement } from "@/components/AnimatedSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ImageGallery } from "@/components/ImageGallery";
import { CounterAnimation } from "@/components/CounterAnimation";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Shield, Sparkles, ArrowRight, CheckCircle2, HandHeart, Award, TrendingUp, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern" />
        
        {/* Floating circles */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-background/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Hero Images Grid */}
        <div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-20">
          {[
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=60",
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=60",
            "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=60",
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=60",
          ].map((src, i) => (
            <motion.div 
              key={i}
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
            />
          ))}
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-primary-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">+150 ONG nous font confiance</span>
              </motion.div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
                Célébrez ceux qui 
                <span className="block">
                  <motion.span
                    className="inline-block"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ❤️
                  </motion.span>
                  {" "}croient en vous
                </span>
              </h1>
              
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl leading-relaxed">
                Le Mur des Fondateurs immortalise vos 100 premiers donateurs. 
                Une reconnaissance éternelle pour ceux qui ont fait le premier pas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <PulseElement>
                  <Button size="lg" className="cta-button bg-background text-foreground hover:bg-background/90 group">
                    <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Créer mon mur gratuit
                  </Button>
                </PulseElement>
                <Button size="lg" variant="outline" className="cta-button-secondary border-background/50 text-background hover:bg-background hover:text-foreground group">
                  <Play className="w-5 h-5 mr-2" />
                  Voir la démo
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-background/20">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80",
                  ].map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-background object-cover"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="opacity-80">+12 000 fondateurs inscrits</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FloatingElement>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-background/20">
                    <img 
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80"
                      alt="Équipe humanitaire souriante"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating card */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-2xl text-primary">+340%</div>
                        <div className="text-xs text-muted-foreground">de premiers dons</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Another floating card */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-background rounded-2xl p-3 shadow-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary fill-primary" />
                      <span className="font-semibold text-foreground">100% gratuit</span>
                    </div>
                  </motion.div>
                </div>
              </FloatingElement>
            </motion.div>
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
      <section id="impact" className="py-20 md:py-28">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="badge mb-4">Notre impact</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Des chiffres qui <span className="humanitarian-gradient-text">inspirent</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 150, suffix: "+", label: "ONG partenaires", icon: Globe },
              { value: 12000, label: "Fondateurs inscrits", icon: Users },
              { value: 2.5, prefix: "€", suffix: "M", label: "Collectés", icon: TrendingUp },
              { value: 98, suffix: "%", label: "Satisfaction", icon: Award },
            ].map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="stat-card">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  </motion.div>
                  <div className="impact-number">
                    <CounterAnimation 
                      value={stat.value * (stat.value >= 1000 ? 1 : 1)} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-muted-foreground font-medium mt-2">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <span className="badge mb-4">La solidarité en images</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Ensemble, on va plus loin
            </h2>
          </AnimatedSection>
          <ImageGallery />
        </div>
      </section>

      {/* How it Works Section */}
      <section id="concept" className="py-20 md:py-28">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="badge mb-4">Comment ça marche</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Simple, transparent, <span className="humanitarian-gradient-text">impactant</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trois étapes pour transformer vos premiers donateurs en ambassadeurs de votre cause
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Créez votre mur",
                description: "Inscrivez votre organisation en quelques clics. Personnalisez l'apparence pour refléter votre identité.",
                icon: Sparkles,
                color: "primary",
              },
              {
                step: "02",
                title: "Partagez",
                description: "Intégrez le mur à votre site. Chaque nouveau don inscrit automatiquement le donateur.",
                icon: Globe,
                color: "accent",
              },
              {
                step: "03",
                title: "Célébrez",
                description: "Vos 100 premiers fondateurs restent gravés pour toujours. Une reconnaissance éternelle.",
                icon: Heart,
                color: "primary",
              },
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.15}>
                <div className="feature-card relative overflow-hidden group h-full">
                  <motion.div 
                    className="absolute top-4 right-4 text-7xl font-heading font-bold text-primary/5"
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.step}
                  </motion.div>
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Example Wall Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <span className="badge mb-4">Exemple en direct</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Voyez le mur en action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Chaque case représente un fondateur. Les premiers arrivés occupent les premières places, pour toujours.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <FoundersWall />
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="badge mb-4">Témoignages</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Ce qu'ils en disent
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits for NGOs */}
      <section id="organisations" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
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
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="mt-8 cta-button group">
                  Créer mon mur maintenant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="relative">
              <div className="relative">
                <motion.div 
                  className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" 
                    alt="Équipe humanitaire en action"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <HandHeart className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div>
                      <div className="font-heading font-bold text-3xl text-primary">+340%</div>
                      <div className="text-sm text-muted-foreground">de premiers dons</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits for Donors */}
      <section id="donateurs" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1 relative">
              <motion.div 
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80" 
                  alt="Communauté solidaire"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground">Inscription à vie</div>
                    <div className="text-sm text-muted-foreground">Votre nom reste gravé</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <span className="badge mb-4">Pour les Donateurs</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Laissez votre empreinte
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Être fondateur, c'est plus qu'un don. C'est croire en un projet avant qu'il ne grandisse. 
                C'est faire partie de l'histoire dès le premier chapitre.
              </p>

              <div className="space-y-4">
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
                  <motion.div 
                    key={index} 
                    className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary hero-pattern relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-background/10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-background/10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center text-primary-foreground">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-20 h-20 mx-auto mb-8 opacity-90" />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Prêt à célébrer vos fondateurs ?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Rejoignez les centaines d'ONG qui utilisent déjà le Mur des Fondateurs pour engager leur communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="cta-button bg-background text-foreground hover:bg-background/90">
                  Créer mon mur gratuitement
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="cta-button-secondary border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Voir une démo
                </Button>
              </motion.div>
            </div>
            <p className="mt-8 text-sm opacity-70 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Aucune carte de crédit requise • Mise en place en 5 minutes
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;