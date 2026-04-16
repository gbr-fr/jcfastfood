import { useCart } from "@/contexts/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Checkout from "./Checkout";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setIsOpen(false); setShowCheckout(false); }}
            className="fixed inset-0 bg-secondary/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
                <ShoppingBag size={20} className="text-primary" />
                {showCheckout ? "Finalizar Pedido" : "Seu Carrinho"}
              </h2>
              <button onClick={() => { setIsOpen(false); setShowCheckout(false); }} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={24} />
              </button>
            </div>

            {showCheckout ? (
              <Checkout onBack={() => setShowCheckout(false)} />
            ) : items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <ShoppingBag size={48} className="text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground font-heading font-semibold">Seu carrinho está vazio</p>
                <p className="text-muted-foreground text-sm mt-1">Adicione itens do cardápio!</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 bg-muted rounded-xl p-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-semibold text-foreground text-sm truncate">{item.name}</h4>
                        <p className="text-primary font-bold text-sm">
                          R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-heading font-bold text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-medium">Total</span>
                    <span className="font-heading font-bold text-xl text-primary">
                      R$ {totalPrice.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-heading font-bold text-base hover:opacity-90 transition-opacity"
                  >
                    Finalizar Pedido
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-muted-foreground text-sm hover:text-destructive transition-colors font-medium"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
