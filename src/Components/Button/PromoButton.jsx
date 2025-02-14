"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const PromoButton = () => {
  return (
    <Link href="/promociones">
      <button className="group relative inline-flex items-center justify-center gap-2 bg-[#484450] hover:bg-[#34baab] text-white rounded-lg px-6 py-3 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
        {/* Efecto de brillos */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white to-white/0 animate-shimmer" />
        </div>

        {/* Contenido del botón */}
        <Sparkles className="w-5 h-5 text-[#34baab] group-hover:text-white transition-colors" />
        <span className="text-base sm:text-lg font-semibold">
          Ver Promociones
        </span>
      </button>
    </Link>
  );
};

export default PromoButton;