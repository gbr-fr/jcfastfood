import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import MenuSection from "@/components/MenuSection";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSelectCategory = (id: string) => {
    setActiveCategory((prev) => (prev === id ? null : id));
    const el = document.getElementById("cardapio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories onSelectCategory={handleSelectCategory} activeCategory={activeCategory} />
      <MenuSection activeCategory={activeCategory} />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
