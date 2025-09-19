'use client';

import { useState, useEffect } from 'react';
import Aurora from './Aurora';
import ShinyText from './ShinyText';
import ProfileCard from './ProfileCard';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <Aurora className="z-0" />
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ease-out transform ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              <ShinyText text="John Doe" speed={4} className="text-blue-600 dark:text-blue-400" />
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              <ShinyText text="Full Stack Developer" speed={3} />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Passionate about creating innovative web solutions that make a difference. 
              I specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful designs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 ease-out delay-300 transform ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-500 transform ${
          isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <ProfileCard
            avatarUrl="/your-avatar-image.jpg"
            name="John Doe"
            title="Full Stack Developer"
            handle="johndoe"
            status="Available for work"
            contactText="Hire Me"
            onContactClick={() => scrollToSection('contact')}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          />
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-700 ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}