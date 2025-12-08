'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        setVideoLoaded(true);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const icons = [
        { icon: 'fas fa-home', label: 'Book Hall', id: 'services' },
        { icon: 'fas fa-camera', label: 'Photographer', id: 'services' },
        { icon: 'fas fa-video', label: 'Videographer', id: 'services' },
        { icon: 'fas fa-utensils', label: 'Catering', id: 'services' },
        { icon: 'fas fa-palette', label: 'Decor', id: 'services' },
        { icon: 'fas fa-ring', label: 'Wedding Cards', id: 'services' },
        { icon: 'fas fa-music', label: 'Music/DJ', id: 'services' },
        { icon: 'fas fa-makeup', label: 'Makeup Artist', id: 'services' },
    ];

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
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
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 pt-8 md:pt-0">
                {/* Main Title with Animation */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-6 animate-fadeInDown tracking-wider">
                    PLAN YOUR EVENT!
                </h1>

                {/* Subtitle with Animation */}
                <p className="text-lg md:text-2xl text-white mb-8 animate-fadeInUp">
                    Anytime, Anywhere!
                </p>

                {/* Description with Animation */}
                <p className="text-sm md:text-lg text-gray-200 max-w-3xl mb-16 leading-relaxed animate-fadeInUp animation-delay-200">
                    Plan your event, whether it’s a wedding, reception, or any special celebration, with New Paradise Banquet Hall.
                    As one of the finest event venues, we provide you access to elegant banquet spaces, beautifully designed décor, professional event management, premium catering, and all essential services to make your big day truly memorable.
                </p>
            </div>

            {/* Icons Section - Bottom of Hero */}
            <div className="relative z-10 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {icons.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.id)}
                                className="group flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer"
                                style={{
                                    animation: `fadeInUp 0.7s ease-out forwards`,
                                    animationDelay: `${300 + index * 50}ms`,
                                }}
                            >
                                {/* Icon */}
                                <div className="text-4xl md:text-5xl text-yellow-400 mb-2 transition-all duration-500 group-hover:text-yellow-300 group-hover:scale-125">
                                    <i className={item.icon}></i>
                                </div>

                                {/* Label */}
                                <p className="text-xs md:text-sm text-white text-center font-medium group-hover:text-yellow-400 transition-colors duration-300">
                                    {item.label}
                                </p>

                                {/* Hover Effect Line */}
                                <div className="mt-2 w-6 h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
