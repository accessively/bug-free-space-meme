"use client";

import { useState, useEffect } from "react";

export default function Home() {
  // Founders Carousel Component
  const FoundersCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const leaders = [
      {
        role: "Founder",
        name: "Jake Manila",
        statement: "I founded this agency to bring Filipino talent to the world, with a focus on trust, quality, and long-term client success.",
        imageAlt: "Jake Manila - Founder",
      },
      {
        role: "Co-Founder",
        name: "Joshua Dela Torre",
        statement: "As co-founder, I shape our service excellence and process efficiency so every project becomes a strategic win.",
        imageAlt: "Joshua Dela Torre - Co-Founder",
      },
      {
        role: "Co-Founder",
        name: "Denver De Guzman",
        statement: "I lead team and operations to ensure we deliver fast, reliable results while keeping strong communication with clients.",
        imageAlt: "Denver De Guzman - Co-Founder",
      },
    ];

    const previous = () => {
      setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
    };

    const next = () => {
      setActiveIndex((prev) => (prev + 1) % leaders.length);
    };

    const goToSlide = (index: number) => {
      setActiveIndex(index);
    };

    // Touch handlers for swipe support
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        next();
      }
      if (isRightSwipe) {
        previous();
      }
    };

    // Auto-play functionality
    useEffect(() => {
      if (!isAutoPlaying) return;

      const interval = setInterval(() => {
        next();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }, [isAutoPlaying]);

    return (
      <div className="relative">
        {/* Main Carousel Container */}
        <div
          className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {leaders.map((leader, index) => (
              <div key={index} className="w-full flex-shrink-0 min-h-[400px] p-12 flex flex-col items-center justify-center text-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-lg font-bold border-4 border-white/20 shadow-2xl mb-8">
                  Image soon
                </div>
                <p className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-4">{leader.role}</p>
                <h4 className="text-4xl font-bold text-white mb-6">{leader.name}</h4>
                <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{leader.statement}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={previous}
            className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Previous founder"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Next founder"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center gap-4">
          {leaders.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-4 w-4 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-indigo-500 scale-125 shadow-lg shadow-indigo-500/50"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Show ${leaders[idx].name}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-slate-400 hover:text-slate-300 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
          >
            <div className={`h-2 w-2 rounded-full ${isAutoPlaying ? "bg-green-400" : "bg-slate-500"}`}></div>
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-1 bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-blue-900/20"></div>

        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Accessively
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Smart Solutions,
            <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Accessible Results
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Elevate your business with our premium virtual assistance and digital solutions.
            Experience the future of professional support with cutting-edge technology and unparalleled expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#services"
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative border-2 border-slate-700 hover:border-indigo-400 text-slate-300 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-slate-900/50 hover:bg-slate-800/50"
            >
              Get Started
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="backdrop-blur-md bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="backdrop-blur-md bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Support Available</div>
            </div>
            <div className="backdrop-blur-md bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Accessively</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Your premier partner in virtual assistance and digital transformation. We combine cutting-edge technology with human expertise to deliver unparalleled results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To revolutionize business operations through intelligent virtual assistance and innovative digital solutions that drive measurable growth and efficiency.
                </p>
              </div>

              <div className="backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To become the global leader in AI-powered virtual assistance, setting new standards for digital business transformation and client success.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-3xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">2020</div>
                    <div className="text-slate-400 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
                    <div className="text-slate-400 text-sm">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">500+</div>
                    <div className="text-slate-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">98%</div>
                    <div className="text-slate-400 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Founders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get to know the visionaries behind Accessively and their commitment to excellence.
            </p>
          </div>

          <FoundersCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive virtual assistance and digital solutions powered by cutting-edge technology and human expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">Virtual Assistance</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Professional administrative support powered by AI to streamline operations and maximize productivity.
              </p>
              <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span className="text-sm font-semibold">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Sales & Marketing</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Strategic marketing automation and sales support to accelerate growth and expand market reach.
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm font-semibold">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Graphic Design</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Creative design solutions enhanced by AI tools for branding, marketing materials, and visual communication.
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-semibold">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">Web Development</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Modern, responsive websites and web applications built with the latest technologies and AI assistance.
              </p>
              <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span className="text-sm font-semibold">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Customer Service</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Professional customer support enhanced by AI chatbots and intelligent routing systems.
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm font-semibold">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Business Consulting</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Strategic business advice powered by data analytics and AI insights for sustainable growth.
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-semibold">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Why Choose Accessively</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              What sets us apart in the world of virtual assistance and digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Team</h3>
              <p className="text-slate-300 leading-relaxed">
                Expert professionals enhanced by cutting-edge AI technology for unparalleled efficiency and accuracy.
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-slate-300 leading-relaxed">
                Commitment to excellence with rigorous quality control and continuous improvement processes.
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-slate-300 leading-relaxed">
                Rapid response times and quick turnaround without compromising on quality or attention to detail.
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Client-Centric</h3>
              <p className="text-slate-300 leading-relaxed">
                Your success is our priority with personalized service and dedicated account management.
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-slate-300 leading-relaxed">
                Flexible pricing and service options that grow seamlessly with your business needs.
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Future-Ready</h3>
              <p className="text-slate-300 leading-relaxed">
                Always ahead of the curve with the latest technology and innovative approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Certifications & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our commitment to professional excellence and continuous innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 text-center hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-slate-300 leading-relaxed">
                Certified in advanced AI technologies and machine learning applications for business optimization.
              </p>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 text-center hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Digital Marketing</h3>
              <p className="text-slate-300 leading-relaxed">
                Expert certification in modern digital marketing strategies and automation platforms.
              </p>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 text-center hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Customer Experience</h3>
              <p className="text-slate-300 leading-relaxed">
                Specialized training in customer service excellence and experience optimization.
              </p>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 text-center hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Full-Stack Development</h3>
              <p className="text-slate-300 leading-relaxed">
                Certified in modern web development technologies and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Client Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses. See how we've transformed operations and driven growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/25">
                  <span className="text-white font-bold text-xl">SJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">Sarah Johnson</h4>
                  <p className="text-slate-400">CEO, TechFlow Solutions</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-indigo-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">
                "Accessively transformed our customer service operations. Their AI-powered virtual assistants reduced response time by 75% while maintaining exceptional quality. Game-changing results!"
              </p>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <span className="text-white font-bold text-xl">MR</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">Michael Rodriguez</h4>
                  <p className="text-slate-400">Marketing Director, GrowthMax</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-purple-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">
                "The marketing automation and sales support we received helped us increase qualified leads by 150%. Their strategic insights and execution are simply outstanding."
              </p>
            </div>

            <div className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-white font-bold text-xl">EC</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">Emma Chen</h4>
                  <p className="text-slate-400">Founder, InnovateLab</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-blue-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">
                "Accessively's business consulting services helped us streamline operations and increase efficiency by 40%. Their AI-driven insights are incredibly valuable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have elevated their operations with our premium virtual assistance and digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email Us</div>
                      <div className="text-slate-400">Solutions@accessively.com</div>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Live Chat</div>
                      <div className="text-slate-400">Available 24/7 for instant support</div>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4h.01M16 20h.01M12 20h.01M8 20h.01M12 4h.01M8 4h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Social Media</div>
                      <div className="text-slate-400">@Accessively on all platforms</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50">
                <h4 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300">24/7 Premium Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300">AI-Powered Efficiency</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300">Enterprise-Grade Security</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-3xl font-bold text-white mb-8">Start Your Journey</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300"
                  >
                    <option value="" className="bg-slate-800">Select a service</option>
                    <option value="virtual-assistance" className="bg-slate-800">Virtual Assistance</option>
                    <option value="sales-marketing" className="bg-slate-800">Sales & Marketing</option>
                    <option value="graphic-design" className="bg-slate-800">Graphic Design</option>
                    <option value="web-development" className="bg-slate-800">Web Development</option>
                    <option value="customer-service" className="bg-slate-800">Customer Service</option>
                    <option value="business-consulting" className="bg-slate-800">Business Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 resize-none"
                    placeholder="Describe your needs and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  Start Your Transformation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Accessively
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Smart Solutions, Accessible Results. Elevating businesses through AI-powered virtual assistance and digital transformation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">Virtual Assistance</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">Sales & Marketing</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">Graphic Design</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">Web Development</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">Customer Service</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">Business Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-slate-400 hover:text-indigo-400 transition-colors">Testimonials</a></li>
                <li><a href="/apply" className="text-slate-400 hover:text-indigo-400 transition-colors">Join Our Team</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
                <li><a href="/privacy-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="text-slate-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Carousel */}
          <div className="mb-12 py-8 border-y border-slate-800/50">
            <h4 className="text-lg font-bold text-white mb-6 text-center">Follow Us</h4>
            <div className="flex justify-center">
              <div className="overflow-x-auto pb-2 w-full">
                <div className="flex gap-6 justify-center px-4">
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v4.26a2.85 2.85 0 0 1-5.92 0H4.46v4.26a4.83 4.83 0 0 0 4.6 4.23v3.02a2.42 2.42 0 0 1-4.6 0H.46v4.05h3.91a4.83 4.83 0 0 0 4.6 4.23v3.02a4.83 4.83 0 0 0 4.6-4.23h3.91v-4.05h-3.91v-3.02a4.83 4.83 0 0 0 3.77-4.25V6.69z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">TikTok</p>
                  </a>

                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">LinkedIn</p>
                  </a>

                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.71.272-1.313.574-1.92 1.18-.606.607-.91 1.21-1.18 1.926-.266.788-.471 1.659-.54 2.937C.046 8.333.03 8.74 0 12c0 3.26.015 3.667.072 4.947.061 1.277.261 2.148.53 2.936.271.719.574 1.313 1.18 1.92.607.606 1.21.91 1.926 1.18.789.263 1.659.463 2.937.532 1.28.057 1.689.072 4.947.072 3.259 0 3.668-.016 4.947-.072 1.277-.061 2.148-.261 2.936-.53.719-.271 1.313-.574 1.92-1.18.606-.607.91-1.21 1.18-1.926.263-.789.463-1.659.532-2.937.057-1.28.072-1.689.072-4.947 0-3.259-.015-3.668-.072-4.947-.061-1.277-.261-2.148-.53-2.936-.271-.719-.574-1.313-1.18-1.92-.607-.606-1.21-.91-1.926-1.18-.789-.263-1.659-.463-2.937-.532C15.667.048 15.26.03 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">Instagram</p>
                  </a>

                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">Facebook</p>
                  </a>

                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">YouTube</p>
                  </a>

                  <a href="mailto:Solutions@accessively.com" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">Email</p>
                  </a>

                  <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.158l-.064.037-4.204-.11.112 4.051.031.061a9.79 9.79 0 001.469 4.773 9.868 9.868 0 004.768 3.34l.063.032 4.218.11-.111-4.051-.032-.059a9.79 9.79 0 00-1.469-4.773 9.868 9.868 0 00-4.768-3.34zm0-2a12 12 0 018.569 3.551A12.002 12.002 0 0121.97 12c0 6.627-5.373 12-12 12A12 12 0 013.03 12C3.03 5.373 8.403 0 15.03 0z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">WhatsApp</p>
                  </a>

                  <a href="https://viber.com" target="_blank" rel="noopener noreferrer" className="group flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.918 2.008c4.926.006 8.999 3.755 9.397 8.595.012.152.012.303.012.454h1.458c0-.243-.012-.486-.024-.728C22.282 4.844 17.756.188 12.222.188 7.187.188 2.97 3.629 1.752 8.4H.294c1.285-5.27 6.169-9.188 11.624-9.192zm0 19.984c-4.926-.006-8.999-3.755-9.397-8.595-.012-.152-.012-.303-.012-.454H.051c0 .243.012.486.024.728 1.88 8.36 9.398 14.504 14.932 14.504 5.035 0 9.252-3.441 10.47-8.212h1.458c-1.285 5.27-6.169 9.188-11.624 9.192z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-center">Viber</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 Accessively. All rights reserved. Powered by AI for the future of business.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-slate-400 text-sm">Made with</span>
                <div className="flex">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-slate-400 text-sm ml-1">and AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
