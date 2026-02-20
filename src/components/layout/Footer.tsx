import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-navy-dark text-primary-foreground">
      {/* Ecuador flag stripe — subtle top border */}
      <div className="flex h-1">
        <div className="flex-1 bg-[hsl(var(--ec-yellow))]" />
        <div className="flex-1 bg-[hsl(var(--ec-blue))]" />
        <div className="flex-1 bg-[hsl(var(--ec-red))]" />
      </div>

      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="inline-flex bg-white rounded-xl p-3 mb-6">
              <Image src="/images/aeroregional-logo.png" alt="Aeroregional" width={300} height={60} className="h-8 md:h-10 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Aerolínea regional del Ecuador. Conectamos los destinos más importantes del país y la región.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-sky/20 transition-colors text-primary-foreground/70 hover:text-sky"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-sky/20 transition-colors text-primary-foreground/70 hover:text-sky"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-sky">Vuelos</h4>
            <ul className="space-y-2.5">
              {["Buscar vuelos", "Itinerarios", "Reservas", "Check-in", "Estado de vuelo"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-sky">Información</h4>
            <ul className="space-y-2.5">
              {["Equipaje", "Mascotas a bordo", "Documentación", "Servicios especiales", "Formas de pago"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-sky">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground">02 393 0360</p>
                  <p className="text-xs text-primary-foreground/50">Call Center</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky mt-0.5 shrink-0" />
                <a href="mailto:info@aeroregional.net" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  info@aeroregional.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky mt-0.5 shrink-0" />
                <p className="text-sm text-primary-foreground/60">Ecuador</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with Ecuador flag accent */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Mini flag */}
            <div className="flex h-4 w-6 overflow-hidden shrink-0">
              <div className="flex-2 bg-[hsl(var(--ec-yellow))]" />
              <div className="flex-1 bg-[hsl(var(--ec-blue))]" />
              <div className="flex-1 bg-[hsl(var(--ec-red))]" />
            </div>
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Aeroregional. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Términos y condiciones
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Derechos del pasajero
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
