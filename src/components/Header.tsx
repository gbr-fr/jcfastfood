import jcLogo from "@/assets/jc-logo.svg";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={jcLogo} alt="JC Fast Food" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#cardapio" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">
            Cardápio
          </a>
          <a href="#categorias" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">
            Categorias
          </a>
          <a href="#contato" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">
            Contato
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Carrinho</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
