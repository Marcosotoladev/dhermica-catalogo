const Electroestimulacion = {
    id: "ApElectroestimulacion",
    categoria: "Aparatologia",
    nombre: "Electroestimulacion",
    metodo: "electroestimulacion",
    zonas: [
        {
            nombre: "brazo",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "abdomen",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "flanco",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "rostro",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "1 dia"
        },
        {
            nombre: "entrepierna",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "rodilla",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "media pierna",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "pantalon de montar",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "bananita",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        },
        {
            nombre: "gluteo",
            duracion: "30 min",
            precioFemenino: 5000,
            precioMasculino: 5000,
            frecuencia: "2 dias"
        }
    ],
    info_especifica: {
        descripcion: "Sistema de estimulación muscular mediante corrientes eléctricas controladas",
        equipamiento: "Equipo de electroestimulación profesional multicanal",
        tipo_tecnologia: "Electroestimulación neuromuscular",
        parametros_tecnicos: {
            tipo_corriente: "Bifásica compensada",
            frecuencias: "1-150 Hz",
            intensidad: "0-100 mA",
            canales: "Multiple",
            programas: "Personalizables",
            tiempo_contraccion: "Ajustable"
        },
        cuidados_especiales: "Mantener hidratación adecuada antes y después del tratamiento",
        observaciones: "La intensidad se ajusta según la tolerancia y objetivo de cada paciente"
    },
    info_general: {
        descripcionCorta: "Tonificación muscular mediante estimulación eléctrica controlada",
        descripcionLarga: "Sistema profesional de electroestimulación que permite trabajar múltiples grupos musculares simultáneamente. Utiliza corrientes eléctricas específicamente diseñadas para provocar contracciones musculares controladas, logrando efectos de tonificación y fortalecimiento.",
        caracteristicas_tecnicas: [
            "Múltiples canales independientes",
            "Programas preestablecidos y personalizables",
            "Control de intensidad individual",
            "Pantalla táctil intuitiva",
            "Curvas de intensidad ajustables",
            "Diferentes tipos de onda"
        ],
        ventajas_tecnologia: [
            "Tratamiento personalizable",
            "Trabajo muscular selectivo",
            "Sin impacto articular",
            "Resultados rápidos",
            "Complemento ideal del ejercicio",
            "Recuperación muscular efectiva"
        ],
        sintomas: [
            "Flacidez muscular",
            "Falta de tono muscular",
            "Debilidad muscular localizada",
            "Retención de líquidos",
            "Recuperación post-ejercicio lenta",
            "Celulitis",
            "Dificultad para tonificar con ejercicio tradicional"
        ],
        resultados: [
            "Mayor tonificación muscular",
            "Mejora de la fuerza y resistencia",
            "Reducción de medidas",
            "Mejor definición muscular",
            "Activación del metabolismo",
            "Mejora de la circulación",
            "Reducción de la retención de líquidos"
        ],
        contraindicaciones: [
            "Embarazo",
            "Marcapasos u otros dispositivos electrónicos implantados",
            "Epilepsia",
            "Trombosis o problemas circulatorios graves",
            "Heridas abiertas o lesiones cutáneas",
            "Procesos infecciosos o febriles",
            "Implantes metálicos en la zona a tratar",
            "Enfermedades cardíacas graves"
        ],
        cuidados_pre: [
            "Estar bien hidratado",
            "No aplicar cremas o aceites en la zona",
            "Vaciar la vejiga antes del tratamiento",
            "Evitar comidas pesadas 2 horas antes",
            "Usar ropa cómoda y ajustada",
            "Informar sobre cualquier condición médica",
            "No realizar ejercicio intenso antes"
        ],
        cuidados_post: [
            "Mantener una buena hidratación",
            "Realizar ejercicios de estiramiento suave",
            "Evitar ejercicio intenso el mismo día",
            "Seguir una alimentación equilibrada",
            "Mantener un descanso adecuado",
            "Esperar el tiempo recomendado entre sesiones",
            "Reportar cualquier molestia inusual"
        ],
        tipos_programas: {
            tonificacion: {
                frecuencia: "50-90 Hz",
                tiempo_sesion: "30 minutos",
                objetivos: ["Aumento tono muscular", "Definición", "Fuerza"]
            },
            resistencia: {
                frecuencia: "20-40 Hz",
                tiempo_sesion: "30 minutos",
                objetivos: ["Resistencia muscular", "Metabolismo", "Definición"]
            },
            relajacion: {
                frecuencia: "1-10 Hz",
                tiempo_sesion: "20 minutos",
                objetivos: ["Recuperación", "Relajación", "Descontracturante"]
            }
        },
        protocolos_tratamiento: {
            inicial: "2-3 sesiones por semana",
            mantenimiento: "1-2 sesiones por semana",
            deportivo: "3-4 sesiones por semana",
            rehabilitacion: "Según evaluación profesional"
        }
    }
};

export default Electroestimulacion;