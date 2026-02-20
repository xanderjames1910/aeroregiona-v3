"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plane, ArrowRight, Luggage, Briefcase } from "lucide-react";
import { sileo } from "sileo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cities = ["Quito", "Loja", "Coca", "Machala", "Panamá", "Punta Cana", "Maracaibo"];

const tabs = [
  { id: "vuelo", label: "Busca tu vuelo" },
  { id: "reserva", label: "Busca tu reserva" },
  { id: "ticket", label: "Busca tu ticket" },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("vuelo");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [reservaCode, setReservaCode] = useState("");
  const [ticketCode, setTicketCode] = useState("");

  const handleVueloSearch = () => {
    if (!origin || !destination) {
      sileo.error({ title: "Campos requeridos", description: "Selecciona origen y destino para buscar vuelos." });
      return;
    }
    sileo.success({ title: "Buscando vuelos", description: `${origin} → ${destination}` });
  };

  const handleReservaSearch = () => {
    if (!reservaCode.trim()) {
      sileo.error({ title: "Código requerido", description: "Ingresa tu código de reserva." });
      return;
    }
    sileo.success({ title: "Buscando reserva", description: `Código: ${reservaCode}` });
  };

  const handleTicketSearch = () => {
    if (!ticketCode.trim()) {
      sileo.error({ title: "Número requerido", description: "Ingresa tu número de ticket." });
      return;
    }
    sileo.success({ title: "Buscando ticket", description: `Ticket: ${ticketCode}` });
  };

  return (
    <section id="vuelos" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-bg.webp"
          alt="Vista aérea de Ecuador"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-dark/75 via-navy/50 to-sky/10" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-dark/30 via-transparent to-navy/20" />
      </div>

      <div className="container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sky font-semibold text-sm tracking-widest uppercase mb-4">
              Aerolínea regional del Ecuador
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Vuela a tus{" "}
              <span className="text-gradient-gold">destinos</span>{" "}
              favoritos
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-lg mb-8">
              Conectamos Ecuador con el mundo. Encuentra los mejores precios en vuelos nacionales e internacionales.
            </p>

            {/* Baggage Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 glass rounded-lg px-4 py-3">
                <Luggage className="w-5 h-5 text-sky" />
                <div>
                  <p className="text-xs text-primary-foreground/60">Sin costo adicional</p>
                  <p className="text-sm font-semibold text-primary-foreground">1 Maleta bodega 23Kg</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass rounded-lg px-4 py-3">
                <Briefcase className="w-5 h-5 text-sky" />
                <div>
                  <p className="text-xs text-primary-foreground/60">Sin costo adicional</p>
                  <p className="text-sm font-semibold text-primary-foreground">1 Maleta mano 10Kg</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Flight Search */}
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl p-6 md:p-8 bg-navy-dark/70 backdrop-blur-2xl border border-white/20 shadow-2xl">
              {/* Tabs */}
              <div className="flex gap-1 mb-6 bg-primary-foreground/5 rounded-xl p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2.5 px-3 text-sm font-medium rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-accent text-accent-foreground"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === "vuelo" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-primary-foreground/60 mb-1.5">
                      Ciudad de origen
                    </label>
                    <Select value={origin} onValueChange={setOrigin}>
                      <SelectTrigger className="w-full h-12 rounded-xl bg-white/10 border border-white/25 text-white hover:bg-white/15 focus:ring-2 focus:ring-gold/50 [&>span]:text-white/70 data-placeholder:text-white/70">
                        <SelectValue placeholder="Selecciona origen" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-primary-foreground/60 mb-1.5">
                      Ciudad de destino
                    </label>
                    <Select value={destination} onValueChange={setDestination}>
                      <SelectTrigger className="w-full h-12 rounded-xl bg-white/10 border border-white/25 text-white hover:bg-white/15 focus:ring-2 focus:ring-gold/50 [&>span]:text-white/70 data-placeholder:text-white/70">
                        <SelectValue placeholder="Selecciona destino" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleVueloSearch} className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-2.5 rounded-xl hover:brightness-110 transition-all text-sm h-auto">
                    <Plane className="w-4 h-4" />
                    Buscar vuelos
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {activeTab === "reserva" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-primary-foreground/60 mb-1.5">
                      Código de reserva
                    </label>
                    <Input
                      type="text"
                      placeholder="Ingresa tu código"
                      value={reservaCode}
                      onChange={(e) => setReservaCode(e.target.value)}
                      className="h-12 rounded-xl bg-white/10 border border-white/25 text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-gold/50"
                    />
                  </div>
                  <Button onClick={handleReservaSearch} className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-2.5 rounded-xl hover:brightness-110 transition-all text-sm h-auto">
                    Buscar reserva
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {activeTab === "ticket" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-primary-foreground/60 mb-1.5">
                      Número de ticket
                    </label>
                    <Input
                      type="text"
                      placeholder="Ingresa tu número de ticket"
                      value={ticketCode}
                      onChange={(e) => setTicketCode(e.target.value)}
                      className="h-12 rounded-xl bg-white/10 border border-white/25 text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-gold/50"
                    />
                  </div>
                  <Button onClick={handleTicketSearch} className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-2.5 rounded-xl hover:brightness-110 transition-all text-sm h-auto">
                    Buscar ticket
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              <p className="text-xs text-primary-foreground/50 mt-4 text-center">
                Boletos para 3ra edad y personas con capacidades especiales disponibles en puntos de venta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
