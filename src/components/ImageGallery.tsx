import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80",
    alt: "Bénévoles en action"
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    alt: "Aide humanitaire"
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80",
    alt: "Communauté solidaire"
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
    alt: "Distribution alimentaire"
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
    alt: "Générosité"
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80",
    alt: "Entraide"
  },
];

export function ImageGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-background text-sm font-medium">{image.alt}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}