const DeDepiLaser = {
    id: "DeDepiLaser", // ID único para el tratamiento
    categoria: "Depilación",
    nombre: "Definitiva laser sin gel",
    metodo: "Infrared",
    zonas: [
      // Zonas Superiores
      { nombre: "rostro", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "bozo", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "barba", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "axilas", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "medio brazo", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      // Zonas Medias
      { nombre: "pecho", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "abdomen", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "media espalda", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "línea alba", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      // Zonas Inferiores
      { nombre: "cavado", duracion: "15 min", precioFemenino: 5500, precioMasculino: 13000, frecuencia: "30 días" },
      { nombre: "tiro de cola", duracion: "15 min", precioFemenino: 5500, precioMasculino: 13000, frecuencia: "30 días" },
      { nombre: "glúteos", duracion: "15 min", precioFemenino: 5500, precioMasculino: 13000, frecuencia: "30 días" },
      { nombre: "media pierna", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" },
      { nombre: "dedos", duracion: "15 min", precioFemenino: 5500, precioMasculino: 9000, frecuencia: "30 días" }
    ],
    info_especifica: {
      descripcion: "Tratamiento láser específico para zonas sensibles",
      cuidados_especiales: "Ajuste de potencia especial para zonas sensibles del rostro",
      observaciones: "Incluye gel refrigerante para mayor confort"
    },
    info_general: {
      descripcionCorta: "Eliminación definitiva del vello mediante tecnología láser Infrared de última generación.",
      descripcionLarga: "Tratamiento profesional de depilación definitiva que utiliza tecnología láser Infrared. Sistema seguro y efectivo que elimina el vello no deseado de forma permanente, con resultados visibles desde las primeras sesiones.",
      sintomas: [
        "Vello no deseado",
        "Vello grueso o abundante",
        "Folículos activos",
        "Irritación por otros métodos de depilación",
        "Vello oscuro"
      ],
      resultados: [
        "Reducción permanente del vello en un 80-90%",
        "Piel más suave y tersa",
        "Menor velocidad de crecimiento del vello",
        "Eliminación de foliculitis",
        "Resultados duraderos"
      ],
      contraindicaciones: [
        "Embarazo y lactancia",
        "Cáncer o antecedentes de cáncer de piel",
        "Enfermedades autoinmunes activas",
        "Uso reciente de retinoides",
        "Heridas abiertas o infecciones en la zona",
        "Exposición solar reciente",
        "Diabetes no controlada",
        "Medicamentos fotosensibilizantes"
      ],
      cuidados_pre: [
        "No depilar con cera 15 días antes",
        "No exponer la zona al sol",
        "Rasurar la zona 24h antes",
        "No usar cremas con retinol"
      ],
      cuidados_post: [
        "Evitar exposición solar por 48h",
        "Usar protector solar",
        "No realizar actividad física intensa por 24h",
        "Mantener la zona hidratada"
      ]
    }
  };
  
  export default DeDepiLaser;
  



