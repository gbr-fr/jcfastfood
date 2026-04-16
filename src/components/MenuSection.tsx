import { products, categories } from "@/data/menu";
import ProductCard from "./ProductCard";

interface MenuSectionProps {
  activeCategory: string | null;
}

const MenuSection = ({ activeCategory }: MenuSectionProps) => {
  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const grouped = activeCategory
    ? { [activeCategory]: filteredProducts }
    : categories.reduce((acc, cat) => {
        const catProducts = products.filter((p) => p.category === cat.id);
        if (catProducts.length) acc[cat.id] = catProducts;
        return acc;
      }, {} as Record<string, typeof products>);

  return (
    <section id="cardapio" className="py-16">
      <div className="container">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 text-center">
          Nosso Cardápio
        </h2>

        {Object.entries(grouped).map(([catId, catProducts]) => {
          const cat = categories.find((c) => c.id === catId);
          return (
            <div key={catId} className="mb-12 last:mb-0">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                {cat?.name || catId}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MenuSection;
