import { categories } from "@/data/menu";
import { motion } from "framer-motion";

interface CategoriesProps {
  onSelectCategory: (id: string) => void;
  activeCategory: string | null;
}

const Categories = ({ onSelectCategory, activeCategory }: CategoriesProps) => {
  return (
    <section id="categorias" className="py-16 bg-muted">
      <div className="container">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
          O que você está com vontade?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onSelectCategory(cat.id)}
              className={`group relative rounded-2xl overflow-hidden aspect-square cursor-pointer transition-all ${
                activeCategory === cat.id
                  ? "ring-4 ring-primary ring-offset-2 ring-offset-muted scale-[1.02]"
                  : "hover:scale-[1.03]"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={512}
                height={512}
              />
              <div className={`absolute inset-0 flex items-end p-3 transition-colors ${
                cat.isAcai
                  ? "bg-gradient-to-t from-accent/80 to-transparent"
                  : "bg-gradient-to-t from-secondary/80 to-transparent"
              }`}>
                <span className="font-heading font-bold text-primary-foreground text-sm md:text-base">
                  {cat.name}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
