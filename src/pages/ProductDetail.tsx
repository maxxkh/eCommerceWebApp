import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Plus, Minus, Zap, Shield, Award, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import ProductCarousel from '../components/ProductCarousel';

interface ProductDetailProps {
  onProductClick: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onProductClick }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate('/shop')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:scale-105 transition-transform"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-400">
          <span className="cursor-pointer hover:text-white" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-white" onClick={() => navigate('/shop')}>Shop</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-white" onClick={() => navigate(`/shop/${product.category.toLowerCase()}`)}>
            {product.category}
          </span>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Spotlight Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 -z-10" />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-blue-400 scale-105' 
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

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">{product.rating}</span>
              </div>
              <span className="text-gray-400">({product.reviews} reviews)</span>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Write a review
              </button>
            </div>

            {/* Price */}
            <div className="border-t border-b border-purple-500/20 py-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-4xl font-bold text-white">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-3 text-gray-500 line-through text-2xl">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  product.inStock 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {product.originalPrice && (
                <div className="text-green-400 font-semibold">
                  Save ${(product.originalPrice - product.price).toLocaleString()} 
                  ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                </div>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg border border-purple-500/10">
                    <Zap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300 font-semibold">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <span className="w-16 text-center text-white font-semibold text-lg">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-gold-500 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </button>
                
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-full border-2 transition-all duration-300 ${
                    isWishlisted 
                      ? 'bg-red-500/20 border-red-500 text-red-400' 
                      : 'bg-gray-700/20 border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                
                <button className="p-4 rounded-full bg-gray-700/20 border-2 border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>

              {/* Buy Now Button */}
              <button 
                disabled={!product.inStock}
                className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 rounded-full text-black font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-purple-500/20">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Truck className="w-5 h-5 text-blue-400" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-5 h-5 text-gold-400" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-purple-500/20 pt-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id}
                  className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-4 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-32 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  <div className="text-lg font-bold text-white">
                    ${relatedProduct.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;