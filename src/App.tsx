import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Product } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          {/* Background gradients */}
          <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,191,255,0.1),transparent_50%)] pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(138,43,226,0.1),transparent_50%)] pointer-events-none" />
          
          <Header onCartToggle={() => setIsCartOpen(!isCartOpen)} />
          
          <Routes>
            <Route path="/" element={<Home onProductClick={setSelectedProduct} />} />
            <Route path="/shop" element={<Shop onProductClick={setSelectedProduct} />} />
            <Route path="/shop/:category" element={<Shop onProductClick={setSelectedProduct} />} />
            <Route path="/product/:id" element={<ProductDetail onProductClick={setSelectedProduct} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wishlist" element={<Wishlist onProductClick={setSelectedProduct} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <Footer />

          {selectedProduct && (
            <ProductModal 
              product={selectedProduct} 
              onClose={() => setSelectedProduct(null)} 
            />
          )}
          
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;