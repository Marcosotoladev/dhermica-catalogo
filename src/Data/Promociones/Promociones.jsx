const Promociones = {
    id: "promociones",
    categoria: "Promos",
    tratamientos: [
        {
            nombre: "liposonix",
            metodo: "aparatología",
            variantes: [
                {
                    zonas: ["panza", "flanco", "corpinio bajo"],
                    duracion: "60 min",
                    precioFemenino: 60000,
                    precioMasculino: 60000,
                    frecuencia: "30 dias"
                },
                {
                    zonas: ["panza", "flanco"],
                    duracion: "60 min",
                    precioFemenino: 50000,
                    precioMasculino: 50000,
                    frecuencia: "30 dias"
                }
            ],
            info_especifica: {
                descripcion: "Tratamiento de liposonix para reducción de medidas",
                cuidados_especiales: "Mantener hidratación adecuada antes y después del tratamiento",
                observaciones: "Resultados visibles desde la primera sesión"
            }
        },
        {
            nombre: "hi fu",
            metodo: "aparatología",
            zonas: ["rostro", "papada", "cuello"],
            duracion: "30 min",
            precioFemenino: 35000,
            precioMasculino: 35000,
            frecuencia: "90 dias",
            info_especifica: {
                descripcion: "Tratamiento de ultrasonido focalizado de alta intensidad",
                cuidados_especiales: "Evitar exposición solar directa post tratamiento",
                observaciones: "Ideal para tensar y reafirmar la piel"
            }
        },
        {
            nombre: "depilacion laser",
            metodo: "Infrared",
            zonas: ["4 zonas a elección"],
            duracion: "30 min",
            precioFemenino: 9000,
            precioMasculino: 20000,
            observaciones_precio: "Precio masculino no incluye cavado y tiro",
            frecuencia: "30 dias",
            info_especifica: {
                descripcion: "Depilación definitiva con tecnología Infrared",
                cuidados_especiales: "No exposición solar 48hs antes y después",
                observaciones: "Promoción válida para 4 zonas a elección"
            }
        },

    ],
    info_general: {
        descripcionCorta: "Promociones especiales en tratamientos seleccionados",
        descripcionLarga: "Ofertas exclusivas en nuestros tratamientos más solicitados, incluyendo tecnologías avanzadas como Liposonix, Hi Fu, depilación láser y masajes reductores. Promociones diseñadas para brindar resultados óptimos a precios accesibles.",
        condiciones_generales: [
            "Promociones no acumulables con otros descuentos",
            "Válidas hasta agotar cupo",
            "Sujetas a disponibilidad de agenda",
            "Los precios pueden modificarse sin previo aviso",
            "Consultar disponibilidad de horarios",
            "Se requiere reserva previa"
        ],
        beneficios: [
            "Precios especiales en tratamientos premium",
            "Misma calidad y atención profesional",
            "Tecnología de última generación",
            "Protocolos personalizados",
            "Seguimiento profesional"
        ],
        recomendaciones_generales: [
            "Consultar contraindicaciones específicas de cada tratamiento",
            "Cumplir con las indicaciones pre y post tratamiento",
            "Mantener la frecuencia recomendada para mejores resultados",
            "Agendar las sesiones con anticipación",
            "Informar sobre condiciones médicas relevantes"
        ]
    }
};

export default Promociones;