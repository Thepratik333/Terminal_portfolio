import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css'
import Experience from './Experience';
import Education from './Educations';
import Help from './Help';
import Bio from "./Bio"
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Certifications from './Certifications'

function Terminal() {
    const [input, setInput] = useState("");
    const [command, setCommand] = useState("ls");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isTyping, setIsTyping] = useState(false);
    const [welcomeText, setWelcomeText] = useState("");
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

const fullWelcomeText = `░ WELCOME TO MY PORTFOLIO ░`;


    // Animated welcome text on initial load
    useEffect(() => {
        if (command === "ls") {
            let index = 0;
            const interval = setInterval(() => {
                setWelcomeText(fullWelcomeText.slice(0, index));
                index++;
                if (index > fullWelcomeText.length) {
                    clearInterval(interval);
                }
            }, 10);
            return () => clearInterval(interval);
        }
    }, [command]);

    // FIXED: Single scroll behavior handler
    useEffect(() => {
        if (!terminalRef.current) return;

        const scrollToTop = () => {
            terminalRef.current.scrollTop = 0;
        };

        const scrollToBottom = () => {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        };

        // Delay to ensure content is rendered first
        const timeoutId = setTimeout(() => {
            if (command === "ls" || command === "clear") {
                scrollToTop();
            } else {
                // For other commands, scroll to top to see the content from beginning
                scrollToTop();
            }
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [command]);

    // Auto-focus input
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [command]);

    const handleCommand = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setIsTyping(true);

        // Add to history
        setHistory(prev => [...prev, input.toLowerCase().trim()]);
        setHistoryIndex(-1);

        // Simulate typing delay
        setTimeout(() => {
            setCommand(input.toLowerCase().trim());
            setInput('');
            setIsTyping(false);
        }, 300);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            if (input.trim()) {
                const matches = validCommands.filter(cmd =>
                    cmd.startsWith(input.toLowerCase())
                );
                if (matches.length === 1) {
                    // Single match → autocomplete directly
                    setInput(matches[0]);
                } else if (matches.length > 1) {
                    // Multiple matches → cycle or show all
                    // Here: just show first match
                    setInput(matches[0]);
                    // If you want to print possible matches in terminal:
                    console.log("Suggestions:", matches);
                }
            }
        }
    };


    const validCommands = ["ls", "bio", "skill", "certification", "project", "experience", "education", "contact", "clear", "help"];

    const renderContent = () => {
        switch (command) {
            case "ls":
            case "help":
                return <Help />;
            case "bio":
                return <Bio />;
            case "skill":
                return <Skills />;
            case "project":
                return <Projects />;
            case "certification":
                return <Certifications />;
            case "experience":
                return <Experience />;
            case "education":
                return <Education />;
            case "contact":
                return <Contact />;
            case "clear":
                setTimeout(() => setCommand("ls"), 100);
                return null;
            default:
                return (
                    <div className="animate-shake">
                        <p className="text-red-400 flex items-center gap-2">
                            <span className="animate-pulse">❌</span>
                            Command '{command}' not found. Type 'help' for available commands.
                        </p>
                    </div>
                );
        }
    };

    const boxs = ["bg-red-500", "bg-yellow-500", "bg-green-500"];

    return (
        <div className="min-h-[41.6rem] bg-gray-900 p-4">
            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          50% { opacity: 0; }
        }
        
        @keyframes glitch {
          0% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          10% {
            transform: translate(-2px, -1px);
            filter: hue-rotate(90deg);
          }
          20% {
            transform: translate(-1px, 1px);
            filter: hue-rotate(180deg);
          }
          30% {
            transform: translate(1px, -1px);
            filter: hue-rotate(270deg);
          }
          40% {
            transform: translate(-1px, -1px);
            filter: hue-rotate(360deg);
          }
          50% {
            transform: translate(1px, 1px);
            filter: hue-rotate(0deg);
          }
          60% {
            transform: translate(-2px, 1px);
            filter: hue-rotate(90deg);
          }
          70% {
            transform: translate(2px, -1px);
            filter: hue-rotate(180deg);
          }
          80% {
            transform: translate(-1px, 2px);
            filter: hue-rotate(270deg);
          }
          90% {
            transform: translate(1px, -2px);
            filter: hue-rotate(360deg);
          }
          100% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
        }
        
        @keyframes glitch-shadow {
          0% {
            text-shadow: 
              1px 0 #ff00de,
              -1px 0 #00ffff;
          }
          25% {
            text-shadow: 
              -1px 0 #ff00de,
              1px 0 #00ffff;
          }
          50% {
            text-shadow: 
              1px 0 #ff00de,
              -2px 0 #00ffff;
          }
          75% {
            text-shadow: 
              -1px 0 #ff00de,
              2px 0 #00ffff;
          }
          100% {
            text-shadow: 
            1px 0 #ff00de,
              -1px 0 #00ffff;
          }
        }
        
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out; }
        .animate-slideRight { animation: slideRight 0.6s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-typewriter { 
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 1.5s steps(40) 1s both;
        }
        
        .glitch-effect {
          position: relative;
          animation: glitch 2s infinite linear alternate-reverse;
          color: #10b981;
          font-weight: bold;
        }
        
        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-effect::before {
          animation: glitch-shadow 2s infinite linear alternate-reverse;
          color: #ff00de;
          z-index: -1;
        }
        
        .glitch-effect::after {
          animation: glitch-shadow 2s infinite linear alternate-reverse;
          color: #00ffff;
          z-index: -2;
          animation-delay: 0.25s;
        }
        
        .glitch-effect:hover {
          animation-duration: 0.2s;
        }
        
        .animation-delay-500 { animation-delay: 500ms; }
        
        .terminal-cursor::after {
          content: '▊';
          animation: blink 1s infinite;
          color: #10b981;
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        
        .matrix-bg {
          background: 
            radial-gradient(ellipse at top, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        }
      `}</style>

            <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
                {/* Terminal Header */}
                <div className="text-gray-300 border-x-2 border-t-2 border-slate-700 rounded-t-lg bg-slate-800 p-2 sm:p-3 flex items-center shadow-2xl glow-effect">
                    <div className="flex gap-2">
                        {boxs.map((color, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 ${color} rounded-full transition-all duration-300 hover:scale-125 cursor-pointer`}
                            />
                        ))}
                    </div>

                    <div className="flex-1 mr-2 sm:mr-16 flex justify-center items-center">
                        <div className="flex items-center gap-2">
                            <svg
                                className="text-green-400 w-5 h-5 animate-spin"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M13.655 3.56L8.918.75a1.785 1.785 0 0 0-1.82 0L2.363 3.56a1.889 1.889 0 0 0-.921 1.628v5.624a1.889 1.889 0 0 0 .913 1.627l4.736 2.812a1.785 1.785 0 0 0 1.82 0l4.736-2.812a1.888 1.888 0 0 0 .913-1.627V5.188a1.889 1.889 0 0 0-.904-1.627zm-3.669 8.781v.404a.149.149 0 0 1-.07.124l-.239.137c-.038.02-.07 0-.07-.053v-.396a.78.78 0 0 1-.545.053.073.073 0 0 1-.027-.09l.086-.365a.153.153 0 0 1 .071-.096.048.048 0 0 1 .038 0 .662.662 0 0 0 .497-.063.662.662 0 0 0 .37-.567c0-.206-.112-.292-.384-.293-.344 0-.661-.066-.67-.574A1.47 1.47 0 0 1 9.6 9.437V9.03a.147.147 0 0 1 .07-.126l.231-.147c.038-.02.07 0 .07.054v.409a.754.754 0 0 1 .453-.055.073.073 0 0 1 .03.095l-.081.362a.156.156 0 0 1-.065.09.055.055 0 0 1-.035 0 .6.6 0 0 0-.436.072.549.549 0 0 0-.331.486c0 .185.098.242.425.248.438 0 .627.199.632.639a1.568 1.568 0 0 1-.576 1.185zm2.481-.68a.094.094 0 0 1-.036.092l-1.198.727a.034.034 0 0 1-.04.003.035.035 0 0 1-.016-.037v-.31a.086.086 0 0 1 .055-.076l1.179-.706a.035.035 0 0 1 .056.035v.273zm.827-6.914L8.812 7.515c-.559.331-.97.693-.97 1.367v5.52c0 .404.165.662.413.741a1.465 1.465 0 0 1-.248.025c-.264 0-.522-.072-.748-.207L2.522 12.15a1.558 1.558 0 0 1-.75-1.338V5.188a1.558 1.558 0 0 1 .75-1.34l4.738-2.81a1.46 1.46 0 0 1 1.489 0l4.736 2.812a1.548 1.548 0 0 1 .728 1.083c-.154-.334-.508-.427-.92-.185h.002z" />
                            </svg>
                            <h1 className="text-white font-mono text-xs sm:text-sm">
                                <span className="text-green-400">Pratik Panchal</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-blue-400">terminal_portfolio</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={terminalRef}
                    className="bg-black border-x-2 border-b-2 border-slate-700 rounded-b-lg p-3 sm:p-6 h-[70vh] md:h-[70vh] sm:h-[60vh] xs:h-[50vh] overflow-auto font-mono text-green-400 matrix-bg"
                    style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#10b981 #1f2937"
                    }}
                >
                    {/* Date Display */}
                    <p className="text-gray-400 mb-4 animate-fadeIn">
                        {`Today is ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()}`}
                    </p>

                    {/* Welcome Message with Glitch Effect */}
                    {(command === "ls" || command === "help") && (
                        <div className="text-center mb-6">
                            <pre 
                                className="glitch-effect welcome-text text-xs sm:text-sm md:text-lg animate-fadeIn tracking-wide overflow-x-auto"
                                data-text={welcomeText}
                            >
                                {welcomeText}
                                {welcomeText.length < fullWelcomeText.length && (
                                    <span className="animate-pulse">▊</span>
                                )}
                            </pre>
                        </div>
                    )}


                    {/* Command Input */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center mb-4">
                        <span className="text-blue-400 mr-2 text-xs sm:text-base whitespace-nowrap">
                            C:\Pratik&gt;{command} $~
                        </span>
                        <input
                            ref={inputRef}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleCommand(e);
                                } else {
                                    handleKeyDown(e);
                                }
                            }}
                            value={input}
                            type="text"
                            placeholder="try 'help' for commands..."
                            className="bg-transparent text-green-400 outline-none flex-1 terminal-cursor text-xs sm:text-base w-full"
                            disabled={isTyping}
                        />
                        {isTyping && (
                            <span className="text-yellow-400 ml-2 animate-pulse">Processing...</span>
                        )}
                    </div>

                    {/* Autocomplete Hint */}
                    <p className="text-gray-500 text-xs mb-4">
                        💡 Press <span className="text-green-400">Tab</span> to autocomplete commands
                    </p>

                    {/* Content Display */}
                    <div className="min-h-[200px]">
                        {renderContent()}
                    </div>

                    {/* Command History Indicator */}
                    {history.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className="text-gray-500 text-xs">
                                History: {history.length} commands • Use ↑/↓ arrows to navigate
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Terminal;