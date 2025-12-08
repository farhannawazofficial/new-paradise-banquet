'use client';

import { useState, useEffect, useRef } from 'react';

export default function IconsSection() {
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

  const icons = [
    {
      icon: 'fas fa-home',
      title: 'Book Hall',
    },
    {
      icon: 'fas fa-camera',
      title: 'Photographer',
    },
    {
      icon: 'fas fa-video',
      title: 'Videographer',
    },
    {
      icon: 'fas fa-utensils',
      title: 'Catering',
    },
    {
      icon: 'fas fa-palette',
      title: 'Decor',
    },
    {
      icon: 'fas fa-ring',
      title: 'Wedding Cards',
    },
    {
      icon: 'fas fa-music',
      title: 'Music/DJ',
    },
    {
      icon: 'fas fa-makeup',
      title: 'Makeup Artist',
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-black py-12 md:py-16 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center justify-center transition-all duration-500 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-4xl md:text-5xl text-yellow-400 mb-3 transition-all duration-500 group-hover:scale-125 group-hover:text-yellow-300">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <p className="text-xs md:text-sm text-white text-center font-medium group-hover:text-yellow-400 transition-colors duration-300">
                {item.title}
              </p>

              {/* Hover Effect */}
              <div className="mt-2 w-8 h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
