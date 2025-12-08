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
    'https://cdn.i-scmp.com/sites/default/files/images/methode/2017/11/27/c22bfbe6-caa8-11e7-9743-ef57fdb29dbc_image_hires_124343.JPG',
    'https://www.wedding-spot.com/blog/sites/wsblog/files/images/migrated/152-beautiful%2Bwedding%2Bhall%2Bwith%2Bwhite%2Btablecloths%2Band%2Bflower%2Bcenterpieces.jpg',
    'https://www.wedaways.com/wp-content/uploads/2024/02/1-199.jpg',
    'https://www.geo.tv/assets/uploads/updates/2020-03-15/277405_5292960_updates.jpg',
    'https://www.shutterstock.com/shutterstock/videos/1026066308/thumb/1.jpg?ip=x480',
    'https://images.pond5.com/inside-large-wedding-banquet-hall-footage-165867884_iconl.jpeg',
    'https://www.columbusweddingflowers.com/wp-content/uploads/sites/4/2023/05/Floor-to-Ceiling-6-scaled.jpg',
    'https://i.ytimg.com/vi/soBDrsmwS3w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdTbtDzt9IEGboD0jZ1lm0gb7E7w',
    'https://i.ytimg.com/vi/fB6ZDZnjUcI/maxresdefault.jpg',
    'https://i.vimeocdn.com/video/2064653264-a6a2113b34e96e80f7c354f442d255ed6d32280d7020db7024a959b148cfb1d4-d?f=webp',
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
    <section id="gallery" className="bg-white py-12 px-4 md:px-8">
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
