import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, Check } from "lucide-react";

interface CheckoutProps {
  onBack: () => void;
}

const Checkout = ({ onBack }: CheckoutProps) => {
  const { items, totalPrice, clearCart, setIsOpen } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    deliveryType: "delivery" as "delivery" | "pickup",
    address: "",
    payment: "pix" as "pix" | "cash" | "card",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const itemsList = items.map((i) => `${i.quantity}x ${i.name} - R$ ${(i.price * i.quantity).toFixed(2).replace(".", ",")}`).join("\n");
    const message = `🍔 *Novo Pedido - JC Fast Food*\n\n` +
      `👤 ${form.name}\n📱 ${form.phone}\n` +
      `📦 ${form.deliveryType === "delivery" ? "Entrega" : "Retirada"}\n` +
      `${form.deliveryType === "delivery" ? `📍 ${form.address}\n` : ""}` +
      `💳 ${form.payment === "pix" ? "PIX" : form.payment === "cash" ? "Dinheiro" : "Cartão"}\n\n` +
      `📝 *Itens:*\n${itemsList}\n\n` +
      `💰 *Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}*`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      setIsOpen(false);
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Check size={32} className="text-primary" />
        </div>
        <h3 className="font-heading font-bold text-lg text-foreground mb-2">Pedido Enviado!</h3>
        <p className="text-muted-foreground text-sm">Seu pedido foi encaminhado via WhatsApp.</p>
      </div>
    );
  }

  const inputClass = "w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

  return (
    <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 space-y-4">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors mb-2">
        <ArrowLeft size={16} /> Voltar
      </button>

      <div>
        <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Nome</label>
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Telefone</label>
        <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(00) 00000-0000" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Tipo de entrega</label>
        <div className="grid grid-cols-2 gap-3">
          {(["delivery", "pickup"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setForm({ ...form, deliveryType: type })}
              className={`py-3 rounded-xl font-heading font-semibold text-sm transition-all border ${
                form.deliveryType === type
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {type === "delivery" ? "🛵 Entrega" : "🏪 Retirada"}
            </button>
          ))}
        </div>
      </div>

      {form.deliveryType === "delivery" && (
        <div>
          <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Endereço</label>
          <textarea
            required
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Rua, número, bairro, complemento..."
            rows={3}
            className={inputClass + " resize-none"}
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Pagamento</label>
        <div className="grid grid-cols-3 gap-3">
          {([
            { id: "pix" as const, label: "💠 PIX" },
            { id: "cash" as const, label: "💵 Dinheiro" },
            { id: "card" as const, label: "💳 Cartão" },
          ]).map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setForm({ ...form, payment: p.id })}
              className={`py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all border ${
                form.payment === p.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-muted-foreground font-medium">Total</span>
          <span className="font-heading font-bold text-xl text-primary">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-heading font-bold text-base hover:opacity-90 transition-opacity"
        >
          Enviar Pedido via WhatsApp
        </button>
      </div>
    </form>
  );
};

export default Checkout;
