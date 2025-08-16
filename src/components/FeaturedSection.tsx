import React from 'react';
import { Sparkles, Zap, Shield } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

interface FeaturedSectionProps {
  onProductClick: (product: Product) => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onProductClick }) => {
  const featuredProduct = products[4]; // Holographic Projector

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={featuredProduct.image} 
                alt={featuredProduct.name}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 p-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 animate-pulse">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div className="absolute top-8 right-8 p-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 animate-bounce">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div className="absolute bottom-8 right-8 p-3 bg-gold-500/20 backdrop-blur-sm rounded-full border border-gold-500/30 animate-ping">
                <Shield className="w-6 h-6 text-gold-400" />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 -z-10" />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
                Featured Product
              </span>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {featuredProduct.name}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {featuredProduct.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {featuredProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-6 border-t border-purple-500/20">
              <div>
                <span className="text-4xl font-bold text-white">${featuredProduct.price.toLocaleString()}</span>
                <span className="block text-gray-400 text-sm">Premium Technology</span>
              </div>
              <button 
                onClick={() => onProductClick(featuredProduct)}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] relative overflow-hidden"
              >
                <span className="relative z-10">View Details</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;