'use client';

import React from 'react';

export default function StickyWhatsApp() {
  const phone = '923191113372';
  const text = encodeURIComponent('Hello New Paradise Banquet, I would like to discuss booking an event.');
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <div aria-hidden={false} className="">
      {/* Scroll to top arrow above WhatsApp */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="scroll-top-btn fixed bottom-20 right-4 z-50 flex items-center justify-center rounded-md bg-yellow-500 text-black shadow-md p-2 md:p-3 hover:translate-y-[-3px] transition-transform duration-200"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float fixed bottom-6 right-4 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg p-4 md:p-5 hover:scale-105 transform transition-all duration-200"
      >
        <i className="fab fa-whatsapp text-xl md:text-2xl"></i>
      </a>
    </div>
  );
}
