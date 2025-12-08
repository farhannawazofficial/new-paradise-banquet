'use client';

import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-white text-black py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="w-full">
                    <div className="relative w-full h-80 md:h-[420px] rounded-md overflow-hidden shadow-lg border border-yellow-200/10">
                        <Image
                            src="/images/about.jpg"
                            alt="New Paradise Banquet"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
                        Welcome To New Paradise Banquet
                    </h2>
                    <p className="text-gray-700 text-md md:text-lg leading-relaxed">
                        New Paradise Banquet Hall reflects the timeless elegance and majestic charm of our glorious traditions. A vivid and graceful expression of beauty, luxury, and celebration.
                        A perfect blend of classic inspiration and modern refinement, we bring your dream events to life with style and sophistication.
                        Adorned with the essence of the royal era, we welcome you to host your weddings, receptions, and special occasions with authentic décor, exceptional service, and unmatched hospitality.
                    </p>
                </div>
            </div>
        </section>
    );
}
