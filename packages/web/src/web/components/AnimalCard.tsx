import { useState } from "react";
import { ArrowRight, X, MapPin } from "lucide-react";

const badgeColors: Record<string, string> = {
  "Mamíferos Exóticos": "bg-[#15803d]/10 text-[#15803d]",
  Reptiles: "bg-amber-700/10 text-amber-700",
  Arácnidos: "bg-rose-900/10 text-rose-900",
};

export interface Animal {
  id: number;
  nombre: string;
  nombreCientifico: string;
  categoria: string;
  descripcion: string;
  cuidadosBasicos: string;
  origen: string;
  imagen: string;
}

export function AnimalCard({ animal }: { animal: Animal }) {
  const [open, setOpen] = useState(false);
  const badge = badgeColors[animal.categoria] ?? "bg-stone-200 text-stone-700";

  return (
    <>
      <div className="group rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={animal.imagen}
            alt={animal.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${badge}`}>
            {animal.categoria}
          </span>
          <h3 className="font-semibold text-lg text-[#1e3f20]">{animal.nombre}</h3>
          <p className="text-sm italic text-stone-500 mb-2">{animal.nombreCientifico}</p>
          <p className="text-sm text-stone-600 line-clamp-3 mb-4">{animal.descripcion}</p>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#15803d] hover:gap-2 transition-all"
          >
            Ver más <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={animal.imagen} alt={animal.nombre} className="w-full h-56 object-cover" />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${badge}`}>
                {animal.categoria}
              </span>
              <h3 className="font-bold text-2xl text-[#1e3f20]">{animal.nombre}</h3>
              <p className="text-sm italic text-stone-500 mb-4">{animal.nombreCientifico}</p>

              <p className="text-stone-700 mb-4">{animal.descripcion}</p>

              <div className="mb-3">
                <h4 className="font-semibold text-[#15803d] text-sm mb-1">Cuidados básicos</h4>
                <p className="text-sm text-stone-600">{animal.cuidadosBasicos}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-stone-600">
                <MapPin size={15} className="text-[#eab308]" />
                Origen: {animal.origen}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
