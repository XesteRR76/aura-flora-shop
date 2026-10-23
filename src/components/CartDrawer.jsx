import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChime } from '../utils/audio';

export default function CartDrawer({ isOpen, onClose, cart, onRemoveFromCart, onClearCart }) {
  const [recipient, setRecipient] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('Завтра утром (9:00 - 12:00)');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!recipient || !address) return;

    setIsOrdered(true);
    playChime('success');
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#f4d6da', '#5b6b55'],
      });
    } catch (_) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#faf8f5] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto border-l border-[#e7e5e4]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e7e5e4] pb-4">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-[#a16207]" />
            <h3 className="font-serif text-2xl text-[#1c1917]">Ваша корзина</h3>
          </div>
          <button
            onClick={() => {
              playChime();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-white text-[#78716c] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isOrdered ? (
          <div className="flex-1 py-6 space-y-6 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-[#a8a29e] space-y-2">
                <p className="font-serif text-lg">Корзина пока пуста.</p>
                <p className="text-xs">Выберите букет из коллекции или соберите свой в ателье.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="bg-white p-4 rounded-xl border border-[#e7e5e4] flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <h4 className="font-serif text-lg text-[#1c1917]">{item.title}</h4>
                      <p className="text-xs text-[#78716c] line-clamp-1">{item.stems}</p>
                      <div className="font-serif text-sm font-semibold text-[#a16207] mt-1">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(idx)}
                      className="p-2 text-[#a8a29e] hover:text-red-500 transition-colors cursor-pointer"
                      title="Удалить"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Delivery Form */}
                <form onSubmit={handleCheckout} className="space-y-3 pt-4 border-t border-[#e7e5e4]">
                  <div>
                    <label className="block text-[11px] font-serif uppercase tracking-wider text-[#1c1917] mb-1">
                      Имя получателя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="напр. Анна Смирнова"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full bg-white border border-[#e7e5e4] rounded-lg px-3 py-2 text-xs text-[#1c1917] focus:outline-none focus:border-[#a16207]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-serif uppercase tracking-wider text-[#1c1917] mb-1">
                      Адрес доставки (курьер в перчатках)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="напр. Тверская 12, подъезд 2, кв. 45"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-white border border-[#e7e5e4] rounded-lg px-3 py-2 text-xs text-[#1c1917] focus:outline-none focus:border-[#a16207]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-serif uppercase tracking-wider text-[#1c1917] mb-1">
                      Время доставки
                    </label>
                    <select
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-[#e7e5e4] rounded-lg px-3 py-2 text-xs text-[#1c1917] focus:outline-none focus:border-[#a16207]"
                    >
                      <option>Экспресс-доставка за 90 минут</option>
                      <option>Завтра утром (9:00 - 12:00)</option>
                      <option>Завтра днём (13:00 - 17:00)</option>
                      <option>Завтра вечером (18:00 - 22:00)</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t border-[#e7e5e4] flex justify-between items-baseline">
                    <span className="font-serif uppercase text-xs tracking-wider text-[#78716c]">
                      Итого к оплате
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#1c1917]">
                      {total.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-2 rounded-full bg-[#1c1917] text-[#faf8f5] hover:bg-[#a16207] transition-all text-xs tracking-[0.2em] uppercase font-medium shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Оформить доставку</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f0fdf4] border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-3xl text-[#1c1917]">Букет оформлен</h4>
            <p className="text-xs text-[#57534e] max-w-xs mx-auto font-light">
              Флористы приступили к срезке и составлению букета для <strong className="text-[#1c1917]">{recipient}</strong>. Курьер прибудет по адресу {address}.
            </p>
            <button
              onClick={() => {
                onClearCart();
                setIsOrdered(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#1c1917] text-white text-xs tracking-wider uppercase cursor-pointer"
            >
              Вернуться в каталог
            </button>
          </div>
        )}

        <div className="text-[10px] text-center text-[#a8a29e] uppercase tracking-widest pt-4 border-t border-[#e7e5e4]">
          Aura Flora • Премиальная гарантия свежести
        </div>
      </div>
    </div>
  );
}
