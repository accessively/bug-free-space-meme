"use client";

import { useState, useEffect } from "react";

type Leader = {
  role: string;
  name: string;
  statement: string;
  imageAlt: string;
};

const leaders: Leader[] = [
  {
    role: "Founder",
    name: "Jake Manila",
    statement:
      "I founded this agency to bring Filipino talent to the world, with a focus on trust, quality, and long-term client success.",
    imageAlt: "Jake Manila - Founder",
  },
  {
    role: "Co-Founder",
    name: "Joshua Dela Torre",
    statement:
      "As co-founder, I shape our service excellence and process efficiency so every project becomes a strategic win.",
    imageAlt: "Joshua Dela Torre - Co-Founder",
  },
  {
    role: "Co-Founder",
    name: "Denver De Guzman",
    statement:
      "I lead team and operations to ensure we deliver fast, reliable results while keeping strong communication with clients.",
    imageAlt: "Denver De Guzman - Co-Founder",
  },
];

export default function Join() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const previous = () => setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % leaders.length);
  const goToSlide = (index: number) => setActiveIndex(index);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    else if (distance < -50) previous();
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Join Our Network</h2>
              </div>
              <p className="mt-3 text-lg text-gray-500">
                Partner with us to expand your business opportunities through our outsourcing platform.
              </p>
            </div>

            <div className="sm:col-span-2 mt-10">
              <h3 className="text-2xl font-bold text-gray-900">Meet Our Founders</h3>
              <p className="mt-2 text-gray-600">Get to know the visionaries behind our success.</p>

              <div className="mt-6 relative">
                <div
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {leaders.map((leader, index) => (
                      <div key={index} className="w-full flex-shrink-0 min-h-[300px] p-8 flex flex-col items-center justify-center text-center">
                        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-gray-400 text-sm font-medium border-4 border-white shadow-lg">
                          Image soon
                        </div>
                        <p className="mt-6 text-sm font-semibold text-indigo-700 uppercase tracking-wide">{leader.role}</p>
                        <h4 className="mt-2 text-3xl font-bold text-gray-900">{leader.name}</h4>
                        <p className="mt-4 text-base text-gray-600 max-w-2xl leading-relaxed">{leader.statement}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={previous}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-200 border border-gray-200"
                    aria-label="Previous founder"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-200 border border-gray-200"
                    aria-label="Next founder"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 flex justify-center gap-3">
                  {leaders.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`h-3 w-3 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? "bg-blue-600 scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Show ${leaders[idx].name}`}
                    />
                  ))}
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-2"
                  >
                    <div className={`h-2 w-2 rounded-full ${isAutoPlaying ? "bg-green-500" : "bg-gray-400"}`}></div>
                    {isAutoPlaying ? "Auto-playing" : "Paused"}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 md:mt-0">
              <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                    Contact Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="contact-name"
                      id="contact-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700">
                    Services Offered
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="services"
                      name="services"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      placeholder="Describe the services your company provides..."
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Join Our Network
                  </button>
                </div>
                <div className="sm:col-span-2 text-center">
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
