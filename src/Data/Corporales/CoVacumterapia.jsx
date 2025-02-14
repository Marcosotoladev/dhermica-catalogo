const CoVacumterapia = {
    id: "CoVacumterapia", // ID único para el tratamiento
    categoria: "Corporales",
    nombre: "Vacumterapia",
    metodo: "Vacumterapia",
    zonas: [
      {
        nombre: "gluteos",
        duracion: "40 min",
        precioFemenino: 5000,
        precioMasculino: 5000,
        frecuencia: "7 dias"
      },
      {
        nombre: "pecho",
        duracion: "40 min",
        precioFemenino: 5000,
        precioMasculino: 5000,
        frecuencia: "7 dias"
      }
    ],
    info_especifica: {
      descripcion: "Técnica de succión que mejora la circulación y el aspecto de la piel",
      cuidados_especiales: "Puede dejar marcas temporales en la piel",
      observaciones: "Tratamiento gradual que requiere varias sesiones"
    },
    info_general: {
      descripcionCorta: "Tratamiento que utiliza succión para mejorar circulación y modelar",
      descripcionLarga: "La vacumterapia es una técnica no invasiva que utiliza copas de succión para estimular la circulación sanguínea y linfática, ayudando a eliminar toxinas y modelar el cuerpo. Eficaz para tratamiento de celulitis y mejora de contornos.",
      sintomas: [
        "Pérdida de tonicidad",
        "Celulitis",
        "Acumulación de grasa localizada",
        "Falta de volumen",
        "Mala circulación"
      ],
      resultados: [
        "Mejora de la circulación",
        "Reducción de celulitis",
        "Tonificación de la piel",
        "Modelado de contornos",
        "Drenaje de líquidos"
      ],
      contraindicaciones: [
        "Varices pronunciadas",
        "Fragilidad capilar",
        "Embarazo",
        "Problemas circulatorios graves",
        "Inflamaciones o infecciones activas",
        "Enfermedades de la piel",
        "Trastornos de coagulación"
      ],
      cuidados_pre: [
        "Piel limpia sin cremas",
        "No estar en periodo menstrual",
        "Hidratación adecuada",
        "Informar sobre sensibilidad de la piel"
      ],
      cuidados_post: [
        "Hidratación de la zona",
        "No exponerse al sol inmediatamente",
        "Evitar duchas muy calientes",
        "Realizar ejercicio suave",
        "Mantener una buena hidratación"
      ]
    }
  };
  
  export default CoVacumterapia;
  