import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Zap, 
  Globe, 
  Database, 
  MessageSquare, 
  Calendar, 
  Users, 
  Bot,
  Phone,
  Sheet,
  Briefcase,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techIcons = {
    HTML: { icon: '🌐', color: 'text-orange-500' },
    CSS: { icon: '🎨', color: 'text-blue-500' },
    JavaScript: { icon: '⚡', color: 'text-yellow-500' },
    React: { icon: '⚛️', color: 'text-cyan-500' },
    PHP: { icon: '🐘', color: 'text-purple-500' },
    MySQL: { icon: '🗄️', color: 'text-blue-600' },
    Node: { icon: '💚', color: 'text-green-500' },
    Laravel: { icon: '🔥', color: 'text-red-500' },
    MongoDB: { icon: '🍃', color: 'text-green-600' },
    Express: { icon: '🚀', color: 'text-gray-500' }
  };

  const projects = [
    {
      id: 1,
      title: "Professional CRM System",
      category: "professional",
      description: "Enterprise-level CRM with advanced call center management, WhatsApp automation, and Google API integrations",
      company: "Spexion Technologies",
      period: "July 2024 - Present",
      status: "In Production",
      technologies: ["React", "Laravel", "MySQL", "Node"],
      features: [
        { icon: Phone, text: "Call Center Module" },
        { icon: MessageSquare, text: "WhatsApp Bots" },
        { icon: Calendar, text: "Google Calendar API" },
        { icon: Sheet, text: "Google Sheets Integration" },
        { icon: Users, text: "Contact Management" }
      ],
      gradient: "from-purple-600 via-blue-600 to-cyan-600",
      complexity: 5,
      impact: "High",
      isProfessional: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "fullstack",
      description: "Full-featured online shopping platform with payment integration and admin panel",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        { icon: Globe, text: "Responsive Design" },
        { icon: Database, text: "Product Management" },
        { icon: Users, text: "User Authentication" }
      ],
      gradient: "from-green-500 to-emerald-600",
      complexity: 4,
      impact: "Medium"
    },
    {
      id: 3,
      title: "Real-time News Portal",
      category: "frontend",
      description: "Dynamic news website with API integration and modern UI/UX",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      features: [
        { icon: Globe, text: "Live News Feed" },
        { icon: Zap, text: "Real-time Updates" },
        { icon: Code, text: "API Integration" }
      ],
      gradient: "from-orange-500 to-red-600",
      complexity: 3,
      impact: "Medium"
    },
    {
      id: 4,
      title: "Advanced Todo Manager",
      category: "fullstack",
      description: "Feature-rich task management system with collaboration tools",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"],
      features: [
        { icon: Users, text: "Team Collaboration" },
        { icon: Database, text: "Data Persistence" },
        { icon: Zap, text: "Real-time Sync" }
      ],
      gradient: "from-blue-500 to-purple-600",
      complexity: 4,
      impact: "Medium"
    },
    {
      id: 5,
      title: "Multi-Currency Converter",
      category: "utility",
      description: "Real-time currency and language conversion tool with beautiful UI",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      features: [
        { icon: Globe, text: "Multi-language Support" },
        { icon: Zap, text: "Real-time Rates" },
        { icon: Code, text: "API Integration" }
      ],
      gradient: "from-teal-500 to-blue-600",
      complexity: 3,
      impact: "Low"
    },
    {
      id: 6,
      title: "Smart Word Counter",
      category: "utility",
      description: "Advanced text analysis tool with reading time and keyword density",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      features: [
        { icon: Code, text: "Text Analysis" },
        { icon: Zap, text: "Real-time Processing" },
        { icon: Globe, text: "Export Options" }
      ],
      gradient: "from-pink-500 to-rose-600",
      complexity: 2,
      impact: "Low"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'professional', name: 'Professional', icon: Briefcase },
    { id: 'fullstack', name: 'Full Stack', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Zap },
    { id: 'utility', name: 'Utilities', icon: Star }
  ];

  const filteredProjects = currentFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === currentFilter);

  const getComplexityStars = (complexity) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < complexity ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'High': return 'text-green-400 bg-green-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'Low': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px'
          }}
        />
      </div>

      <div className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Professional Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <Briefcase className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">Software Developer at Spexion Technologies</span>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions built with modern technologies, from enterprise CRM systems to creative utilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setCurrentFilter(category.id)}
                className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base rounded-full font-medium transition-all duration-300 ${
                  currentFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-transparent transition-all duration-500 h-full">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.isProfessional && (
                      <div className="flex items-center text-sm text-purple-400 mb-2">
                        <Briefcase className="w-4 h-4 mr-1" />
                        <span>{project.company}</span>
                      </div>
                    )}
                  </div>
                  
                  {project.status && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(project.impact)} border border-current`}>
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <div key={i} className="flex items-center text-sm text-gray-300">
                            <Icon className="w-4 h-4 text-blue-400 mr-2" />
                            <span>{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center px-3 py-1 bg-gray-800/50 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-700/50 transition-colors duration-200"
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <span className="mr-1">{techIcons[tech]?.icon}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-400 mr-2">Complexity:</span>
                    {getComplexityStars(project.complexity)}
                  </div>
                  
                  {project.period && (
                    <span className="text-xs text-gray-400">{project.period}</span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className={`absolute bottom-4 right-4 flex space-x-2 transform transition-all duration-300 ${
                  activeProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200">
                    <Play className="w-4 h-4 text-blue-400" />
                  </button>
                  <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Progress Bar Animation */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient} transform transition-all duration-500 ${
                  activeProject === project.id ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more projects or collaborate?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View on GitHub
            </button>
            <button className="group flex items-center bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-full border border-gray-600 hover:border-gray-500 transform transition-all duration-300 hover:scale-105">
              Let's Connect
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;