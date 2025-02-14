const FaPeeling = {
    id: "FaPeeling", // ID único para el tratamiento
    categoria: "Faciales",
    nombre: "peeling",
    metodo: "acidos",
    zonas: [
        {
            nombre: "rostro completo",
            duracion: "40 min",
            precioFemenino: 15000,
            precioMasculino: 15000,
            frecuencia: "7 días"
        }
    ],
    info_especifica: {
        descripcion: "Exfoliación química profesional con ácidos específicos",
        cuidados_especiales: "Evaluación previa del tipo de piel para determinar concentración",
        observaciones: "Incluye neutralización y máscara post peeling"
    },
    info_general: {
        descripcionCorta: "Tratamiento de renovación celular mediante exfoliación química",
        descripcionLarga: "El peeling facial es un tratamiento de exfoliación química que utiliza diferentes tipos de ácidos para eliminar las capas superficiales de la piel, estimulando la renovación celular y mejorando diversas problemáticas cutáneas. La concentración y tipo de ácidos se personalizan según las necesidades específicas.",
        sintomas: [
            "Manchas y discromías",
            "Textura irregular",
            "Líneas finas",
            "Cicatrices superficiales",
            "Piel apagada",
            "Acné leve a moderado",
            "Poros dilatados",
            "Signos de fotoenvejecimiento"
        ],
        resultados: [
            "Piel más luminosa y uniforme",
            "Mejora de manchas superficiales",
            "Reducción de líneas finas",
            "Textura más suave",
            "Poros refinados",
            "Mejor absorción de productos",
            "Renovación celular acelerada"
        ],
        contraindicaciones: [
            "Embarazo y lactancia",
            "Herpes activo",
            "Heridas o lesiones abiertas",
            "Quemaduras solares",
            "Tratamientos recientes con retinoides",
            "Dermatitis o psoriasis activa",
            "Tendencia a queloides",
            "Uso de medicamentos fotosensibilizantes"
        ],
        cuidados_pre: [
            "Suspender retinoides 1 semana antes",
            "No exfoliar 5 días antes",
            "Evitar exposición solar",
            "No depilar el rostro 48h antes",
            "Informar sobre medicamentos en uso"
        ],
        cuidados_post: [
            "Protección solar obligatoria (SPF 50+)",
            "No exfoliar por 1-2 semanas",
            "Evitar exposición solar directa",
            "No usar maquillaje por 24h",
            "Mantener la piel bien hidratada",
            "No usar productos irritantes"
        ],
        tipos_peeling: {
            suave: {
                acidos: ["Glicólico suave", "Mandélico", "Láctico"],
                beneficios: "Renovación superficial, ideal para pieles sensibles",
                recuperacion: "1-2 días"
            },
            medio: {
                acidos: ["Glicólico", "Salicílico", "TCA suave"],
                beneficios: "Mayor penetración, ideal para manchas y textura",
                recuperacion: "3-5 días"
            },
            intensivo: {
                acidos: ["TCA", "Fenol", "Combinados"],
                beneficios: "Máxima renovación, para casos específicos",
                recuperacion: "5-7 días"
            }
        },
        recomendaciones_complementarias: {
            rutina_posterior: [
                "Limpiador suave",
                "Hidratante calmante",
                "Protector solar alto espectro",
                "Evitar productos con alcohol"
            ],
            frecuencia_tratamiento: {
                mantenimiento: "Cada 15-30 días",
                tratamiento_intensivo: "Serie de 4-6 sesiones",
                segun_tipo: "Varía según concentración y tipo de ácidos"
            }
        }
    }
};

export default FaPeeling;

