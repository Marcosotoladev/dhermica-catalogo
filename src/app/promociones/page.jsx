"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  CalendarDays,
  Info,
  User2,
  UserCheck,
  ChevronDown,
  ActivitySquare,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// Importamos los datos
import Promociones from '../../Data/Promociones/Promociones';

const PromoCard = ({ tratamiento }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasVariants = Array.isArray(tratamiento.variantes);
  const precioBase = hasVariants 
    ? tratamiento.variantes[0].precioFemenino 
    : tratamiento.precioFemenino;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      {/* Encabezado */}
      <div className="bg-[#484450] p-4 sm:p-6 relative">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
          <h3 className="text-white text-lg sm:text-xl font-bold capitalize flex items-center gap-2">
            <Sparkles className="text-[#34baab] h-4 w-4 sm:h-5 sm:w-5" />
            {tratamiento.nombre}
          </h3>
          <span className="bg-[#34baab] text-white px-3 py-1 rounded-full text-sm self-start">
            {tratamiento.metodo}
          </span>
        </div>
        <p className="text-[#c4c8c5] mt-2 text-sm sm:text-base">
          {tratamiento.info_especifica.descripcion}
        </p>
      </div>

      {/* Información Principal */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          {/* Duración y Frecuencia */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[#466067] gap-2">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#459a96]" />
              <span className="text-sm">{hasVariants ? tratamiento.variantes[0].duracion : tratamiento.duracion}</span>
            </div>
            {(hasVariants ? tratamiento.variantes[0].frecuencia : tratamiento.frecuencia) && (
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#459a96]" />
                <span className="text-sm">Cada {hasVariants ? tratamiento.variantes[0].frecuencia : tratamiento.frecuencia}</span>
              </div>
            )}
          </div>

          {/* Zonas */}
          <div className="bg-[#c4c8c5]/20 p-3 sm:p-4 rounded-lg">
            <h4 className="text-[#484450] font-semibold mb-2 text-sm sm:text-base">Zonas incluidas:</h4>
            <div className="flex flex-wrap gap-2">
              {(hasVariants ? tratamiento.variantes[0].zonas : tratamiento.zonas).map((zona, index) => (
                <span 
                  key={index}
                  className="bg-[#466067] text-white px-2 py-1 rounded-full text-xs sm:text-sm"
                >
                  {zona}
                </span>
              ))}
            </div>
          </div>

          {/* Precios */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mt-2">
            <div className="flex flex-wrap gap-4">
              {precioBase && (
                <div className="flex items-center gap-2">
                  <User2 size={16} className="text-[#459a96]" />
                  <span className="text-xl sm:text-2xl font-bold text-[#484450]">
                    ${precioBase.toLocaleString()}
                  </span>
                </div>
              )}
              {(hasVariants ? tratamiento.variantes[0].precioMasculino : tratamiento.precioMasculino) && (
                <div className="flex items-center gap-2">
                  <UserCheck size={16} className="text-[#459a96]" />
                  <span className="text-xl sm:text-2xl font-bold text-[#484450]">
                    ${(hasVariants ? tratamiento.variantes[0].precioMasculino : tratamiento.precioMasculino).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#34baab] hover:text-[#459a96] transition-colors self-end sm:self-auto"
            >
              <ChevronDown 
                size={20} 
                className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Información Expandible */}
        <div className={`
          mt-4 space-y-4 transition-all duration-300
          ${isExpanded ? 'opacity-100 max-h-[600px]' : 'opacity-0 max-h-0 overflow-hidden'}
        `}>
          {/* Cuidados Especiales */}
          <div className="flex items-start gap-2">
            <AlertCircle size={16} className="text-[#FFD700] mt-1 flex-shrink-0" />
            <p className="text-[#466067] text-sm">
              {tratamiento.info_especifica.cuidados_especiales}
            </p>
          </div>

          {/* Observaciones */}
          <div className="flex items-start gap-2">
            <Info size={16} className="text-[#459a96] mt-1 flex-shrink-0" />
            <p className="text-[#466067] text-sm">
              {tratamiento.info_especifica.observaciones}
            </p>
          </div>

          {/* Variantes adicionales si existen */}
          {hasVariants && tratamiento.variantes.length > 1 && (
            <div className="mt-4">
              <h4 className="text-[#484450] font-semibold mb-2 text-sm">Otras opciones:</h4>
              {tratamiento.variantes.slice(1).map((variante, index) => (
                <div key={index} className="bg-[#c4c8c5]/20 p-3 sm:p-4 rounded-lg mt-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {variante.zonas.map((zona, zIndex) => (
                      <span 
                        key={zIndex}
                        className="bg-[#466067] text-white px-2 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {zona}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-[#484450] text-sm">
                    <span>Femenino: ${variante.precioFemenino.toLocaleString()}</span>
                    {variante.precioMasculino && (
                      <span>Masculino: ${variante.precioMasculino.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PromotionsGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#484450] mb-3 sm:mb-4">
          {Promociones.categoria}
        </h2>
        <p className="text-[#466067] max-w-2xl mx-auto text-sm sm:text-base">
          {Promociones.info_general.descripcionCorta}
        </p>
      </div>

      {/* Grid de Promociones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {Promociones.tratamientos.map((tratamiento) => (
          <PromoCard key={tratamiento.nombre} tratamiento={tratamiento} />
        ))}
      </div>

      {/* Información General */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Beneficios */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h3 className="text-[#484450] font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-[#34baab]" />
            Beneficios
          </h3>
          <ul className="space-y-2">
            {Promociones.info_general.beneficios.map((beneficio, index) => (
              <li key={index} className="text-[#466067] text-sm flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#34baab] mt-1 flex-shrink-0" />
                {beneficio}
              </li>
            ))}
          </ul>
        </div>

        {/* Condiciones */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h3 className="text-[#484450] font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
            <ActivitySquare className="text-[#FFD700]" />
            Condiciones
          </h3>
          <ul className="space-y-2">
            {Promociones.info_general.condiciones_generales.map((condicion, index) => (
              <li key={index} className="text-[#466067] text-sm flex items-start gap-2">
                <AlertCircle size={14} className="text-[#FFD700] mt-1 flex-shrink-0" />
                {condicion}
              </li>
            ))}
          </ul>
        </div>

        {/* Recomendaciones */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h3 className="text-[#484450] font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
            <Info className="text-[#459a96]" />
            Recomendaciones
          </h3>
          <ul className="space-y-2">
            {Promociones.info_general.recomendaciones_generales.map((recomendacion, index) => (
              <li key={index} className="text-[#466067] text-sm flex items-start gap-2">
                <Info size={14} className="text-[#459a96] mt-1 flex-shrink-0" />
                {recomendacion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromotionsGrid;