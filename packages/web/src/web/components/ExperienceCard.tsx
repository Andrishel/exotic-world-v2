import { Users, Clock } from "lucide-react";

export interface Experiencia {
  id: number;
  titulo: string;
  publico: string;
  descripcion: string;
  duracion: string;
}

export function ExperienceCard({ experiencia }: { experiencia: Experiencia }) {
  return (
    <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
      <h3 className="font-bold text-xl text-[#1e3f20] mb-2">{experiencia.titulo}</h3>
      <p className="text-stone-600 text-sm leading-relaxed mb-4">{experiencia.descripcion}</p>
      <div className="flex flex-wrap gap-4 text-xs font-medium text-stone-500">
        <span className="inline-flex items-center gap-1.5 bg-[#15803d]/10 text-[#15803d] px-3 py-1.5 rounded-full">
          <Users size={14} /> {experiencia.publico}
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#eab308]/15 text-[#a16207] px-3 py-1.5 rounded-full">
          <Clock size={14} /> {experiencia.duracion}
        </span>
      </div>
    </div>
  );
}
