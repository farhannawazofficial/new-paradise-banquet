'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#071018] text-white mt-12">
      {/* Decorative top edge - thin accent */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="w-full h-6 text-white/5" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="1200" height="24" fill="#071018" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Map container - visible on mobile at top, animated */}
        <div className="w-full mb-8 md:hidden">
          <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-lg shadow-lg animate-fadeInUp">
            <iframe
              title="New Paradise Banquet location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2194875916935!2d66.96933179999999!3d24.9245917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315004869d05b%3A0x578e0fe01af47a73!2sNew%20Paradise%20Banquet!5e0!3m2!1sen!2s!4v1765177554892!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo image centered - replace with your saved logo in public/images */}
          <div className="relative w-48 h-20 md:w-56 md:h-24 animate-fadeIn">
            <img src="/images/new paradise banquet.png" alt="New Paradise Banquet logo" className="object-contain w-full h-full" />
          </div>

          <div className="text-center">
            <p className="font-semibold text-lg text-yellow-400">Call Us</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 text-white/90">
              <a href="tel:+923191113372" className="hover:underline flex items-center gap-2">
                <i className="fas fa-phone text-yellow-400"></i>
                <span>+92 319 1113372</span>
              </a>
              <a href="tel:+923360222235" className="hover:underline flex items-center gap-2">
                <i className="fas fa-phone text-yellow-400"></i>
                <span>+92 336 0222235</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://www.facebook.com/newparadisebanquet" aria-label="Facebook" className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 transition text-yellow-300">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="https://www.tiktok.com/@paradisebanquetofficial" aria-label="TikTok" className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 transition text-yellow-300">
              <i className="fab fa-tiktok"></i>
            </Link>
            <Link href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 transition text-yellow-300">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>

        {/* Small map in the footer corner - visible on desktop only */}
        <div className="absolute right-6 top-20 w-85 h-75 overflow-hidden rounded-lg shadow-lg hidden md:block animate-fadeIn">
          <iframe
            title="New Paradise Banquet location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2194875916935!2d66.96933179999999!3d24.9245917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315004869d05b%3A0x578e0fe01af47a73!2sNew%20Paradise%20Banquet!5e0!3m2!1sen!2s!4v1765177554892!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-sm text-center text-white/70">
          <div>Copyright © 2025. All Rights Reserved New Paradise Banquet.</div>
          <div>Powered by xanfartech.com</div>
        </div>
      </div>
    </footer>
  );
}
