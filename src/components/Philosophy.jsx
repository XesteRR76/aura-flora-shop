import React from 'react';
import { Sun, Droplets, Heart } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      title: 'Высокогорья Эквадора',
      desc: 'Наши розы выращиваются на высоте 2800 метров под прямым экваториальным солнцем, благодаря чему бутоны достигают исключительного размера и стойкости.',
      icon: Sun,
    },
    {
      title: 'Биодинамические фермы Голландии',
      desc: 'Пионы, ранункулюсы и дельфиниумы поставляются из семейных питомников без агрессивных химикатов и пестицидов.',
      icon: Droplets,
    },
    {
      title: 'Экологичная упаковка без пластика',
      desc: 'Букеты оборачиваются в переработанную бумагу французского производства, натуральный шелк и транспортируются в гидро-геле на растительной основе.',
      icon: Heart,
    },
  ];

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e7e5e4]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[11px] tracking-[0.25em] text-[#a16207] uppercase font-medium">
            // ЭТОС И ПРОИСХОЖДЕНИЕ
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] tracking-tight">
            Искусство, рождённое живой природой
          </h2>
          <p className="text-sm text-[#78716c] font-light leading-relaxed">
            В Aura Flora мы относимся к цветам не как к обычному товару, а как к мимолётным скульптурам природы. Мы ценим труд садовника, чистоту почвы и поэзию каждого раскрывающегося лепестка.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-white p-6 rounded-2xl border border-[#e7e5e4] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#faf5ec] border border-[#c5a059]/30 flex items-center justify-center text-[#a16207]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1c1917]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#78716c] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
