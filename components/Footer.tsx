'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#071018] text-white mt-12">
      {/* Decorative top edge - thin accent */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="w-full h-6 text-white/5" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="1200" height="24" fill="#071018" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo image centered - replace with your saved logo in public/images */}
          <div className="relative w-48 h-20 md:w-56 md:h-24">
            <Image src="/images/logo.png" alt="New Paradise Banquet logo" fill className="object-contain" priority />
          </div>

          <div className="text-center">
            <p className="font-semibold text-lg text-yellow-400">Call Us</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 text-white/90">
              <a href="tel:+923191113372" className="hover:underline">+92 319 1113372</a>
              <a href="tel:+923360222235" className="hover:underline">+92 336 0222235</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 transition text-yellow-300">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" aria-label="TikTok" className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 transition text-yellow-300">
              <i className="fab fa-tiktok"></i>
            </Link>
            <Link href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 transition text-yellow-300">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-sm text-center text-white/70">
          <div>Copyright © 2025. All Rights Reserved New Paradise Banquet.</div>
          <div>Powered by <span className="font-semibold text-yellow-400">Xanfar Tech</span></div>
        </div>
      </div>
    </footer>
  );
}
