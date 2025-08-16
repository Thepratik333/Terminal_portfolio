import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, ExternalLink } from 'lucide-react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [particles, setParticles] = useState([]);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullTerminalText = "$ connecting_to_pratik_panchal...";

  useEffect(() => {
    setIsVisible(true);
    
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    // Terminal typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const contactItems = [
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone Number',
      value: '+91 8000318833',
      href: 'tel:+918000318833',
      gradient: 'from-blue-400 to-purple-600',
      hoverGradient: 'from-blue-500 to-purple-700'
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email Address',
      value: 'pratikpanchal858@gmail.com',
      href: 'mailto:pratikpanchal858@gmail.com',
      gradient: 'from-green-400 to-blue-600',
      hoverGradient: 'from-green-500 to-blue-700'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, IN',
      href: '#',
      gradient: 'from-red-400 to-orange-600',
      hoverGradient: 'from-red-500 to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s alternate`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Get In Touch
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to create something amazing together? Let's connect and bring your ideas to life.
          </p>
        </div>

        {/* Terminal Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-800 rounded-t-lg p-4 border-b border-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span className="text-gray-400 text-sm ml-4">terminal</span>
            </div>
          </div>
          <div className="bg-black rounded-b-lg p-6 font-mono text-green-400">
            <div className="flex items-center">
              <span className="text-yellow-400">pratik@portfolio:~$ </span>
              <span>{terminalText}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
                
                <div className="relative bg-gray-900 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-transparent transition-all duration-300">
                  {/* Icon Container */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${
                    hoveredItem === item.id ? item.hoverGradient : item.gradient
                  } flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.label}
                  </h3>
                  
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 block group-hover:translate-x-2"
                  >
                    {item.value}
                  </a>

                  {/* Hover Arrow */}
                  <div className={`absolute top-4 right-4 transform transition-all duration-300 ${
                    hoveredItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <ExternalLink className="w-5 h-5 text-yellow-400" />
                  </div>

                  {/* Bottom Border Animation */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient} transform transition-all duration-300 ${
                    hoveredItem === item.id ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-2">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Let's Collaborate</span>
              </div>
            </button>
            
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}

export default Contact;