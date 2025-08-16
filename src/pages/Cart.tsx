import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">
            Looks like you haven't added any quantum products to your cart yet.
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)]"
          >
            Start Shopping
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
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/shop')}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-400" />
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
          </div>
          <span className="text-gray-400">
            {items.reduce((sum, item) => sum + item.quantity, 0)} items
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div 
                key={item.product.id} 
                className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-xl overflow-hidden">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.product.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-300">Qty:</span>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <Minus className="w-4 h-4 text-white" />
                          </button>
                          <span className="w-12 text-center text-white font-semibold text-lg">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <Plus className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <div className="text-xl font-bold text-white">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-gray-400 text-sm">
                            ${item.product.price.toLocaleString()} each
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-full transition-all duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <button 
              onClick={clearCart}
              className="w-full py-3 text-red-400 hover:text-red-300 border border-red-400/20 hover:border-red-400/40 rounded-xl transition-all duration-300 text-sm"
            >
              Clear All Items
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {shipping === 0 && (
                  <div className="text-green-400 text-sm">
                    🎉 Free shipping on orders over $5,000!
                  </div>
                )}
              </div>

              <div className="border-t border-purple-500/20 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-gold-500 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] flex items-center justify-center space-x-3 mb-4"
              >
                <Lock className="w-5 h-5" />
                <span>Secure Checkout</span>
              </button>

              {/* Continue Shopping */}
              <button 
                onClick={() => navigate('/shop')}
                className="w-full py-3 text-blue-400 hover:text-blue-300 border border-blue-400/20 hover:border-blue-400/40 rounded-full transition-all duration-300"
              >
                Continue Shopping
              </button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <div className="text-center text-gray-400 text-sm">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Lock className="w-4 h-4 text-green-400" />
                    <span>Secure SSL Encryption</span>
                  </div>
                  <div>256-bit security protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;