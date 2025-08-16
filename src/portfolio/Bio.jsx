import React, { useState, useEffect } from 'react';
import pratikImage from './pratik1.jpg';


function Bio() {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [socialHovered, setSocialHovered] = useState(null);

    const fullText = "Hi there, I am a Full Stack Developer. Passionate with web development and like to learn new things related to coding and sharing it on the internet.";

    useEffect(() => {
        setIsVisible(true);

        // Typewriter effect for summary
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, []);


    const birthDate = new Date("2002-12-10");

    const getAge = (dob) => {
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--; // subtract 1 if birthday hasn't occurred yet this year
        }
        return age;
    };

    const age = getAge(birthDate);

    const socialLinks = [
        {
            name: 'Github',
            username: '@Thepratik333',
            url: 'https://github.com/Thepratik333',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            ),
            color: 'text-gray-300 hover:text-white',
            bgColor: 'hover:bg-gray-700'
        },
        {
            name: 'LinkedIn',
            username: '@pratik-panchal',
            url: 'https://www.linkedin.com/in/pratik-panchal59604a217',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            color: 'text-blue-400 hover:text-blue-300',
            bgColor: 'hover:bg-blue-900/20'
        },
        {
            name: 'Instagram',
            username: '@thepratik333',
            url: 'https://www.instagram.com/thepratik333/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            color: 'text-pink-400 hover:text-pink-300',
            bgColor: 'hover:bg-pink-900/20'
        }
    ];

    return (
        <div className={`bioContainer transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes pulse-ring {
                    0% { transform: scale(0.5); opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                
                .float-animation { animation: float 3s ease-in-out infinite; }
                .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
                .gradient-animate { 
                    background: linear-gradient(-45deg, #8b5cf6, #06b6d4, #10b981, #f59e0b);
                    background-size: 400% 400%;
                    animation: gradient-x 3s ease infinite;
                }
                .shimmer-effect {
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    background-size: 100% 50%;
                    animation: shimmer 2s infinite;
                }
                .typewriter-cursor::after {
                    content: '|';
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>

            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 gradient-animate"></div>
                </div>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer-effect opacity-10"></div>

                {/* Profile Section */}
                <div className={`profile flex flex-col sm:flex-row items-center relative z-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
                    {/* Profile Picture with Advanced Effects */}
                    <div className="relative group mb-6 sm:mb-0">
                        {/* Pulsing ring effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 pulse-ring opacity-75"></div>

                        {/* Main profile image */}
                        <div className="relative">
                            <img
                                src={pratikImage}
                                alt="Pratik Panchal"
                                className="profilePic h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 p-1 float-animation group-hover:scale-110 transition-all duration-500"
                                style={{
                                    backgroundClip: 'padding-box',
                                }}
                            />

                            {/* Overlay for hover effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Status indicator */}
                    </div>

                    {/* Profile Info */}
                    <div className="profileInfo pl-0 sm:pl-6 md:pl-8 flex-1 text-center sm:text-left">
                        <div className="flex items-center mb-3 group">
                            <h1 className="name text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:via-red-400 group-hover:to-purple-400 transition-all duration-500">
                                Pratik Panchal
                            </h1>

                            {/* Verified badge with animation */}
                            <div className="ml-3 relative">
                                <svg
                                    className="text-blue-400 w-8 h-8 hover:text-blue-300 transition-all duration-300 hover:scale-125 hover:rotate-12"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path>
                                    <path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path>
                                </svg>

                                {/* Sparkle effects */}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                        </div>

                        {/* Age with animated counter */}
                        <div className="flex items-center text-xl text-gray-400 group">
                            <span className="mr-2">🎂</span>
                            <span className="group-hover:text-gray-300 transition-colors duration-300">
                                Age:
                            </span>
                            <span className="ml-1 font-bold text-yellow-400 group-hover:text-yellow-300 transition-all duration-300">
                                {age} years old
                            </span>
                        </div>
                    </div>
                </div>

                {/* Summary with Typewriter Effect */}
                <div className={`summary mt-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl border-l-4 border-gradient-to-b from-purple-500 to-blue-500">
                        {/* Quote icons */}
                        <div className="absolute top-2 left-2 text-purple-400 opacity-50">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                        </div>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 typewriter-cursor">
                            {typedText}
                        </p>

                        <div className="absolute bottom-2 right-2 text-purple-400 opacity-50 transform rotate-180">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className={`socialMedia mt-8 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h3 className="text-xl font-semibold text-gray-300 mb-6 flex items-center">
                        <span className="mr-2">🌐</span>
                        Connect with me
                        <div className="ml-2 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                    </h3>

                    <div className="space-y-4">
                        {socialLinks.map((social, index) => (
                            <div
                                key={social.name}
                                className={`flex items-center p-4 rounded-xl border border-gray-600 bg-gray-800/50 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:border-gray-500 ${social.bgColor} group cursor-pointer`}
                                style={{
                                    animationDelay: `${index * 200 + 800}ms`,
                                    animation: `slideInRight 0.6s ease-out forwards`
                                }}
                                onMouseEnter={() => setSocialHovered(index)}
                                onMouseLeave={() => setSocialHovered(null)}
                            >
                                {/* Icon with animation */}
                                <div className={`mr-4 p-2 rounded-lg bg-gray-700 ${social.color} group-hover:scale-110 transition-all duration-300`}>
                                    {social.icon}
                                </div>

                                {/* Platform name */}
                                <div className="flex-1">
                                    <h4 className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                                        {social.name}:
                                    </h4>

                                    {/* Username/Link */}
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${social.color} hover:underline transition-all duration-300 font-medium`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {social.username}
                                    </a>
                                </div>

                                {/* Arrow indicator */}
                                <div className={`transform transition-all duration-300 text-gray-400 ${socialHovered === index ? 'translate-x-2 text-gray-300' : ''
                                    }`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional CSS for animations */}
            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default Bio;