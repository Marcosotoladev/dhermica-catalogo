
const Radiofrecuencia = {
    id: "ApRadiofrecuencia",
    categoria: "Aparatologia",
    nombre: "Radiofrecuencia",
    metodo: "radiofrecuencia",
    zonas: [
        {
            nombre: "rostro completo",
            duracion: "40 min",
            precioFemenino: 10000,
            precioMasculino: 10000,
            frecuencia: "7 dias"
        }
    ],
    info_especifica: {
        descripcion: "Tecnología de radiofrecuencia para rejuvenecimiento y tensado de la piel",
        equipamiento: "Equipo de radiofrecuencia profesional avanzado",
        tipo_tecnologia: "Radiofrecuencia multipolar",
        parametros_tecnicos: {
            tipo_energia: "Radiofrecuencia",
            frecuencia: "1 MHz - 1.5 MHz",
            temperatura_trabajo: "39-41°C",
            potencia: "Ajustable según zona",
            tiempo_exposicion: "Controlado por temperatura"
        }
    },
    info_general: {
        descripcionCorta: "Tratamiento no invasivo para rejuvenecimiento facial mediante radiofrecuencia",
        descripcionLarga: "Sistema de radiofrecuencia que genera calor controlado en las capas profundas de la piel, estimulando la producción natural de colágeno y elastina. Logra un efecto tensor y rejuvenecedor sin tiempo de recuperación.",
        caracteristicas_tecnicas: [
            "Control de temperatura en tiempo real",
            "Sistema multipolar",
            "Sensor de contacto",
            "Display digital",
            "Diferentes cabezales según zona",
            "Sistema de seguridad integrado"
        ],
        ventajas_tecnologia: [
            "No invasivo",
            "Sin tiempo de recuperación",
            "Resultados progresivos",
            "Efecto tensor inmediato",
            "Estimulación natural del colágeno",
            "Tratamiento confortable"
        ],
        especificaciones_tratamiento: {
            sesiones_recomendadas: "6-8 sesiones iniciales",
            intervalo_sesiones: "7-10 días",
            resultados_visibles: "Desde la primera sesión",
            duracion_resultados: "4-6 meses",
            areas_aplicacion: [
                "Contorno facial",
                "Papada",
                "Líneas de expresión",
                "Óvalo facial",
                "Párpados",
                "Cuello"
            ]
        },
        efectos_fisiologicos: {
            inmediatos: [
                "Efecto tensor inmediato",
                "Mejora de la circulación",
                "Oxigenación tisular",
                "Drenaje linfático"
            ],
            mediano_plazo: [
                "Producción de colágeno",
                "Remodelación de fibras elásticas",
                "Mejora de la textura cutánea",
                "Reducción de líneas de expresión"
            ],
            largo_plazo: [
                "Rejuvenecimiento progresivo",
                "Piel más firme y elástica",
                "Mejora del contorno facial",
                "Efecto antiaging acumulativo"
            ]
        }
    }
};

export default Radiofrecuencia;

