import { Instagram, Clock, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              <span className="text-primary">JC</span> Fast Food
            </h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Tem de tudo pra matar sua fome. Lanches, macarrão, açaí, cremes, bebidas e muito mais!
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                <span>Seg - Sex: 18h às 23h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                <span>Sáb - Dom: 17h às 00h</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <a
                href="https://instagram.com/jc.fastfood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram size={14} className="text-primary" />
                @jc.fastfood
              </a>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>(00) 00000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Sua cidade, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/50 text-xs">
            © {new Date().getFullYear()} JC Fast Food. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
