import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Sparkles, Filter } from 'lucide-react';
import { playChime } from '../utils/audio';

export default function Catalog({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'SIGNATURE', 'ROMANCE', 'EDITORIAL', 'CEREMONY'];

  const items = [
    {
      id: 1,
      title: 'L’Étoile Blanche',
      category: 'SIGNATURE',
      price: 185,
      stems: 'French Gardenias, Cloud Peonies, Silver Dollar Eucalyptus',
      palette: 'Alabaster, Champagne, Soft Sage',
      notes: 'Our flagship curation designed for serene luxury spaces.',
      imageBg: 'from-[#fdf8f4] to-[#f5ebd7]',
    },
    {
      id: 2,
      title: 'Velvet Crimson Nuance',
      category: 'ROMANCE',
      price: 240,
      stems: 'Black Baccara Ecuadorian Roses, Deep Burgundy Ranunculus, Smokebush',
      palette: 'Obsidian Rouge, Blackberry, Smoked Mauve',
      notes: 'An intoxicating romantic composition with dark velvety petals.',
      imageBg: 'from-[#fef2f2] to-[#fee2e2]',
    },
    {
      id: 3,
      title: 'Gilded Solstice',
      category: 'EDITORIAL',
      price: 210,
      stems: 'Sunburst Protea, Apricot Sweet Peas, Golden Phalaenopsis Orchids',
      palette: 'Warm Amber, Honey Gold, Terracotta',
      notes: 'Architectural botanical sculpture for dramatic centerpieces.',
      imageBg: 'from-[#fffbeb] to-[#fef3c7]',
    },
    {
      id: 4,
      title: 'Monet’s Garden Reverie',
      category: 'EDITORIAL',
      price: 195,
      stems: 'Dutch Sky-Blue Delphinium, Hydrangeas, Wild Lilac, Thistle',
      palette: 'Cornflower Blue, Lavender, Meadow Mist',
      notes: 'Inspired by impressionist oil canvases and morning dew.',
      imageBg: 'from-[#eff6ff] to-[#dbeafe]',
    },
    {
      id: 5,
      title: 'Palais Royal Botanica',
      category: 'CEREMONY',
      price: 320,
      stems: 'White Cymbidium Orchids, Lily of the Valley, Calla Lilies',
      palette: 'Ivory, Gilded Olive, Pure Pearl',
      notes: 'Bespoke grand arrangement suited for milestone celebrations.',
      imageBg: 'from-[#f8fafc] to-[#f1f5f9]',
    },
    {
      id: 6,
      title: 'Aura Petite Keepsake',
      category: 'SIGNATURE',
      price: 125,
      stems: 'Spray Roses, Baby Ranunculus, Dried Everlastings',
      palette: 'Blush Pink, Cream, Soft Hazel',
      notes: 'Delicate companion bouquet in artisanal stone ceramic.',
      imageBg: 'from-[#fdf2f8] to-[#fce7f3]',
    },
  ];

  const filtered = selectedCategory === 'ALL'
    ? items
    : items.filter((i) => i.category === selectedCategory);

  return (
    <section id="curations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e7e5e4]">
      <div className="text-center mb-12">
        <span className="text-[11px] tracking-[0.25em] text-[#a16207] uppercase font-medium">
          // ARTISANAL EDITIONS
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] mt-2 tracking-tight">
          Curated Seasonal Bouquets
        </h2>
        <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        <p className="text-sm text-[#78716c] max-w-lg mx-auto mt-4 font-light">
          Each creation is individually arranged by our master florists and dressed in handmade botanical paper with handwritten dedication cards.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playChime();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-1.5 rounded-full text-xs tracking-[0.15em] transition-all cursor-pointer uppercase ${
                selectedCategory === cat
                  ? 'bg-[#1c1917] text-[#faf8f5] shadow'
                  : 'bg-white border border-[#e7e5e4] text-[#78716c] hover:border-[#a16207]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="luxury-card bg-white rounded-2xl overflow-hidden border border-[#e7e5e4] flex flex-col justify-between"
          >
            {/* Visual Box */}
            <div className={`relative aspect-[4/3] bg-gradient-to-br ${item.imageBg} p-6 flex flex-col justify-between border-b border-[#f5f5f4]`}>
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] tracking-wider uppercase font-medium text-[#78716c]">
                  {item.category}
                </span>
                <span className="font-serif text-xl font-semibold text-[#1c1917]">
                  ${item.price}
                </span>
              </div>

              {/* Minimalist flower artwork */}
              <div className="text-center my-auto">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/80 shadow-sm flex items-center justify-center border border-[#c5a059]/40">
                  <span className="text-3xl">💐</span>
                </div>
              </div>

              <div className="text-[10px] tracking-wider text-[#a8a29e] uppercase">
                {item.palette}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#1c1917] font-medium tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#78716c] mt-2 line-clamp-2 leading-relaxed font-light">
                  {item.stems}
                </p>
                <p className="text-[11px] text-[#a8a29e] mt-2 italic font-serif">
                  "{item.notes}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f5f5f4] flex items-center justify-between">
                <span className="text-xs text-[#a16207] tracking-wider font-medium">
                  Fresh Batch Today
                </span>

                <button
                  onClick={() => {
                    playChime('chime');
                    onAddToCart(item);
                  }}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1c1917] text-white hover:bg-[#a16207] transition-colors text-xs tracking-wider uppercase font-medium cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Acquire</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
