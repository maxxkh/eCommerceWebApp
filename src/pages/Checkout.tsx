import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, CreditCard, Truck, CheckCircle, Apple, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps = [
    { id: 1, name: 'Shipping Info', icon: Truck },
    { id: 2, name: 'Delivery Method', icon: Truck },
    { id: 3, name: 'Payment Info', icon: CreditCard },
    { id: 4, name: 'Review Order', icon: CheckCircle }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process order
      clearCart();
      navigate('/account?tab=orders');
    }
  };

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">No Items to Checkout</h1>
          <button 
            onClick={() => navigate('/shop')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:scale-105 transition-transform"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button 
            onClick={() => navigate('/cart')}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-400" />
          </button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Secure Checkout
          </h1>
          <Lock className="w-6 h-6 text-green-400" />
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.id 
                    ? 'bg-blue-500 border-blue-500 text-white' 
                    : 'border-gray-600 text-gray-400'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-semibold ${
                    currentStep >= step.id ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.name}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-500' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Shipping Info */}
              {currentStep === 1 && (
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div></div>
                    <div>
                      <label className="block text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Delivery Method */}
              {currentStep === 2 && (
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Delivery Method</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-gray-600 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="standard"
                        checked={formData.shippingMethod === 'standard'}
                        onChange={handleInputChange}
                        className="accent-blue-500"
                      />
                      <div className="ml-4 flex-1">
                        <div className="text-white font-semibold">Standard Delivery</div>
                        <div className="text-gray-400 text-sm">5-7 business days • $99</div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-600 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="express"
                        checked={formData.shippingMethod === 'express'}
                        onChange={handleInputChange}
                        className="accent-blue-500"
                      />
                      <div className="ml-4 flex-1">
                        <div className="text-white font-semibold">Express Delivery</div>
                        <div className="text-gray-400 text-sm">2-3 business days • $199</div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-600 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="overnight"
                        checked={formData.shippingMethod === 'overnight'}
                        onChange={handleInputChange}
                        className="accent-blue-500"
                      />
                      <div className="ml-4 flex-1">
                        <div className="text-white font-semibold">Overnight Delivery</div>
                        <div className="text-gray-400 text-sm">Next business day • $399</div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Info */}
              {currentStep === 3 && (
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Payment Information</h2>
                  
                  {/* Express Checkout Options */}
                  <div className="mb-8">
                    <div className="text-gray-300 mb-4">Express Checkout</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        className="flex items-center justify-center space-x-2 p-4 bg-black rounded-xl border border-gray-600 hover:border-white transition-colors"
                      >
                        <Apple className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold">Apple Pay</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center space-x-2 p-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        <Smartphone className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold">Google Pay</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center space-x-2 p-4 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors"
                      >
                        <span className="text-white font-semibold">PayPal</span>
                      </button>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-900 text-gray-400">Or pay with card</span>
                    </div>
                  </div>

                  {/* Card Payment Form */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Name on Card</label>
                      <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review Order */}
              {currentStep === 4 && (
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Review Your Order</h2>
                  
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{item.product.name}</h3>
                          <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-white font-bold">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-6 py-3 text-gray-400 hover:text-white border border-gray-600 hover:border-gray-500 rounded-xl transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-gold-500 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)]"
                >
                  {currentStep === 4 ? 'Place Order' : 'Continue'}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-300">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="text-white">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 text-sm">
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
              </div>

              <div className="border-t border-purple-500/20 pt-4">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;