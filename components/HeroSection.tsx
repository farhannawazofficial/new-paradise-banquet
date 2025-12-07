'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source
          src="/videos/hero-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        {/* Main Title with Animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-6 animate-fadeInDown tracking-wider">
          PLAN YOUR EVENT!
        </h1>

        {/* Subtitle with Animation */}
        <p className="text-lg md:text-2xl text-white mb-8 animate-fadeInUp">
          Anytime, Anywhere!
        </p>

        {/* Description with Animation */}
        <p className="text-sm md:text-lg text-gray-200 max-w-3xl mb-12 leading-relaxed animate-fadeInUp animation-delay-200">
          Plan your event whether it's a wedding or a party, with Bellagio Venue. Being the leading wedding
          planner in Pakistan we give you access to the best event venues, wedding halls, mehndi artists,
          catering services, and many others.
        </p>

        {/* Search/CTA Section */}
        <div className="w-full max-w-2xl animate-fadeInUp animation-delay-400">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              placeholder="Search by location"
              className="w-full md:w-64 px-4 py-3 bg-black/70 text-white placeholder-gray-400 rounded-lg border border-yellow-400/30 focus:outline-none focus:border-yellow-400 transition-all duration-300"
            />
            <button className="w-full md:w-auto px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-search mr-2"></i>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
