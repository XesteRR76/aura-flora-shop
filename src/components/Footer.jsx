import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-[#faf8f5] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="w-8 h-8 rounded-full border border-[#c5a059] flex items-center justify-center font-serif text-sm text-[#c5a059]">
              AF
            </div>
            <span className="font-serif text-xl tracking-[0.2em] uppercase">
              Aura Flora
            </span>
          </div>
          <p className="text-xs text-[#a8a29e] font-light max-w-sm">
            Haute floristry atelier. Crafting poetic botanical statements for discerning events and residences.
          </p>
        </div>

        <div className="text-center md:text-right space-y-1 text-xs text-[#a8a29e] font-light">
          <div>Paris • Amsterdam • Quito • New York</div>
          <div>Concierge: atelier@aura-flora.boutique</div>
          <div className="text-[10px] text-[#78716c] pt-2">
            © 2026 Aura Flora Atelier Botanique. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
