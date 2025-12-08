'use client';

import { useRef, useState, useEffect } from 'react';

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const images = [
    'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    'https://images.unsplash.com/photo-1505577058444-a3dabf2b1d1d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
    'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4',
    'https://images.unsplash.com/photo-1505692794401-55a9f2f1d9d6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6',
    'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8',
    'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9',
    'https://images.unsplash.com/photo-1542317854-40541f5e5a39?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=10',
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  function scrollBy(amount: number) {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }

  function handlePointerDown(e: React.PointerEvent) {
    const el = containerRef.current;
    if (!el) return;
    isDown.current = true;
    el.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    scrollLeftStart.current = el.scrollLeft;
  }

  function handlePointerMove(e: React.PointerEvent) {
    const el = containerRef.current;
    if (!el || !isDown.current) return;
    const x = e.clientX;
    const walk = (startX.current - x) * 1; //scroll-fast
    el.scrollLeft = scrollLeftStart.current + walk;
  }

  function handlePointerUp(e: React.PointerEvent) {
    const el = containerRef.current;
    if (!el) return;
    isDown.current = false;
    try { el.releasePointerCapture(e.pointerId); } catch {}
  }

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6 text-center">Our Gallery</h3>

        <div className="relative">
          <button
            aria-hidden={!canScrollLeft}
            onClick={() => scrollBy(-600)}
            className={`gallery-btn left ${canScrollLeft ? '' : 'opacity-30 pointer-events-none'}`}
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            ref={containerRef}
            className="gallery-scroll-container"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {images.map((src, idx) => (
              <div key={idx} className="gallery-item">
                <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>

          <button
            aria-hidden={!canScrollRight}
            onClick={() => scrollBy(600)}
            className={`gallery-btn right ${canScrollRight ? '' : 'opacity-30 pointer-events-none'}`}
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
