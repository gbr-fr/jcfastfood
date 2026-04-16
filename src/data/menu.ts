import catLanches from "@/assets/cat-lanches.jpg";
import catMacarrao from "@/assets/cat-macarrao.jpg";
import catAcai from "@/assets/cat-acai.jpg";
import catCremes from "@/assets/cat-cremes.jpg";
import catBebidas from "@/assets/cat-bebidas.jpg";
import catCombos from "@/assets/cat-combos.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  isAcai?: boolean;
}

export const categories: Category[] = [
  { id: "lanches", name: "Lanches", image: catLanches },
  { id: "macarrao", name: "Macarrão", image: catMacarrao },
  { id: "acai", name: "Açaí", image: catAcai, isAcai: true },
  { id: "cremes", name: "Cremes", image: catCremes },
  { id: "bebidas", name: "Bebidas", image: catBebidas },
  { id: "combos", name: "Combos", image: catCombos },
];

export const products: Product[] = [
  // Lanches
  { id: "l1", name: "X-Burger", description: "Pão, hambúrguer, queijo, alface e tomate", price: 18.90, image: catLanches, category: "lanches" },
  { id: "l2", name: "X-Bacon", description: "Pão, hambúrguer, queijo, bacon crocante e molho especial", price: 22.90, image: catLanches, category: "lanches" },
  { id: "l3", name: "X-Tudo", description: "Pão, 2 hambúrgueres, queijo, bacon, ovo, presunto e salada", price: 28.90, image: catLanches, category: "lanches" },
  { id: "l4", name: "X-Frango", description: "Pão, filé de frango empanado, queijo e salada", price: 20.90, image: catLanches, category: "lanches" },
  // Macarrão
  { id: "m1", name: "Macarrão Bolonhesa", description: "Espaguete com molho bolonhesa caseiro", price: 24.90, image: catMacarrao, category: "macarrao" },
  { id: "m2", name: "Macarrão Alho e Óleo", description: "Espaguete com alho dourado e azeite", price: 19.90, image: catMacarrao, category: "macarrao" },
  { id: "m3", name: "Macarrão 4 Queijos", description: "Penne ao molho cremoso de 4 queijos", price: 27.90, image: catMacarrao, category: "macarrao" },
  // Açaí
  { id: "a1", name: "Açaí 300ml", description: "Açaí puro com granola e banana", price: 14.90, image: catAcai, category: "acai" },
  { id: "a2", name: "Açaí 500ml", description: "Açaí com morango, granola, leite ninho e mel", price: 19.90, image: catAcai, category: "acai" },
  { id: "a3", name: "Açaí 700ml", description: "Açaí completo com todas as coberturas", price: 25.90, image: catAcai, category: "acai" },
  // Cremes
  { id: "c1", name: "Pudim", description: "Pudim de leite condensado caseiro", price: 8.90, image: catCremes, category: "cremes" },
  { id: "c2", name: "Mousse de Maracujá", description: "Mousse cremoso de maracujá", price: 9.90, image: catCremes, category: "cremes" },
  { id: "c3", name: "Petit Gateau", description: "Bolo quente com sorvete de creme", price: 16.90, image: catCremes, category: "cremes" },
  // Bebidas
  { id: "b1", name: "Coca-Cola 350ml", description: "Coca-Cola lata gelada", price: 5.90, image: catBebidas, category: "bebidas" },
  { id: "b2", name: "Suco Natural", description: "Suco natural da fruta (laranja, limão ou maracujá)", price: 8.90, image: catBebidas, category: "bebidas" },
  { id: "b3", name: "Milkshake", description: "Milkshake cremoso (chocolate, morango ou baunilha)", price: 14.90, image: catBebidas, category: "bebidas" },
  // Combos
  { id: "cb1", name: "Combo JC", description: "X-Burger + Batata frita + Coca-Cola", price: 32.90, image: catCombos, category: "combos" },
  { id: "cb2", name: "Combo Família", description: "2 X-Bacon + Batata grande + 2 Coca-Cola", price: 59.90, image: catCombos, category: "combos" },
  { id: "cb3", name: "Combo Kids", description: "Mini burger + Batata + Suco + Brinquedo", price: 24.90, image: catCombos, category: "combos" },
];
