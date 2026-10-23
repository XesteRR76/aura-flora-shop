import React from 'react';
import { ArrowRight, Sparkles, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { playChime } from '../utils/audio';

export default function Hero({ onOpenAtelier, onExploreCurations }) {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c5a059]/40 bg-[#faf5ec] text-[#a16207] text-[11px] tracking-[0.2em] uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>СЕЗОННЫЙ УРОЖАЙ // ПАРИЖСКИЙ САЛОН</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1c1917] leading-[1.08] tracking-tight">
            Высокая флористика & <br />
            <span className="italic font-light text-[#a16207]">поэзия живых цветов</span>
          </h1>

          <p className="text-base sm:text-lg text-[#57534e] max-w-xl font-light leading-relaxed">
            Редкие селекционные сорта из высокогорных плантаций Эквадора и частных ферм Нидерландов. Ручная сборка ведущими флористами и бережная доставка за 90 минут в климатических кейсах.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => {
                playChime();
                onOpenAtelier();
              }}
              className="px-8 py-4 rounded-full bg-[#1c1917] text-[#faf8f5] hover:bg-[#a16207] transition-all duration-300 text-xs tracking-[0.2em] uppercase font-medium shadow-lg shadow-[#1c1917]/10 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>СОБРАТЬ АВТОРСКИЙ БУКЕТ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#curations"
              onClick={() => playChime()}
              className="px-8 py-4 rounded-full border border-[#c5a059]/50 text-[#1c1917] hover:border-[#1c1917] transition-all text-xs tracking-[0.2em] uppercase font-medium text-center cursor-pointer"
            >
              СМОТРЕТЬ КОЛЛЕКЦИЮ
            </a>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#e7e5e4] text-[#78716c]">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#a16207]" />
              <span className="text-xs font-light tracking-wide">90 мин доставка курьером</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#a16207]" />
              <span className="text-xs font-light tracking-wide">Гарантия свежести 7 дней</span>
            </div>
            <div className="flex items-center space-x-2">
              <HeartHandshake className="w-4 h-4 text-[#a16207]" />
              <span className="text-xs font-light tracking-wide">Прямые поставки с плантаций</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden luxury-glass p-4 border border-[#c5a059]/30 shadow-2xl">
            <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-tr from-[#f5ede0] via-[#ebdcc7] to-[#fbf8f3] overflow-hidden flex flex-col justify-between p-8 border border-white/60">
              <div className="flex justify-between items-start">
                <span className="font-serif italic text-2xl text-[#a16207]">
                  № 08
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c] bg-white/70 px-2.5 py-1 rounded-full border border-[#c5a059]/30">
                  Лимитированная серия
                </span>
              </div>

              <div className="my-auto text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-[#fecdd3]/60 via-[#fed7aa]/50 to-[#dcfce7]/60 flex items-center justify-center p-4 border border-white shadow-inner">
                  <div className="w-20 h-20 rounded-full border border-[#c5a059]/60 flex items-center justify-center">
                    <span className="font-serif italic text-4xl text-[#78350f]">🌸</span>
                  </div>
                </div>
                <h3 className="font-serif text-3xl text-[#1c1917] font-medium tracking-wide">
                  Белая Звезда (L’Étoile Blanche)
                </h3>
                <p className="text-xs text-[#57534e] max-w-xs mx-auto italic font-serif">
                  Французские гардении, пионы сорта Дюшес и серебристый эвкалипт в итальянском шёлке.
                </p>
                <div className="font-serif text-2xl font-semibold text-[#a16207]">
                  16 500 ₽
                </div>
              </div>

              <div className="text-center text-[10px] tracking-[0.2em] text-[#a8a29e] uppercase">
                Atelier Botanique • Москва • Санкт-Петербург
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
