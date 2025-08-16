import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartToggle }) => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const cartCount = getTotalItems();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Eclipse Commerce
          </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className={`transition-colors relative group ${
            location.pathname.startsWith('/shop') ? 'text-white' : 'text-gray-300 hover:text-white'
          }`}>
            Products
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
              location.pathname.startsWith('/shop') ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </Link>
          <Link to="/wishlist" className={`transition-colors relative group ${
            location.pathname === '/wishlist' ? 'text-white' : 'text-gray-300 hover:text-white'
          }`}>
            Wishlist
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
              location.pathname === '/wishlist' ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </Link>
          <Link to="/about" className={`transition-colors relative group ${
            location.pathname === '/about' ? 'text-white' : 'text-gray-300 hover:text-white'
          }`}>
            About
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
              location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </Link>
          <Link to="/contact" className={`transition-colors relative group ${
            location.pathname === '/contact' ? 'text-white' : 'text-gray-300 hover:text-white'
          }`}>
            Contact
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
              location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white transition-colors relative group">
            Categories
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="p-2 rounded-full bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300 group">
            <Search className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
          </button>

          {/* Cart */}
          <button 
            onClick={onCartToggle}
            className="relative p-2 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300 group"
          >
            <ShoppingBag className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile */}
          <Link to="/account" className="p-2 rounded-full bg-gold-500/10 border border-gold-500/20 hover:bg-gold-500/20 transition-all duration-300 group">
            <User className="w-5 h-5 text-gold-400 group-hover:text-gold-300" />
          </Link>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 rounded-full bg-gray-500/10 border border-gray-500/20 hover:bg-gray-500/20 transition-all duration-300">
            <Menu className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;