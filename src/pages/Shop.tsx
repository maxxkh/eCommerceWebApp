import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, Grid, List, Star, ShoppingCart, Search, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ShopProps {
  onProductClick: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onProductClick }) => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [category, searchTerm, priceRange, sortBy]);

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {category ? `${category} Collection` : 'All Products'}
          </h1>
          <p className="text-gray-400">
            Discover our quantum-enhanced luxury products
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/40 focus:outline-none transition-colors backdrop-blur-sm"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-xl text-white focus:border-blue-500/40 focus:outline-none transition-colors backdrop-blur-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>

          {/* View Mode */}
          <div className="flex bg-gray-900/50 border border-purple-500/20 rounded-xl overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-blue-500/20 text-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-colors ${
                viewMode === 'list' 
                  ? 'bg-blue-500/20 text-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>

          {/* Filters Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 hover:bg-purple-500/20 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 space-y-6">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-blue-500"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Audio', 'Wearables', 'Vision', 'Computing', 'Display', 'Mobile'].map((cat) => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="accent-purple-500" />
                      <span className="text-gray-300 hover:text-white transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="mb-4 text-gray-400">
              {filteredProducts.length} products found
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={onProductClick}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product) => (
                  <ProductListItem
                    key={product.id}
                    product={product}
                    onProductClick={onProductClick}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{
  product: Product;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}> = ({ product, onProductClick, onAddToCart }) => (
  <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] backdrop-blur-sm cursor-pointer">
    <div onClick={() => onProductClick(product)}>
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {product.originalPrice && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-sm font-bold rounded-full">
            SALE
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

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

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">${product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="ml-2 text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </div>
    </div>
    
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onAddToCart(product);
      }}
      disabled={!product.inStock}
      className="absolute bottom-6 right-6 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-purple-500 hover:to-gold-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <ShoppingCart className="w-5 h-5" />
    </button>
  </div>
);

// Product List Item Component
const ProductListItem: React.FC<{
  product: Product;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}> = ({ product, onProductClick, onAddToCart }) => (
  <div className="group bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
    <div className="flex gap-6">
      <div 
        className="w-32 h-32 rounded-xl overflow-hidden cursor-pointer"
        onClick={() => onProductClick(product)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="flex-1 space-y-3">
        <div>
          <h3 
            className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm">
            {product.description}
          </p>
        </div>

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

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">${product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="ml-2 text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          
          <button 
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-purple-500 hover:to-gold-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Shop;