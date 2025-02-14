const FaLimpieza = {
    id: "FaLimpieza", // ID único para el tratamiento
    categoria: "Faciales",
    nombre: "limpieza",
    metodo: "punta de diamante",
    zonas: [
        {
            nombre: "rostro completo",
            duracion: "60 min",
            precioFemenino: 8500,
            precioMasculino: 8500,
            frecuencia: "7 días"
        }
    ],
    info_especifica: {
        descripcion: "Limpieza facial profunda con microdermoabrasión",
        cuidados_especiales: "Incluye extracción suave de impurezas",
        observaciones: "Finaliza con mascarilla según tipo de piel"
    },
    info_general: {
        descripcionCorta: "Tratamiento completo de limpieza facial profunda",
        descripcionLarga: "Procedimiento que combina la limpieza profunda con microdermoabrasión mediante punta de diamante. Incluye extracción de impurezas, tonificación y mascarilla personalizada según el tipo de piel. Ideal para mantener la salud y apariencia del cutis.",
        sintomas: [
            "Piel congestionada",
            "Puntos negros y comedones",
            "Poros dilatados",
            "Exceso de grasa",
            "Piel apagada o sin brillo",
            "Textura irregular",
            "Acné leve a moderado"
        ],
        resultados: [
            "Piel profundamente limpia",
            "Reducción de puntos negros",
            "Poros refinados",
            "Cutis más luminoso",
            "Mejor textura de la piel",
            "Mejor absorción de productos",
            "Renovación celular"
        ],
        contraindicaciones: [
            "Acné severo o quístico",
            "Rosácea activa",
            "Herpes activo",
            "Dermatitis o eccemas",
            "Heridas abiertas",
            "Quemaduras solares",
            "Tratamientos recientes con retinoides"
        ],
        cuidados_pre: [
            "No exfoliar 3 días antes",
            "Evitar exposición solar intensa",
            "No usar ácidos ni retinoides",
            "Informar sobre tratamientos en curso",
            "Venir sin maquillaje"
        ],
        cuidados_post: [
            "Protector solar obligatorio",
            "No maquillarse por 12 horas",
            "Evitar exposición solar directa",
            "No exfoliar por 1 semana",
            "Mantener la piel hidratada"
        ],
        incluye: [
            "Diagnóstico del tipo de piel",
            "Limpieza superficial",
            "Microdermoabrasión con punta de diamante",
            "Extracción de comedones",
            "Tonificación",
            "Mascarilla específica",
            "Hidratación final"
        ],
        beneficios_adicionales: [
            "Previene el envejecimiento prematuro",
            "Mejora la circulación sanguínea",
            "Prepara la piel para otros tratamientos",
            "Ayuda a mantener el equilibrio del pH cutáneo",
            "Reduce la probabilidad de brotes de acné"
        ]
    }
};

export default FaLimpieza;

