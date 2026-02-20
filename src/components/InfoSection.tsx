"use client";

import { motion } from "framer-motion";
import { Luggage, PawPrint, FileText, HeartHandshake } from "lucide-react";

const infoItems = [
  {
    icon: Luggage,
    title: "Equipaje",
    description: "Conoce las políticas de equipaje de mano y bodega para tu vuelo.",
  },
  {
    icon: PawPrint,
    title: "Mascotas a bordo",
    description: "Viaja con tu mascota. Consulta los requisitos y condiciones.",
  },
  {
    icon: FileText,
    title: "Documentación",
    description: "Documentos necesarios para vuelos nacionales e internacionales.",
  },
  {
    icon: HeartHandshake,
    title: "Servicios especiales",
    description: "Asistencia especial para pasajeros que lo necesiten.",
  },
];

const InfoSection = () => {
  return (
    <section id="info" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Todo lo que necesitas saber
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Información antes del vuelo
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-bold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
