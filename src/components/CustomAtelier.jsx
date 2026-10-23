import React, { useState } from 'react';
import { Sparkles, Sliders, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { playChime } from '../utils/audio';

export default function CustomAtelier({ onAddToCart }) {
  const [selectedFlower, setSelectedFlower] = useState('peonies');
  const [selectedVessel, setSelectedVessel] = useState('vase');
  const [selectedRibbon, setSelectedRibbon] = useState('silk');
  const [cardMessage, setCardMessage] = useState('');

  const flowers = [
    { id: 'peonies', name: 'Dutch Cloud Peonies', price: 110, desc: 'Lush, layered pastel petals with sweet natural fragrance.' },
    { id: 'roses', name: 'Ecuadorian Black Baccara Roses', price: 130, desc: 'Velvety deep-crimson petals grown at 2,800m altitude.' },
    { id: 'orchids', name: 'Golden Phalaenopsis Orchids', price: 145, desc: 'Graceful architectural stems lasting up to 3 weeks.' },
    { id: 'gardenias', name: 'French Imperial Gardenias', price: 120, desc: 'Pure white blossoms with intense velvety aroma.' },
  ];

  const vessels = [
    { id: 'paper', name: 'Hand-torn Craft Paper', price: 20 },
    { id: 'vase', name: 'Handmade Matte Ceramic Vase', price: 65 },
    { id: 'crystal', name: 'Venetian Fluted Glass Urn', price: 95 },
  ];

  const currentFlower = flowers.find((f) => f.id === selectedFlower);
  const currentVessel = vessels.find((v) => v.id === selectedVessel);
  const totalPrice = (currentFlower?.price || 100) + (currentVessel?.price || 20);

  const handleAddBespoke = () => {
    playChime('success');
    onAddToCart({
      id: Date.now(),
      title: `Bespoke: ${currentFlower.name}`,
      price: totalPrice,
      stems: `Focal: ${currentFlower.name} | Vessel: ${currentVessel.name} | Card: "${cardMessage || 'None'}"`,
      category: 'BESPOKE',
      imageBg: 'from-[#faf5ec] to-[#f5ebd7]',
    });
  };

  return (
    <section id="atelier" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e7e5e4]">
      <div className="luxury-glass p-8 sm:p-12 rounded-3xl border border-[#c5a059]/30 relative overflow-hidden">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#faf5ec] border border-[#c5a059]/40 text-[#a16207] text-[10px] tracking-[0.2em] uppercase font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMPOSER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1917] tracking-tight">
            The Bespoke Botanical Atelier
          </h2>
          <p className="text-sm text-[#78716c] mt-2 font-light">
            Design a one-of-a-kind arrangement. Select your rare botanical heart, artisanal vessel, and personalized calligraphy note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Selectors */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Focal Bloom */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-[0.15em] text-[#1c1917] mb-3">
                1. Select Focal Botanical Heart
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {flowers.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      playChime();
                      setSelectedFlower(f.id);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedFlower === f.id
                        ? 'border-[#a16207] bg-white shadow-md ring-1 ring-[#a16207]/30'
                        : 'border-[#e7e5e4] bg-white/70 hover:border-[#a16207]/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-base font-medium text-[#1c1917]">
                        {f.name}
                      </span>
                      <span className="text-xs font-semibold text-[#a16207]">
                        +${f.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#78716c] mt-1 font-light leading-snug">
                      {f.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Presentation Vessel */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-[0.15em] text-[#1c1917] mb-3">
                2. Presentation & Vessel
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {vessels.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      playChime();
                      setSelectedVessel(v.id);
                    }}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedVessel === v.id
                        ? 'border-[#a16207] bg-white shadow-md'
                        : 'border-[#e7e5e4] bg-white/70 hover:border-[#a16207]/50'
                    }`}
                  >
                    <div className="font-serif text-sm font-medium text-[#1c1917]">
                      {v.name}
                    </div>
                    <div className="text-xs font-semibold text-[#a16207] mt-1">
                      +${v.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Calligraphy Card */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-[0.15em] text-[#1c1917] mb-2">
                3. Handwritten Calligraphy Dedication
              </label>
              <textarea
                rows={2}
                placeholder="Inscribe a personal message for our in-house calligrapher (e.g. 'To my dearest, forever in bloom...')"
                value={cardMessage}
                onChange={(e) => setCardMessage(e.target.value)}
                className="w-full rounded-xl border border-[#e7e5e4] bg-white p-3 text-xs text-[#1c1917] focus:outline-none focus:border-[#a16207] font-serif"
              />
            </div>
          </div>

          {/* Live Composition Summary Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#c5a059]/40 shadow-xl space-y-6">
            <div className="border-b border-[#f5f5f4] pb-4">
              <span className="text-[10px] tracking-[0.2em] text-[#a8a29e] uppercase">
                COMPOSITION PREVIEW
              </span>
              <h3 className="font-serif text-2xl text-[#1c1917] font-medium mt-1">
                Bespoke Order Summary
              </h3>
            </div>

            <div className="space-y-3 text-xs text-[#57534e]">
              <div className="flex justify-between">
                <span>Focal Stems:</span>
                <span className="font-medium text-[#1c1917]">{currentFlower?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Vessel:</span>
                <span className="font-medium text-[#1c1917]">{currentVessel?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Calligraphy:</span>
                <span className="italic text-[#78716c]">
                  {cardMessage ? `"${cardMessage.substring(0, 25)}..."` : 'Standard Wax Seal Card'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f5f5f4] flex items-baseline justify-between">
              <span className="font-serif text-sm uppercase tracking-wider text-[#78716c]">
                Calculated Total
              </span>
              <span className="font-serif text-3xl font-semibold text-[#1c1917]">
                ${totalPrice}
              </span>
            </div>

            <button
              onClick={handleAddBespoke}
              className="w-full py-4 rounded-full bg-[#1c1917] text-[#faf8f5] hover:bg-[#a16207] transition-all text-xs tracking-[0.2em] uppercase font-medium shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Acquire Bespoke Creation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
