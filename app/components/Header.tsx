"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/translations';

const languageMap: { [key: string]: 'en' | 'es' | 'zh' | 'tl' | 'fr' } = {
  English: 'en',
  Spanish: 'es',
  Chinese: 'zh',
  Filipino: 'tl',
  French: 'fr',
};

const languageDisplayNames: { [key: string]: string } = {
  en: 'English',
  es: 'Spanish',
  zh: 'Chinese',
  tl: 'Filipino',
  fr: 'French',
};

const searchUi = {
  en: {
    askAi: 'Ask AI',
    askAiPlaceholder: 'Ask anything about Accessively... (services, contacts, certifications, offices)',
    aiAnswerLabel: 'AI answer',
    aiNoAnswer: 'I could not find a precise answer on this page. Try asking about services, certifications, offices, or contact options.',
    relatedAnswers: 'Related answers',
    quickAnswers: 'Quick answers',
    sections: 'Sections',
    foundersQuestion: 'Who are the founders?',
    foundersAnswer: 'Jake Manila is the founder. Joshua Dela Torre and Denver De Guzman are co-founders.',
    servicesQuestion: 'What services do you offer?',
    servicesAnswer: 'We offer virtual assistance, sales and marketing, graphic design, web development, customer service, and business consulting.',
    contactQuestion: 'How can I contact Accessively?',
    contactAnswer: 'You can contact Accessively via https://solutions.accessivelybpo.com and Viber/WhatsApp at (+63) 993-679-0350.',
    socialQuestion: 'What are your social media links?',
    socialAnswer: 'Official platforms: TikTok https://www.tiktok.com/@accessively.ph, Instagram https://www.instagram.com/accessivelyofficial/, Threads https://www.threads.com/@accessivelyofficial, X/Twitter https://x.com/AOffical73700, and Facebook https://facebook.com/Accessivelyofficial.',
    certificationsQuestion: 'How many certifications do you show?',
    certificationsAnswer: 'The page shows 7 certifications in the Certifications and Expertise section.',
    supportQuestion: 'What are your support hours?',
    supportAnswer: 'Our team is available 24/7 for support.',
    officesQuestion: 'Where are your offices located?',
    officesAnswer: 'Our offices are in Cagayan de Oro, La Union, and Muntinlupa, Philippines.',
    cookiesQuestion: 'Do you use cookies?',
    cookiesAnswer: 'We use cookies to remember preferences, measure performance, and improve the website. Visitors can accept or decline them from the cookie banner.',
    openSection: 'Open section',
  },
  es: {
    askAi: 'Preguntar a IA',
    askAiPlaceholder: 'Pregunta algo sobre Accessively...',
    aiAnswerLabel: 'Respuesta de IA',
    aiNoAnswer: 'No encontré una respuesta precisa en esta página. Intenta preguntar sobre servicios, certificaciones, oficinas o contacto.',
    relatedAnswers: 'Respuestas relacionadas',
    quickAnswers: 'Respuestas rápidas',
    sections: 'Secciones',
    foundersQuestion: '¿Quiénes son los fundadores?',
    foundersAnswer: 'Jake Manila es el fundador. Joshua Dela Torre y Denver De Guzman son cofundadores.',
    servicesQuestion: '¿Qué servicios ofrecen?',
    servicesAnswer: 'Ofrecemos asistencia virtual, ventas y marketing, diseño gráfico, desarrollo web, servicio al cliente y consultoría empresarial.',
    contactQuestion: '¿Cómo puedo contactar a Accessively?',
    contactAnswer: 'Puedes contactarnos por https://solutions.accessivelybpo.com y Viber/WhatsApp al (+63) 993-679-0350.',
    socialQuestion: '¿Cuáles son sus redes sociales?',
    socialAnswer: 'Plataformas oficiales: TikTok, Instagram, Threads, X/Twitter y Facebook.',
    certificationsQuestion: '¿Cuántas certificaciones muestran?',
    certificationsAnswer: 'La página muestra 7 certificaciones en la sección de Certificaciones y Experiencia.',
    supportQuestion: '¿Cuál es su horario de soporte?',
    supportAnswer: 'Nuestro equipo está disponible 24/7 para soporte.',
    officesQuestion: '¿Dónde están ubicadas sus oficinas?',
    officesAnswer: 'Nuestras oficinas están en Cagayan de Oro, La Union y Muntinlupa, Filipinas.',
    cookiesQuestion: '¿Usan cookies?',
    cookiesAnswer: 'Usamos cookies para recordar preferencias, medir el rendimiento y mejorar el sitio web. Los visitantes pueden aceptarlas o rechazarlas desde el banner de cookies.',
    openSection: 'Abrir sección',
  },
  zh: {
    askAi: '询问 AI',
    askAiPlaceholder: '询问有关 Accessively 的问题...',
    aiAnswerLabel: 'AI 回答',
    aiNoAnswer: '我在此页面中未找到精确答案。请尝试咨询服务、认证、办公室或联系方式。',
    relatedAnswers: '相关回答',
    quickAnswers: '快速回答',
    sections: '版块',
    foundersQuestion: '创始人是谁？',
    foundersAnswer: 'Jake Manila 是创始人。Joshua Dela Torre 和 Denver De Guzman 是联合创始人。',
    servicesQuestion: '你们提供哪些服务？',
    servicesAnswer: '我们提供虚拟助理、销售与营销、平面设计、网站开发、客户服务和商业咨询。',
    contactQuestion: '如何联系 Accessively？',
    contactAnswer: '您可以通过 https://solutions.accessivelybpo.com 和 Viber/WhatsApp（+63）993-679-0350 联系我们。',
    socialQuestion: '你们的社交媒体链接是什么？',
    socialAnswer: '官方平台：TikTok、Instagram、Threads、X/Twitter 和 Facebook。',
    certificationsQuestion: '页面展示了多少项认证？',
    certificationsAnswer: '认证与专业能力部分展示了 7 项认证。',
    supportQuestion: '你们的支持时间是什么？',
    supportAnswer: '我们的团队 24/7 提供支持。',
    officesQuestion: '你们的办公室在哪里？',
    officesAnswer: '我们的办公室位于菲律宾的 Cagayan de Oro、La Union 和 Muntinlupa。',
    cookiesQuestion: '你们使用 Cookie 吗？',
    cookiesAnswer: '我们使用 Cookie 来记住偏好、衡量性能并改进网站。访客可以在 Cookie 横幅中接受或拒绝它们。',
    openSection: '打开版块',
  },
  tl: {
    askAi: 'Magtanong sa AI',
    askAiPlaceholder: 'Magtanong tungkol sa Accessively...',
    aiAnswerLabel: 'Sagot ng AI',
    aiNoAnswer: 'Walang eksaktong sagot na nakita sa page na ito. Subukang magtanong tungkol sa services, certifications, offices, o contact.',
    relatedAnswers: 'Kaugnay na mga sagot',
    quickAnswers: 'Mabilis na sagot',
    sections: 'Mga seksyon',
    foundersQuestion: 'Sino ang mga founder?',
    foundersAnswer: 'Si Jake Manila ang founder. Sina Joshua Dela Torre at Denver De Guzman ang mga co-founder.',
    servicesQuestion: 'Anong mga serbisyo ang inaalok ninyo?',
    servicesAnswer: 'Nag-aalok kami ng virtual assistance, sales and marketing, graphic design, web development, customer service, at business consulting.',
    contactQuestion: 'Paano ko makokontak ang Accessively?',
    contactAnswer: 'Maaari kaming kontakin sa https://solutions.accessivelybpo.com at sa Viber/WhatsApp: (+63) 993-679-0350.',
    socialQuestion: 'Ano ang social media links ninyo?',
    socialAnswer: 'Official platforms: TikTok, Instagram, Threads, X/Twitter, at Facebook.',
    certificationsQuestion: 'Ilan ang certifications sa page?',
    certificationsAnswer: 'May 7 certifications sa Certifications and Expertise section.',
    supportQuestion: 'Ano ang support hours ninyo?',
    supportAnswer: 'Available ang aming team 24/7 para sa support.',
    officesQuestion: 'Saan matatagpuan ang inyong mga opisina?',
    officesAnswer: 'Ang aming mga opisina ay nasa Cagayan de Oro, La Union, at Muntinlupa, Philippines.',
    cookiesQuestion: 'Gumagamit ba kayo ng cookies?',
    cookiesAnswer: 'Gumagamit kami ng cookies para tandaan ang preferences, sukatin ang performance, at pagandahin ang website. Maaaring tanggapin o tanggihan ito ng bisita mula sa cookie banner.',
    openSection: 'Buksan ang seksyon',
  },
  fr: {
    askAi: 'Demander à l’IA',
    askAiPlaceholder: 'Posez une question sur Accessively...',
    aiAnswerLabel: 'Réponse IA',
    aiNoAnswer: 'Je n’ai pas trouvé de réponse précise sur cette page. Essayez de demander les services, certifications, bureaux ou contacts.',
    relatedAnswers: 'Réponses associées',
    quickAnswers: 'Réponses rapides',
    sections: 'Sections',
    foundersQuestion: 'Qui sont les fondateurs ?',
    foundersAnswer: 'Jake Manila est le fondateur. Joshua Dela Torre et Denver De Guzman sont cofondateurs.',
    servicesQuestion: 'Quels services proposez-vous ?',
    servicesAnswer: 'Nous proposons l’assistance virtuelle, les ventes et le marketing, le design graphique, le développement web, le service client et le conseil en entreprise.',
    contactQuestion: 'Comment contacter Accessively ?',
    contactAnswer: 'Vous pouvez contacter Accessively via https://solutions.accessivelybpo.com et Viber/WhatsApp au (+63) 993-679-0350.',
    socialQuestion: 'Quels sont vos liens de réseaux sociaux ?',
    socialAnswer: 'Plateformes officielles : TikTok, Instagram, Threads, X/Twitter et Facebook.',
    certificationsQuestion: 'Combien de certifications affichez-vous ?',
    certificationsAnswer: 'La page affiche 7 certifications dans la section Certifications et Expertise.',
    supportQuestion: 'Quels sont vos horaires de support ?',
    supportAnswer: 'Notre équipe est disponible 24h/24 et 7j/7.',
    officesQuestion: 'Où sont situés vos bureaux ?',
    officesAnswer: 'Nos bureaux sont situés à Cagayan de Oro, La Union et Muntinlupa, aux Philippines.',
    cookiesQuestion: 'Utilisez-vous des cookies ?',
    cookiesAnswer: 'Nous utilisons des cookies pour mémoriser les préférences, mesurer les performances et améliorer le site. Les visiteurs peuvent les accepter ou les refuser depuis la bannière cookies.',
    openSection: 'Ouvrir la section',
  },
} as const;

type SearchUiLang = keyof typeof searchUi;

const stopWords = new Set([
  'a', 'an', 'and', 'are', 'at', 'can', 'do', 'for', 'how', 'i', 'is', 'me', 'my', 'of', 'the', 'to', 'we', 'what', 'where', 'who', 'whos', 'with', 'you', 'your'
]);

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const tokenizeText = (value: string) =>
  normalizeText(value)
    .split(' ')
    .filter((token) => token && !stopWords.has(token));

const matchesSearch = (query: string, values: string[]) => {
  const queryTokens = tokenizeText(query);
  const normalizedValues = values.map((value) => normalizeText(value));
  const haystack = normalizedValues.join(' ');

  if (queryTokens.length === 0) {
    return haystack.includes(normalizeText(query));
  }

  return queryTokens.every((token) => haystack.includes(token));
};

const scoreSearchMatch = (query: string, values: string[]) => {
  const queryTokens = tokenizeText(query);
  const normalizedValues = values.map((value) => normalizeText(value));
  const haystack = normalizedValues.join(' ');
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return 0;
  }

  let score = 0;

  if (haystack.includes(normalizedQuery)) {
    score += 6;
  }

  for (const token of queryTokens) {
    if (haystack.includes(token)) {
      score += 2;
    }
  }

  return score;
};

export default function Header() {
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language, setLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(languageDisplayNames[language] || 'English');

  const languages = ['English', 'Spanish', 'Chinese', 'Filipino', 'French'];
  const t = translations[language];
  const searchText = searchUi[(language as SearchUiLang) || 'en'] || searchUi.en;

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    const langCode = languageMap[lang];
    setLanguage(langCode);
    setShowLanguageMenu(false);
  };

  const mobileNavItems = [
    { href: '/#services', label: t.header.services },
    { href: '/help-center', label: t.footer.helpCenter || 'Help Center' },
    { href: '/apply', label: t.header.joinUs },
  ];

  const aboutNavItems = [
    { href: '/#about', label: t.about.title, description: t.about.subtitle },
    { href: '/#founders', label: t.founders.title, description: t.founders.subtitle },
    { href: '/#why-choose-us', label: t.whyChooseUs.title, description: t.whyChooseUs.subtitle },
    {
      href: '/#certifications',
      label: (t as any).certifications?.title || 'Certifications and Expertise',
      description:
        (t as any).certifications?.subtitle ||
        'Professional certifications and domain expertise that support reliable delivery.',
    },
    {
      href: '/#offices',
      label: t.offices?.title || 'Our Offices & Locations',
      description:
        t.offices?.subtitle ||
        'Strategically located to serve clients globally with efficiency and reliability.',
    },
    { href: '/#testimonials', label: t.testimonials.title, description: t.testimonials.subtitle },
  ];

  const serviceNavItems = [
    { href: '/#service-virtual-assistance', label: t.services.virtualAssistanceTitle },
    { href: '/#service-sales-marketing', label: t.services.salesMarketingTitle },
    { href: '/#service-graphic-design', label: t.services.graphicDesignTitle },
    { href: '/#service-web-development', label: t.services.webDevelopmentTitle },
    { href: '/#service-customer-service', label: t.services.customerServiceTitle },
  ];

  const searchableSections = [
    {
      href: '/#about',
      label: t.about.title,
      description: t.about.subtitle,
    },
    {
      href: '/#founders',
      label: t.founders.title,
      description: t.founders.subtitle,
    },
    {
      href: '/#services',
      label: t.services.title,
      description: t.services.description,
    },
    {
      href: '/#why-choose-us',
      label: t.whyChooseUs.title,
      description: t.whyChooseUs.subtitle,
    },
    {
      href: '/#testimonials',
      label: t.testimonials.title,
      description: t.testimonials.subtitle,
    },
    {
      href: '/#offices',
      label: t.offices?.title || 'Our Offices & Locations',
      description: t.offices?.subtitle || 'Strategically located to serve clients globally with efficiency and reliability.',
    },
    {
      href: '/#contact',
      label: t.contact.title,
      description: t.contact.subtitle,
    },
  ];

  const quickAnswers = [
    {
      id: 'founders-answer',
      title: searchText.foundersQuestion,
      answer: searchText.foundersAnswer,
      href: '/#founders',
      keywords: ['founder', 'founders', 'who is the founder', 'whos the founder', 'owner', 'ceo', t.founders.title],
    },
    {
      id: 'services-answer',
      title: searchText.servicesQuestion,
      answer: searchText.servicesAnswer,
      href: '/#services',
      keywords: ['services', 'service', 'what do you offer', 'offerings', t.services.title],
    },
    {
      id: 'contact-answer',
      title: searchText.contactQuestion,
      answer: searchText.contactAnswer,
      href: '/#contact',
      keywords: ['contact', 'email', 'reach', 'message', 'whatsapp', 'viber', 'solutions.accessivelybpo.com', t.contact.title, t.contact.emailAddress],
    },
    {
      id: 'social-answer',
      title: searchText.socialQuestion,
      answer: searchText.socialAnswer,
      href: '/#contact',
      keywords: ['social', 'social media', 'tiktok', 'instagram', 'threads', 'x', 'twitter', 'facebook', 'links', '@accessively.ph', '@accessivelyofficial'],
    },
    {
      id: 'certifications-answer',
      title: searchText.certificationsQuestion,
      answer: searchText.certificationsAnswer,
      href: '/#certifications',
      keywords: ['certification', 'certifications', 'expertise', '7 certifications', 'cert1', 'cert2', 'cert3', 'cert4', 'cert5', 'cert6', 'cert7'],
    },
    {
      id: 'support-answer',
      title: searchText.supportQuestion,
      answer: searchText.supportAnswer,
      href: '/help-center',
      keywords: ['support', 'hours', '24/7', 'help', t.helpCenter.title, t.contact.available24],
    },
    {
      id: 'offices-answer',
      title: searchText.officesQuestion,
      answer: searchText.officesAnswer,
      href: '/#offices',
      keywords: ['office', 'offices', 'location', 'locations', 'where are you located', t.offices?.title || 'offices'],
    },
    {
      id: 'cookies-answer',
      title: searchText.cookiesQuestion,
      answer: searchText.cookiesAnswer,
      href: '/privacy-policy',
      keywords: ['cookie', 'cookies', 'privacy', 'tracking', 'consent', 'policy'],
    },
  ];

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const rankedAnswers = normalizedSearch
    ? quickAnswers
        .map((answer) => ({
          ...answer,
          score: scoreSearchMatch(searchQuery, [answer.title, answer.answer, ...answer.keywords]),
        }))
        .filter((answer) => answer.score > 0)
        .sort((a, b) => b.score - a.score)
    : [];
  const bestAnswer = rankedAnswers[0] || null;
  const relatedAnswers = rankedAnswers.slice(1, 4);

  const filteredSections = normalizedSearch
    ? searchableSections.filter((section) =>
        matchesSearch(searchQuery, [section.label, section.description])
      )
    : searchableSections;

  const closeSearchMenu = () => {
    setShowSearchMenu(false);
    setSearchQuery('');
  };

  useEffect(() => {
    setSelectedLanguage(languageDisplayNames[language] || "English");
  }, [language]);

  return (
    <header className="bg-indigo-950 border-b border-indigo-800 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-between h-16 items-center">
          <div className="flex min-w-0">
            <div className="flex-shrink-0 flex items-center min-w-0">
              <Link href="/#top" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Accessively logo"
                  className="h-7 sm:h-8 w-auto"
                />
                <span className="block text-sm sm:text-2xl font-extrabold uppercase tracking-wide sm:tracking-wider font-sans text-white truncate max-w-[58vw] sm:max-w-none">
                  Accessively
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:items-center sm:gap-6">
              <div
                className="relative"
                onMouseEnter={() => setShowAboutMenu(true)}
                onMouseLeave={() => setShowAboutMenu(false)}
              >
                <button
                  onClick={() => setShowAboutMenu((prev) => !prev)}
                  className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex h-16 items-center px-1 border-b-2 text-sm font-medium transition-all duration-300"
                >
                  {t.header.about}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showAboutMenu && (
                  <div className="absolute left-0 mt-2 w-[420px] rounded-xl border border-indigo-700 bg-slate-950/95 p-2 shadow-xl z-50">
                    {aboutNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setShowAboutMenu(false)}
                        className="block rounded-lg px-3 py-2 hover:bg-slate-900"
                      >
                        <div className="text-sm font-semibold text-slate-100">{item.label}</div>
                        <div className="mt-1 text-xs text-slate-400">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setShowServicesMenu(true)}
                onMouseLeave={() => setShowServicesMenu(false)}
              >
                <button
                  onClick={() => setShowServicesMenu((prev) => !prev)}
                  className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex h-16 items-center px-1 border-b-2 text-sm font-medium transition-all duration-300"
                >
                  {t.header.services}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showServicesMenu && (
                  <div className="absolute left-0 mt-2 w-[320px] rounded-xl border border-indigo-700 bg-slate-950/95 p-2 shadow-xl z-50">
                    <Link
                      href="/#services"
                      onClick={() => setShowServicesMenu(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-indigo-300 hover:bg-slate-900"
                    >
                      {t.services.title}
                    </Link>
                    {serviceNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setShowServicesMenu(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/help-center" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex h-16 items-center px-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                {t.footer.helpCenter || "Help Center"}
              </Link>
              <Link href="/apply" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex h-16 items-center px-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                {t.header.joinUs}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => {
                setShowSearchMenu((prev) => !prev);
                setShowLanguageMenu(false);
              }}
              className="inline-flex items-center justify-center gap-2 h-10 px-3 sm:px-4 rounded-full border border-indigo-600 hover:bg-indigo-900 transition-all duration-300"
              aria-label={searchText.askAi}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
              </svg>
              <span className="hidden sm:inline text-sm font-medium">{searchText.askAi}</span>
            </button>

            <div className="relative hidden sm:block">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white border border-indigo-600 hover:bg-indigo-900 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10m-9.472-4h.968a2 2 0 011.964 2.84m-6 .576a9 9 0 10-1-.576m.576 0a9.003 9.003 0 001 .576" />
                </svg>
                {selectedLanguage}
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-900 rounded-lg shadow-lg border border-indigo-600 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-all duration-300 ${
                        selectedLanguage === lang
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-indigo-600 hover:bg-indigo-900 transition-all duration-300"
              aria-label="Change language"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10m-9.472-4h.968a2 2 0 011.964 2.84m-6 .576a9 9 0 10-1-.576m.576 0a9.003 9.003 0 001 .576" />
              </svg>
            </button>

            {showLanguageMenu && (
              <div className="absolute right-3 top-14 w-40 bg-slate-900 rounded-lg shadow-lg border border-indigo-600 z-50 sm:hidden">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`block w-full text-left px-4 py-3 text-sm transition-all duration-300 ${
                      selectedLanguage === lang
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}

            <a
              href="#contact"
              className="hidden sm:inline-flex bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              {t.header.getStarted}
            </a>

            <button
              onClick={() => setShowMobileMenu((prev) => !prev)}
              className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-indigo-600 hover:bg-indigo-900 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {showMobileMenu ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {showSearchMenu && (
          <div className="pb-4">
            <div className="rounded-2xl border border-indigo-800 bg-indigo-950/90 backdrop-blur-sm p-3 sm:p-4 space-y-3">
              <div className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchText.askAiPlaceholder}
                  className="w-full rounded-xl border border-indigo-700 bg-slate-950/70 px-4 py-3 pr-10 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none"
                />
                <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                </svg>
              </div>

              <div className="max-h-72 overflow-y-auto space-y-2">
                {normalizedSearch && (
                  <div className="rounded-xl border border-indigo-700/60 bg-slate-950/70 px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">{searchText.aiAnswerLabel}</div>
                    {bestAnswer ? (
                      <>
                        <div className="mt-2 text-sm font-semibold text-white">{bestAnswer.title}</div>
                        <div className="mt-1 text-sm text-slate-300">{bestAnswer.answer}</div>
                        <Link
                          href={bestAnswer.href}
                          onClick={() => {
                            closeSearchMenu();
                            setShowMobileMenu(false);
                          }}
                          className="mt-3 inline-flex text-xs font-semibold text-indigo-300 hover:text-indigo-200"
                        >
                          {searchText.openSection}
                        </Link>
                      </>
                    ) : (
                      <div className="mt-2 text-sm text-slate-300">{searchText.aiNoAnswer}</div>
                    )}
                  </div>
                )}

                {relatedAnswers.length > 0 && (
                  <div className="space-y-2">
                    <div className="px-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                      {searchText.relatedAnswers}
                    </div>
                    {relatedAnswers.map((answer) => (
                      <div
                        key={answer.id}
                        className="rounded-xl border border-indigo-700/60 bg-slate-950/70 px-4 py-3"
                      >
                        <div className="text-sm font-semibold text-white">{answer.title}</div>
                        <div className="mt-1 text-sm text-slate-300">{answer.answer}</div>
                        <Link
                          href={answer.href}
                          onClick={() => {
                            closeSearchMenu();
                            setShowMobileMenu(false);
                          }}
                          className="mt-3 inline-flex text-xs font-semibold text-indigo-300 hover:text-indigo-200"
                        >
                          {searchText.openSection}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {filteredSections.length > 0 ? (
                  <div className="space-y-2">
                    {normalizedSearch && (
                      <div className="px-1 pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {searchText.sections}
                      </div>
                    )}
                    {filteredSections.map((section) => (
                      <Link
                        key={section.href}
                        href={section.href}
                        onClick={() => {
                          closeSearchMenu();
                          setShowMobileMenu(false);
                        }}
                        className="block rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 transition-colors hover:border-indigo-500 hover:bg-slate-900"
                      >
                        <div className="text-sm font-semibold text-white">{section.label}</div>
                        <div className="mt-1 text-xs text-slate-400">{section.description}</div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  !bestAnswer && (
                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-400">
                      {t.header.noSearchResults || 'No matching sections found.'}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {showMobileMenu && (
          <div className="sm:hidden pb-4">
            <div className="rounded-2xl border border-indigo-800 bg-indigo-950/80 backdrop-blur-sm p-3 space-y-1">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setShowMobileMenu(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-indigo-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-indigo-800/70 pt-2">
                <p className="px-3 py-1 text-xs uppercase tracking-[0.2em] text-indigo-300">{t.header.about}</p>
                {aboutNavItems.map((item) => (
                  <Link
                    key={`mobile-about-${item.href}`}
                    href={item.href}
                    onClick={() => setShowMobileMenu(false)}
                    className="block rounded-lg px-3 py-2 hover:bg-indigo-900 transition-colors"
                  >
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="mt-1 text-xs text-slate-400">{item.description}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-2 border-t border-indigo-800/70 pt-2">
                {serviceNavItems.map((item) => (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    onClick={() => setShowMobileMenu(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-indigo-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setShowMobileMenu(false)}
                className="mt-2 inline-flex w-full justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300"
              >
                {t.header.getStarted}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}