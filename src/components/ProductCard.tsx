import { Product } from "@/data/menu";
import { useCart } from "@/contexts/CartContext";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group"
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={512}
          height={512}
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-foreground text-base mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-heading font-bold text-primary text-lg">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
              })
            }
            className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Plus size={16} />
            Adicionar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
