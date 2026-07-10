import { Especie } from '../data/mockDatabase'; // Reutilizamos tu interfaz existente

export const getLocalAnimals = (): Especie[] => {
  const modules = import.meta.glob('../content/animals/*.json', { eager: true });
  
  return Object.values(modules).map((module: any, index) => {
    return {
      id: index + 100, // Generamos un ID dinámico para el map de React
      nombre: module.default.nombre,
      nombreCientifico: module.default.nombreCientifico,
      categoria: module.default.categoria,
      descripcion: module.default.descripcion,
      cuidadosBasicos: module.default.cuidadosBasicos,
      origen: module.default.origen,
      imagen: module.default.imagen,
    };
  });
};