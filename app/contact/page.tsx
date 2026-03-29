"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { pageTexts } from "@/app/pageTexts";

function ContactContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "sales" ? "sales" : "consultation";
  const { language } = useLanguage();
  const t = pageTexts[language].contactPage;
  const [contactType, setContactType] = useState<"consultation" | "sales">(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [customBusinessType, setCustomBusinessType] = useState("");

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("privacyConsent", privacyConsent ? "true" : "false");
    formData.append("website", "");

    try {
      setIsSubmitting(true);
      setSubmitError(false);
      setSubmitMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitMessage(
        result.emailed
          ? "Your message has been sent successfully to solutions@accessivelybpo.com."
          : "Your message has been submitted successfully. Configure SMTP to enable automatic email delivery."
      );
      event.currentTarget?.reset();
      setPrivacyConsent(false);
      setBusinessType("");
      setCustomBusinessType("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed.";
      setSubmitError(true);
      setSubmitMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl sm:right-12 sm:h-96 sm:w-96"></div>
            <div className="absolute bottom-16 left-0 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl sm:left-10 sm:h-72 sm:w-72"></div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 backdrop-blur-md sm:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">Accessively Support Desk</p>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {contactType === "consultation" ? "Book a Consultation" : "Contact Sales"}
                  </h2>
                  <p className="mt-3 text-slate-300">
                    {contactType === "consultation"
                      ? "Tell us your current setup, goals, and constraints. We will propose a practical roadmap and the right team structure for your needs."
                      : "Share your requirements, expected volume, and timeline. Our sales team will prepare a tailored service plan and pricing recommendation."}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setContactType("consultation")}
                      className={`rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                        contactType === "consultation"
                          ? "border-indigo-400 bg-indigo-500/20 text-white"
                          : "border-slate-700 bg-slate-900/50 text-slate-300 hover:border-indigo-500/40"
                      }`}
                    >
                      <p className="font-semibold">Book a Consultation</p>
                      <p className="mt-1 text-xs text-slate-300">Strategy and planning guidance</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactType("sales")}
                      className={`rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                        contactType === "sales"
                          ? "border-purple-400 bg-purple-500/20 text-white"
                          : "border-slate-700 bg-slate-900/50 text-slate-300 hover:border-purple-500/40"
                      }`}
                    >
                      <p className="font-semibold">Contact Sales</p>
                      <p className="mt-1 text-xs text-slate-300">Packages, scope, and pricing</p>
                    </button>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400"></span>
                      <span>Response target: within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400"></span>
                      <span>Tailored recommendations based on your objectives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400"></span>
                      <span>Confidential and privacy-compliant submission process</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 backdrop-blur-md sm:p-8">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{t.title}</h3>
                  <p className="mt-2 text-slate-300">{t.subtitle}</p>

                  <form onSubmit={handleContactSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <input type="hidden" name="contactType" value={contactType} />
                  </div>
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-200">
                      {t.firstName}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        autoComplete="given-name"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-200">
                      {t.lastName}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        autoComplete="family-name"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                      {t.email}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
                      Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="e.g. +63 912 345 6789"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 rounded-xl border border-slate-700 bg-slate-800/30 p-4">
                      <p className="mb-3 text-sm font-semibold text-slate-200">Availability</p>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div>
                          <label htmlFor="availabilityDate" className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                            Date
                          </label>
                          <div className="mt-1">
                            <input
                              id="availabilityDate"
                              name="availabilityDate"
                              type="date"
                              required
                              className="availability-picker block w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="availabilityTime" className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                            Time
                          </label>
                          <div className="mt-1">
                            <input
                              id="availabilityTime"
                              name="availabilityTime"
                              type="time"
                              required
                              className="availability-picker block w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="availabilityTimeZone" className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                            Time Zone
                          </label>
                          <div className="relative mt-1">
                            <select
                              id="availabilityTimeZone"
                              name="availabilityTimeZone"
                              required
                              defaultValue=""
                              className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 pr-10 text-white shadow-sm transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                            >
                              <option value="" disabled>Select time zone</option>
                              <option value="UTC-08:00 Pacific Time (PT)">UTC-08:00 Pacific Time (PT)</option>
                              <option value="UTC-07:00 Mountain Time (MT)">UTC-07:00 Mountain Time (MT)</option>
                              <option value="UTC-06:00 Central Time (CT)">UTC-06:00 Central Time (CT)</option>
                              <option value="UTC-05:00 Eastern Time (ET)">UTC-05:00 Eastern Time (ET)</option>
                              <option value="UTC+00:00 Greenwich Mean Time (GMT)">UTC+00:00 Greenwich Mean Time (GMT)</option>
                              <option value="UTC+01:00 Central European Time (CET)">UTC+01:00 Central European Time (CET)</option>
                              <option value="UTC+04:00 Gulf Standard Time (GST)">UTC+04:00 Gulf Standard Time (GST)</option>
                              <option value="UTC+05:30 India Standard Time (IST)">UTC+05:30 India Standard Time (IST)</option>
                              <option value="UTC+08:00 Singapore / China Standard Time">UTC+08:00 Singapore / China Standard Time</option>
                              <option value="UTC+09:00 Japan / Korea Standard Time">UTC+09:00 Japan / Korea Standard Time</option>
                              <option value="UTC+10:00 Australian Eastern Time (AET)">UTC+10:00 Australian Eastern Time (AET)</option>
                              <option value="UTC+08:00 Philippine Standard Time (PHT)">UTC+08:00 Philippine Standard Time (PHT)</option>
                            </select>
                            <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="businessType" className="block text-sm font-medium text-slate-200">
                      Business Type (Optional)
                    </label>
                    <div className="mt-1 rounded-xl border border-slate-700 bg-slate-800/30 p-4">
                      <label htmlFor="businessTypeSelect" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                        Choose Industry
                      </label>
                      <div className="relative">
                        <select
                          id="businessTypeSelect"
                          value={businessType}
                          onChange={(event) => setBusinessType(event.target.value)}
                          className="block w-full appearance-none rounded-lg border border-indigo-400/40 bg-slate-800/70 px-4 py-3 pr-10 text-white shadow-sm transition-colors focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/40"
                        >
                          <option value="">Select business type</option>
                          <option value="Advertising & Marketing">Advertising & Marketing</option>
                          <option value="Agriculture & Farming">Agriculture & Farming</option>
                          <option value="Architecture & Engineering">Architecture & Engineering</option>
                          <option value="Automotive">Automotive</option>
                          <option value="Banking & Financial Services">Banking & Financial Services</option>
                          <option value="Beauty & Cosmetics">Beauty & Cosmetics</option>
                          <option value="Business Process Outsourcing (BPO)">Business Process Outsourcing (BPO)</option>
                          <option value="Construction & Real Estate">Construction & Real Estate</option>
                          <option value="Consulting Services">Consulting Services</option>
                          <option value="Customer Support Services">Customer Support Services</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Education & E-learning">Education & E-learning</option>
                          <option value="Energy & Utilities">Energy & Utilities</option>
                          <option value="Entertainment & Media">Entertainment & Media</option>
                          <option value="Events & Hospitality">Events & Hospitality</option>
                          <option value="Food & Beverage">Food & Beverage</option>
                          <option value="Gaming">Gaming</option>
                          <option value="Government & Public Sector">Government & Public Sector</option>
                          <option value="Graphic Design & Creative Studio">Graphic Design & Creative Studio</option>
                          <option value="Healthcare & Medical">Healthcare & Medical</option>
                          <option value="Human Resources & Recruitment">Human Resources & Recruitment</option>
                          <option value="Information Technology">Information Technology</option>
                          <option value="Insurance">Insurance</option>
                          <option value="Legal Services">Legal Services</option>
                          <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Nonprofit & NGO">Nonprofit & NGO</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="Retail & Consumer Goods">Retail & Consumer Goods</option>
                          <option value="SaaS / Software">SaaS / Software</option>
                          <option value="Sales & Lead Generation">Sales & Lead Generation</option>
                          <option value="Social Media Management">Social Media Management</option>
                          <option value="Telecommunications">Telecommunications</option>
                          <option value="Travel & Tourism">Travel & Tourism</option>
                          <option value="Virtual Assistance Agency">Virtual Assistance Agency</option>
                          <option value="Web Development Agency">Web Development Agency</option>
                          <option value="__other">Other (Type your own)</option>
                        </select>
                        <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      {businessType === "__other" && (
                        <div className="mt-3">
                          <label htmlFor="customBusinessType" className="mb-1 block text-xs font-medium text-indigo-200">
                            Type your business type
                          </label>
                          <input
                            id="customBusinessType"
                            type="text"
                            value={customBusinessType}
                            onChange={(event) => setCustomBusinessType(event.target.value)}
                            className="block w-full rounded-lg border border-indigo-400/40 bg-slate-800/70 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/40"
                            placeholder="Enter your business type"
                          />
                        </div>
                      )}

                      <input
                        type="hidden"
                        name="businessType"
                        value={businessType === "__other" ? customBusinessType : businessType}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                      {t.message}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="image" className="block text-sm font-medium text-slate-200">
                      {t.image || "Attach an Image (Optional)"}
                    </label>
                    <div className="mt-1">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-2 file:text-white hover:file:bg-indigo-500"
                      />
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      {t.acceptedImageFormats || "Accepted formats: JPG, PNG, GIF, WebP. Max file size: 5MB"}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/40 p-4 text-sm text-slate-200">
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        checked={privacyConsent}
                        onChange={(event) => setPrivacyConsent(event.target.checked)}
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-500 bg-slate-900 text-indigo-500 focus:ring-indigo-500"
                      />
                      <span>
                        I understand that my information will be used in accordance with applicable data privacy law and Accessively's Data Privacy Policy. Please review our <a href="/privacy-policy" className="underline text-indigo-300 hover:text-indigo-200">Privacy Policy</a> for additional information.
                      </span>
                    </label>
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : contactType === "consultation" ? "Book Consultation" : "Contact Sales"}
                    </button>
                  </div>
                  {submitMessage && (
                    <div className="sm:col-span-2">
                      <p
                        className={`text-sm font-medium text-center ${
                          submitError ? "text-red-400" : "text-emerald-400"
                        }`}
                      >
                        {submitMessage}
                      </p>
                    </div>
                  )}
                  <div className="sm:col-span-2 text-center">
                    <p className="text-sm text-slate-400">
                      {t.policyPrefix}{' '}
                      <a href="/privacy-policy" className="underline text-indigo-300 hover:text-indigo-200">
                        {t.privacyPolicy}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-2 border-indigo-400/40 border-t-indigo-300 animate-spin" aria-label="loading" />
        </main>
      }
    >
      <ContactContent />
    </Suspense>
  );
}