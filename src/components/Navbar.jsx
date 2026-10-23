import React from 'react';
import { ShoppingBag, Sparkles, PhoneCall, Compass } from 'lucide-react';
import { playChime } from '../utils/audio';

export default function Navbar({ cartCount, onOpenCart, onOpenAtelier }) {
  return (
    <header className="sticky top-0 z-40 luxury-glass border-b border-[#c5a059]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#top"
          onClick={() => playChime()}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center font-serif text-lg font-bold text-[#1c1917] bg-[#faf8f5] group-hover:bg-[#c5a059] group-hover:text-white transition-colors duration-300">
            AF
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.2em] font-medium text-[#1c1917] uppercase">
              Aura Flora
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#8c7b6c] uppercase -mt-1">
              Atelier Botanique
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.18em] uppercase text-[#44403c]">
          <a
            href="#curations"
            onClick={() => playChime()}
            className="hover:text-[#c5a059] transition-colors"
          >
            Curated Blooms
          </a>
          <button
            onClick={() => {
              playChime();
              onOpenAtelier();
            }}
            className="hover:text-[#c5a059] transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Custom Atelier</span>
          </button>
          <a
            href="#philosophy"
            onClick={() => playChime()}
            className="hover:text-[#c5a059] transition-colors"
          >
            Artistry & Farms
          </a>
        </nav>

        {/* Cart & Concierge Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              playChime();
              onOpenCart();
            }}
            className="relative p-2.5 rounded-full border border-[#c5a059]/30 hover:border-[#c5a059] text-[#1c1917] transition-all cursor-pointer bg-white/60"
            title="View Bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#1c1917]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c5a059] text-white rounded-full text-[10px] font-semibold flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              playChime();
              onOpenAtelier();
            }}
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1c1917] text-[#faf8f5] hover:bg-[#c5a059] transition-colors duration-300 text-xs tracking-[0.15em] uppercase font-medium cursor-pointer"
          >
            <span>Order Bespoke</span>
          </button>
        </div>
      </div>
    </header>
  );
}
