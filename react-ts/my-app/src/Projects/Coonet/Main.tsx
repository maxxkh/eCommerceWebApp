


// import React from 'react'
import HeroImage from "../../assets/chatAppAssets/heroImage.png"

// const Menu = ['Home', 'Features', 'About', 'Chat']

type MenuItem = {
  label: string;
  href: string;
}
const Menu: readonly MenuItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Chat', href: '#' }
]

const MainPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#000A12] to-[#001524] text-white'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500 mix-blend-soft-light filter blur-3xl'></div>
        <div className='absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-green-500 mix-blend-soft-light filter blur-3xl'></div>
      </div>
      
      <header className='container mx-auto px-6 py-6'>
        <div className='flex items-center justify-between border-b border-cyan-500/30 pb-4'>
          <a href="#" className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-green-300 transition-all duration-500'>
            LX_R
          </a>
          
          <nav>
            <ul className="flex space-x-8">
              {Menu.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="relative text-lg py-1 px-1 font-medium text-cyan-100 group transition-all duration-300"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className='flex space-x-4'>
            <button className='relative px-6 py-2.5 rounded-lg border border-cyan-400 text-cyan-400 overflow-hidden group'>
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-cyan-400/10 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            </button>
            <button className='relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 group overflow-hidden'>
              <span className="relative z-10">Sign Up</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </header>
      
      <main className='container h-screen mx-auto px-6'>
        <div className="flex flex-col lg:flex-row items-center justify-between pt-12">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300 hover:from-cyan-200 hover:to-green-200 transition-all duration-500">
                Chat like Never Before
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-100/80 mb-12 leading-relaxed max-w-lg hover:text-cyan-100 transition-colors duration-300">
              Unleash the power of secure and customizable messaging with our cutting edge chat application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className='relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-600/30 to-cyan-800/30 border border-cyan-400/50 text-cyan-300 group overflow-hidden transition-all duration-300'>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Smart Chat
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-cyan-500/20 w-0 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button className='relative px-8 py-3.5 rounded-lg bg-transparent border border-cyan-400/20 text-cyan-100 group overflow-hidden transition-all duration-300'>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-cyan-500/10 w-0 group-hover:w-full transition-all duration-300 delay-75"></span>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <img 
              className="w-full max-w-xl transform transition-all duration-500 hover:scale-[1.03] hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
              src={HeroImage} 
              alt="Lexo Chat Application" 
            />
          </div>
        </div>
      </main>


      <section className="py-20 bg-gradient-to-b from-[#001524] to-[#000A12]">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
      Powerful Features
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          icon: '🔒',
          title: 'End-to-End Encryption',
          desc: 'Military-grade security for all your conversations'
        },
        {
          icon: '🤖',
          title: 'AI Assistant',
          desc: 'Smart replies and conversation summaries'
        },
        {
          icon: '🎨',
          title: 'Custom Themes',
          desc: 'Personalize your chat experience'
        }
      ].map((feature, index) => (
        <div key={index} className="p-8 bg-[#001E34]/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all hover:-translate-y-2">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-semibold text-cyan-200 mb-3">{feature.title}</h3>
          <p className="text-cyan-100/80">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-32 bg-[#001524] relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
  <div className="container mx-auto px-6 text-center relative z-10">
    <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
      Ready to Transform Your Communication?
    </h2>
    <p className="text-xl text-cyan-100/80 max-w-2xl mx-auto mb-12">
      Join thousands of users experiencing the next generation of messaging.
    </p>
    <div className="flex justify-center gap-6">
      <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 text-lg font-semibold">
        Get Started Free
      </button>
      <button className="px-8 py-4 rounded-lg border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/70 transition-all duration-300 text-lg font-semibold">
        Schedule Demo
      </button>
    </div>
  </div>
</section>




<section className="py-20 bg-gradient-to-b from-[#000A12] to-[#001524]">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-cyan-200">Why Choose Lexo?</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-cyan-500/30">
            <th className="pb-4 text-left text-cyan-300">Feature</th>
            <th className="pb-4 text-center text-cyan-300">Lexo</th>
            <th className="pb-4 text-center text-cyan-300">Competitor A</th>
            <th className="pb-4 text-center text-cyan-300">Competitor B</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['AI Assistance', '✓', '✗', '✓'],
            ['Custom Themes', '✓', '✓', '✗'],
            ['Group Video', '✓', '✗', '✗'],
            ['Encryption', '✓', '✓', '✓']
          ].map((row, i) => (
            <tr key={i} className="border-b border-cyan-500/10 hover:bg-cyan-500/5">
              <td className="py-4">{row[0]}</td>
              <td className="text-center text-green-400">{row[1]}</td>
              <td className="text-center text-rose-400">{row[2]}</td>
              <td className="text-center text-amber-400">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section> 
    </div>
  )
}

export default MainPage