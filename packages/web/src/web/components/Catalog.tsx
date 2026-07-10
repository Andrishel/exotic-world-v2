import React, { useEffect, useState } from 'react';
import { getLocalAnimals } from '../services/contentLoader';
import { Especie } from '../data/mockDatabase';
import { X, MapPin } from "lucide-react";

export const Catalog: React.FC = () => {
  const [animals, setAnimals] = useState<Especie[]>([]);
  const [animalSeleccionado, setAnimalSeleccionado] = useState<Especie | null>(null);

  useEffect(() => {
    const data = getLocalAnimals();
    setAnimals(data);
  }, []);

  return (
    <>
      {/* 1. EL GRID DE TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {animals.map((animal, index) => (
          <div 
            key={index} 
            className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow flex flex-col"
          >
            <img 
              src={animal.imagen} 
              alt={animal.nombre} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4 flex-grow">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                {animal.categoria}
              </span>
              <h3 className="font-bold text-xl text-emerald-800">{animal.nombre}</h3>
              <p className="text-gray-500 italic text-xs mb-2">{animal.nombreCientifico}</p>
              <p className="text-gray-600 text-sm my-2 line-clamp-2">{animal.descripcion}</p>
              
              {/* Botón Ver Más interactivo */}
              <button 
                onClick={() => setAnimalSeleccionado(animal)}
                className="text-green-700 font-bold text-sm mt-4 flex items-center hover:text-green-800 transition-colors cursor-pointer"
              >
                Ver más →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 2. EL MODAL FLOTANTE */}
      {animalSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={() => setAnimalSeleccionado(null)}
              className="absolute top-4 right-4 bg-white p-1.5 rounded-full text-gray-500 hover:text-gray-800 transition-colors z-10 shadow-md"
            >
              <X size={20} />
            </button>

            <div className="h-64 w-full bg-green-50">
              <img 
                src={animalSeleccionado.imagen} 
                alt={animalSeleccionado.nombre} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="p-6">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                {animalSeleccionado.categoria}
              </span>
              
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {animalSeleccionado.nombre}
              </h2>
              <p className="text-gray-500 italic text-sm mb-4">
                {animalSeleccionado.nombreCientifico}
              </p>
              
              <p className="text-gray-700 text-sm mb-5 leading-relaxed">
                {animalSeleccionado.descripcion}
              </p>

              <h3 className="text-green-700 font-bold text-sm mb-1">
                Cuidados básicos
              </h3>
              <p className="text-gray-700 text-sm mb-5 leading-relaxed">
                {animalSeleccionado.cuidadosBasicos}
              </p>

              <div className="flex items-start text-gray-600 text-sm mt-4 border-t pt-4">
                <MapPin size={18} className="mr-1.5 text-yellow-500 shrink-0 mt-0.5" />
                <span><strong>Origen:</strong> {animalSeleccionado.origen}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
