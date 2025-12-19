import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Le Mur des Fondateurs a transformé notre campagne de lancement. Nos premiers donateurs se sentent vraiment valorisés.",
    author: "Marie Lecomte",
    role: "Directrice, Association Espoir",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    quote: "Être le 7ème fondateur d'une ONG qui aide des milliers de personnes, c'est une fierté que je garde pour toujours.",
    author: "Jean-Pierre Dubois",
    role: "Fondateur #7, Médecins Solidaires",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    quote: "Simple à intégrer, gratuit, et nos donateurs adorent. Le concept est brillant dans sa simplicité.",
    author: "Sophie Martin",
    role: "Fundraiser, Action Climat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 border border-border overflow-hidden">
        <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
              "{testimonials[current].quote}"
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-left">
                <div className="font-heading font-semibold text-foreground">
                  {testimonials[current].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}