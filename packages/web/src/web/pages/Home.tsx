import { Link } from "wouter";
import { Clock, PawPrint, ArrowRight, Sparkles } from "lucide-react";
import { experiencias } from "../data/mockDatabase";
import { ExperienceCard } from "../components/ExperienceCard";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?auto=format&fit=crop&w=1600&q=80"
          alt="Animales exóticos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3f20]/90 via-[#1e3f20]/75 to-[#1e3f20]/95" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-24 md:py-32 flex flex-col items-start">
          <span className="inline-flex items-center gap-2 bg-[#eab308] text-[#1e3f20] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Clock size={16} /> Abierto hoy de 10 a.m. a 2 p.m. | 4 p.m. a 8 p.m.
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
            Aprende, Conecta e Interactúa <span className="text-[#eab308]">con la Naturaleza</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl mb-8">
            Exotic World es un centro educativo y ecológico en Piura donde niños,
            familias y colegios descubren de cerca a los animales exóticos más
            fascinantes, en un ambiente seguro, guiado y responsable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-[#eab308] text-[#1e3f20] font-semibold px-6 py-3.5 rounded-full hover:brightness-95 transition"
            >
              Planear Visita <ArrowRight size={18} />
            </Link>
            <Link
              to="/especies"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/20 transition"
            >
              Conocer Especies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / trust */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Especies", value: "20+" },
          { label: "Familias felices", value: "5,000+" },
          { label: "Talleres educativos", value: "10+" },
          { label: "Años de experiencia", value: "5" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-bold text-[#15803d]">{s.value}</p>
            <p className="text-sm text-stone-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Experiences summary */}
      <section className="bg-[#f5f5f4] py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 justify-center mb-3 text-[#15803d]">
            <Sparkles size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Experiencias</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3f20] mb-4">
            Vive momentos inolvidables
          </h2>
          <p className="text-center text-stone-600 max-w-2xl mx-auto mb-12">
            Diseñamos actividades para todas las edades, enfocadas en el
            aprendizaje, la conservación y el respeto por la vida silvestre.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {experiencias.slice(0, 2).map((exp) => (
              <ExperienceCard key={exp.id} experiencia={exp} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/experiencias"
              className="inline-flex items-center gap-2 text-[#15803d] font-semibold hover:gap-3 transition-all"
            >
              Ver todas las experiencias <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">
        <div className="rounded-3xl bg-[#15803d] px-8 py-14 text-center relative overflow-hidden">
          <PawPrint className="absolute -top-6 -left-6 text-white/10 w-40 h-40" />
          <PawPrint className="absolute -bottom-8 -right-8 text-white/10 w-48 h-48" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="relative text-white/85 max-w-xl mx-auto mb-8">
            Reserva tu visita, trae a tu colegio o familia y descubre un mundo
            de biodiversidad al alcance de tu mano.
          </p>
          <Link
            to="/contacto"
            className="relative inline-flex items-center gap-2 bg-[#eab308] text-[#1e3f20] font-semibold px-7 py-3.5 rounded-full hover:brightness-95 transition"
          >
            Planear Visita <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
