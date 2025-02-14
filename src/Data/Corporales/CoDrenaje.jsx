const Drenaje = {
    id: "CoDrenaje",
    categoria: "Corporales",
    nombre: "drenaje",
    metodo: "manual",
    zonas: [
        {
            nombre: "abdomen",
            duracion: "60 min",
            precioFemenino: 12000,
            precioMasculino: 12000,
            frecuencia: "7 dias"
        },
        {
            nombre: "flancos",
            duracion: "30 min",
            precioFemenino: 12000,
            precioMasculino: 12000,
            frecuencia: "7 dias"
        },
        {
            nombre: "entrepierna",
            duracion: "30 min",
            precioFemenino: 12000,
            precioMasculino: 12000,
            frecuencia: "7 dias"
        },
        {
            nombre: "pantalon de montar",
            duracion: "30 min",
            precioFemenino: 12000,
            precioMasculino: 12000,
            frecuencia: "7 dias"
        },
        {
            nombre: "piernas",
            duracion: "45 min",
            precioFemenino: 12000,
            precioMasculino: 12000,
            frecuencia: "7 dias"
        },
        {
            nombre: "brazos",
            duracion: "30 min",
            precioFemenino: 12000,
            precioMasculino: 12000,
            frecuencia: "7 dias"
        }
    ],
    info_especifica: {
        descripcion: "Masaje manual especializado para estimular el sistema linfático",
        cuidados_especiales: "Se recomienda hidratación abundante antes y después",
        observaciones: "Tratamiento personalizado según las necesidades específicas"
    },
    info_general: {
        descripcionCorta: "Técnica de masaje que favorece la eliminación de líquidos y toxinas",
        descripcionLarga: "El drenaje linfático manual es una técnica especializada de masaje que estimula el sistema linfático para mejorar la eliminación de líquidos retenidos y toxinas. Utiliza movimientos suaves y rítmicos que siguen el recorrido del sistema linfático.",
        sintomas: [
            "Retención de líquidos",
            "Sensación de pesadez",
            "Hinchazón",
            "Mala circulación",
            "Celulitis",
            "Post operatorios (con autorización médica)",
            "Piernas cansadas"
        ],
        resultados: [
            "Reducción de hinchazón",
            "Mejora de la circulación",
            "Eliminación de toxinas",
            "Sensación de ligereza",
            "Reducción de edemas",
            "Mejora del sistema inmunológico",
            "Efecto relajante"
        ],
        contraindicaciones: [
            "Infecciones agudas",
            "Trombosis o problemas circulatorios graves",
            "Cáncer activo",
            "Insuficiencia cardíaca descompensada",
            "Hipertiroidismo no controlado",
            "Embarazo de alto riesgo",
            "Fiebre o procesos infecciosos"
        ],
        cuidados_pre: [
            "Hidratación abundante",
            "No comer inmediatamente antes",
            "Ropa cómoda",
            "Informar sobre condiciones médicas",
            "Vaciar vejiga antes del tratamiento"
        ],
        cuidados_post: [
            "Mantener buena hidratación",
            "Evitar alimentos salados",
            "Caminar ayuda a potenciar efectos",
            "No realizar ejercicio intenso el mismo día",
            "Evitar exposición a calor extremo"
        ],
        beneficios_adicionales: [
            "Fortalece el sistema inmunológico",
            "Ayuda a la desintoxicación natural",
            "Reduce el estrés y la ansiedad",
            "Mejora la calidad del sueño",
            "Acelera la recuperación post ejercicio"
        ],
        recomendaciones_frecuencia: {
            mantenimiento: "1 sesión cada 7-15 días",
            tratamiento_intensivo: "2-3 sesiones por semana",
            post_operatorio: "Según indicación médica",
            deportistas: "1-2 sesiones por semana en período de entrenamiento"
        }
    }
};

export default Drenaje;
