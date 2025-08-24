import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to E-Library";
  const [animateQuote, setAnimateQuote] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingDuration = 2000;
    const typingSpeed = typingDuration / fullText.length;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setAnimateQuote(true);
        setTimeout(() => {
          navigate("/books");
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [navigate, fullText]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Layered Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 z-0"></div>
      <div className="absolute inset-0 opacity-50 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-500/20 animate-gradient-x"></div>
      </div>

      {/* Floating Orbs & Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-purple-300/30 rounded-full blur-3xl animate-float-delayed"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rotate-45' : 'rounded-lg'} bg-gradient-to-br from-blue-300/10 to-indigo-400/10 animate-float-random`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Floating Book Icon */}
        <div className="mb-6 animate-float-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-cyan-300 drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 2H8C6.895 2 6 2.895 6 4v16c0 1.105.895 2 2 2h11V2zm-1 16H9V4h9v14zM4 6H2v16c0 1.105.895 2 2 2h13v-2H4V6z" />
          </svg>
        </div>

        {/* Typing Heading */}
        <h1
          className={`relative text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400 bg-clip-text text-transparent transition-transform duration-1000 ease-out transform ${
            typedText ? "scale-100 opacity-100" : "scale-75 opacity-0"
          } animate-pulse-slow`}
        >
          {typedText}
          <span className="blinking-cursor">|</span>
        </h1>

        {/* Quote */}
        {animateQuote && (
          <div className="relative mt-6 bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-lg max-w-3xl mx-auto opacity-0 animate-slide-up">
            <p className="text-xl md:text-2xl text-gray-100 italic font-medium">
              "Explore worlds, dive into knowledge, and let your imagination soar."
            </p>
          </div>
        )}

        {/* Loader Dots */}
        <div className="flex space-x-3 mt-8 relative z-10">
          <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-bounce-smooth shadow-lg"></div>
          <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-bounce-smooth shadow-lg delay-150"></div>
          <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-bounce-smooth shadow-lg delay-300"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .blinking-cursor {
          font-weight: 300;
          font-size: 2rem;
          color: cyan;
          animation: blink 0.7s step-start infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%,50%,100% {opacity:1;}
          25%,75% {opacity:0;}
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes float {
          0%,100% { transform: translate(0,0) rotate(0deg);}
          33% { transform: translate(30px,-30px) rotate(120deg);}
          66% { transform: translate(-20px,20px) rotate(240deg);}
        }
        @keyframes float-delayed {
          0%,100% { transform: translate(0,0) rotate(0deg);}
          33% { transform: translate(-30px,-20px) rotate(-120deg);}
          66% { transform: translate(20px,30px) rotate(-240deg);}
        }
        @keyframes float-random {
          0%,100% { transform: translate(0,0) rotate(0deg);}
          25% { transform: translate(10px,-15px) rotate(90deg);}
          50% { transform: translate(-10px,-10px) rotate(180deg);}
          75% { transform: translate(15px,10px) rotate(270deg);}
        }
        @keyframes bounce-smooth {
          0%,100% { transform: translateY(0) scale(1); box-shadow: 0 0 15px rgba(0,0,0,0.2); }
          50% { transform: translateY(-8px) scale(1.1); box-shadow: 0 8px 25px rgba(0,0,0,0.3); }
        }
        @keyframes gradient-x {
          0%, 100% { transform: translateX(0%); }
          50% { transform: translateX(100%); }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; animation-delay: 0.3s; }
        .animate-gradient-x { animation: gradient-x 8s ease infinite; }
        .animate-float { animation: float 12s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 15s ease-in-out infinite; }
        .animate-float-random { animation: float-random 10s ease-in-out infinite; }
        @keyframes float-up {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-up { animation: float-up 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default LandingPage;
