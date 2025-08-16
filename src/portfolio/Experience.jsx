import React, { useState, useEffect, useRef } from 'react';

function Experience() {
  const [visibleItems, setVisibleItems] = useState(0);
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const containerRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "SEPXION TECHNOLOGIES",
      position: "MERN Stack Developer with Laravel Backend",
      type: "Full-time",
      duration: "July 2024 - Present",
      location: "Ahmedabad, Gujarat",
      status: "current",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Laravel", "PHP"],
      responsibilities: [
        "Developing full-stack applications using MERN stack",
        "Building robust backend APIs with Laravel",
        "Collaborating with cross-functional teams",
        "Implementing modern web development practices"
      ],
      achievements: [
        "Currently contributing to multiple client projects",
        "Learning advanced backend development with Laravel"
      ],
      icon: "🚀",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10"
    },
    {
      id: 2,
      company: "CYNUX SOLUTIONS PRIVATE LIMITED",
      position: "Frontend Web Development Intern",
      type: "Internship",
      duration: "6 months",
      location: "Ahmedabad, Gujarat 380058",
      status: "completed",
      technologies: ["React.js", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
      responsibilities: [
        "Developing and maintaining web applications using React",
        "Creating responsive and user-friendly interfaces",
        "Collaborating with the development team",
        "Learning modern web development practices"
      ],
      achievements: [
        "Web Developer with expertise in designing top-notch frontend",
        "Mastered Git and GitHub version control tools",
        "Completed projects like word counter and various React applications",
        "Gained hands-on experience with React.js ecosystem"
      ],
      icon: "💻",
      color: "from-purple-500 to-blue-600",
      bgColor: "bg-purple-500/10"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            setVisibleItems(prev => {
              if (prev < experiences.length) {
                return prev + 1;
              }
              clearInterval(timer);
              return prev;
            });
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const calculateDuration = (startDate, isOngoing = false) => {
    const start = new Date(startDate);
    const end = isOngoing ? new Date() : new Date();
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (isOngoing) {
      return `${diffMonths} months (Ongoing)`;
    }
    return `${diffMonths} months`;
  };

  return (
    <div ref={containerRef} className="experienceContainer relative">
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor; }
        }
        
        .animate-slideInLeft { animation: slideInFromLeft 0.8s ease-out; }
        .animate-slideInRight { animation: slideInFromRight 0.8s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        
        .timeline-line {
          background: linear-gradient(to bottom, #10b981, #3b82f6, #8b5cf6);
        }
        
        .tech-badge {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(10px);
        }
      `}</style>

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-8 rounded-2xl font-mono shadow-2xl border border-gray-700 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-blue-900/5 to-green-900/5"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full"></div>

        {/* Header */}
        <div className={`relative z-10 mb-8 transition-all duration-1000 transform ${
          visibleItems >= 0 ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center space-x-4">
            <div className="animate-float">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                💼
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Professional Experience
              </h1>
              <p className="text-gray-400 text-sm mt-1">My journey as a developer</p>
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        </div>

        {/* Timeline */}
        <div className="relative z-10">
          {/* Timeline Line */}
          <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-1 timeline-line rounded-full opacity-30"></div>
          
          {experiences.map((exp, index) => {
            const isVisible = visibleItems > index;
            const isHovered = hoveredExperience === index;
            
            return (
              <div
                key={exp.id}
                className={`relative mb-12 transition-all duration-1000 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300 + 200}ms` }}
                onMouseEnter={() => setHoveredExperience(index)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 sm:left-3 w-5 sm:w-6 h-5 sm:h-6 rounded-full border-4 ${
                  exp.status === 'current' ? 'bg-green-500 border-green-300 animate-pulse' : 'bg-purple-500 border-purple-300'
                } z-20 transition-all duration-300 ${isHovered ? 'scale-125 animate-glow' : ''}`}>
                  {exp.status === 'current' && (
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className={`ml-8 sm:ml-16 ${exp.bgColor} border border-gray-600 rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:border-gray-500 hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden`}>
                  
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Status Badge */}
                  {exp.status === 'current' && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-bold animate-pulse">
                      CURRENT
                    </div>
                  )}

                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                        {exp.icon}
                      </span>
                      <div>
                        <h2 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                          {exp.company}
                        </h2>
                        <p className="text-gray-300 font-semibold">{exp.position}</p>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                          <span className="flex items-center">
                            <span className="mr-1">📅</span>
                            {exp.duration}
                          </span>
                          <span className="flex items-center">
                            <span className="mr-1">📍</span>
                            {exp.location}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            exp.type === 'Full-time' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 relative z-10">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                      <span className="mr-2">🛠️</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="tech-badge px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-4 relative z-10">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                      <span className="mr-2">📋</span>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-gray-400 text-sm flex items-start transition-all duration-300 hover:text-gray-300"
                        >
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="relative z-10">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                      <span className="mr-2">🏆</span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-400 text-sm flex items-start transition-all duration-300 hover:text-gray-300"
                        >
                          <span className="text-yellow-400 mr-2 mt-1">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${exp.color} opacity-10 rounded-bl-full`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className={`relative z-10 mt-12 p-6 bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600 transition-all duration-1000 transform ${
          visibleItems >= experiences.length ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: `${experiences.length * 300 + 500}ms` }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                {experiences.length}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Total Experiences
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                1
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Current Role
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                12+
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Technologies
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                100%
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Growth Focused
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;