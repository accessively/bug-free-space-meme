"use client";

import { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";

const applyTexts = {
  en: {
    joinOur: "Join Our",
    elite: "Elite",
    team: "Team",
    heroDesc: "Be part of a dynamic team dedicated to delivering exceptional virtual assistance and digital solutions. Join our growing family of innovators and make an impact in the future of business.",
    whyWork: "Why Work With Accessively?",
    benefit1Title: "Competitive compensation",
    benefit1Desc: "Industry-leading salaries & bonuses",
    benefit2Title: "Flexible work arrangements",
    benefit2Desc: "Work from anywhere, anytime",
    benefit3Title: "Professional development",
    benefit3Desc: "Continuous learning & growth opportunities",
    benefit4Title: "Supportive team environment",
    benefit4Desc: "Collaborative culture & mentorship",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    submitTitle: "Submit Your Application",
    submitDesc: "Fill out the form below to submit your application. We'll review your submission and get back to you soon.",
    firstName: "First Name *",
    firstNamePh: "Enter your first name",
    lastName: "Last Name *",
    lastNamePh: "Enter your last name",
    email: "Email Address *",
    emailPh: "your@email.com",
    phone: "Phone Number",
    phonePh: "+1 (555) 123-4567",
    position: "Position Applied For *",
    selectPosition: "Select a position",
    positionVirtualAssistant: "Virtual Assistant",
    positionSalesMarketing: "Sales & Marketing Specialist",
    positionGraphicDesigner: "Graphic Designer",
    positionWebDeveloper: "Web Developer",
    positionCustomerService: "Customer Service Representative",
    positionBusinessConsultant: "Business Consultant",
    positionOther: "Other",
    yearsExperience: "Years of Experience",
    selectExperience: "Select experience level",
    experienceEntry: "Entry Level (0-2 years)",
    experienceIntermediate: "Intermediate (2-5 years)",
    experienceExperienced: "Experienced (5-10 years)",
    experienceExpert: "Expert (10+ years)",
    skills: "Relevant Skills",
    skillsPh: "List your relevant skills, certifications, and expertise...",
    availability: "Availability",
    selectAvailability: "Select availability",
    availabilityFullTime: "Full-time",
    availabilityPartTime: "Part-time",
    availabilityContract: "Contract/Project-based",
    availabilityFlexible: "Flexible",
    coverLetter: "Cover Letter",
    coverLetterPh: "Tell us why you're interested in this position and what makes you a great fit...",
    resume: "Resume/CV *",
    acceptedFormats: "Accepted formats: PDF, DOC, DOCX. Max file size: 5MB",
    portfolio: "Portfolio/LinkedIn/GitHub (Optional)",
    portfolioPh: "https://linkedin.com/in/yourprofile",
    references: "References (Optional)",
    referencesPh: "Please provide contact information for professional references...",
    additionalInfo: "Additional Information",
    additionalInfoPh: "Any additional information you'd like to share...",
    submitApplication: "Submit Application",
    policyNote: "By submitting this application, you agree to our privacy policy and terms of service.",
    haveQuestions: "Have Questions?",
    contactDesc: "We're here to help! Reach out to our HR team if you have any questions about the application process.",
    contactHr: "Contact HR",
    followUs: "Follow Us",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  es: {
    joinOur: "Únete a Nuestro",
    elite: "Equipo",
    team: "Élite",
    heroDesc: "Sé parte de un equipo dinámico dedicado a brindar asistencia virtual y soluciones digitales excepcionales.",
    whyWork: "¿Por qué trabajar con Accessively?",
    benefit1Title: "Compensación competitiva",
    benefit1Desc: "Salarios y bonos líderes en la industria",
    benefit2Title: "Trabajo flexible",
    benefit2Desc: "Trabaja desde cualquier lugar",
    benefit3Title: "Desarrollo profesional",
    benefit3Desc: "Aprendizaje y crecimiento continuo",
    benefit4Title: "Ambiente de apoyo",
    benefit4Desc: "Cultura colaborativa y mentoría",
    applyNow: "Aplicar Ahora",
    learnMore: "Saber Más",
    submitTitle: "Envía Tu Solicitud",
    submitDesc: "Completa el formulario para enviar tu solicitud.",
    firstName: "Nombre *",
    firstNamePh: "Ingresa tu nombre",
    lastName: "Apellido *",
    lastNamePh: "Ingresa tu apellido",
    email: "Correo electrónico *",
    emailPh: "tu@email.com",
    phone: "Número de teléfono",
    phonePh: "+34 600 123 456",
    position: "Puesto solicitado *",
    selectPosition: "Selecciona un puesto",
    positionVirtualAssistant: "Asistente Virtual",
    positionSalesMarketing: "Especialista en Ventas y Marketing",
    positionGraphicDesigner: "Diseñador Gráfico",
    positionWebDeveloper: "Desarrollador Web",
    positionCustomerService: "Representante de Servicio al Cliente",
    positionBusinessConsultant: "Consultor de Negocios",
    positionOther: "Otro",
    yearsExperience: "Años de experiencia",
    selectExperience: "Selecciona nivel de experiencia",
    experienceEntry: "Nivel inicial (0-2 años)",
    experienceIntermediate: "Intermedio (2-5 años)",
    experienceExperienced: "Con experiencia (5-10 años)",
    experienceExpert: "Experto (10+ años)",
    skills: "Habilidades relevantes",
    skillsPh: "Enumera tus habilidades y certificaciones...",
    availability: "Disponibilidad",
    selectAvailability: "Selecciona disponibilidad",
    availabilityFullTime: "Tiempo completo",
    availabilityPartTime: "Medio tiempo",
    availabilityContract: "Contrato/Por proyecto",
    availabilityFlexible: "Flexible",
    coverLetter: "Carta de presentación",
    coverLetterPh: "Cuéntanos por qué te interesa este puesto...",
    resume: "CV *",
    acceptedFormats: "Formatos aceptados: PDF, DOC, DOCX. Tamaño máx: 5MB",
    portfolio: "Portafolio/LinkedIn/GitHub (Opcional)",
    portfolioPh: "https://linkedin.com/in/tuperfil",
    references: "Referencias (Opcional)",
    referencesPh: "Proporciona referencias profesionales...",
    additionalInfo: "Información adicional",
    additionalInfoPh: "Cualquier información adicional...",
    submitApplication: "Enviar Solicitud",
    policyNote: "Al enviar esta solicitud, aceptas nuestra política de privacidad y términos.",
    haveQuestions: "¿Tienes preguntas?",
    contactDesc: "¡Estamos aquí para ayudarte! Contacta a RR.HH. si tienes dudas sobre el proceso.",
    contactHr: "Contactar RR.HH.",
    followUs: "Síguenos",
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
  },
  zh: {
    joinOur: "加入我们的",
    elite: "精英",
    team: "团队",
    heroDesc: "加入我们充满活力的团队，提供卓越的虚拟助理与数字解决方案。",
    whyWork: "为什么加入 Accessively？",
    benefit1Title: "有竞争力的薪酬",
    benefit1Desc: "行业领先薪资与奖金",
    benefit2Title: "灵活工作安排",
    benefit2Desc: "随时随地工作",
    benefit3Title: "职业发展",
    benefit3Desc: "持续学习与成长",
    benefit4Title: "支持型团队环境",
    benefit4Desc: "协作文化与导师机制",
    applyNow: "立即申请",
    learnMore: "了解更多",
    submitTitle: "提交你的申请",
    submitDesc: "填写以下表单提交申请，我们会尽快回复。",
    firstName: "名字 *",
    firstNamePh: "请输入你的名字",
    lastName: "姓氏 *",
    lastNamePh: "请输入你的姓氏",
    email: "邮箱地址 *",
    emailPh: "your@email.com",
    phone: "电话号码",
    phonePh: "+86 138 0000 0000",
    position: "申请职位 *",
    selectPosition: "选择职位",
    positionVirtualAssistant: "虚拟助理",
    positionSalesMarketing: "销售与市场专员",
    positionGraphicDesigner: "平面设计师",
    positionWebDeveloper: "网页开发工程师",
    positionCustomerService: "客户服务代表",
    positionBusinessConsultant: "商业顾问",
    positionOther: "其他",
    yearsExperience: "工作年限",
    selectExperience: "选择经验水平",
    experienceEntry: "入门级（0-2年）",
    experienceIntermediate: "中级（2-5年）",
    experienceExperienced: "资深（5-10年）",
    experienceExpert: "专家（10年以上）",
    skills: "相关技能",
    skillsPh: "列出你的技能、证书和专长...",
    availability: "可工作时间",
    selectAvailability: "选择可用时间",
    availabilityFullTime: "全职",
    availabilityPartTime: "兼职",
    availabilityContract: "合同/项目制",
    availabilityFlexible: "灵活",
    coverLetter: "求职信",
    coverLetterPh: "告诉我们你为什么适合这个职位...",
    resume: "简历/CV *",
    acceptedFormats: "支持格式：PDF、DOC、DOCX。最大 5MB",
    portfolio: "作品集/LinkedIn/GitHub（可选）",
    portfolioPh: "https://linkedin.com/in/yourprofile",
    references: "推荐人（可选）",
    referencesPh: "请提供职业推荐人联系方式...",
    additionalInfo: "其他信息",
    additionalInfoPh: "其他想补充的信息...",
    submitApplication: "提交申请",
    policyNote: "提交申请即表示你同意我们的隐私政策和服务条款。",
    haveQuestions: "有问题吗？",
    contactDesc: "我们随时提供帮助！如对申请流程有疑问，请联系 HR 团队。",
    contactHr: "联系 HR",
    followUs: "关注我们",
    emailLabel: "邮箱",
    phoneLabel: "电话",
  },
  tl: {
    joinOur: "Sumali sa Aming",
    elite: "Elite",
    team: "Team",
    heroDesc: "Maging bahagi ng dynamic na team na naghahatid ng de-kalidad na virtual assistance at digital solutions.",
    whyWork: "Bakit Magtrabaho sa Accessively?",
    benefit1Title: "Competitive compensation",
    benefit1Desc: "Industry-leading salaries at bonuses",
    benefit2Title: "Flexible work arrangements",
    benefit2Desc: "Magtrabaho kahit saan",
    benefit3Title: "Professional development",
    benefit3Desc: "Patuloy na pag-aaral at growth",
    benefit4Title: "Supportive team environment",
    benefit4Desc: "Collaborative culture at mentorship",
    applyNow: "Mag-Apply Ngayon",
    learnMore: "Alamin Pa",
    submitTitle: "I-submit ang Iyong Application",
    submitDesc: "Punan ang form sa ibaba para mag-submit ng application.",
    firstName: "Unang Pangalan *",
    firstNamePh: "Ilagay ang unang pangalan",
    lastName: "Apelyido *",
    lastNamePh: "Ilagay ang apelyido",
    email: "Email Address *",
    emailPh: "your@email.com",
    phone: "Phone Number",
    phonePh: "+63 912 345 6789",
    position: "Posisyong Inaaplayan *",
    selectPosition: "Pumili ng posisyon",
    positionVirtualAssistant: "Virtual Assistant",
    positionSalesMarketing: "Sales at Marketing Specialist",
    positionGraphicDesigner: "Graphic Designer",
    positionWebDeveloper: "Web Developer",
    positionCustomerService: "Customer Service Representative",
    positionBusinessConsultant: "Business Consultant",
    positionOther: "Iba pa",
    yearsExperience: "Taon ng Karanasan",
    selectExperience: "Pumili ng experience level",
    experienceEntry: "Entry Level (0-2 taon)",
    experienceIntermediate: "Intermediate (2-5 taon)",
    experienceExperienced: "Experienced (5-10 taon)",
    experienceExpert: "Expert (10+ taon)",
    skills: "Mga Kaugnay na Kasanayan",
    skillsPh: "Ilista ang iyong skills at certifications...",
    availability: "Availability",
    selectAvailability: "Pumili ng availability",
    availabilityFullTime: "Full-time",
    availabilityPartTime: "Part-time",
    availabilityContract: "Contract/Project-based",
    availabilityFlexible: "Flexible",
    coverLetter: "Cover Letter",
    coverLetterPh: "Sabihin kung bakit ka fit sa posisyon...",
    resume: "Resume/CV *",
    acceptedFormats: "Accepted formats: PDF, DOC, DOCX. Max file size: 5MB",
    portfolio: "Portfolio/LinkedIn/GitHub (Optional)",
    portfolioPh: "https://linkedin.com/in/iyongprofile",
    references: "References (Optional)",
    referencesPh: "Magbigay ng professional references...",
    additionalInfo: "Karagdagang Impormasyon",
    additionalInfoPh: "Anumang dagdag na impormasyon...",
    submitApplication: "I-submit ang Application",
    policyNote: "Sa pagsusumite ng application na ito, sumasang-ayon ka sa aming privacy policy at terms of service.",
    haveQuestions: "May Tanong?",
    contactDesc: "Narito kami para tumulong! Makipag-ugnayan sa HR team para sa mga tanong sa application process.",
    contactHr: "Contact HR",
    followUs: "Sundan Kami",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  fr: {
    joinOur: "Rejoignez Notre",
    elite: "Équipe",
    team: "Élite",
    heroDesc: "Rejoignez une équipe dynamique dédiée à des solutions digitales et d'assistance virtuelle exceptionnelles.",
    whyWork: "Pourquoi travailler avec Accessively ?",
    benefit1Title: "Rémunération compétitive",
    benefit1Desc: "Salaires et primes attractifs",
    benefit2Title: "Organisation flexible",
    benefit2Desc: "Travaillez de partout",
    benefit3Title: "Développement professionnel",
    benefit3Desc: "Apprentissage et progression continue",
    benefit4Title: "Environnement d'équipe solidaire",
    benefit4Desc: "Culture collaborative et mentorat",
    applyNow: "Postuler",
    learnMore: "En savoir plus",
    submitTitle: "Soumettez Votre Candidature",
    submitDesc: "Remplissez le formulaire ci-dessous pour envoyer votre candidature.",
    firstName: "Prénom *",
    firstNamePh: "Entrez votre prénom",
    lastName: "Nom *",
    lastNamePh: "Entrez votre nom",
    email: "Adresse e-mail *",
    emailPh: "your@email.com",
    phone: "Numéro de téléphone",
    phonePh: "+33 6 12 34 56 78",
    position: "Poste demandé *",
    selectPosition: "Sélectionnez un poste",
    positionVirtualAssistant: "Assistant Virtuel",
    positionSalesMarketing: "Spécialiste Ventes et Marketing",
    positionGraphicDesigner: "Designer Graphique",
    positionWebDeveloper: "Développeur Web",
    positionCustomerService: "Représentant Service Client",
    positionBusinessConsultant: "Consultant Business",
    positionOther: "Autre",
    yearsExperience: "Années d'expérience",
    selectExperience: "Sélectionnez le niveau d'expérience",
    experienceEntry: "Débutant (0-2 ans)",
    experienceIntermediate: "Intermédiaire (2-5 ans)",
    experienceExperienced: "Expérimenté (5-10 ans)",
    experienceExpert: "Expert (10+ ans)",
    skills: "Compétences pertinentes",
    skillsPh: "Listez vos compétences et certifications...",
    availability: "Disponibilité",
    selectAvailability: "Sélectionnez la disponibilité",
    availabilityFullTime: "Temps plein",
    availabilityPartTime: "Temps partiel",
    availabilityContract: "Contrat/Projet",
    availabilityFlexible: "Flexible",
    coverLetter: "Lettre de motivation",
    coverLetterPh: "Expliquez pourquoi ce poste vous intéresse...",
    resume: "CV *",
    acceptedFormats: "Formats acceptés : PDF, DOC, DOCX. Taille max : 5MB",
    portfolio: "Portfolio/LinkedIn/GitHub (Optionnel)",
    portfolioPh: "https://linkedin.com/in/votreprofil",
    references: "Références (Optionnel)",
    referencesPh: "Veuillez fournir des références professionnelles...",
    additionalInfo: "Informations supplémentaires",
    additionalInfoPh: "Toute information supplémentaire...",
    submitApplication: "Envoyer la candidature",
    policyNote: "En soumettant cette candidature, vous acceptez notre politique de confidentialité et nos conditions.",
    haveQuestions: "Des questions ?",
    contactDesc: "Nous sommes là pour vous aider ! Contactez notre équipe RH pour toute question.",
    contactHr: "Contacter RH",
    followUs: "Suivez-nous",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
  },
} as const;

type ApplyLang = keyof typeof applyTexts;

export default function Apply() {
  const { language } = useLanguage();
  const t = applyTexts[(language as ApplyLang) || "en"] || applyTexts.en;
  const siteTexts = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const servicePositions = [
    {
      value: "information-technology-technical-support",
      label: siteTexts.services.virtualAssistanceTitle,
    },
    {
      value: "social-media-digital-marketing-content-strategy",
      label: siteTexts.services.salesMarketingTitle,
    },
    {
      value: "graphic-design-visual-media-creative-services",
      label: siteTexts.services.graphicDesignTitle,
    },
    {
      value: "video-editing-multimedia-production-content-creation",
      label: siteTexts.services.webDevelopmentTitle,
    },
    {
      value: "customer-support-technical-support-sales-client-services",
      label: siteTexts.services.customerServiceTitle,
    },
  ];

  const handleApplicationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("privacyConsent", privacyConsent ? "true" : "false");
    formData.append("website", "");

    try {
      setIsSubmitting(true);
      setSubmitError(false);
      setSubmitMessage("");

      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitMessage(
        result.emailed
          ? "Application submitted successfully and sent to solutions@accessivelybpo.com."
          : "Application submitted successfully and stored on the server. Configure SMTP to enable automatic email delivery."
      );
      event.currentTarget?.reset();
      setPrivacyConsent(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed.";
      setSubmitError(true);
      setSubmitMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col overflow-x-hidden bg-slate-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-blue-900/20"></div>

        {/* Animated Background Orbs */}
        <div className="absolute left-0 top-1/4 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl animate-pulse sm:left-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>
        <div className="absolute bottom-1/4 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-1000 sm:right-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500/5 blur-2xl animate-pulse delay-500 sm:h-56 sm:w-56 lg:h-64 lg:w-64"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl md:text-8xl">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                {t.joinOur}
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
            {t.elite}
            <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              {t.team}
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-slate-300 sm:mb-12 sm:text-xl md:text-2xl">
            {t.heroDesc}
          </p>

          <div className="mx-auto mb-10 max-w-4xl rounded-3xl border border-slate-800/50 bg-slate-900/40 p-5 backdrop-blur-md sm:mb-12 sm:p-8">
            <h3 className="text-3xl font-bold text-white mb-8">{t.whyWork}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">{t.benefit1Title}</div>
                  <div className="text-slate-400 text-sm">{t.benefit1Desc}</div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">{t.benefit2Title}</div>
                  <div className="text-slate-400 text-sm">{t.benefit2Desc}</div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">{t.benefit3Title}</div>
                  <div className="text-slate-400 text-sm">{t.benefit3Desc}</div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">{t.benefit4Title}</div>
                  <div className="text-slate-400 text-sm">{t.benefit4Desc}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#application-form"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 sm:px-10 sm:py-5 sm:text-lg sm:hover:scale-105"
            >
              <span className="relative z-10">{t.applyNow}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative rounded-2xl border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-bold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400 hover:bg-slate-800/50 hover:text-white sm:px-10 sm:py-5 sm:text-lg sm:hover:scale-105"
            >
              {t.learnMore}
            </a>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.submitTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t.submitDesc}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800/50 bg-slate-900/40 p-5 backdrop-blur-md sm:p-8">
            <form onSubmit={handleApplicationSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-3">{t.firstName}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50"
                    placeholder={t.firstNamePh}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-3">{t.lastName}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50"
                    placeholder={t.lastNamePh}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3">{t.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50"
                  placeholder={t.emailPh}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-3">{t.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50"
                  placeholder={t.phonePh}
                />
              </div>

              {/* Position Information */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-slate-300 mb-3">{t.position}</label>
                <select
                  id="position"
                  name="position"
                  required
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300 hover:border-indigo-400/50"
                >
                  <option value="" className="bg-slate-800">{t.selectPosition}</option>
                  {servicePositions.map((servicePosition) => (
                    <option key={servicePosition.value} value={servicePosition.value} className="bg-slate-800">
                      {servicePosition.label}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-slate-400">
                  Choose from the same service categories listed in our Services section.
                </p>
              </div>

              {/* Experience & Skills */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-slate-300 mb-3">{t.yearsExperience}</label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300 hover:border-indigo-400/50"
                >
                  <option value="" className="bg-slate-800">{t.selectExperience}</option>
                  <option value="entry" className="bg-slate-800">{t.experienceEntry}</option>
                  <option value="intermediate" className="bg-slate-800">{t.experienceIntermediate}</option>
                  <option value="experienced" className="bg-slate-800">{t.experienceExperienced}</option>
                  <option value="expert" className="bg-slate-800">{t.experienceExpert}</option>
                </select>
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-slate-300 mb-3">{t.skills}</label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={4}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50 resize-none"
                  placeholder={t.skillsPh}
                ></textarea>
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-slate-300 mb-3">{t.availability}</label>
                <select
                  id="availability"
                  name="availability"
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all duration-300 hover:border-indigo-400/50"
                >
                  <option value="" className="bg-slate-800">{t.selectAvailability}</option>
                  <option value="full-time" className="bg-slate-800">{t.availabilityFullTime}</option>
                  <option value="part-time" className="bg-slate-800">{t.availabilityPartTime}</option>
                  <option value="contract" className="bg-slate-800">{t.availabilityContract}</option>
                  <option value="flexible" className="bg-slate-800">{t.availabilityFlexible}</option>
                </select>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-300 mb-3">{t.coverLetter}</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={6}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50 resize-none"
                  placeholder={t.coverLetterPh}
                ></textarea>
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-slate-300 mb-3">{t.resume}</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-indigo-600 file:to-purple-600 file:text-white hover:file:from-indigo-500 hover:file:to-purple-500 file:transition-all file:duration-300 transition-all duration-300 hover:border-indigo-400/50"
                />
                <p className="text-sm text-slate-400 mt-2">{t.acceptedFormats}</p>
              </div>

              {/* Portfolio/Links */}
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-slate-300 mb-3">{t.portfolio}</label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50"
                  placeholder={t.portfolioPh}
                />
              </div>

              {/* References */}
              <div>
                <label htmlFor="references" className="block text-sm font-medium text-slate-300 mb-3">{t.references}</label>
                <textarea
                  id="references"
                  name="references"
                  rows={4}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50 resize-none"
                  placeholder={t.referencesPh}
                ></textarea>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-300 mb-3">{t.additionalInfo}</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:border-indigo-400/50 resize-none"
                  placeholder={t.additionalInfoPh}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <div className="mb-6 rounded-xl border border-slate-700 bg-slate-800/40 p-4 text-left">
                  <label className="flex items-start gap-3 text-sm text-slate-200">
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 sm:px-12 sm:py-5 sm:text-lg sm:hover:scale-105"
                >
                  <span className="relative z-10">{isSubmitting ? "Submitting..." : t.submitApplication}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <p className="text-sm text-slate-400 mt-6">
                  {t.policyNote}
                </p>
                {submitMessage && (
                  <p className={`mt-4 text-sm ${submitError ? "text-rose-300" : "text-emerald-300"}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.haveQuestions}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t.contactDesc}
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="group rounded-3xl border border-slate-800/50 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-500 hover:border-indigo-500/50 sm:p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4h.01M16 20h.01M12 20h.01M8 20h.01M12 4h.01M8 4h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{t.contactHr}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">{t.emailLabel}</div>
                    <a href="mailto:solutions@accessivelybpo.com" className="text-slate-400 hover:text-white transition-colors">solutions@accessivelybpo.com</a>
                  </div>
                </div>
                <div className="flex items-center justify-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">{t.phoneLabel}</div>
                    <a href="https://wa.me/639936790350" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">(+63) 993-679-0350</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
