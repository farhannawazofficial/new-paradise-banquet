
'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const packages = [
    {
      name: 'Basic',
      price: 'PKR 200,000',
      tag: 'Venue Only',
      features: ['Hall booking (4 hrs)', 'Basic seating', 'On-site coordinator'],
      highlight: false,
    },
    {
      name: 'Standard',
      price: 'PKR 250,000',
      tag: 'Most Popular',
      features: ['Hall booking (6 hrs)', 'Full catering (2 menus)', 'Photography (4 hrs)', 'Basic decor', 'On-site coordinator'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: 'PKR 400,000',
      tag: 'All Inclusive',
      features: ['Hall booking (full day)', 'Premium catering', 'Photography & videography', 'Premium decor', 'VIP service & transport help'],
      highlight: false,
    },
  ];

  return (
    <section id="services" ref={ref} className="bg-black text-white py-16 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Wedding Packages</h2>
          <p className="text-gray-300 mt-3">Choose a package that fits your celebration — customizable later.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`relative rounded-xl p-6 md:p-8 text-center transition-transform duration-500 ease-out ${
                pkg.highlight ? 'ring-2 ring-yellow-400 shadow-2xl scale-105 bg-gradient-to-br from-yellow-600/5 to-yellow-500/5' : 'bg-gray-900/40'
              } ${inView ? 'opacity-100 translate-y-0 animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">{pkg.tag}</div>
              )}

              <div className="text-yellow-400 text-3xl font-extrabold mb-3">{pkg.name}</div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-4">{pkg.price}</div>

              <ul className="text-left text-gray-300 mb-6 space-y-2">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-7 h-7 flex items-center justify-center rounded bg-yellow-500 text-black"><i className="fas fa-check"></i></span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/923191113372?text=${encodeURIComponent(`Assalamualaikum, I am interested in the ${pkg.name} package at New Paradise Banquet`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full md:w-auto px-6 py-3 rounded-lg font-semibold ${pkg.highlight ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-500/10'}`}
                aria-label={`Book ${pkg.name} via WhatsApp`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-400">
          <p className="max-w-2xl mx-auto">Prices are starting packages — customizations available. Contact us for tailored wedding packages, add-ons, and availability.</p>
        </div>
      </div>
    </section>
  );
}
