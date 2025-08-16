import React, { useState } from 'react';
import { X, Star, ShoppingCart, Plus, Minus, Zap } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-purple-500/30 overflow-hidden backdrop-blur-xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="grid lg:grid-cols-2 h-full">
          {/* Product Images */}
          <div className="p-8 flex flex-col">
            <div className="relative mb-6 group">
              <img 
                src={selectedImage} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(product.image)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === product.image 
                      ? 'border-blue-400' 
                      : 'border-gray-600 hover:border-purple-400'
                  }`}
                >
                  <img 
                    src={product.image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
                  {product.category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Zap className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-purple-500/20 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-white">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-3 text-gray-500 line-through text-xl">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.inStock 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300">Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="w-12 text-center text-white font-semibold">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-gold-500 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;