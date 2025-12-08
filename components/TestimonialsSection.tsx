'use client';

import { useEffect, useRef, useState } from 'react';

type Testimonial = {
  name: string;
  text: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Shaikh Shahzeb',
    text: "Very good place, services are a bit slow, maybe staff thinks, this place is good, and they own this place, and they can refuse anyone. On the other hand food was fantastic, environment was awesome.",
    rating: 5,
  },
  {
    name: 'Wahab Ul Haque',
    text: 'Very good quality food in hi-tea. A bit more variety can be added in Pakistani cuisine.',
    rating: 5,
  },
  {
    name: 'Aisha Khan',
    text: 'Great ambiance and courteous staff — perfect for family gatherings and weddings.',
    rating: 5,
  },
  {
    name: 'Ahmed Raza',
    text: 'Booked hall for a wedding reception, everything was handled professionally.',
    rating: 5,
  },
  {
    name: 'Sara Malik',
    text: 'Decor and catering were top-notch; guests complimented the arrangements.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAutoPlay() {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      if (isInteracting.current) return;
      goTo((active + 1) % testimonials.length);
    }, 3000);
  }

  function stopAutoPlay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function goTo(index: number) {
    const el = containerRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    setActive(index);
  }

  // update active on manual scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        const mid = el.scrollLeft + el.clientWidth / 2;
        let nearest = 0;
        let nearestDist = Infinity;
        children.forEach((c, i) => {
          const center = c.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(center - mid);
          if (d < nearestDist) {
            nearestDist = d;
            nearest = i;
          }
        });
        setActive(nearest);
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll as EventListener);
      cancelAnimationFrame(raf);
    };
  }, []);

  // pointer drag support
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let startScroll = 0;

    const downHandler = (e: PointerEvent) => {
      down = true;
      isInteracting.current = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };
    const moveHandler = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startScroll - dx;
    };
    const upHandler = (e: PointerEvent) => {
      down = false;
      isInteracting.current = false;
      try { el.releasePointerCapture(e.pointerId); } catch {}
    };

    el.addEventListener('pointerdown', downHandler);
    window.addEventListener('pointermove', moveHandler);
    window.addEventListener('pointerup', upHandler);

    return () => {
      el.removeEventListener('pointerdown', downHandler);
      window.removeEventListener('pointermove', moveHandler);
      window.removeEventListener('pointerup', upHandler);
    };
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">Our Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">What Our Customers Says!</h2>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="testimonials-container"
            onMouseEnter={() => { isInteracting.current = true; stopAutoPlay(); }}
            onMouseLeave={() => { isInteracting.current = false; startAutoPlay(); }}
          >
            {testimonials.map((t, i) => (
              <article key={i} className="testimonial-card">
                <h3 className="font-semibold text-lg text-gray-800">{t.name}</h3>
                <p className="text-gray-600 mt-3">{t.text}</p>
                <div className="mt-4 text-yellow-400">
                  {Array.from({ length: t.rating ?? 5 }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`testimonial-dot ${i === active ? 'active' : ''}`}
                onClick={() => { goTo(i); startAutoPlay(); }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
