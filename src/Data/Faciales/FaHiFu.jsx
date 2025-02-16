const FaHiFu = {
    id: "FaHiFu", // ID único para el tratamiento
    categoria: "Faciales",
    nombre: "HiFu",
    metodo: "HIFU 22D",
    zonas: [
        {
            nombre: "rostro",
            duracion: "40 min",
            precioFemenino: 35000,
            precioMasculino: 35000,
            frecuencia: "90 días"
        },
        {
            nombre: "papada",
            duracion: "15 min",
            precioFemenino: 10000,
            precioMasculino: 10000,
            frecuencia: "90 días"
        },
        {
            nombre: "escote",
            duracion: "15 min",
            precioFemenino: 10000,
            precioMasculino: 10000,
            frecuencia: "90 días"
        }
    ],
    info_especifica: {
        descripcion: "Tratamiento de lifting sin cirugía mediante ultrasonido focalizado",
        cuidados_especiales: "Evaluación previa de la flacidez y grosor de la piel",
        observaciones: "Resultados progresivos, máximos resultados a los 90 días"
    },
    info_general: {
        descripcionCorta: "Lifting facial no quirúrgico con ultrasonido focalizado de alta intensidad",
        descripcionLarga: "El Hi Fu (High Intensity Focused Ultrasound) es un tratamiento no invasivo que utiliza ultrasonido focalizado de alta intensidad para tensar y reafirmar la piel desde las capas más profundas. Estimula la producción natural de colágeno, logrando un efecto lifting sin cirugía.",
        sintomas: [
            "Flacidez facial",
            "Papada",
            "Líneas de expresión marcadas",
            "Pérdida de definición del óvalo facial",
            "Arrugas en escote",
            "Descenso de cejas",
            "Piel envejecida"
        ],
        resultados: [
            "Efecto lifting natural",
            "Reducción de flacidez",
            "Mejora del contorno facial",
            "Piel más firme y tersa",
            "Reducción de arrugas profundas",
            "Mejora de la papada",
            "Resultados duraderos (12-18 meses)"
        ],
        contraindicaciones: [
            "Embarazo y lactancia",
            "Implantes metálicos en la zona",
            "Enfermedades autoinmunes activas",
            "Heridas abiertas o infecciones",
            "Tendencia a queloides",
            "Tratamientos con retinoides recientes",
            "Rellenos faciales recientes"
        ],
        cuidados_pre: [
            "No usar retinoides 1 semana antes",
            "Evitar antiinflamatorios 48h antes",
            "Informar sobre tratamientos previos",
            "Venir sin maquillaje",
            "Piel limpia sin cremas"
        ],
        cuidados_post: [
            "Protección solar alta",
            "Hidratación constante",
            "No realizar otros tratamientos por 15 días",
            "Evitar exposición solar directa",
            "No realizar ejercicio intenso 24h"
        ],
        beneficios_adicionales: [
            "No requiere cirugía",
            "Sin tiempo de recuperación",
            "Resultados naturales y progresivos",
            "Estimulación natural del colágeno",
            "Efecto tensor inmediato y a largo plazo"
        ],
        frecuencia_recomendada: {
            sesion_inicial: "Una sesión cada 3 meses",
            mantenimiento: "1-2 sesiones al año",
            resultados_optimos: "Serie de 1-3 sesiones según evaluación"
        },
        tipos_tratamiento: {
            suave: {
                profundidad: "1.5mm",
                ideal_para: "Líneas finas y primeros signos de envejecimiento",
                zonas: "Contorno de ojos y labios"
            },
            medio: {
                profundidad: "3.0mm",
                ideal_para: "Flacidez moderada y arrugas",
                zonas: "Mejillas y mentón"
            },
            profundo: {
                profundidad: "4.5mm",
                ideal_para: "Flacidez severa y papada",
                zonas: "Óvalo facial y cuello"
            }
        }
    }
};

export default FaHiFu;


