const Vacumterapia = {
    id: "ApVacumterapia",
    categoria: "Aparatologia",
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
        descripcion: "Sistema de succión y masaje mediante copas de vacío",
        equipamiento: "Equipo de vacumterapia profesional",
        tipo_tecnologia: "Vacío intermitente controlado",
        parametros_tecnicos: {
            tipo_succion: "Presión negativa controlada",
            intensidad: "Ajustable 0-750 mbar",
            modos: [
                "Continuo",
                "Pulsado",
                "Intermitente"
            ],
            copas: "Diferentes tamaños según zona"
        },
        cuidados_especiales: "Evitar la exposición al sol inmediatamente después del tratamiento. Mantenerse hidratado.",
        observaciones: "Los resultados mejoran con el tiempo y requieren sesiones continuas para mantener el efecto de modelado."
    },
    info_general: {
        descripcionCorta: "Tratamiento de modelado corporal mediante succión controlada",
        descripcionLarga: "La vacumterapia es una técnica no invasiva que utiliza presión negativa controlada para estimular la circulación sanguínea y linfática. A través de copas de diferentes tamaños, se realiza un masaje por succión que ayuda a mejorar el aspecto de la piel y remodelar el contorno corporal.",
        caracteristicas_tecnicas: [
            "Control digital de presión",
            "Múltiples programas preestablecidos",
            "Sistema de seguridad automático",
            "Pantalla táctil intuitiva",
            "Copas de diversos tamaños",
            "Regulación de intensidad precisa"
        ],
        ventajas_tecnologia: [
            "No invasivo",
            "Resultados visibles desde primeras sesiones",
            "Tratamiento indoloro",
            "Personalizable según necesidad",
            "Combina drenaje y modelado",
            "Mejora circulación local"
        ],
        sintomas: [
            "Celulitis",
            "Flacidez",
            "Retención de líquidos"
        ],
        resultados: [
            "Mejora en la firmeza de la piel",
            "Reducción de la apariencia de la celulitis",
            "Modelado corporal efectivo",
            "Mejora en la circulación sanguínea"
        ],
        contraindicaciones: [
            "Embarazo y lactancia",
            "Enfermedades cardíacas",
            "Infecciones en la piel",
            "Presencia de varices importantes",
            "Trastornos de coagulación"
        ],
        cuidados_pre: [
            "Evitar tratamientos agresivos en la zona",
            "No consumir alcohol 24 horas antes del tratamiento",
            "Mantener la piel limpia antes de la sesión"
        ],
        cuidados_post: [
            "Evitar la exposición al sol durante 48 horas",
            "Mantenerse hidratado",
            "No realizar actividad física intensa inmediatamente después"
        ]
    }
};

export default Vacumterapia;


