"use client";

import { Suspense, useRef, useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const outsourcingTexts = {
  en: {
    heroTitle: "Interested in Outsourcing",
    subtitle: "Tell us about your business and outsourcing needs. Our team will get back to you with tailored solutions.",
    cardTitle: "Interested in Outsourcing",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone Number",
    companySection: "Company Information",
    companyName: "Company Name",
    industry: "Industry",
    industryPlaceholder: "Select an industry",
    industryTechnology: "Technology",
    industryFinance: "Finance",
    industryHealthcare: "Healthcare",
    industryRetail: "Retail",
    industryManufacturing: "Manufacturing",
    industryEducation: "Education",
    industryOther: "Other",
    companySize: "Company Size",
    companySizePlaceholder: "Select company size",
    companySize1: "1-10 employees",
    companySize2: "11-50 employees",
    companySize3: "51-200 employees",
    companySize4: "201-500 employees",
    companySize5: "500+ employees",
    needsSection: "Outsourcing Needs",
    servicesInterested: "Services Interested In",
    servicesPlaceholder: "E.g., Customer support, Data entry, Content writing, IT support...",
    challenges: "Current Challenges",
    challengesPlaceholder: "Tell us about your current business challenges and pain points...",
    timelineSection: "Timeline & Budget",
    projectTimeline: "Project Timeline",
    projectTimelinePlaceholder: "Select timeline",
    timeline1: "ASAP",
    timeline2: "Within 1 month",
    timeline3: "Within 3 months",
    timeline4: "Within 6 months",
    timeline5: "Flexible",
    budget: "Budget Range",
    budgetPlaceholder: "Select budget range",
    budget1: "Under $5,000",
    budget2: "$5,000 - $15,000",
    budget3: "$15,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "Not sure yet",
    consentSection: "Consent & Privacy",
    privacyConsentLabel: "I agree to the",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    submitSection: "Submit Your Inquiry",
    submitting: "Submitting...",
    submitButton: "Submit Inquiry",
    successEmailed: "Your message has been sent successfully to solutions@accessivelybpo.com.",
    successStored: "Your inquiry has been submitted successfully. Our team will review it shortly.",
    submissionFailed: "Submission failed.",
  },
  es: {
    heroTitle: "Interesado en Outsourcing",
    subtitle: "Cuéntanos sobre tu empresa y tus necesidades de outsourcing. Nuestro equipo te responderá con soluciones adaptadas.",
    cardTitle: "Interesado en Outsourcing",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo electrónico",
    phone: "Número de Teléfono",
    companySection: "Información de la Empresa",
    companyName: "Nombre de la Empresa",
    industry: "Industria",
    industryPlaceholder: "Selecciona una industria",
    industryTechnology: "Tecnología",
    industryFinance: "Finanzas",
    industryHealthcare: "Salud",
    industryRetail: "Retail",
    industryManufacturing: "Manufactura",
    industryEducation: "Educación",
    industryOther: "Otro",
    companySize: "Tamaño de la Empresa",
    companySizePlaceholder: "Selecciona el tamaño de la empresa",
    companySize1: "1-10 empleados",
    companySize2: "11-50 empleados",
    companySize3: "51-200 empleados",
    companySize4: "201-500 empleados",
    companySize5: "500+ empleados",
    needsSection: "Necesidades de Outsourcing",
    servicesInterested: "Servicios de Interés",
    servicesPlaceholder: "Ej.: atención al cliente, ingreso de datos, redacción de contenidos, soporte TI...",
    challenges: "Desafíos Actuales",
    challengesPlaceholder: "Cuéntanos tus desafíos actuales y puntos de dolor...",
    timelineSection: "Plazo y Presupuesto",
    projectTimeline: "Plazo del Proyecto",
    projectTimelinePlaceholder: "Selecciona un plazo",
    timeline1: "Lo antes posible",
    timeline2: "Dentro de 1 mes",
    timeline3: "Dentro de 3 meses",
    timeline4: "Dentro de 6 meses",
    timeline5: "Flexible",
    budget: "Rango de Presupuesto",
    budgetPlaceholder: "Selecciona un rango de presupuesto",
    budget1: "Menos de $5,000",
    budget2: "$5,000 - $15,000",
    budget3: "$15,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "Aún no estoy seguro",
    consentSection: "Consentimiento y Privacidad",
    privacyConsentLabel: "Acepto la",
    privacyPolicy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    submitSection: "Enviar tu Consulta",
    submitting: "Enviando...",
    submitButton: "Enviar Consulta",
    successEmailed: "Tu mensaje se ha enviado correctamente a solutions@accessivelybpo.com.",
    successStored: "Tu consulta se ha enviado correctamente. Nuestro equipo la revisará en breve.",
    submissionFailed: "El envío falló.",
  },
  zh: {
    heroTitle: "对外包感兴趣",
    subtitle: "请告诉我们您的业务和外包需求，我们的团队将为您提供定制方案。",
    cardTitle: "对外包感兴趣",
    firstName: "名字",
    lastName: "姓氏",
    email: "电子邮箱",
    phone: "电话号码",
    companySection: "公司信息",
    companyName: "公司名称",
    industry: "行业",
    industryPlaceholder: "请选择行业",
    industryTechnology: "科技",
    industryFinance: "金融",
    industryHealthcare: "医疗保健",
    industryRetail: "零售",
    industryManufacturing: "制造业",
    industryEducation: "教育",
    industryOther: "其他",
    companySize: "公司规模",
    companySizePlaceholder: "请选择公司规模",
    companySize1: "1-10 名员工",
    companySize2: "11-50 名员工",
    companySize3: "51-200 名员工",
    companySize4: "201-500 名员工",
    companySize5: "500+ 名员工",
    needsSection: "外包需求",
    servicesInterested: "感兴趣的服务",
    servicesPlaceholder: "例如：客户支持、数据录入、内容写作、IT 支持...",
    challenges: "当前挑战",
    challengesPlaceholder: "请告诉我们您当前的业务挑战和痛点...",
    timelineSection: "时间与预算",
    projectTimeline: "项目时间线",
    projectTimelinePlaceholder: "请选择时间线",
    timeline1: "尽快",
    timeline2: "1 个月内",
    timeline3: "3 个月内",
    timeline4: "6 个月内",
    timeline5: "灵活",
    budget: "预算范围",
    budgetPlaceholder: "请选择预算范围",
    budget1: "低于 $5,000",
    budget2: "$5,000 - $15,000",
    budget3: "$15,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "暂不确定",
    consentSection: "同意与隐私",
    privacyConsentLabel: "我同意",
    privacyPolicy: "隐私政策",
    terms: "条款与条件",
    submitSection: "提交您的咨询",
    submitting: "提交中...",
    submitButton: "提交咨询",
    successEmailed: "您的消息已成功发送至 solutions@accessivelybpo.com。",
    successStored: "您的咨询已成功提交，我们的团队将尽快审核。",
    submissionFailed: "提交失败。",
  },
  tl: {
    heroTitle: "Interesado sa Outsourcing",
    subtitle: "Ikuwento sa amin ang inyong negosyo at outsourcing needs. Babalikan kayo ng aming team ng angkop na solusyon.",
    cardTitle: "Interesado sa Outsourcing",
    firstName: "Pangalan",
    lastName: "Apelyido",
    email: "Email",
    phone: "Numero ng Telepono",
    companySection: "Impormasyon ng Kumpanya",
    companyName: "Pangalan ng Kumpanya",
    industry: "Industriya",
    industryPlaceholder: "Pumili ng industriya",
    industryTechnology: "Teknolohiya",
    industryFinance: "Pananalapi",
    industryHealthcare: "Kalusugan",
    industryRetail: "Retail",
    industryManufacturing: "Manufacturing",
    industryEducation: "Edukasyon",
    industryOther: "Iba pa",
    companySize: "Laki ng Kumpanya",
    companySizePlaceholder: "Pumili ng laki ng kumpanya",
    companySize1: "1-10 empleyado",
    companySize2: "11-50 empleyado",
    companySize3: "51-200 empleyado",
    companySize4: "201-500 empleyado",
    companySize5: "500+ empleyado",
    needsSection: "Pangangailangan sa Outsourcing",
    servicesInterested: "Mga Serbisyong Interesado Ka",
    servicesPlaceholder: "Hal. customer support, data entry, content writing, IT support...",
    challenges: "Kasalukuyang Hamon",
    challengesPlaceholder: "Ikuwento sa amin ang inyong mga kasalukuyang hamon at pain points...",
    timelineSection: "Timeline at Budget",
    projectTimeline: "Timeline ng Proyekto",
    projectTimelinePlaceholder: "Pumili ng timeline",
    timeline1: "ASAP",
    timeline2: "Sa loob ng 1 buwan",
    timeline3: "Sa loob ng 3 buwan",
    timeline4: "Sa loob ng 6 buwan",
    timeline5: "Flexible",
    budget: "Saklaw ng Budget",
    budgetPlaceholder: "Pumili ng budget range",
    budget1: "Mas mababa sa $5,000",
    budget2: "$5,000 - $15,000",
    budget3: "$15,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "Hindi pa sigurado",
    consentSection: "Consent at Privacy",
    privacyConsentLabel: "Sumasang-ayon ako sa",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    submitSection: "I-submit ang Inquiry",
    submitting: "Isinusumite...",
    submitButton: "I-submit ang Inquiry",
    successEmailed: "Matagumpay na naipadala ang iyong mensahe sa solutions@accessivelybpo.com.",
    successStored: "Matagumpay na naisumite ang iyong inquiry. Susuriin ito ng aming team sa lalong madaling panahon.",
    submissionFailed: "Hindi nagtagumpay ang pagsusumite.",
  },
  fr: {
    heroTitle: "Intéressé par l'Externalisation",
    subtitle: "Parlez-nous de votre entreprise et de vos besoins en externalisation. Notre équipe vous répondra avec des solutions adaptées.",
    cardTitle: "Intéressé par l'Externalisation",
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    phone: "Numéro de téléphone",
    companySection: "Informations sur l'Entreprise",
    companyName: "Nom de l'entreprise",
    industry: "Secteur",
    industryPlaceholder: "Sélectionnez un secteur",
    industryTechnology: "Technologie",
    industryFinance: "Finance",
    industryHealthcare: "Santé",
    industryRetail: "Commerce de détail",
    industryManufacturing: "Fabrication",
    industryEducation: "Éducation",
    industryOther: "Autre",
    companySize: "Taille de l'entreprise",
    companySizePlaceholder: "Sélectionnez la taille de l'entreprise",
    companySize1: "1-10 employés",
    companySize2: "11-50 employés",
    companySize3: "51-200 employés",
    companySize4: "201-500 employés",
    companySize5: "500+ employés",
    needsSection: "Besoins en Externalisation",
    servicesInterested: "Services Recherchés",
    servicesPlaceholder: "Ex. support client, saisie de données, rédaction de contenu, support informatique...",
    challenges: "Défis Actuels",
    challengesPlaceholder: "Parlez-nous de vos défis actuels et de vos points de douleur...",
    timelineSection: "Calendrier et Budget",
    projectTimeline: "Calendrier du Projet",
    projectTimelinePlaceholder: "Sélectionnez un calendrier",
    timeline1: "Dès que possible",
    timeline2: "Sous 1 mois",
    timeline3: "Sous 3 mois",
    timeline4: "Sous 6 mois",
    timeline5: "Flexible",
    budget: "Plage de Budget",
    budgetPlaceholder: "Sélectionnez une plage de budget",
    budget1: "Moins de $5,000",
    budget2: "$5,000 - $15,000",
    budget3: "$15,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "Pas encore sûr",
    consentSection: "Consentement et Confidentialité",
    privacyConsentLabel: "J'accepte la",
    privacyPolicy: "Politique de Confidentialité",
    terms: "Conditions Générales",
    submitSection: "Envoyer Votre Demande",
    submitting: "Envoi en cours...",
    submitButton: "Envoyer la Demande",
    successEmailed: "Votre message a été envoyé avec succès à solutions@accessivelybpo.com.",
    successStored: "Votre demande a bien été envoyée. Notre équipe l'examinera sous peu.",
    submissionFailed: "Échec de l'envoi.",
  },
} as const;

type OutsourcingLang = keyof typeof outsourcingTexts;

function OutsourcingContent() {
  const { language } = useLanguage();
  const t = outsourcingTexts[(language as OutsourcingLang) || "en"] || outsourcingTexts.en;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [servicesInterested, setServicesInterested] = useState("");
  const [currentChallenges, setCurrentChallenges] = useState("");
  const [projectTimeline, setProjectTimeline] = useState("");
  const [budgetRange, setBudgetRange] = useState("");

  const handleOutsourcingSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
        throw new Error(result.message || t.submissionFailed);
      }

      setSubmitMessage(
        result.emailed
            ? t.successEmailed
            : t.successStored
      );
      event.currentTarget?.reset();
      setPrivacyConsent(false);
      setCompanyName("");
      setIndustry("");
      setCompanySize("");
      setServicesInterested("");
      setCurrentChallenges("");
      setProjectTimeline("");
      setBudgetRange("");
    } catch (error) {
      const message = error instanceof Error ? error.message : t.submissionFailed;
      setSubmitError(true);
      setSubmitMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col overflow-x-hidden bg-slate-950">
      <main className="flex-1">
        <section className="min-h-[55vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-blue-900/20"></div>
          <div className="absolute left-0 top-1/4 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl animate-pulse sm:left-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>
          <div className="absolute bottom-1/4 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-1000 sm:right-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl md:text-8xl">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                {t.heroTitle}
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="mx-auto max-w-4xl text-base leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              {t.subtitle}
            </p>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.heroTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800/50 bg-slate-900/40 p-5 backdrop-blur-md sm:p-8">
              <h3 className="text-xl font-bold text-white sm:text-2xl">{t.cardTitle}</h3>
              <p className="mt-2 text-slate-300">{t.subtitle}</p>

              <form onSubmit={handleOutsourcingSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2">
                  <input type="hidden" name="contactType" value="outsourcing" />
                </div>

                {/* Basic Contact Information */}
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
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
                    {t.phone}
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Company Information */}
                <div className="sm:col-span-2 mt-4 pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.companySection}</h4>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-200">
                    {t.companyName}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-slate-200">
                    {t.industry}
                  </label>
                  <div className="mt-1">
                    <select
                      id="industry"
                      name="industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 pr-10 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">{t.industryPlaceholder}</option>
                      <option value="Technology">{t.industryTechnology}</option>
                      <option value="Finance">{t.industryFinance}</option>
                      <option value="Healthcare">{t.industryHealthcare}</option>
                      <option value="Retail">{t.industryRetail}</option>
                      <option value="Manufacturing">{t.industryManufacturing}</option>
                      <option value="Education">{t.industryEducation}</option>
                      <option value="Other">{t.industryOther}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-slate-200">
                    {t.companySize}
                  </label>
                  <div className="mt-1">
                    <select
                      id="companySize"
                      name="companySize"
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 pr-10 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">{t.companySizePlaceholder}</option>
                      <option value="1-10">{t.companySize1}</option>
                      <option value="11-50">{t.companySize2}</option>
                      <option value="51-200">{t.companySize3}</option>
                      <option value="201-500">{t.companySize4}</option>
                      <option value="500+">{t.companySize5}</option>
                    </select>
                  </div>
                </div>

                {/* Outsourcing Needs */}
                <div className="sm:col-span-2 mt-4 pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.needsSection}</h4>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="servicesInterested" className="block text-sm font-medium text-slate-200">
                    {t.servicesInterested}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="servicesInterested"
                      name="servicesInterested"
                      value={servicesInterested}
                      onChange={(e) => setServicesInterested(e.target.value)}
                      rows={3}
                      placeholder={t.servicesPlaceholder}
                      className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="currentChallenges" className="block text-sm font-medium text-slate-200">
                    {t.challenges}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="currentChallenges"
                      name="currentChallenges"
                      value={currentChallenges}
                      onChange={(e) => setCurrentChallenges(e.target.value)}
                      rows={3}
                      placeholder={t.challengesPlaceholder}
                      className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Timeline & Budget */}
                <div className="sm:col-span-2 mt-4 pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.timelineSection}</h4>
                </div>
                <div>
                  <label htmlFor="projectTimeline" className="block text-sm font-medium text-slate-200">
                    {t.projectTimeline}
                  </label>
                  <div className="mt-1">
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      value={projectTimeline}
                      onChange={(e) => setProjectTimeline(e.target.value)}
                      className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 pr-10 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">{t.projectTimelinePlaceholder}</option>
                      <option value="ASAP">{t.timeline1}</option>
                      <option value="Within 1 month">{t.timeline2}</option>
                      <option value="Within 3 months">{t.timeline3}</option>
                      <option value="Within 6 months">{t.timeline4}</option>
                      <option value="Flexible">{t.timeline5}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-200">
                    {t.budget}
                  </label>
                  <div className="mt-1">
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 pr-10 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">{t.budgetPlaceholder}</option>
                      <option value="Under $5,000">{t.budget1}</option>
                      <option value="$5,000 - $15,000">{t.budget2}</option>
                      <option value="$15,000 - $25,000">{t.budget3}</option>
                      <option value="$25,000 - $50,000">{t.budget4}</option>
                      <option value="$50,000+">{t.budget5}</option>
                      <option value="Not sure yet">{t.budget6}</option>
                    </select>
                  </div>
                </div>

                {/* Consent & Privacy */}
                <div className="sm:col-span-2 mt-4 pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.consentSection}</h4>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="privacyConsent" className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      required
                      className="h-4 w-4 rounded border-slate-700 bg-slate-800/50 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-slate-300">
                      {t.privacyConsentLabel}{" "}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">
                        {t.privacyPolicy}
                      </a>{" "}
                      {language === "fr" ? "et" : language === "es" ? "y" : language === "zh" ? "和" : "and"}{" "}
                      <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">
                        {t.terms}
                      </a>
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 mt-4 pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.submitSection}</h4>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed sm:py-4"
                  >
                    {isSubmitting ? t.submitting : t.submitButton}
                  </button>
                </div>

                {submitMessage && (
                  <div
                    className={`sm:col-span-2 rounded-lg p-4 text-sm font-medium ${
                      submitError
                        ? "border border-red-500/50 bg-red-500/10 text-red-200"
                        : "border border-green-500/50 bg-green-500/10 text-green-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function Outsourcing() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <OutsourcingContent />
    </Suspense>
  );
}
