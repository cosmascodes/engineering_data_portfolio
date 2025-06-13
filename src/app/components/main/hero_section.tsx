'use client';
import React from 'react';
import { Github, Instagram, Twitter, Linkedin, Codepen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center py-0">
      {/* Left Side Icons */}
      <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-6">
        <div className="flex flex-col space-y-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://codepen.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="CodePen"
          >
            <Codepen size={18} />
          </a>
        </div>
        {/* Vertical Line */}
        <div className="w-px h-24 bg-slate-600 mt-6"></div>
      </div>

      {/* Right Side Email */}
      <div className="fixed right-8 bottom-0 z-40 hidden lg:flex flex-col items-center">
        <div className="mb-6">
          <a 
            href="mailto:brittany.chiang@gmail.com"
            className="text-slate-400 hover:text-accent transition-all duration-300 ease-in-out hover:-translate-y-1 font-mono text-sm tracking-wider"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            cosmascodes@gmail.com
          </a>
        </div>
        {/* Vertical Line */}
        <div className="w-px h-24 bg-slate-600"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="text-accent font-mono text-base sm:text-lg mb-6 animate-fade-in">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-slate-200 font-bold text-4xl sm:text-6xl lg:text-7xl mb-2 leading-tight animate-slide-up">
            Cosmas Ngeno.
          </h1>

          {/* Tagline */}
          <h2 className="text-slate-400 font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight animate-slide-up-delay">
            I build things for the web.
          </h2>

          {/* Description */}
          <div className="max-w-2xl mb-12 animate-fade-in-delay">
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              {`I'm a frontend engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at `}
              <a 
                href="https://luxdevhq.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors duration-200"
              >
                LuxDevHQ
              </a>
              .
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-delay-2">
            <a 
              href="#course" 
              className="inline-block px-8 py-4 border-2 border-accent text-accent hover:text-background rounded-sm hover:bg-accent hover:bg-opacity-10 transition-all duration-300 font-mono text-sm tracking-wider hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
            >
              Check out my Resume!
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;