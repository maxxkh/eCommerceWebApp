import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-blue-400/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gold-400 rounded-full animate-bounce" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-none">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-gold-400 bg-clip-text text-transparent animate-pulse">
              ECLIPSE
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-gray-300 mb-6">
            The Future of Commerce
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Step into tomorrow with quantum-enhanced products that redefine luxury, 
            technology, and human experience.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center group">
            <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/30 group-hover:bg-blue-500/20 transition-all duration-500">
              <Zap className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm text-gray-400 mt-2">Quantum Tech</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/30 group-hover:bg-purple-500/20 transition-all duration-500">
              <Shield className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm text-gray-400 mt-2">Secure</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="p-4 rounded-full bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 transition-all duration-500">
              <Sparkles className="w-8 h-8 text-gold-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm text-gray-400 mt-2">Premium</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)]">
          <span className="relative z-10 flex items-center">
            Explore Collection
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;