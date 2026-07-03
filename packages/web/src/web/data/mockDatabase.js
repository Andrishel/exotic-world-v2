// Mock relational-style database for Exotic World

export const especies = [
  {
    id: 1,
    nombre: "Hurón Europeo",
    nombreCientifico: "Mustela putorius furo",
    categoria: "Mamíferos Exóticos",
    descripcion:
      "Curiosos y juguetones, los hurones son mamíferos carnívoros domesticados con gran energía y personalidad social.",
    cuidadosBasicos:
      "Requieren jaulas amplias, dieta alta en proteína animal y varias horas de juego supervisado al día.",
    origen: "Europa (domesticado desde hace más de 2000 años)",
    imagen:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    nombre: "Erizo Africano Pigmeo",
    nombreCientifico: "Atelerix albiventris",
    categoria: "Mamíferos Exóticos",
    descripcion:
      "Pequeños mamíferos nocturnos cubiertos de púas suaves cuando están relajados, ideales para el contacto guiado con niños.",
    cuidadosBasicos:
      "Ambiente cálido (24-27°C), dieta insectívora balanceada y manipulación calmada y frecuente.",
    origen: "África Central y Oriental",
    imagen:
      "https://images.unsplash.com/photo-1554457945-ba5a53e30d33?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    nombre: "Dragón Barbudo",
    nombreCientifico: "Pogona vitticeps",
    categoria: "Reptiles",
    descripcion:
      "Reptil de temperamento dócil, muy popular en educación ambiental por su facilidad de manejo e interacción.",
    cuidadosBasicos:
      "Terrario con lámpara UVB, temperatura por zonas (25-40°C) y dieta omnívora de insectos y vegetales.",
    origen: "Zonas áridas de Australia",
    imagen:
      "https://images.unsplash.com/photo-1585583316467-c3e42d61a5f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    nombre: "Gecko Leopardo",
    nombreCientifico: "Eublepharis macularius",
    categoria: "Reptiles",
    descripcion:
      "Uno de los reptiles más recomendados para primer contacto: tranquilo, colorido y de tamaño pequeño.",
    cuidadosBasicos:
      "Terrario con sustrato adecuado, punto de calor y dieta a base de insectos vivos.",
    origen: "Afganistán, Pakistán e India",
    imagen:
      "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    nombre: "Serpiente Maíz",
    nombreCientifico: "Pantherophis guttatus",
    categoria: "Reptiles",
    descripcion:
      "Serpiente no venenosa, de temperamento calmado, ideal para desmitificar el miedo a los ofidios de forma segura.",
    cuidadosBasicos:
      "Terrario cerrado, gradiente térmico y alimentación con roedores pequeños cada 7-10 días.",
    origen: "Sureste de Estados Unidos",
    imagen:
      "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    nombre: "Tarántula Rosa Chilena",
    nombreCientifico: "Grammostola rosea",
    categoria: "Arácnidos",
    descripcion:
      "Arácnido de movimientos lentos y comportamiento tranquilo, perfecto para talleres de pérdida del miedo a las arañas.",
    cuidadosBasicos:
      "Terrario con sustrato profundo, humedad moderada y alimentación con insectos cada 1-2 semanas.",
    origen: "Desiertos de Chile y Bolivia",
    imagen:
      "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=800&q=80",
  },
];

export const categorias = ["Todos", "Mamíferos Exóticos", "Reptiles", "Arácnidos"];

export const experiencias = [
  {
    id: 1,
    titulo: "Junior Explorers",
    publico: "Niños de 4 a 12 años",
    descripcion:
      "Recorrido guiado y didáctico donde los más pequeños conocen de cerca a los animales del centro, aprenden sobre su hábitat y participan en actividades sensoriales seguras.",
    duracion: "45 min",
  },
  {
    id: 2,
    titulo: "Taller de Serpientes",
    publico: "Familias y grupos +8 años",
    descripcion:
      "Sesión interactiva enfocada en perder el miedo a los ofidios, con manipulación supervisada y explicación biológica a cargo de nuestros guías especializados.",
    duracion: "30 min",
  },
  {
    id: 3,
    titulo: "Visitas Escolares",
    publico: "Instituciones educativas",
    descripcion:
      "Programa educativo alineado a ciencias naturales, con material de apoyo, charlas sobre conservación y contacto guiado con especies seleccionadas.",
    duracion: "1h 30min",
  },
  {
    id: 4,
    titulo: "Recorrido Guiado Completo",
    publico: "Todo público",
    descripcion:
      "Visita completa por todas las áreas del centro con un guía experto, ideal para quienes desean conocer todas las especies y su historia de rescate.",
    duracion: "1h",
  },
];

export const infoContacto = {
  direccion: "Las Acacias 175, Piura 20001",
  telefono: "944 395 712",
  telefonoWhatsapp: "51944395712",
  horarios: [
    { dias: "Martes a Domingo", horas: "10:00 a.m. – 2:00 p.m." },
    { dias: "Martes a Domingo", horas: "4:00 p.m. – 8:00 p.m." },
  ],
  cerrado: "Lunes",
};
