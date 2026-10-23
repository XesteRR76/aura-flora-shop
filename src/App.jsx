import React, { useState } from 'react';
import FloatingPetalsCanvas from './components/FloatingPetalsCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import CustomAtelier from './components/CustomAtelier';
import Philosophy from './components/Philosophy';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToAtelier = () => {
    document.getElementById('atelier')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="top" className="relative min-h-screen bg-[#faf8f5] text-[#1c1917] selection:bg-[#c5a059]/25 selection:text-[#1c1917]">
      {/* Delicate floating petals canvas */}
      <FloatingPetalsCanvas />

      {/* Top Header */}
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAtelier={handleScrollToAtelier}
      />

      <main className="relative z-10">
        <Hero
          onOpenAtelier={handleScrollToAtelier}
          onExploreCurations={() => {
            document.getElementById('curations')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <Catalog onAddToCart={handleAddToCart} />
        <CustomAtelier onAddToCart={handleAddToCart} />
        <Philosophy />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
