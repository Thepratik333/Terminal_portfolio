import React, { useState, useEffect } from 'react';

function Help() {
  const [visibleCommands, setVisibleCommands] = useState(0);
  const [hoveredCommand, setHoveredCommand] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const helpCommands = [
    {
      command: "ls",
      description: "Lists Categories",
      icon: "📂",
      color: "text-blue-400",
      bgColor: "hover:bg-blue-900/20",
      category: "Navigation"
    },
    {
      command: "help",
      description: "Show this help guide with all available commands",
      icon: "❓",
      color: "text-cyan-400",
      bgColor: "hover:bg-cyan-900/20",
      category: "Navigation"
    },
    {
      command: "bio",
      description: "Show my bio information.",
      icon: "👨‍💻",
      color: "text-purple-400",
      bgColor: "hover:bg-purple-900/20",
      category: "Personal"
    },
    {
      command: "project",
      description: "Shows a list of projects I have.",
      icon: "🚀",
      color: "text-green-400",
      bgColor: "hover:bg-green-900/20",
      category: "Portfolio"
    },
    {
      command: "skill",
      description: "List all of my skills.",
      icon: "🛠️",
      color: "text-yellow-400",
      bgColor: "hover:bg-yellow-900/20",
      category: "Portfolio"
    },
    {
      command: "contact",
      description: "List all of the contacts.",
      icon: "📧",
      color: "text-cyan-400",
      bgColor: "hover:bg-cyan-900/20",
      category: "Personal"
    },
    {
      command: "experience",
      description: "List all of experience",
      icon: "💼",
      color: "text-orange-400",
      bgColor: "hover:bg-orange-900/20",
      category: "Portfolio"
    },
    {
      command: "certification",
      description: "All My Certificate",
      icon: "🏆",
      color: "text-pink-400",
      bgColor: "hover:bg-pink-900/20",
      category: "Portfolio"
    },
    {
      command: "education",
      description: "My Education",
      icon: "🎓",
      color: "text-indigo-400",
      bgColor: "hover:bg-indigo-900/20",
      category: "Personal"
    },
    {
      command: "clear",
      description: "To clear the terminal history.",
      icon: "🧹",
      color: "text-red-400",
      bgColor: "hover:bg-red-900/20",
      category: "System"
    }
  ];

  const shortcuts = [
    { key: "↑ / ↓", description: "Navigate command history", icon: "🔄" },
    { key: "Tab", description: "Auto-complete commands", icon: "✨" },
  ];

  // Staggered animation effect
  useEffect(() => {
    setIsTyping(true);
    const timer = setInterval(() => {
      setVisibleCommands(prev => {
        if (prev < helpCommands.length) {
          return prev + 1;
        } else {
          setIsTyping(false);
          clearInterval(timer);
          return prev;
        }
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const groupedCommands = helpCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black w-full text-white font-mono rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 15px currentColor; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-slideInDown { animation: slideInDown 0.6s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.5s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-float { animation: float 2s ease-in-out infinite; }
        
        .terminal-cursor::after {
          content: '▊';
          animation: blink 1s infinite;
          color: #10b981;
        }
        
        .command-gradient {
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent);
          background-size: 200% 100%;
          transition: background-position 0.3s ease;
        }
        
        .command-gradient:hover {
          background-position: 100% 0;
        }
      `}</style>

      {/* Terminal Header */}
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 animate-slideInDown">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-125 transition-transform duration-200 cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-125 transition-transform duration-200 cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-125 transition-transform duration-200 cursor-pointer"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-float">📖</span>
              <h2 className="text-lg font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Terminal Help Guide
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 space-y-8">

        {/* Welcome Message */}
        <div className="animate-slideInDown" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-300 text-center">
              <span className="text-green-400 font-bold">Welcome to my interactive terminal!</span>
              <br />
              <span className="text-sm">Use these commands to navigate and explore my portfolio.</span>
            </p>
          </div>
        </div>

        {/* Commands by Category */}
        {Object.entries(groupedCommands).map(([category, commands], categoryIndex) => (
          <div
            key={category}
            className="animate-slideInLeft"
            style={{ animationDelay: `${categoryIndex * 0.1 + 0.3}s` }}
          >
            {/* Category Header */}
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-blue-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-gray-200">{category} Commands</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent ml-4"></div>
            </div>

            {/* Commands Grid */}
            <div className="grid gap-3 mb-6">
              {commands.map((cmd, index) => {
                // find the global index of this command
                const globalIndex = helpCommands.findIndex(c => c.command === cmd.command);

                // check visibility against global index
                const isVisible = visibleCommands > globalIndex;
                const isHovered = hoveredCommand === `${category}-${index}`;

                return (
                  <div
                    key={cmd.command}
                    className={`group transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                      }`}
                    style={{
                      transitionDelay: `${(categoryIndex * commands.length + index) * 100}ms`
                    }}
                    onMouseEnter={() => setHoveredCommand(`${category}-${index}`)}
                    onMouseLeave={() => setHoveredCommand(null)}
                  >
                    <div className={`relative flex items-center p-4 rounded-xl border border-gray-700 ${cmd.bgColor} command-gradient transition-all duration-300 hover:border-gray-600 hover:scale-[1.02] cursor-pointer overflow-hidden`}>

                      {/* Background glow effect */}
                      <div className={`absolute inset-0 ${cmd.color.replace('text-', 'bg-').replace('-400', '-500/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                      {/* Command Icon */}
                      <div className="relative z-10 mr-4">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300 inline-block">
                          {cmd.icon}
                        </span>
                      </div>

                      {/* Command Details */}
                      <div className="flex-1 relative z-10">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 font-bold">$</span>
                          <span className={`${cmd.color} font-bold text-lg group-hover:text-opacity-90 transition-colors duration-300`}>
                            {cmd.command}
                          </span>
                          {isTyping && visibleCommands === categoryIndex * commands.length + index + 1 && (
                            <span className="terminal-cursor"></span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                          {cmd.description}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      <div className={`relative z-10 text-gray-500 group-hover:text-gray-400 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''
                        }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Keyboard Shortcuts */}
        <div
          className="animate-slideInLeft border-t border-gray-700 pt-6"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-200">Keyboard Shortcuts</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {shortcuts.map((shortcut, index) => (
              <div
                key={shortcut.key}
                className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                style={{
                  animation: `slideInLeft 0.5s ease-out ${1.2 + index * 0.1}s both`
                }}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  {shortcut.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {shortcut.key.split(' + ').map((key, keyIndex, array) => (
                      <React.Fragment key={keyIndex}>
                        <kbd className="px-2 py-1 text-xs bg-gray-700 rounded border border-gray-600 text-gray-300 font-mono">
                          {key}
                        </kbd>
                        {keyIndex < array.length - 1 && <span className="text-gray-500">+</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{shortcut.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center pt-6 border-t border-gray-700 animate-slideInDown"
          style={{ animationDelay: '1.5s' }}
        >
          <p className="text-gray-500 text-sm">
            💡 <span className="text-green-400">Tip:</span> Type any command above to explore my portfolio!
          </p>
          <div className="mt-3 flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600">System ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;