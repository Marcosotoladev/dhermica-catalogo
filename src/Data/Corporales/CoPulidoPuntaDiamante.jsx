const CoPulidoPuntaDiamante = {
    id: "CoPulidoPuntaDiamante", // ID único para el tratamiento
    categoria: "Corporales",
    nombre: "Pulido con punta de diamante",
    metodo: "punta de diamante",
    zonas: [
      {
        nombre: "cuerpo",
        duracion: "120 min",
        precioFemenino: 15000,
        precioMasculino: 15000,
        frecuencia: "90 dias"
      }
    ],
    info_especifica: {
      descripcion: "Microdermoabrasión corporal con punta de diamante",
      cuidados_especiales: "Tratamiento más intensivo que requiere protección solar posterior",
      observaciones: "Incluye masaje final con sérum hidratante"
    },
    info_general: {
      descripcionCorta: "Tratamiento de renovación y exfoliación profunda de la piel",
      descripcionLarga: "El pulido corporal con punta de diamante es un tratamiento de microdermoabrasión que exfolia profundamente la piel, eliminando células muertas y promoviendo la renovación celular.",
      sintomas: [
        "Piel áspera o sin brillo",
        "Manchas superficiales",
        "Piel engrosada",
        "Queratosis",
        "Piel apagada o sin luminosidad"
      ],
      resultados: [
        "Piel más suave y luminosa",
        "Mejor textura cutánea",
        "Eliminación de células muertas",
        "Mejor absorción de productos",
        "Renovación celular acelerada"
      ],
      contraindicaciones: [
        "Heridas o lesiones activas",
        "Quemaduras solares",
        "Infecciones cutáneas",
        "Dermatitis o eccemas",
        "Rosácea activa",
        "Tratamientos con retinoides",
        "Cicatrices recientes"
      ],
      cuidados_pre: [
        "No usar exfoliantes 1 semana antes",
        "Evitar exposición solar intensa",
        "Informar sobre sensibilidad de la piel",
        "No depilar 48h antes"
      ],
      cuidados_post: [
        "Protección solar obligatoria",
        "Hidratación intensiva",
        "No exfoliar por 1 semana",
        "Evitar saunas y piscinas 48h",
        "No realizar deportes el mismo día"
      ]
    }
  };
  
  export default CoPulidoPuntaDiamante;
  