const DeDepiCera = {
    id: "DeDepiCera", // ID único para el tratamiento
    categoria: "Depilación",
    nombre: "Depilacion con cera",
    metodo: "Sistema Español",
    zonas: [
      // Zonas Superiores
      { nombre: "rostro", duracion: "15 min", precioFemenino: 5500, precioMasculino: 6000, frecuencia: "20 días" },
      { nombre: "axilas", duracion: "15 min", precioFemenino: 3000, precioMasculino: 4500, frecuencia: "20 días" },
      { nombre: "bozo", duracion: "15 min", precioFemenino: 3000, precioMasculino: 5000, frecuencia: "20 días" },
      { nombre: "barba", duracion: "15 min", precioFemenino: 4000, precioMasculino: 5000, frecuencia: "20 días" },
      { nombre: "medio brazo", duracion: "15 min", precioFemenino: 3500, precioMasculino: 5000, frecuencia: "20 días" },
      // Zonas Medias
      { nombre: "pecho", duracion: "15 min", precioFemenino: 5000, precioMasculino: 6000, frecuencia: "20 días" },
      { nombre: "abdomen", duracion: "15 min", precioFemenino: 3500, precioMasculino: 5000, frecuencia: "20 días" },
      { nombre: "media espalda", duracion: "15 min", precioFemenino: 3500, precioMasculino: 5000, frecuencia: "20 días" },
      { nombre: "línea alba", duracion: "15 min", precioFemenino: 1500, precioMasculino: null, frecuencia: "20 días" },
      // Zonas Inferiores
      { nombre: "cavado", duracion: "15 min", precioFemenino: 4500, precioMasculino: null, frecuencia: "20 días" },
      { nombre: "tiro de cola", duracion: "15 min", precioFemenino: 4500, precioMasculino: null, frecuencia: "20 días" },
      { nombre: "glúteos", duracion: "15 min", precioFemenino: 5000, precioMasculino: null, frecuencia: "20 días" },
      { nombre: "media pierna", duracion: "15 min", precioFemenino: 4000, precioMasculino: 10000, frecuencia: "20 días" },
      { nombre: "dedos", duracion: "15 min", precioFemenino: 2500, precioMasculino: 4000, frecuencia: "20 días" }
    ],
    info_especifica: {
      descripcion: "Depilación con cera española especial para zonas sensibles",
      cuidados_especiales: "Uso de cera de baja temperatura para rostro",
      observaciones: "Incluye tratamiento post depilación calmante"
    },
    info_general: {
      descripcionCorta: "Depilación tradicional con cera española de alta calidad",
      descripcionLarga: "Sistema profesional de depilación que utiliza cera española de primera calidad, con diferentes tipos según la zona a tratar.",
      sintomas: [
        "Vello no deseado en cualquier zona",
        "Vello de cualquier color o grosor",
        "Necesidad de depilación inmediata"
      ],
      resultados: [
        "Piel libre de vello por 2-3 semanas",
        "Debilitamiento progresivo del vello",
        "Piel más suave al tacto"
      ],
      contraindicaciones: [
        "Varices pronunciadas",
        "Problemas de coagulación",
        "Heridas o lesiones en la piel"
      ],
      cuidados_pre: [
        "Vello de al menos 5mm de largo",
        "Piel limpia y sin cremas"
      ],
      cuidados_post: [
        "No exponer al sol por 24h",
        "Evitar piscinas y saunas por 24h"
      ]
    }
  };
  
  export default DeDepiCera;
  



