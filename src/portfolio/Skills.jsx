import React, { useState, useEffect, useRef } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsRef = useRef(null);

  const skillsData = [
    { 
      name: "HTML", 
      percentage: 95, 
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      icon: "🌐",
      category: "Frontend"
    },
    { 
      name: "CSS", 
      percentage: 85, 
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
      icon: "🎨",
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      percentage: 90, 
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      icon: "⚡",
      category: "Frontend"
    },
    { 
      name: "React", 
      percentage: 95, 
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      icon: "⚛️",
      category: "Frontend"
    },
    { 
      name: "PHP", 
      percentage: 85, 
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-500/10",
      icon: "🐘",
      category: "Backend"
    },
    { 
      name: "MongoDB", 
      percentage: 70, 
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      icon: "🍃",
      category: "Database"
    },
    { 
      name: "Node.js", 
      percentage: 55, 
      color: "from-green-600 to-lime-500",
      bgColor: "bg-green-600/10",
      icon: "🟢",
      category: "Backend"
    },
    { 
      name: "Express.js", 
      percentage: 65, 
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-600/10",
      icon: "🚀",
      category: "Backend"
    },
    { 
      name: "SQL", 
      percentage: 85, 
      color: "from-blue-600 to-indigo-700",
      bgColor: "bg-blue-600/10",
      icon: "🗄️",
      category: "Database"
    },
    { 
      name: "C/C++/Unix/Git", 
      percentage: 85, 
      color: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-600/10",
      icon: "💻",
      category: "Tools"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getExpertiseLevel = (percentage) => {
    if (percentage >= 90) return { level: "Expert", color: "text-green-400" };
    if (percentage >= 80) return { level: "Advanced", color: "text-blue-400" };
    if (percentage >= 70) return { level: "Intermediate", color: "text-yellow-400" };
    return { level: "Beginner", color: "text-orange-400" };
  };

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div ref={skillsRef} className="terminal relative">
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fillProgress {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-slideInLeft { animation: slideInFromLeft 0.6s ease-out; }
        .animate-slideInRight { animation: slideInFromRight 0.6s ease-out; }
        .animate-fill { animation: fillProgress 2s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 1.5s ease-in-out infinite; }
      `}</style>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-sparkle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="animate-float mr-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                🛠️
              </div>
            </div>
            <div>
              <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                MY SKILLS
              </h2>
              <p className="text-gray-400 text-sm mt-1">Technologies I work with</p>
            </div>
          </div>
          
          {/* Stats Summary */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{skillsData.length}</div>
              <div className="text-xs text-gray-400">Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {Math.round(skillsData.reduce((acc, skill) => acc + skill.percentage, 0) / skillsData.length)}%
              </div>
              <div className="text-xs text-gray-400">Avg Level</div>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Skills Grid by Category */}
      {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
        <div key={category} className="mb-12">
          {/* Category Header */}
          <div className={`flex items-center mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`} style={{ animationDelay: `${categoryIndex * 200}ms` }}>
            <div className="flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-200">{category}</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent ml-4"></div>
          </div>

          {/* Skills in Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const expertise = getExpertiseLevel(skill.percentage);
              const isHovered = hoveredSkill === `${category}-${index}`;
              
              return (
                <div
                  key={skill.name}
                  className={`group transition-all duration-1000 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${(categoryIndex * skills.length + index) * 100 + 300}ms` }}
                  onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`relative ${skill.bgColor} border border-gray-700 p-3 sm:p-6 rounded-2xl hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden`}>
                    
                    {/* Background Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="flex items-center">
                        <span className="text-xl sm:text-2xl mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <span className={`text-sm ${expertise.color} font-medium`}>
                            {expertise.level}
                          </span>
                        </div>
                      </div>
                      
                      {/* Percentage Badge */}
                      <div className={`relative bg-gradient-to-r ${skill.color} text-white px-3 py-1 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300`}>
                        {skill.percentage}%
                        {isHovered && (
                          <div className="absolute inset-0 rounded-full animate-glow"></div>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden relative">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-50"></div>
                        
                        {/* Progress fill */}
                        <div
                          className={`relative h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{
                            '--target-width': `${skill.percentage}%`,
                            width: isVisible ? `${skill.percentage}%` : '0%',
                            animationDelay: `${(categoryIndex * skills.length + index) * 100 + 800}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          
                          {/* Progress glow */}
                          {isHovered && (
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                          )}
                        </div>

                        {/* Progress indicator dots */}
                        <div className="absolute top-0 left-0 w-full h-full flex items-center">
                          {[...Array(5)].map((_, dotIndex) => (
                            <div
                              key={dotIndex}
                              className={`w-1 h-1 rounded-full mx-auto transition-all duration-500 ${
                                (dotIndex + 1) * 20 <= skill.percentage 
                                  ? 'bg-white animate-pulse' 
                                  : 'bg-gray-600'
                              }`}
                              style={{ animationDelay: `${dotIndex * 200}ms` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Skill level indicators */}
                      <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                        <span>Expert</span>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    {isHovered && (
                      <div className="absolute inset-0 border-2 border-white/20 rounded-2xl animate-pulse pointer-events-none"></div>
                    )}
                    
                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${skill.color} opacity-10 rounded-bl-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Footer Stats */}
      <div className={`mt-12 p-6 bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`} style={{ animationDelay: '1200ms' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="group cursor-pointer">
              <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {skills.length}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {category} Skills
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;