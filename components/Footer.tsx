'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#8b1f2b] text-white mt-12">
      {/* Decorative top edge */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6 text-white/10" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="1200" height="40" fill="#8b1f2b" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold" style={{ color: '#ffedd5' }}>New Paradise</div>
          </div>

          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Call Us</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2">
              <a href="tel:+923191113372" className="hover:underline">+92 319 1113372</a>
              <a href="tel:+923360222235" className="hover:underline">+92 336 0222235</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" aria-label="TikTok" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <i className="fab fa-tiktok"></i>
            </Link>
            <Link href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-center text-white/90">
          <div>Copyright-2024. All Right Reserved New Paradise Banquet.</div>
          <div>Powered by <span className="font-semibold">Xanfar Tech</span></div>
        </div>
      </div>
    </footer>
  );
}
