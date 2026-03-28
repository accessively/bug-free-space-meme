"use client";

import { useState } from "react";

const features = [
  {
    title: "Owner Dashboard",
    summary: "Track business progress",
    detail:
      "A private, secure dashboard where business owners can log in to monitor KPIs, team performance, project milestones, and real-time analytics — all in one place.",
  },
  {
    title: "Optimized Website",
    summary: "Redesigned for speed & clarity",
    detail:
      "A completely rebuilt frontend with faster load times, improved SEO, mobile-first design, and a refined user experience that better represents your brand.",
  },
  {
    title: "Integrated AI",
    summary: "Smart assistance built in",
    detail:
      "AI-powered tools embedded throughout the platform — from automated responses and smart scheduling to intelligent recommendations that help you make better business decisions faster.",
  },
  {
    title: "Live Consultation",
    summary: "Real-time expert access",
    detail:
      "Connect directly with an Accessively specialist via live chat or video call — no booking delays, no waiting rooms. Get answers and guidance the moment you need them.",
  },
  {
    title: "Faster Applications",
    summary: "Streamlined onboarding",
    detail:
      "A simplified, step-by-step application process with smart auto-fill, instant status updates, and quicker turnaround times so you can get started without friction.",
  },
  {
    title: "And Many More",
    summary: "More features on the way",
    detail:
      "We're continuously building new capabilities — including integrations, notification systems, multi-user access controls, and more — all shaped by your feedback.",
  },
];

export default function DevBanner() {
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div className="relative z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            {/* Clickable text area */}
            <button
              onClick={() => { setModalOpen(true); setActiveIndex(null); }}
              className="flex-1 min-w-0 text-left group"
            >
              <p className="font-semibold text-sm sm:text-base group-hover:underline underline-offset-2 transition">
                Our main website is currently under development — exciting things are coming!
              </p>
              <p className="text-indigo-200 text-xs sm:text-sm mt-0.5">
                {features.map((f, i) => (
                  <span key={f.title}>
                    <span className="text-white font-medium">{f.title}</span>
                    {i < features.length - 1 && (
                      <span className="text-indigo-300"> · </span>
                    )}
                  </span>
                ))}
                <span className="ml-2 text-indigo-200 text-xs border border-indigo-300/50 rounded px-1.5 py-0.5">
                  Learn more
                </span>
              </p>
            </button>

            {/* Dismiss */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss banner"
              className="shrink-0 text-indigo-200 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Upcoming features"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-2xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white">What&apos;s coming next</h2>
                <p className="text-indigo-200 text-sm mt-0.5">
                  Our new website is under active development. Here&apos;s a closer look at what to expect.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close"
                className="shrink-0 text-indigo-200 hover:text-white transition-colors mt-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Feature list */}
            <div className="divide-y divide-slate-800">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full text-left px-6 py-4 hover:bg-slate-800/50 transition-colors group"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
                        {f.title}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">{f.summary}</p>
                    </div>
                    <svg
                      className={`w-4 h-4 shrink-0 text-indigo-400 transition-transform duration-200 ${activeIndex === i ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {activeIndex === i && (
                    <p className="mt-3 text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                      {f.detail}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
