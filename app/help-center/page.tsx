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
  const [photo, setPhoto] = useState<File | null>(null);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitStatus("loading");
    setSubmitErrorMessage("");

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("inquiryType", formData.inquiryType);
      payload.append("subject", formData.subject);
      payload.append("message", formData.message);
      if (photo) {
        payload.append("photo", photo);
      }
      payload.append("privacyConsent", privacyConsent ? "true" : "false");
      payload.append("website", "");

      const response = await fetch("/api/help-center", {
        method: "POST",
        body: payload,
      });

      const result = await response
        .json()
        .catch(() => ({ ok: false, message: "Unexpected server response." }));
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitStatus("success");
      setPhoto(null);
      setPrivacyConsent(false);
      form.reset();
      setFormData({
        name: "",
        email: "",
        inquiryType: selectedType || "question",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please try again.";
      setSubmitErrorMessage(message);
      setSubmitStatus("error");
    }
  };

  const inquiryTypes = [
    { value: "question", label: t.helpCenter?.inquiryQuestion || "Question" },
    { value: "feedback", label: t.helpCenter?.inquiryFeedback || "Feedback" },
    { value: "issue", label: t.helpCenter?.inquiryIssue || "Report an Issue" },
    { value: "other", label: t.helpCenter?.inquiryOther || "Other" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 sm:pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-indigo-500 opacity-20 blur-3xl sm:right-10 sm:top-40 sm:h-72 sm:w-72 lg:right-20 lg:h-96 lg:w-96"></div>
        <div className="absolute bottom-20 left-0 h-40 w-40 rounded-full bg-purple-500 opacity-15 blur-3xl sm:bottom-32 sm:left-10 sm:h-56 sm:w-56 lg:bottom-40 lg:left-20 lg:h-72 lg:w-72"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:mb-16">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              {t.helpCenter?.pageTitle || "Help Center"}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl">
              {t.helpCenter?.pageSubtitle ||
                "Find answers, ask questions, and get support from our dedicated team."}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
          {/* Contact Form - Left Column */}
          <div className="lg:col-span-1">
            <div className="xl:sticky xl:top-24">
              <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 p-5 backdrop-blur-md sm:p-8">
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
                      name="name"
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
                      name="email"
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
                      name="inquiryType"
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
                      name="subject"
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
                      name="message"
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

                  {/* Optional Photo */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t.helpCenter?.formPhoto || "Attach Photo (Optional)"}
                    </label>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-2 file:text-white hover:file:bg-indigo-500 transition-all duration-300"
                    />
                    <p className="mt-2 text-xs text-slate-400">
                      {t.helpCenter?.formPhotoHint || "Accepted formats: JPG, PNG, GIF, WebP. Max size: 5MB."}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-700 bg-slate-800/40 p-4">
                    <label className="flex items-start gap-3 text-sm text-slate-200">
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-500 bg-slate-900 text-indigo-500 focus:ring-indigo-500"
                      />
                      <span>
                        I understand that my information will be used in accordance with applicable data privacy law and Accessively's Data Privacy Policy. Please review our <a href="/privacy-policy" className="underline text-indigo-300 hover:text-indigo-200">Privacy Policy</a> for additional information.
                      </span>
                    </label>
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-50 sm:hover:scale-[1.02]"
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

                  {submitStatus === "error" && (
                    <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                      <p className="text-red-400 text-sm font-medium">
                        {submitErrorMessage ||
                          t.helpCenter?.formError ||
                          "Unable to send your message right now. Please try again."}
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
              <h2 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
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
                        className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-slate-800/30 sm:px-6"
                      >
                        <p className="text-left text-sm font-semibold text-white sm:text-base">
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
                        <div className="border-t border-slate-700/50 px-4 pb-4 sm:px-6">
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
            <div className="mt-12 overflow-hidden rounded-3xl border border-indigo-800/30 bg-gradient-to-br from-indigo-950/70 via-slate-900/70 to-purple-950/70 p-5 shadow-2xl shadow-indigo-950/30 sm:mt-16 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">Priority Support</p>
                  <h3 className="text-2xl font-bold text-white">
                    Book a Consultation or Contact Sales
                  </h3>
                  <p className="mt-2 max-w-2xl text-slate-300">
                    Connect with our team for a guided consultation or a tailored sales discussion.
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/40 bg-indigo-500/10 text-indigo-200 sm:flex">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href="/contact?type=consultation"
                  className="group rounded-2xl border border-indigo-500/40 bg-indigo-500/15 p-5 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/25"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-lg bg-indigo-500/30 p-2 text-indigo-100">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-white">Book a Consultation</p>
                      <p className="mt-1 text-sm text-slate-300">Discuss goals, process, and team setup with our specialists.</p>
                      <p className="mt-3 inline-flex items-center text-sm font-semibold text-indigo-200 transition-transform duration-300 group-hover:translate-x-1">
                        Start Consultation
                        <span className="ml-2">→</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/contact?type=sales"
                  className="group rounded-2xl border border-purple-500/40 bg-purple-500/15 p-5 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/25"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-lg bg-purple-500/30 p-2 text-purple-100">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-white">Contact Sales</p>
                      <p className="mt-1 text-sm text-slate-300">Get package options, scope guidance, and pricing support.</p>
                      <p className="mt-3 inline-flex items-center text-sm font-semibold text-purple-200 transition-transform duration-300 group-hover:translate-x-1">
                        Talk to Sales
                        <span className="ml-2">→</span>
                      </p>
                    </div>
                  </div>
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
