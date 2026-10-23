import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { playChime } from '../utils/audio';

export default function Catalog({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('ВСЕ');

  const categories = ['ВСЕ', 'ФЛАГМАНЫ', 'РОМАНТИКА', 'ЭДИТОРИАЛ', 'ТОРЖЕСТВО'];

  const items = [
    {
      id: 1,
      title: 'Белая Звезда (L’Étoile Blanche)',
      category: 'ФЛАГМАНЫ',
      price: 16500,
      stems: 'Французские гардении, белоснежные пионы, серебристый эвкалипт',
      palette: 'Алебастр, шампань, бледный шалфей',
      notes: 'Наш флагманский букет для светлых и спокойных пространств.',
      imageBg: 'from-[#fdf8f4] to-[#f5ebd7]',
    },
    {
      id: 2,
      title: 'Бархатный Багрянец',
      category: 'РОМАНТИКА',
      price: 21900,
      stems: 'Эквадорские розы Black Baccara, бордовые ранункулюсы, скумпия',
      palette: 'Винный рубин, ежевика, пепельный мокко',
      notes: 'Чувственная драматическая композиция с бархатистыми лепестками.',
      imageBg: 'from-[#fef2f2] to-[#fee2e2]',
    },
    {
      id: 3,
      title: 'Золотое Солнцестояние',
      category: 'ЭДИТОРИАЛ',
      price: 18400,
      stems: 'Солнечная протея, абрикосовый душистый горошек, золотые орхидеи',
      palette: 'Теплый янтарь, медовое золото, терракота',
      notes: 'Архитектурный ботанический акцент для статусных интерьеров.',
      imageBg: 'from-[#fffbeb] to-[#fef3c7]',
    },
    {
      id: 4,
      title: 'Грёзы Сада Моне',
      category: 'ЭДИТОРИАЛ',
      price: 17200,
      stems: 'Голландский дельфиниум, лавандовая гортензия, полевой чертополох',
      palette: 'Васильковый, нежная лаванда, утренняя роса',
      notes: 'Вдохновлен импрессионистскими полотнами и прудами Живерни.',
      imageBg: 'from-[#eff6ff] to-[#dbeafe]',
    },
    {
      id: 5,
      title: 'Пале-Рояль Ботаника',
      category: 'ТОРЖЕСТВО',
      price: 28000,
      stems: 'Белоснежный цимбидиум, ландыши, каллы, дикий жасмин',
      palette: 'Слоновая кость, золото, чистый перламутр',
      notes: 'Грандиозная композиция для исключительных торжеств и юбилеев.',
      imageBg: 'from-[#f8fafc] to-[#f1f5f9]',
    },
    {
      id: 6,
      title: 'Нежная Аура',
      category: 'ФЛАГМАНЫ',
      price: 11500,
      stems: 'Пионовидные кустовые розы, ранункулюсы, сухоцветы',
      palette: 'Пудровый розовый, сливки, мягкий орех',
      notes: 'Утонченный компактный букет в фактурной керамике.',
      imageBg: 'from-[#fdf2f8] to-[#fce7f3]',
    },
  ];

  const filtered = selectedCategory === 'ВСЕ'
    ? items
    : items.filter((i) => i.category === selectedCategory);

  return (
    <section id="curations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e7e5e4]">
      <div className="text-center mb-12">
        <span className="text-[11px] tracking-[0.25em] text-[#a16207] uppercase font-medium">
          // АВТОРСКИЕ КОЛЛЕКЦИИ
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] mt-2 tracking-tight">
          Сезонные авторские букеты
        </h2>
        <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        <p className="text-sm text-[#78716c] max-w-lg mx-auto mt-4 font-light">
          Каждая композиция индивидуально собирается нашими мастерами и оформляется в бумагу ручной работы с подписанной каллиграфом карточкой.
        </p>

        {/* Filter Pills */}
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="luxury-card bg-white rounded-2xl overflow-hidden border border-[#e7e5e4] flex flex-col justify-between"
          >
            <div className={`relative aspect-[4/3] bg-gradient-to-br ${item.imageBg} p-6 flex flex-col justify-between border-b border-[#f5f5f4]`}>
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] tracking-wider uppercase font-medium text-[#78716c]">
                  {item.category}
                </span>
                <span className="font-serif text-xl font-semibold text-[#1c1917]">
                  {item.price.toLocaleString('ru-RU')} ₽
                </span>
              </div>

              <div className="text-center my-auto">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/80 shadow-sm flex items-center justify-center border border-[#c5a059]/40">
                  <span className="text-3xl">💐</span>
                </div>
              </div>

              <div className="text-[10px] tracking-wider text-[#a8a29e] uppercase">
                {item.palette}
              </div>
            </div>

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
                  Свежая поставка сегодня
                </span>

                <button
                  onClick={() => {
                    playChime('chime');
                    onAddToCart(item);
                  }}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1c1917] text-white hover:bg-[#a16207] transition-colors text-xs tracking-wider uppercase font-medium cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>В корзину</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
