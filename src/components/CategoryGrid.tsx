import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

const CategoryGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent mb-4">
            Explore Categories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover cutting-edge technology across our curated collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              onClick={() => navigate(`/shop/${category.name.toLowerCase().replace(' ', '-')}`)}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-gold-500/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] backdrop-blur-sm cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {category.count} Products
                </p>
                
                {/* Hover Effect */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-gold-400 to-purple-400 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-gold-500/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;