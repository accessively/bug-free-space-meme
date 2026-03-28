"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";

interface SupportOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
  hoverGradient: string;
}

const HelpCenterSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const supportOptions: SupportOption[] = [
    {
      id: "question",
      icon: "❓",
      title: t.helpCenter?.askQuestionTitle || "Ask a Question",
      description:
        t.helpCenter?.askQuestionDesc ||
        "Get answers to your questions from our support team.",
      gradient: "from-blue-600 to-cyan-600",
      hoverGradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "feedback",
      icon: "💬",
      title: t.helpCenter?.sendFeedbackTitle || "Send Feedback",
      description:
        t.helpCenter?.sendFeedbackDesc ||
        "Share your thoughts to help us improve our services.",
      gradient: "from-purple-600 to-pink-600",
      hoverGradient: "from-purple-500 to-pink-500",
    },
    {
      id: "issue",
      icon: "⚠️",
      title: t.helpCenter?.reportIssueTitle || "Report an Issue",
      description:
        t.helpCenter?.reportIssueDesc ||
        "Encountered a problem? Let us know and we'll fix it quickly.",
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-500 to-red-500",
    },
    {
      id: "contact",
      icon: "📞",
      title: t.helpCenter?.contactSupportTitle || "Contact Support",
      description:
        t.helpCenter?.contactSupportDesc ||
        "Reach out directly to our team for personalized assistance.",
      gradient: "from-indigo-600 to-purple-600",
      hoverGradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.helpCenter?.title || "Help Center"}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            {t.helpCenter?.subtitle ||
              "Need assistance? We're here to help—quickly and efficiently."}
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            {t.helpCenter?.description ||
              "Access support, ask questions, or share feedback. Our team is ready to assist you with anything you need."}
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option) => (
            <Link
              key={option.id}
              href={`/help-center?type=${option.id}`}
              className="group"
            >
              <div className="h-full backdrop-blur-md bg-slate-900/40 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                {/* Icon Background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.gradient} group-hover:${option.hoverGradient} transition-all duration-300 flex items-center justify-center mb-4 shadow-lg`}
                >
                  <span className="text-3xl">{option.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {option.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center text-indigo-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  <span>Get Help</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Response Time Info */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl border border-indigo-800/30 p-8 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <p className="text-indigo-300 font-semibold">
              {t.helpCenter?.responseTime ||
                "We typically respond within 24 hours."}
            </p>
          </div>
          <p className="text-slate-300 text-sm">
            {t.helpCenter?.supportDetails ||
              "Our support team is available to help you with any questions or issues you may have."}
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-slate-300 mb-4">
            {t.helpCenter?.ctaText ||
              "Still need help? Contact our support team anytime."}
          </p>
          <Link
            href="/help-center"
            className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-indigo-600/30"
          >
            {t.helpCenter?.viewFullCenter || "Visit Help Center"}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterSection;
