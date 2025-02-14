const PuntaDiamante = {
    id: "ApPuntaDiamante",
    categoria: "Aparatologia",
    nombre: "Punta de diamante",
    metodo: "microdermoabrasión con punta de diamante",
    zonas: [
        {
            nombre: "rostro",
            duracion: "60 min",
            precioFemenino: 8500,
            precioMasculino: 8500,
            frecuencia: "7 dias"
        },
        {
            nombre: "cuerpo",
            duracion: "120 min",
            precioFemenino: 15000,
            precioMasculino: 15000,
            frecuencia: "90 dias"
        }
    ],
    info_especifica: {
        descripcion: "Sistema de microdermoabrasión con puntas de diamante de diferentes granulaciones",
        equipamiento: "Equipo de microdermoabrasión con puntas de diamante intercambiables",
        tipo_tecnologia: "Microdermoabrasión con vacío",
        parametros_tecnicos: {
            tipo_puntas: "Diamante natural o sintético",
            granulaciones: [
                "Fina (menor abrasión)",
                "Media (abrasión moderada)",
                "Gruesa (mayor abrasión)"
            ],
            sistema_succion: "Ajustable según zona y necesidad",
            filtro: "Desechable con indicador de saturación"
        },
        cuidados_especiales: "Evitar exposición solar durante 24 horas posteriores al tratamiento",
        observaciones: "El tratamiento puede realizarse tanto en la cara como en el cuerpo, dependiendo de las necesidades del paciente."
    },
    info_general: {
        descripcionCorta: "Tratamiento de renovación celular mediante microdermoabrasión con puntas de diamante",
        descripcionLarga: "Sistema que combina la exfoliación mecánica controlada mediante puntas de diamante con un sistema de vacío que elimina las células muertas. Permite tratar diferentes problemáticas de la piel tanto facial como corporal, mejorando su textura y apariencia.",
        caracteristicas_tecnicas: [
            "Puntas de diamante intercambiables",
            "Sistema de vacío regulable",
            "Filtro de residuos",
            "Panel digital de control",
            "Manípulo ergonómico",
            "Sistema de seguridad automático"
        ],
        ventajas_tecnologia: [
            "Exfoliación controlada y precisa",
            "No utiliza productos abrasivos",
            "Adaptable a diferentes tipos de piel",
            "Resultados visibles inmediatos",
            "Mínimo tiempo de recuperación",
            "Permite tratamientos progresivos"
        ],
        sintomas: [
            "Piel opaca",
            "Textura irregular",
            "Poros dilatados",
            "Manchas superficiales"
        ],
        resultados: [
            "Piel más suave y luminosa",
            "Reducción de manchas y cicatrices",
            "Mejora en la textura de la piel",
            "Poros más pequeños"
        ],
        contraindicaciones: [
            "Heridas abiertas o infecciones",
            "Acné activo severo",
            "Rosácea en fase activa",
            "Dermatitis o eccemas",
            "Quemaduras solares",
            "Tratamientos recientes con ácidos",
            "Tendencia a queloides"
        ],
        cuidados_pre: [
            "Evitar tratamientos agresivos previos",
            "No exponer la piel al sol durante 24 horas antes",
            "No usar productos con ácido 24 horas antes"
        ],
        cuidados_post: [
            "Evitar la exposición al sol durante 24 horas",
            "Usar protector solar SPF50+",
            "No aplicar maquillaje inmediatamente después",
            "Mantener la piel hidratada"
        ]
    }
};

export default PuntaDiamante;
