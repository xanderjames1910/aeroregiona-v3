"use client";

import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Headphones, Plane, Star } from "lucide-react";

const benefits = [
  {
    icon: Plane,
    title: "Flota moderna",
    description: "Aeronaves de última generación para tu seguridad y confort en cada vuelo.",
  },
  {
    icon: Shield,
    title: "Equipaje incluido",
    description: "1 maleta en bodega (23kg) y 1 de mano (10kg) sin costo adicional.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Comprometidos con tu tiempo. Vuelos puntuales a todos nuestros destinos.",
  },
  {
    icon: CreditCard,
    title: "Precios accesibles",
    description: "Las mejores tarifas en vuelos nacionales e internacionales desde Ecuador.",
  },
  {
    icon: Headphones,
    title: "Atención 24/7",
    description: "Equipo de soporte disponible por teléfono, WhatsApp y correo electrónico.",
  },
  {
    icon: Star,
    title: "Regional Plus",
    description: "Acumula millas en cada vuelo y canjea pasajes y beneficios exclusivos.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sky font-semibold text-sm tracking-widest uppercase mb-3">
            Tu mejor opción para volar
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
            ¿Por qué volar con Aeroregional?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-primary-foreground/8 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center mb-4 group-hover:bg-sky/30 transition-colors">
                <b.icon className="w-6 h-6 text-sky" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
