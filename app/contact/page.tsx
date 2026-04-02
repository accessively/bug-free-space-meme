"use client";

import { Suspense, useRef, useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const expertTexts = {
  en: {
    heroTitle: "Talk to an Expert",
    subtitle: "Get direct guidance from our team on your goals, scope, and next steps.",
    introTitle: "Talk to an Expert",
    introDesc: "Share your requirements and our team will get back to you with a tailored plan.",
    cardTitle: "Talk to an Expert",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Number",
    phonePlaceholder: "e.g. +63 912 345 6789",
    companySection: "Company / Organization Info (Optional)",
    companyName: "Company Name",
    companyNamePlaceholder: "Enter your company name",
    jobTitle: "Job Title / Role",
    jobTitlePlaceholder: "e.g., CEO, Project Manager",
    inquirySection: "Inquiry Details",
    inquiryTopic: "Topic / Category",
    inquiryTopicPlaceholder: "Select an inquiry type",
    inquiryTopicSupport: "Technical Support",
    inquiryTopicSales: "Sales",
    inquiryTopicConsultation: "Consultation",
    inquiryTopicPartnership: "Partnership",
    inquiryTopicOther: "Other",
    message: "Message / Description",
    messagePlaceholder: "Tell us about your issue or question...",
    schedulingSection: "Scheduling / Appointment Info (Optional)",
    preferredDateTime: "Preferred Date & Time",
    date: "Date",
    time: "Time",
    timeZone: "Time Zone",
    timeZonePlaceholder: "Select time zone",
    additionalSection: "Additional Information",
    fileUpload: "File Upload (Optional)",
    fileFormats: "Accepted formats: PDF, DOC, DOCX, JPG, PNG, GIF, WebP. Max file size: 10MB",
    urgency: "Urgency Level (Optional)",
    urgencyPlaceholder: "Select urgency level",
    urgencyAsap: "ASAP (Urgent)",
    urgencyWeek: "Within a week",
    urgencyMonth: "Within a month",
    urgencyFlexible: "Flexible",
    budget: "Budget Range (Optional)",
    budgetPlaceholder: "Select budget range",
    budget1: "Under $5,000",
    budget2: "$5,000 - $10,000",
    budget3: "$10,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "Not sure",
    consentSection: "Consent / Privacy & Preferences",
    privacyConsentLabel: "I agree to the Privacy Policy and Terms & Conditions. I understand that my information will be used in accordance with applicable data privacy law and Accessively's Data Privacy Policy. Please review our",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    newsletterConsent: "I would like to receive updates and newsletters from Accessively about services, news, and announcements.",
    submitSection: "Submit Your Message",
    sending: "Sending...",
    submitButton: "Talk to an Expert",
    policyPrefix: "By submitting this form, you agree to our",
    successEmailed: "Your message has been sent successfully to solutions@accessivelybpo.com.",
    successStored: "Your message has been submitted successfully. Our team will review it shortly.",
    submissionFailed: "Submission failed.",
  },
  es: {
    heroTitle: "Habla con un Experto",
    subtitle: "Obtén orientación directa de nuestro equipo sobre tus objetivos, alcance y próximos pasos.",
    introTitle: "Habla con un Experto",
    introDesc: "Comparte tus necesidades y nuestro equipo te responderá con un plan adaptado.",
    cardTitle: "Habla con un Experto",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo electrónico",
    phone: "Número",
    phonePlaceholder: "ej. +63 912 345 6789",
    companySection: "Información de la Empresa / Organización (Opcional)",
    companyName: "Nombre de la Empresa",
    companyNamePlaceholder: "Ingresa el nombre de tu empresa",
    jobTitle: "Cargo / Función",
    jobTitlePlaceholder: "ej. CEO, Gerente de Proyecto",
    inquirySection: "Detalles de la Consulta",
    inquiryTopic: "Tema / Categoría",
    inquiryTopicPlaceholder: "Selecciona un tipo de consulta",
    inquiryTopicSupport: "Soporte Técnico",
    inquiryTopicSales: "Ventas",
    inquiryTopicConsultation: "Consultoría",
    inquiryTopicPartnership: "Alianza",
    inquiryTopicOther: "Otro",
    message: "Mensaje / Descripción",
    messagePlaceholder: "Cuéntanos sobre tu consulta o problema...",
    schedulingSection: "Información de Programación / Cita (Opcional)",
    preferredDateTime: "Fecha y Hora Preferidas",
    date: "Fecha",
    time: "Hora",
    timeZone: "Zona Horaria",
    timeZonePlaceholder: "Selecciona zona horaria",
    additionalSection: "Información Adicional",
    fileUpload: "Subir Archivo (Opcional)",
    fileFormats: "Formatos aceptados: PDF, DOC, DOCX, JPG, PNG, GIF, WebP. Tamaño máximo: 10MB",
    urgency: "Nivel de Urgencia (Opcional)",
    urgencyPlaceholder: "Selecciona el nivel de urgencia",
    urgencyAsap: "Lo antes posible (Urgente)",
    urgencyWeek: "Dentro de una semana",
    urgencyMonth: "Dentro de un mes",
    urgencyFlexible: "Flexible",
    budget: "Rango de Presupuesto (Opcional)",
    budgetPlaceholder: "Selecciona un rango de presupuesto",
    budget1: "Menos de $5,000",
    budget2: "$5,000 - $10,000",
    budget3: "$10,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "No estoy seguro",
    consentSection: "Consentimiento / Privacidad y Preferencias",
    privacyConsentLabel: "Acepto la Política de Privacidad y los Términos y Condiciones. Entiendo que mi información será utilizada conforme a la legislación aplicable de privacidad de datos y la Política de Privacidad de Accessively. Consulta nuestra",
    privacyPolicy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    newsletterConsent: "Me gustaría recibir actualizaciones y boletines de Accessively sobre servicios, noticias y anuncios.",
    submitSection: "Enviar tu Mensaje",
    sending: "Enviando...",
    submitButton: "Habla con un Experto",
    policyPrefix: "Al enviar este formulario, aceptas nuestra",
    successEmailed: "Tu mensaje se ha enviado correctamente a solutions@accessivelybpo.com.",
    successStored: "Tu mensaje se ha enviado correctamente. Nuestro equipo lo revisará en breve.",
    submissionFailed: "El envío falló.",
  },
  zh: {
    heroTitle: "咨询专家",
    subtitle: "直接从我们的团队获得关于目标、范围和下一步的专业建议。",
    introTitle: "咨询专家",
    introDesc: "请分享您的需求，我们的团队将为您提供定制方案。",
    cardTitle: "咨询专家",
    firstName: "名字",
    lastName: "姓氏",
    email: "电子邮箱",
    phone: "电话号码",
    phonePlaceholder: "例如 +63 912 345 6789",
    companySection: "公司 / 组织信息（可选）",
    companyName: "公司名称",
    companyNamePlaceholder: "请输入公司名称",
    jobTitle: "职位 / 角色",
    jobTitlePlaceholder: "例如：CEO、项目经理",
    inquirySection: "咨询详情",
    inquiryTopic: "主题 / 类别",
    inquiryTopicPlaceholder: "请选择咨询类型",
    inquiryTopicSupport: "技术支持",
    inquiryTopicSales: "销售",
    inquiryTopicConsultation: "咨询服务",
    inquiryTopicPartnership: "合作伙伴",
    inquiryTopicOther: "其他",
    message: "消息 / 描述",
    messagePlaceholder: "请告诉我们您的问题或需求...",
    schedulingSection: "预约 / 时间安排信息（可选）",
    preferredDateTime: "偏好日期和时间",
    date: "日期",
    time: "时间",
    timeZone: "时区",
    timeZonePlaceholder: "请选择时区",
    additionalSection: "附加信息",
    fileUpload: "文件上传（可选）",
    fileFormats: "支持格式：PDF、DOC、DOCX、JPG、PNG、GIF、WebP。最大文件大小：10MB",
    urgency: "紧急程度（可选）",
    urgencyPlaceholder: "请选择紧急程度",
    urgencyAsap: "尽快（紧急）",
    urgencyWeek: "一周内",
    urgencyMonth: "一个月内",
    urgencyFlexible: "灵活",
    budget: "预算范围（可选）",
    budgetPlaceholder: "请选择预算范围",
    budget1: "低于 $5,000",
    budget2: "$5,000 - $10,000",
    budget3: "$10,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "暂不确定",
    consentSection: "同意 / 隐私与偏好",
    privacyConsentLabel: "我同意隐私政策和条款与条件。我理解我的信息将根据适用的数据隐私法律和 Accessively 的隐私政策使用。请查看我们的",
    privacyPolicy: "隐私政策",
    terms: "条款与条件",
    newsletterConsent: "我希望接收 Accessively 关于服务、新闻和公告的更新与通讯。",
    submitSection: "提交您的消息",
    sending: "发送中...",
    submitButton: "咨询专家",
    policyPrefix: "提交此表单即表示您同意我们的",
    successEmailed: "您的消息已成功发送至 solutions@accessivelybpo.com。",
    successStored: "您的消息已成功提交，我们的团队将尽快审核。",
    submissionFailed: "提交失败。",
  },
  tl: {
    heroTitle: "Talk to an Expert",
    subtitle: "Makakuha ng direktang gabay mula sa aming team tungkol sa inyong goals, scope, at mga susunod na hakbang.",
    introTitle: "Talk to an Expert",
    introDesc: "Ibahagi ang inyong requirements at babalikan kayo ng aming team ng angkop na plano.",
    cardTitle: "Talk to an Expert",
    firstName: "Pangalan",
    lastName: "Apelyido",
    email: "Email",
    phone: "Numero",
    phonePlaceholder: "hal. +63 912 345 6789",
    companySection: "Impormasyon ng Kumpanya / Organisasyon (Opsyonal)",
    companyName: "Pangalan ng Kumpanya",
    companyNamePlaceholder: "Ilagay ang pangalan ng kumpanya",
    jobTitle: "Posisyon / Role",
    jobTitlePlaceholder: "hal. CEO, Project Manager",
    inquirySection: "Detalye ng Inquiry",
    inquiryTopic: "Paksa / Kategorya",
    inquiryTopicPlaceholder: "Pumili ng uri ng inquiry",
    inquiryTopicSupport: "Technical Support",
    inquiryTopicSales: "Sales",
    inquiryTopicConsultation: "Consultation",
    inquiryTopicPartnership: "Partnership",
    inquiryTopicOther: "Iba pa",
    message: "Mensahe / Paglalarawan",
    messagePlaceholder: "Ikwento sa amin ang inyong concern o tanong...",
    schedulingSection: "Impormasyon sa Schedule / Appointment (Opsyonal)",
    preferredDateTime: "Preferred na Petsa at Oras",
    date: "Petsa",
    time: "Oras",
    timeZone: "Time Zone",
    timeZonePlaceholder: "Pumili ng time zone",
    additionalSection: "Karagdagang Impormasyon",
    fileUpload: "Pag-upload ng File (Opsyonal)",
    fileFormats: "Tinatawag na formats: PDF, DOC, DOCX, JPG, PNG, GIF, WebP. Max file size: 10MB",
    urgency: "Urgency Level (Opsyonal)",
    urgencyPlaceholder: "Pumili ng urgency level",
    urgencyAsap: "ASAP (Urgent)",
    urgencyWeek: "Sa loob ng isang linggo",
    urgencyMonth: "Sa loob ng isang buwan",
    urgencyFlexible: "Flexible",
    budget: "Budget Range (Opsyonal)",
    budgetPlaceholder: "Pumili ng budget range",
    budget1: "Mas mababa sa $5,000",
    budget2: "$5,000 - $10,000",
    budget3: "$10,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "Hindi pa sigurado",
    consentSection: "Consent / Privacy at Preferences",
    privacyConsentLabel: "Sumasang-ayon ako sa Privacy Policy at Terms & Conditions. Nauunawaan ko na ang aking impormasyon ay gagamitin ayon sa umiiral na batas sa data privacy at Accessively's Data Privacy Policy. Pakibasa ang aming",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    newsletterConsent: "Nais kong makatanggap ng updates at newsletters mula sa Accessively tungkol sa services, news, at announcements.",
    submitSection: "I-submit ang Iyong Mensahe",
    sending: "Ipinapadala...",
    submitButton: "Talk to an Expert",
    policyPrefix: "Sa pagsusumite ng form na ito, sumasang-ayon ka sa aming",
    successEmailed: "Matagumpay na naipadala ang iyong mensahe sa solutions@accessivelybpo.com.",
    successStored: "Matagumpay na naisumite ang iyong mensahe. Susuriin ito ng aming team sa lalong madaling panahon.",
    submissionFailed: "Hindi nagtagumpay ang pagsusumite.",
  },
  fr: {
    heroTitle: "Parler à un Expert",
    subtitle: "Obtenez des conseils directs de notre équipe sur vos objectifs, votre périmètre et les prochaines étapes.",
    introTitle: "Parler à un Expert",
    introDesc: "Partagez vos besoins et notre équipe vous répondra avec un plan adapté.",
    cardTitle: "Parler à un Expert",
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    phone: "Numéro",
    phonePlaceholder: "ex. +63 912 345 6789",
    companySection: "Informations sur l'Entreprise / l'Organisation (Optionnel)",
    companyName: "Nom de l'entreprise",
    companyNamePlaceholder: "Saisissez le nom de votre entreprise",
    jobTitle: "Titre du poste / Rôle",
    jobTitlePlaceholder: "ex. PDG, Chef de projet",
    inquirySection: "Détails de la Demande",
    inquiryTopic: "Sujet / Catégorie",
    inquiryTopicPlaceholder: "Sélectionnez un type de demande",
    inquiryTopicSupport: "Support Technique",
    inquiryTopicSales: "Ventes",
    inquiryTopicConsultation: "Consultation",
    inquiryTopicPartnership: "Partenariat",
    inquiryTopicOther: "Autre",
    message: "Message / Description",
    messagePlaceholder: "Expliquez-nous votre besoin ou votre question...",
    schedulingSection: "Informations de Planification / Rendez-vous (Optionnel)",
    preferredDateTime: "Date et Heure Préférées",
    date: "Date",
    time: "Heure",
    timeZone: "Fuseau horaire",
    timeZonePlaceholder: "Sélectionnez un fuseau horaire",
    additionalSection: "Informations Supplémentaires",
    fileUpload: "Téléversement de fichier (Optionnel)",
    fileFormats: "Formats acceptés : PDF, DOC, DOCX, JPG, PNG, GIF, WebP. Taille max : 10MB",
    urgency: "Niveau d'Urgence (Optionnel)",
    urgencyPlaceholder: "Sélectionnez le niveau d'urgence",
    urgencyAsap: "Dès que possible (Urgent)",
    urgencyWeek: "Sous une semaine",
    urgencyMonth: "Sous un mois",
    urgencyFlexible: "Flexible",
    budget: "Plage de Budget (Optionnel)",
    budgetPlaceholder: "Sélectionnez une plage de budget",
    budget1: "Moins de $5,000",
    budget2: "$5,000 - $10,000",
    budget3: "$10,000 - $25,000",
    budget4: "$25,000 - $50,000",
    budget5: "$50,000+",
    budget6: "Pas encore sûr",
    consentSection: "Consentement / Confidentialité et Préférences",
    privacyConsentLabel: "J'accepte la Politique de Confidentialité et les Conditions Générales. Je comprends que mes informations seront utilisées conformément aux lois applicables sur la confidentialité des données et à la Politique de Confidentialité d'Accessively. Veuillez consulter notre",
    privacyPolicy: "Politique de Confidentialité",
    terms: "Conditions Générales",
    newsletterConsent: "Je souhaite recevoir des mises à jour et newsletters d'Accessively concernant les services, actualités et annonces.",
    submitSection: "Envoyer Votre Message",
    sending: "Envoi en cours...",
    submitButton: "Parler à un Expert",
    policyPrefix: "En soumettant ce formulaire, vous acceptez notre",
    successEmailed: "Votre message a été envoyé avec succès à solutions@accessivelybpo.com.",
    successStored: "Votre message a bien été envoyé. Notre équipe l'examinera sous peu.",
    submissionFailed: "Échec de l'envoi.",
  },
} as const;

type ExpertLang = keyof typeof expertTexts;

function ContactContent() {
  const { language } = useLanguage();
  const t = expertTexts[(language as ExpertLang) || "en"] || expertTexts.en;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [customBusinessType, setCustomBusinessType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [inquiryTopic, setInquiryTopic] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const availabilityDateRef = useRef<HTMLInputElement>(null);
  const availabilityTimeRef = useRef<HTMLInputElement>(null);

  const openNativePicker = (ref: React.RefObject<HTMLInputElement | null>) => {
    const input = ref.current;
    if (!input) return;
    const withPicker = input as HTMLInputElement & { showPicker?: () => void };
    if (typeof withPicker.showPicker === "function") {
      withPicker.showPicker();
    }
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("privacyConsent", privacyConsent ? "true" : "false");
    formData.append("newsletterConsent", newsletterConsent ? "true" : "false");
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
      setNewsletterConsent(false);
      setBusinessType("");
      setCustomBusinessType("");
      setCompanyName("");
      setJobTitle("");
      setInquiryTopic("");
      setUrgencyLevel("");
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
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.introTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {t.introDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800/50 bg-slate-900/40 p-5 backdrop-blur-md sm:p-8">
              <h3 className="text-xl font-bold text-white sm:text-2xl">{t.cardTitle}</h3>
              <p className="mt-2 text-slate-300">{t.subtitle}</p>

                  <form onSubmit={handleContactSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <input type="hidden" name="contactType" value="consultation" />
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
                      {t.phone}
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder={t.phonePlaceholder}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mt-4 border-t border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.companySection}</h4>
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-200">
                      {t.companyName}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                        autoComplete="organization"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder={t.companyNamePlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-200">
                      {t.jobTitle}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(event) => setJobTitle(event.target.value)}
                        autoComplete="off"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder={t.jobTitlePlaceholder}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mt-4 border-t border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.inquirySection}</h4>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="inquiryTopic" className="block text-sm font-medium text-slate-200">
                      {t.inquiryTopic}
                    </label>
                    <div className="relative mt-1">
                      <select
                        id="inquiryTopic"
                        name="inquiryTopic"
                        value={inquiryTopic}
                        onChange={(event) => setInquiryTopic(event.target.value)}
                        className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 pr-10 text-white shadow-sm transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                      >
                        <option value="">{t.inquiryTopicPlaceholder}</option>
                        <option value="Technical Support">{t.inquiryTopicSupport}</option>
                        <option value="Sales">{t.inquiryTopicSales}</option>
                        <option value="Consultation">{t.inquiryTopicConsultation}</option>
                        <option value="Partnership">{t.inquiryTopicPartnership}</option>
                        <option value="Other">{t.inquiryTopicOther}</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                      </svg>
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
                        placeholder={t.messagePlaceholder}
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mt-4 border-t border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.schedulingSection}</h4>
                  </div>
                  <div className="sm:col-span-2 rounded-xl border border-slate-700 bg-slate-800/30 p-4">
                      <p className="mb-3 text-sm font-semibold text-slate-200">{t.preferredDateTime}</p>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div>
                          <label htmlFor="availabilityDate" className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                            {t.date}
                          </label>
                          <div className="mt-1">
                            <input
                              ref={availabilityDateRef}
                              id="availabilityDate"
                              name="availabilityDate"
                              type="date"
                              required
                              className="availability-picker block w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              onClick={() => openNativePicker(availabilityDateRef)}
                              onFocus={() => openNativePicker(availabilityDateRef)}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="availabilityTime" className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                            {t.time}
                          </label>
                          <div className="mt-1">
                            <input
                              ref={availabilityTimeRef}
                              id="availabilityTime"
                              name="availabilityTime"
                              type="time"
                              required
                              className="availability-picker block w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              onClick={() => openNativePicker(availabilityTimeRef)}
                              onFocus={() => openNativePicker(availabilityTimeRef)}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="availabilityTimeZone" className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                            {t.timeZone}
                          </label>
                          <div className="relative mt-1">
                            <select
                              id="availabilityTimeZone"
                              name="availabilityTimeZone"
                              required
                              defaultValue=""
                              className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 pr-10 text-white shadow-sm transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                            >
                              <option value="" disabled>{t.timeZonePlaceholder}</option>
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
                  <div className="sm:col-span-2 mt-4 border-t border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.additionalSection}</h4>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="file" className="block text-sm font-medium text-slate-200">
                      {t.fileUpload}
                    </label>
                    <div className="mt-1">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp"
                        className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-2 file:text-white hover:file:bg-indigo-500"
                      />
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      {t.fileFormats}
                    </p>
                  </div>
                  <div>
                    <label htmlFor="urgencyLevel" className="block text-sm font-medium text-slate-200">
                      {t.urgency}
                    </label>
                    <div className="relative mt-1">
                      <select
                        id="urgencyLevel"
                        name="urgencyLevel"
                        value={urgencyLevel}
                        onChange={(event) => setUrgencyLevel(event.target.value)}
                        className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 pr-10 text-white shadow-sm transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                      >
                        <option value="">{t.urgencyPlaceholder}</option>
                        <option value="ASAP">{t.urgencyAsap}</option>
                        <option value="Within a week">{t.urgencyWeek}</option>
                        <option value="Within a month">{t.urgencyMonth}</option>
                        <option value="Flexible">{t.urgencyFlexible}</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-200">
                      {t.budget}
                    </label>
                    <div className="relative mt-1">
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={budgetRange}
                        onChange={(event) => setBudgetRange(event.target.value)}
                        className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 pr-10 text-white shadow-sm transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                      >
                        <option value="">{t.budgetPlaceholder}</option>
                        <option value="Under $5,000">{t.budget1}</option>
                        <option value="$5,000 - $10,000">{t.budget2}</option>
                        <option value="$10,000 - $25,000">{t.budget3}</option>
                        <option value="$25,000 - $50,000">{t.budget4}</option>
                        <option value="$50,000+">{t.budget5}</option>
                        <option value="Not sure">{t.budget6}</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:col-span-2 mt-4 border-t border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.consentSection}</h4>
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
                        {t.privacyConsentLabel}{" "}<a href="/privacy-policy" className="underline text-indigo-300 hover:text-indigo-200">{t.privacyPolicy}</a>{" "}
                        {language === "fr" ? "et" : language === "es" ? "y" : language === "zh" ? "和" : "and"}{" "}
                        <a href="/terms-and-conditions" className="underline text-indigo-300 hover:text-indigo-200">{t.terms}</a>.
                      </span>
                    </label>
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/40 p-4 text-sm text-slate-200">
                      <input
                        type="checkbox"
                        name="newsletterConsent"
                        checked={newsletterConsent}
                        onChange={(event) => setNewsletterConsent(event.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-500 bg-slate-900 text-indigo-500 focus:ring-indigo-500"
                      />
                      <span>
                        {t.newsletterConsent}
                      </span>
                    </label>
                  </div>
                  <div className="sm:col-span-2 mt-4 border-t border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-slate-100 mb-4">{t.submitSection}</h4>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? t.sending : t.submitButton}
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
        </section>
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