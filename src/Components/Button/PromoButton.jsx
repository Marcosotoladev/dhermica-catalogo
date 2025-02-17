"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const PromoButton = () => {
  return (
    <Link href="/promociones">
      <button className="group relative flex items-center justify-center gap-2 bg-[#484450] hover:bg-[#34baab] text-white rounded-lg px-6 py-3 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">

        {/* Contenido del botón */}
        <Sparkles className="w-5 h-5 text-[#34baab] group-hover:text-white transition-colors" />
        <span className="text-base  font-semibold px-8 py-2">
          Ver Promociones
        </span>
      </button>
    </Link>
  );
};

export default PromoButton;