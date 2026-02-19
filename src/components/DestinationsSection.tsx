"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Panamá",
    image: "/cities/dest-panama.jpg",
    price: 225,
    routes: "Quito · Loja · Coca · Machala",
    tag: "Internacional",
  },
  {
    name: "Quito",
    image: "/cities/dest-quito.jpg",
    price: 110,
    routes: "Machala · Loja · Coca · Panamá",
    tag: "Nacional",
  },
  {
    name: "Loja",
    image: "/cities/dest-loja.jpg",
    price: 110,
    routes: "Quito · Coca · Machala · Panamá",
    tag: "Nacional",
  },
  {
    name: "Coca",
    image: "/cities/dest-coca.jpeg",
    price: 110,
    routes: "Quito · Loja · Machala · Panamá",
    tag: "Amazonía",
  },
  {
    name: "Machala",
    image: "/cities/dest-machala.jpg",
    price: 110,
    routes: "Quito · Loja · Coca · Panamá",
    tag: "Nacional",
  },
  {
    name: "Punta Cana",
    image: "/cities/dest-puntacana.jpg",
    price: 340,
    routes: "Quito · Loja · Coca · Machala",
    tag: "Caribe",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sky font-semibold text-sm tracking-widest uppercase mb-3">
            Explora Ecuador y el mundo
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Nuestros destinos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />

              {/* Tag */}
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-sky text-primary-foreground">
                {dest.tag}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sky" />
                      {dest.name}
                    </h3>
                    <p className="text-xs text-primary-foreground/60">{dest.routes}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-primary-foreground/60">Desde</p>
                    <p className="text-2xl font-extrabold text-gold">${dest.price}</p>
                    <p className="text-xs text-primary-foreground/60">USD</p>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="mt-3 overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-500">
                  <button className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold py-2.5 rounded-xl text-sm hover:brightness-110 transition-all">
                    Reserva ahora
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
