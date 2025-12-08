'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      icon: 'fas fa-home',
      title: 'Book Hall',
      description: 'Premium wedding halls and banquet venues',
    },
    {
      icon: 'fas fa-camera',
      title: 'Photographer',
      description: 'Professional photography services',
    },
    {
      icon: 'fas fa-utensils',
      title: 'Catering',
      description: 'Delicious catering for your event',
    },
    {
      icon: 'fas fa-palette',
      title: 'Decor',
      description: 'Beautiful decoration services',
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="bg-black py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg">
            Everything you need for a perfect event
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-lg p-8 text-center hover:border-yellow-400 transition-all duration-500 transform hover:scale-105 ${
                inView
                  ? `opacity-100 translate-y-0 animate-fadeInUp`
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl text-yellow-400 mb-4 transition-transform duration-500 group-hover:scale-110">
                <i className={service.icon}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg"></div>
            </div>
          ))}
        </div>

        {/* More Services Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            <span className="text-yellow-400 font-semibold">More services</span> available in your area. Contact us for details!
          </p>
        </div>
      </div>
    </section>
  );
}
