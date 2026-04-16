import heroFood from "@/assets/hero-food.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <img
        src={heroFood}
        alt="Variedade de comidas do JC Fast Food"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="font-heading font-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-4">
            Tem de tudo pra{" "}
            <span className="text-primary">matar sua fome</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-body max-w-lg">
            Lanches, macarrão, açaí, cremes, bebidas e muito mais. Peça agora e receba no conforto da sua casa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cardapio"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/30"
            >
              Ver Cardápio
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-heading font-semibold text-lg rounded-xl hover:bg-primary-foreground/20 transition-all border border-primary-foreground/20 backdrop-blur-sm"
            >
              Categorias
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
