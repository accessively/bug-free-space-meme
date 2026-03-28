"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";
import { useSearchParams } from "next/navigation";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

function HelpCenterContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "contact";

  const [selectedType, setSelectedType] = useState(initialType);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: selectedType || "question",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const faqs: FAQ[] = [
    {
      id: "1",
      category: "general",
      question: t.helpCenter.faq1Question,
      answer: t.helpCenter.faq1Answer,
    },
    {
      id: "2",
      category: "general",
      question: t.helpCenter.faq2Question,
      answer: t.helpCenter.faq2Answer,
    },
    {
      id: "3",
      category: "services",
      question: t.helpCenter.faq3Question,
      answer: t.helpCenter.faq3Answer,
    },
    {
      id: "4",
      category: "billing",
      question: t.helpCenter.faq4Question,
      answer: t.helpCenter.faq4Answer,
    },
    {
      id: "5",
      category: "services",
      question: t.helpCenter.faq5Question,
      answer: t.helpCenter.faq5Answer,
    },
    {
      id: "6",
      category: "general",
      question: t.helpCenter.faq6Question,
      answer: t.helpCenter.faq6Answer,
    },
  ];

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        inquiryType: "question",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };

  const inquiryTypes = [
    { value: "question", label: t.helpCenter?.inquiryQuestion || "Question" },
    { value: "feedback", label: t.helpCenter?.inquiryFeedback || "Feedback" },
    { value: "issue", label: t.helpCenter?.inquiryIssue || "Report an Issue" },
    { value: "other", label: t.helpCenter?.inquiryOther || "Other" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t.helpCenter?.pageTitle || "Help Center"}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.helpCenter?.pageSubtitle ||
                "Find answers, ask questions, and get support from our dedicated team."}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - Left Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="backdrop-blur-md bg-slate-900/40 rounded-2xl border border-slate-800/50 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t.helpCenter?.contactFormTitle || "Send us a Message"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.helpCenter?.formName || "Full Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                      placeholder={t.helpCenter.formName}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.helpCenter?.formEmail || "Email Address"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                      placeholder={t.helpCenter.formEmail}
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.helpCenter?.formInquiryType || "Inquiry Type"}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inquiryType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-slate-800">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.helpCenter?.formSubject || "Subject"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                      placeholder={t.helpCenter.formSubject}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.helpCenter?.formMessage || "Message"}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 resize-none"
                      placeholder={t.helpCenter.formMessage}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    {submitStatus === "loading"
                      ? t.helpCenter?.formSending || "Sending..."
                      : t.helpCenter?.formSubmit || "Send Message"}
                  </button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                      <p className="text-green-400 text-sm font-medium">
                        {t.helpCenter?.formSuccess ||
                          "✓ Message sent successfully! We'll be in touch soon."}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* FAQs and Search - Right Column */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder={t.helpCenter?.searchPlaceholder || "Search for help..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                {t.helpCenter?.faqTitle || "Frequently Asked Questions"}
              </h2>

              <div className="space-y-4">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq) => (
                    <div
                      key={faq.id}
                      className="backdrop-blur-md bg-slate-900/40 rounded-xl border border-slate-800/50 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() =>
                          setExpandedFAQ(
                            expandedFAQ === faq.id ? null : faq.id
                          )
                        }
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                      >
                        <p className="text-left text-white font-semibold">
                          {faq.question}
                        </p>
                        <svg
                          className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${
                            expandedFAQ === faq.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </button>

                      {expandedFAQ === faq.id && (
                        <div className="px-6 pb-4 border-t border-slate-700/50">
                          <p className="text-slate-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400">
                      {t.helpCenter?.noResultsFound ||
                        "No FAQs found matching your search."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Support */}
            <div className="mt-16 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl border border-indigo-800/30 p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                {t.helpCenter?.needMoreHelp || "Need more help?"}
              </h3>
              <p className="text-slate-300 mb-4">
                {t.helpCenter?.additionalSupport ||
                  "Can't find what you're looking for? Our support team is here to help."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:support@accessivelybpo.com"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {t.helpCenter?.emailSupport || "Email Support"}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                  {t.helpCenter?.contactUs || "Contact Us"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function HelpCenterPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-indigo-400/40 border-t-indigo-300 animate-spin" aria-label="loading" />
      </main>
    }>
      <HelpCenterContent />
    </Suspense>
  );
}
