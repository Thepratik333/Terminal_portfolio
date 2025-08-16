import React, { useState, useEffect } from 'react';

function Education() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeEntry, setActiveEntry] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const educationData = [
        {
            id: 1,
            institution: "Govt. Senior School Partapur, Rajasthan",
            degree: "High School Diploma",
            year: "2016-2018",
            description: "Completed secondary education with focus on science and mathematics"
        },
        {
            id: 2,
            institution: "Indus University, Ahmedabad, Gujarat",
            degree: "Bachelor of Computer Application",
            year: "2018-2021",
            description: "Comprehensive program covering programming, databases, and software development"
        }
    ];

    return (
        <div className={`educationContainer bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 p-8 rounded-2xl font-mono shadow-2xl border border-gray-700 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <div className="relative overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
                    <div className="absolute top-16 right-8 w-1 h-1 bg-cyan-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Header with typing animation */}
                <div className="relative z-10">
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'}`}>
                        Education
                        <span className="inline-block ml-1 w-0.5 h-8 bg-blue-400 animate-pulse"></span>
                    </h1>
                    
                    {/* Animated divider */}
                    <div className="relative my-6">
                        <div className={`w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-1500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                        <div className="absolute inset-0 flex justify-center">
                            <div className={`w-2 h-2 bg-blue-400 rounded-full transform -translate-y-0.5 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                        </div>
                    </div>
                </div>

                {/* Education entries */}
                <div className="space-y-6 relative z-10">
                    {educationData.map((entry, index) => (
                        <div
                            key={entry.id}
                            className={`educationEntry group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}
                            style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                            onMouseEnter={() => setActiveEntry(entry.id)}
                            onMouseLeave={() => setActiveEntry(null)}
                        >
                            <div className={`relative p-6 rounded-xl border transition-all duration-500 ${
                                activeEntry === entry.id 
                                    ? 'bg-gradient-to-r from-blue-900/50 to-cyan-900/30 border-blue-400/50 transform scale-105 shadow-lg shadow-blue-500/20' 
                                    : 'bg-gray-800/50 border-gray-600/30 hover:border-gray-500/50'
                            }`}>
                                {/* Timeline dot */}
                                <div className="absolute -left-4 top-8 w-3 h-3 bg-blue-400 rounded-full border-4 border-gray-800 group-hover:bg-cyan-300 transition-colors duration-300"></div>
                                
                                {/* Content */}
                                <div className="ml-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                                            {entry.institution}
                                        </h3>
                                        <span className={`text-sm text-blue-400 font-mono px-2 py-1 rounded-full bg-blue-400/10 transition-all duration-300 ${
                                            activeEntry === entry.id ? 'bg-blue-400/20 text-cyan-300' : ''
                                        }`}>
                                            {entry.year}
                                        </span>
                                    </div>
                                    
                                    <p className="text-lg text-blue-300 font-medium mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                        {entry.degree}
                                    </p>
                                    
                                    {/* Expandable description */}
                                    <div className={`overflow-hidden transition-all duration-500 ${
                                        activeEntry === entry.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <p className="text-gray-400 text-sm leading-relaxed pt-2 border-t border-gray-600/30">
                                            {entry.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline line */}
                <div className="absolute left-2 top-24 bottom-8 w-px bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-500 opacity-30"></div>
                
                {/* Bottom decoration */}
                <div className={`mt-8 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`} style={{transitionDelay: '800ms'}}>
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;