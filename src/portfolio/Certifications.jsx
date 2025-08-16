import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  CheckCircle, 
  Star,
  Code,
  Globe,
  Zap,
  Database,
  BookOpen,
  Trophy,
  Briefcase,
  Download,
  Eye,
  Shield
} from 'lucide-react';

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCert, setHoveredCert] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimatedStats(true), 800);
  }, []);

  const certifications = [
    {
      id: 1,
      title: "Web Technologies & Frameworks",
      institution: "INDUS UNIVERSITY",
      description: "Comprehensive certification validating expertise in modern web development technologies, frameworks, and libraries including React, Node.js, and full-stack development practices.",
      date: "2024",
      category: "web",
      level: "Advanced",
      status: "Completed",
      skills: ["React.js", "Node.js", "JavaScript", "Web APIs", "Frontend Frameworks", "Backend Technologies"],
      credentialId: "IU-WTF-2024-001",
      gradient: "from-purple-600 via-blue-600 to-cyan-600",
      icon: Code,
      verified: true,
      hours: 120
    },
    {
      id: 2,
      title: "Full Stack Development",
      institution: "SPEXION TECHNOLOGIES",
      description: "Professional development training covering MERN stack, Laravel PHP framework, and enterprise-level application development with real-world project implementation.",
      date: "2024",
      category: "fullstack",
      level: "Professional",
      status: "In Progress",
      skills: ["MERN Stack", "Laravel", "MySQL", "API Development", "CRM Systems", "Enterprise Solutions"],
      credentialId: "SPX-FSD-2024-001",
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      icon: Database,
      verified: true,
      hours: 200
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      institution: "SELF-DIRECTED LEARNING",
      description: "Advanced JavaScript concepts including ES6+, asynchronous programming, DOM manipulation, and modern JavaScript frameworks integration.",
      date: "2023",
      category: "programming",
      level: "Intermediate",
      status: "Completed",
      skills: ["ES6+", "Async/Await", "DOM API", "Event Handling", "Module Systems", "Testing"],
      credentialId: "SDL-JS-2023-001",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      icon: Zap,
      verified: false,
      hours: 80
    },
    {
      id: 4,
      title: "API Integration & Development",
      institution: "PRACTICAL EXPERIENCE",
      description: "Hands-on experience with RESTful APIs, Google APIs integration, WhatsApp Business API, and third-party service integrations in production environments.",
      date: "2024",
      category: "api",
      level: "Advanced",
      status: "Ongoing",
      skills: ["REST APIs", "Google APIs", "WhatsApp API", "Authentication", "Data Integration", "Webhooks"],
      credentialId: "PE-API-2024-001",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      icon: Globe,
      verified: true,
      hours: 150
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', icon: Award },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'fullstack', name: 'Full Stack', icon: Code },
    { id: 'programming', name: 'Programming', icon: Zap },
    { id: 'api', name: 'API Development', icon: Database }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const stats = [
    { label: 'Total Certifications', value: certifications.length, icon: Award },
    { label: 'Learning Hours', value: certifications.reduce((sum, cert) => sum + cert.hours, 0), icon: BookOpen },
    { label: 'Verified Credentials', value: certifications.filter(cert => cert.verified).length, icon: Shield },
    { label: 'Skill Areas', value: 6, icon: Star }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Professional': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Advanced': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'Intermediate': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'text-green-400';
      case 'In Progress': return 'text-yellow-400';
      case 'Ongoing': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Certifications & Learning
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through formal certifications, hands-on experience, and industry-recognized credentials.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 ${
                  animatedStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-3">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.label === 'Learning Hours' && '+'}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {filteredCertifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className={`group relative transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${cert.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-transparent transition-all duration-500">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                          {cert.title}
                        </h3>
                        <div className="flex items-center text-yellow-400 font-medium mb-2">
                          <Award className="w-4 h-4 mr-1" />
                          {cert.institution}
                        </div>
                      </div>
                    </div>
                    
                    {cert.verified && (
                      <div className="flex items-center text-green-400 bg-green-400/10 border border-green-400/30 rounded-full px-3 py-1 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700/50 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {cert.hours}h
                      </div>
                    </div>
                    
                    <div className={`flex items-center text-sm font-medium ${getStatusColor(cert.status)}`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(cert.status).replace('text-', 'bg-')}`}></div>
                      {cert.status}
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="mt-4 pt-4 border-t border-gray-800/50">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Credential ID: {cert.credentialId}</span>
                      <div className="flex space-x-2">
                        <button className="p-1 hover:text-blue-400 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:text-green-400 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:text-purple-400 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cert.gradient} transform transition-all duration-500 ${
                    hoveredCert === cert.id ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <button className="group bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View All Credentials</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;