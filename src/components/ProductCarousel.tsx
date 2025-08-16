import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCarouselProps {
  title: string;
  onProductClick: (product: Product) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, onProductClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(products.length - itemsPerView, 0) : prev - 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);
  if (visibleProducts.length < itemsPerView) {
    visibleProducts.push(...products.slice(0, itemsPerView - visibleProducts.length));
  }

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product, index) => (
            <div 
              key={`${product.id}-${index}`} 
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] backdrop-blur-sm"
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => onProductClick(product)}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/50 transition-colors"
                  >
                    <Star className="w-4 h-4" />
                  </button>
                </div>

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-sm font-bold rounded-full">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 
                    className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-purple-500 hover:to-gold-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="text-red-400 text-sm font-semibold">Out of Stock</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;