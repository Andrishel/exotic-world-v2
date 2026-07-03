import { Link } from "wouter";
import { GraduationCap, ArrowRight } from "lucide-react";
import { experiencias } from "../data/mockDatabase";
import { ExperienceCard } from "../components/ExperienceCard";

export default function Experiencias() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e3f20] mb-3">
            Experiencias y Talleres
          </h1>
          <p className="text-stone-600">
            Programas pensados para escuelas, familias y grupos que quieren
            aprender jugando y conectar de forma responsable con la naturaleza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {experiencias.map((exp) => (
            <ExperienceCard key={exp.id} experiencia={exp} />
          ))}
        </div>

        <div className="rounded-3xl bg-[#f5f5f4] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-[#15803d] mb-3">
              <GraduationCap size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Visitas Escolares
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#1e3f20] mb-3">
              Lleva a tu colegio a vivir la naturaleza
            </h2>
            <p className="text-stone-600 mb-6">
              Diseñamos programas educativos alineados a ciencias naturales,
              con guías especializados, material de apoyo y actividades de
              contacto seguro con las especies del centro. Ideal para
              educación inicial, primaria y secundaria.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-[#15803d] text-white font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
            >
              Coordinar Visita Escolar <ArrowRight size={18} />
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
            alt="Visita escolar"
            className="rounded-2xl w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
