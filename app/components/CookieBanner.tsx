"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const consentCookieName = "accessively_cookie_consent";

const cookieContent = {
  en: {
    title: "Cookie Preferences",
    description:
      "We use cookies to remember preferences, understand site traffic, and improve your browsing experience. You can accept or decline non-essential cookies.",
    accept: "Accept Cookies",
    decline: "Decline",
    learnMore: "Learn More",
  },
  es: {
    title: "Preferencias de Cookies",
    description:
      "Usamos cookies para recordar preferencias, comprender el tráfico del sitio y mejorar tu experiencia. Puedes aceptar o rechazar las cookies no esenciales.",
    accept: "Aceptar Cookies",
    decline: "Rechazar",
    learnMore: "Más Información",
  },
  zh: {
    title: "Cookie 偏好",
    description:
      "我们使用 Cookie 来记住偏好、了解网站流量并改善您的浏览体验。您可以接受或拒绝非必要 Cookie。",
    accept: "接受 Cookie",
    decline: "拒绝",
    learnMore: "了解更多",
  },
  tl: {
    title: "Cookie Preferences",
    description:
      "Gumagamit kami ng cookies para tandaan ang preferences, maunawaan ang traffic ng site, at mapaganda ang browsing experience mo. Maaari mong tanggapin o tanggihan ang mga hindi kinakailangang cookie.",
    accept: "Tanggapin ang Cookies",
    decline: "Tanggihan",
    learnMore: "Alamin Pa",
  },
  fr: {
    title: "Préférences des Cookies",
    description:
      "Nous utilisons des cookies pour mémoriser les préférences, comprendre le trafic du site et améliorer votre navigation. Vous pouvez accepter ou refuser les cookies non essentiels.",
    accept: "Accepter les Cookies",
    decline: "Refuser",
    learnMore: "En Savoir Plus",
  },
} as const;

type CookieLang = keyof typeof cookieContent;

const hasConsentCookie = () =>
  document.cookie.split("; ").some((row) => row.startsWith(`${consentCookieName}=`));

export default function CookieBanner() {
  const { language } = useLanguage();
  const content = cookieContent[(language as CookieLang) || "en"] || cookieContent.en;
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    // Check if user already gave consent
    if (hasConsentCookie()) {
      setShouldShow(false);
    }
    // Mark component as mounted
    setMounted(true);
  }, []);

  const setConsent = (value: "accepted" | "declined") => {
    document.cookie = `${consentCookieName}=${value}; path=/; max-age=15552000; samesite=lax`;
    setShouldShow(false);
  };

  // Only render on client after hydration
  if (!mounted) {
    return null;
  }

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-700 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-lg font-semibold text-white">{content.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{content.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-indigo-500 hover:text-white"
            >
              {content.learnMore}
            </Link>
            <button
              type="button"
              onClick={() => setConsent("declined")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
            >
              {content.decline}
            </button>
            <button
              type="button"
              onClick={() => setConsent("accepted")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              {content.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}