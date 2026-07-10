import { useState, useMemo, useEffect } from "react";
import { Filter } from "lucide-react";
import { categorias } from "../data/mockDatabase";
import { getLocalAnimals } from "../services/contentLoader";
import { Especie } from "../data/mockDatabase";
import { AnimalCard } from "../components/AnimalCard";
import { Catalog } from "../components/Catalog";

export default function Especies() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [animalesCMS, setAnimalesCMS] = useState<Especie[]>([]);

  // Cargamos los datos del CMS al montar el componente
  useEffect(() => {
    setAnimalesCMS(getLocalAnimals());
  }, []);

  const especiesFiltradas = useMemo(() => {
    if (categoriaActiva === "Todos") return animalesCMS;
    return animalesCMS.filter((e) => e.categoria === categoriaActiva);
  }, [categoriaActiva, animalesCMS]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e3f20] mb-3">
          Nuestras Especies
        </h1>
        <p className="text-stone-600">
          Explora el catálogo de animales exóticos que habitan en nuestro
          centro. Filtra por categoría para conocer más sobre cada uno.
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
        <span className="flex items-center gap-1.5 text-sm text-stone-500 mr-2">
          <Filter size={16} /> Filtrar:
        </span>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              categoriaActiva === cat
                ? "bg-[#15803d] text-white border-[#15803d]"
                : "bg-white text-stone-600 border-stone-200 hover:border-[#15803d]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {especiesFiltradas.length === 0 ? (
        <p className="text-center text-stone-500">No hay especies en esta categoría.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {especiesFiltradas.map((animal) => (
             /* Aquí usamos tu AnimalCard original */
             <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
      
      {/* Mantenemos Catalog fuera si necesitas que maneje el modal global, 
          o simplemente aseguramos que AnimalCard tenga la lógica del modal */}
      {categoriaActiva === "Todos" && <Catalog />}
    </div>
  );
}