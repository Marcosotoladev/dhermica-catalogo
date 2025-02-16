const HiFu = {
    id: "ApHiFu",
    categoria: "Aparatologia",
    nombre: "HiFu",
    metodo: "hifu 22d",
    zonas: [
        {
            nombre: "rostro",
            duracion: "40 min",
            precioFemenino: 35000,
            precioMasculino: 35000,
            frecuencia: "90 dias"
        },
        {
            nombre: "papada",
            duracion: "15 min",
            precioFemenino: 10000,
            precioMasculino: 10000,
            frecuencia: "90 dias"
        },
        {
            nombre: "escote",
            duracion: "15 min",
            precioFemenino: 10000,
            precioMasculino: 10000,
            frecuencia: "90 dias"
        }
    ],
    info_especifica: {
        descripcion: "Tecnología de ultrasonido focalizado de alta intensidad para efecto lifting",
        equipamiento: "Equipo Hi Fu 22d última generación",
        tipo_tecnologia: "HIFU (Ultrasonido Focalizado de Alta Intensidad)",
        parametros_tecnicos: {
            tipo_energia: "Ultrasonido focalizado",
            frecuencia: "22 MHz",
            profundidades_trabajo: ["1.5mm", "3.0mm", "4.5mm"],
            potencia: "Ajustable según zona y profundidad",
            cartuchos: "Múltiples según área a tratar"
        },
        cuidados_especiales: "No requiere tiempo de recuperación, pero se recomienda evitar el sol directo",
        observaciones: "Los resultados se hacen más evidentes con el paso del tiempo, con un máximo de 3 a 6 meses"
    },
    info_general: {
        descripcionCorta: "Lifting no quirúrgico mediante ultrasonido focalizado de alta intensidad",
        descripcionLarga: "El Hi Fu es un sistema avanzado que utiliza ultrasonido focalizado de alta intensidad para tensar y reafirmar la piel desde las capas más profundas. Actúa a diferentes niveles de profundidad, estimulando la producción natural de colágeno y elastina para lograr un efecto lifting sin cirugía.",
        caracteristicas_tecnicas: [
            "Tecnología HIFU de 22MHz",
            "Sistema de visualización en tiempo real",
            "Múltiples profundidades de trabajo",
            "Control térmico integrado",
            "Cartografía de tratamiento 3D",
            "Sistema de seguridad avanzado"
        ],
        ventajas_tecnologia: [
            "No invasivo",
            "Sin tiempo de recuperación",
            "Resultados progresivos y naturales",
            "Efecto lifting duradero",
            "Tratamiento personalizable",
            "Estimulación de colágeno natural"
        ],
        sintomas: [
            "Flacidez facial",
            "Pérdida de elasticidad en la piel",
            "Líneas finas o arrugas",
            "Piel de cuello y papada flácida"
        ],
        resultados: [
            "Efecto lifting inmediato",
            "Piel más firme y tensa",
            "Reducción de flacidez en zonas tratadas",
            "Mejora en la producción de colágeno"
        ],
        contraindicaciones: [
            "Embarazo y lactancia",
            "Enfermedades autoinmunes",
            "Enfermedades crónicas de la piel",
            "Tatuajes en la zona tratada",
            "Heridas abiertas"
        ],
        cuidados_pre: [
            "Evitar el sol directo 24 horas antes del tratamiento",
            "No aplicar cremas o lociones en las zonas a tratar",
            "Evitar tomar aspirinas 3 días antes"
        ],
        cuidados_post: [
            "Evitar la exposición al sol durante 48 horas",
            "Usar protector solar SPF50+",
            "Evitar masajes o frotamientos en las zonas tratadas",
            "No realizar ejercicio intenso el mismo día"
        ]
    }
};

export default HiFu;

