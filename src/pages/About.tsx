import React, { useEffect, useState } from 'react';
import { Zap, Shield, Award, Users, Globe, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Products Sold', value: '50K+', icon: Award },
    { label: 'Happy Customers', value: '25K+', icon: Users },
    { label: 'Countries', value: '120+', icon: Globe },
    { label: 'Years of Innovation', value: '15+', icon: Sparkles }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, creating products that define the future of luxury technology.'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Every product features military-grade encryption and quantum-enhanced security protocols.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted with the finest materials and cutting-edge technology for unparalleled excellence.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
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
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-gold-400 bg-clip-text text-transparent animate-pulse">
              THE FUTURE
            </span>
            <br />
            <span className="text-white">IS NOW</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Eclipse Commerce pioneers the intersection of luxury and quantum technology, 
            creating products that transcend the boundaries of imagination and reality.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Our Story
                </span>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Redefining Luxury Through Quantum Innovation
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Founded in 2010 by a team of quantum physicists and luxury designers, 
                  Eclipse Commerce emerged from a simple yet revolutionary idea: what if 
                  technology could transcend its utilitarian roots and become art?
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, we stand at the forefront of the quantum luxury revolution, 
                  crafting products that don't just serve a function—they elevate the 
                  human experience to unprecedented heights.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Eclipse Commerce Lab"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 p-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 animate-pulse">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute top-8 right-8 p-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 animate-bounce">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <div className="absolute bottom-8 right-8 p-3 bg-gold-500/20 backdrop-blur-sm rounded-full border border-gold-500/30 animate-ping">
                  <Shield className="w-6 h-6 text-gold-400" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every decision, every design, and every quantum leap forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] backdrop-blur-sm"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Visionary Leadership
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the quantum pioneers shaping the future of luxury technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Chief Quantum Officer',
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Quantum physicist turned luxury visionary, leading our research into consciousness-technology interfaces.'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Design Director',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Award-winning designer merging aesthetic perfection with quantum functionality.'
              },
              {
                name: 'Dr. Yuki Tanaka',
                role: 'Innovation Lead',
                image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Pioneering the next generation of human-machine symbiosis through quantum enhancement.'
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 hover:border-gold-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of visionaries who have already stepped into tomorrow. 
            Your quantum journey begins with a single click.
          </p>
          
          <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(138,43,226,0.5)]">
            <span className="relative z-10">Explore Our Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;