import { Leaf, MapPin, Phone, Clock } from "lucide-react";
import { infoContacto } from "../data/mockDatabase";

export function Footer() {
  return (
    <footer className="bg-[#1e3f20] text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#eab308] text-[#1e3f20]">
              <Leaf size={18} />
            </span>
            <span className="font-semibold text-lg">Exotic World</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Centro de exhibición e interacción con animales exóticos. Aprende,
            conecta y vive la naturaleza de cerca en un espacio pensado para
            toda la familia.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#eab308]">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {infoContacto.direccion}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              {infoContacto.telefono}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#eab308]">Horarios</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {infoContacto.horarios.map((h, i) => (
              <li key={i} className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                {h.dias}: {h.horas}
              </li>
            ))}
            <li className="text-white/50">Cerrado los {infoContacto.cerrado}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Exotic World — Piura, Perú. Todos los derechos reservados.
      </div>
    </footer>
  );
}
