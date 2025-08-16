import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@eclipse.com',
      description: '24/7 quantum-enhanced support',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: '1-800-QUANTUM',
      description: 'Premium support hotline',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Neo Tokyo, Quantum District',
      description: 'Visit our flagship experience center',
      color: 'gold'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: '24/7 Available',
      description: 'Always here when you need us',
      color: 'green'
    }
  ];

  const supportCategories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'orders', label: 'Order Support' },
    { value: 'returns', label: 'Returns & Exchanges' },
    { value: 'partnerships', label: 'Business Partnerships' },
    { value: 'press', label: 'Press & Media' }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our quantum products? Need technical support? 
            Our team of experts is here to help you navigate the future.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] backdrop-blur-sm text-center"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full bg-gradient-to-r ${
                  info.color === 'blue' ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' :
                  info.color === 'purple' ? 'from-purple-500/20 to-purple-600/20 border-purple-500/30' :
                  info.color === 'gold' ? 'from-gold-500/20 to-gold-600/20 border-gold-500/30' :
                  'from-green-500/20 to-green-600/20 border-green-500/30'
                } border group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`w-6 h-6 ${
                    info.color === 'blue' ? 'text-blue-400' :
                    info.color === 'purple' ? 'text-purple-400' :
                    info.color === 'gold' ? 'text-gold-400' :
                    'text-green-400'
                  }`} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-white font-bold mb-2">{info.details}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-8">
              <MessageCircle className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  {supportCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-gold-500 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Live Chat */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Live Chat Support</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get instant help from our quantum support specialists. Available 24/7 
                for immediate assistance with your Eclipse products.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                Start Live Chat
              </button>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-semibold mb-2">How do quantum products work?</h4>
                  <p className="text-gray-400 text-sm">Our products utilize quantum field manipulation to enhance traditional functionality...</p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-semibold mb-2">What's your return policy?</h4>
                  <p className="text-gray-400 text-sm">We offer a 30-day quantum satisfaction guarantee on all products...</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Do you ship internationally?</h4>
                  <p className="text-gray-400 text-sm">Yes, we ship to over 120 countries with quantum-secure packaging...</p>
                </div>
              </div>
              <button className="w-full mt-6 py-3 text-blue-400 hover:text-blue-300 border border-blue-400/20 hover:border-blue-400/40 rounded-xl transition-all duration-300">
                View All FAQs
              </button>
            </div>

            {/* Global Presence */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Global Presence</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">North America</span>
                  <span className="text-blue-400 font-semibold">5 Locations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Europe</span>
                  <span className="text-purple-400 font-semibold">8 Locations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Asia Pacific</span>
                  <span className="text-gold-400 font-semibold">12 Locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;