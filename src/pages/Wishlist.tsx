import React, { useState } from 'react';
import { Heart, ShoppingCart, Trash2, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface WishlistProps {
  onProductClick: (product: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ onProductClick }) => {
  const { addToCart } = useCart();
  // Mock wishlist items - in a real app, this would come from context/state
  const [wishlistItems, setWishlistItems] = useState(products.slice(0, 3));

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const moveToCart = (product: Product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <Heart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-400 mb-8">
            Save your favorite quantum products for later and never lose track of what you love.
          </p>
          <button 
            onClick={() => window.location.href = '/shop'}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)]"
          >
            Discover Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              My Wishlist
            </h1>
            <p className="text-gray-400">
              {wishlistItems.length} saved {wishlistItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700/20 border border-gray-600 rounded-xl text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share Wishlist</span>
            </button>
            <button 
              onClick={() => {
                wishlistItems.forEach(item => addToCart(item));
                setWishlistItems([]);
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:from-purple-500 hover:to-gold-500 transition-all duration-300"
            >
              Add All to Cart
            </button>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] backdrop-blur-sm"
            >
              {/* Remove from Wishlist */}
              <button 
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4 text-red-400" />
              </button>

              {/* Product Image */}
              <div 
                className="relative mb-6 overflow-hidden rounded-xl cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Wishlist Heart */}
                <div className="absolute top-4 left-4 p-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30">
                  <Heart className="w-5 h-5 text-red-400 fill-current" />
                </div>

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-sm font-bold rounded-full">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div onClick={() => onProductClick(product)} className="cursor-pointer">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    product.inStock 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => moveToCart(product)}
                    disabled={!product.inStock}
                    className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-purple-500 hover:to-gold-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Move to Cart</span>
                  </button>
                  
                  <button className="p-3 bg-gray-700/20 border border-gray-600 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Added Date */}
                <div className="text-xs text-gray-500 text-center">
                  Added 3 days ago
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-16 border-t border-purple-500/20 pt-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(3, 7).map((product) => (
              <div 
                key={product.id}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-4 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-white">
                    ${product.price.toLocaleString()}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setWishlistItems(prev => [...prev, product]);
                    }}
                    className="p-2 bg-gray-700/20 hover:bg-red-500/20 rounded-full transition-colors"
                  >
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;