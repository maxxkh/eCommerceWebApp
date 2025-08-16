import React from 'react';
import { Mail, Phone, MapPin, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black/50 to-black border-t border-purple-500/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Eclipse Commerce
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The future of luxury e-commerce. Experience quantum-enhanced products 
              that redefine technology and human interaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-full border border-blue-500/20 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a href="#" className="p-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-full border border-purple-500/20 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              </a>
              <a href="#" className="p-2 bg-gray-500/10 hover:bg-gray-500/20 rounded-full border border-gray-500/20 transition-all duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Quantum Audio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Neural Wearables</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cyber Vision</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Quantum Computing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Holographic Displays</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Quantum Guide</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Product Manuals</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Tech Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span>support@eclipse.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span>1-800-QUANTUM</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span>Neo Tokyo, Quantum District</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 Eclipse Commerce. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Quantum Ethics</a>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </footer>
  );
};

export default Footer;