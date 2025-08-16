import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 z-50 h-full w-full max-w-md transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-purple-500/30 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg mb-2">Your cart is empty</p>
                <p className="text-gray-500 text-sm">Add some quantum products to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex space-x-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-purple-500/10">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-white font-semibold text-sm">{item.product.name}</h3>
                      <p className="text-gray-400 text-xs">{item.product.category}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-600 rounded transition-colors"
                          >
                            <Minus className="w-3 h-3 text-gray-400" />
                          </button>
                          <span className="text-white font-semibold text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-600 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3 text-gray-400" />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-white font-bold text-sm">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1 text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Cart */}
                {items.length > 0 && (
                  <button 
                    onClick={clearCart}
                    className="w-full py-3 text-red-400 hover:text-red-300 border border-red-400/20 hover:border-red-400/40 rounded-xl transition-all duration-300 text-sm"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-purple-500/20 p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-lg font-bold">
                <span className="text-gray-300">Total:</span>
                <span className="text-white">${getTotalPrice().toLocaleString()}</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-gold-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)]">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;