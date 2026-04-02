"use client";

import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Link from "next/link";

const contactTexts = {
  en: {
    contactUs: "Contact Us",
    chooseOption: "How can we help you?",
    chooseDesc: "Select the option that best describes your inquiry",
    generalInquiry: "General Inquiry",
    generalDesc: "Have questions about our services or company? Get in touch with us.",
    employment: "Application for Employment",
    employmentDesc: "Interested in joining our team? Apply for an available position.",
    outsourcing: "Interested in Outsourcing",
    outsourcingDesc: "Looking for a BPO partner? Let's discuss your business needs.",
    expert: "Talk to an Expert",
    expertDesc: "Need direct guidance on strategy, scope, or next steps? Speak with our team.",
    contactNow: "Contact Now",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    talkNow: "Talk Now",
    stillUnsure: "Still not sure which option?",
    stillUnsureDesc: "No problem. Send a general inquiry and we will route you to the right team quickly.",
    contactTeam: "Contact Our Team",
  },
  es: {
    contactUs: "Contáctanos",
    chooseOption: "¿Cómo podemos ayudarte?",
    chooseDesc: "Selecciona la opción que mejor describe tu consulta",
    generalInquiry: "Consulta General",
    generalDesc: "¿Tienes preguntas sobre nuestros servicios? Ponte en contacto con nosotros.",
    employment: "Solicitud de Empleo",
    employmentDesc: "¿Interesado en unirte a nuestro equipo? Solicita una posición disponible.",
    outsourcing: "Interesado en Outsourcing",
    outsourcingDesc: "¿Buscas un partner BPO? Discutamos tus necesidades empresariales.",
    expert: "Habla con un Experto",
    expertDesc: "¿Necesitas orientación directa sobre estrategia, alcance o próximos pasos? Habla con nuestro equipo.",
    contactNow: "Contactar Ahora",
    applyNow: "Solicitar Ahora",
    learnMore: "Saber Más",
    talkNow: "Hablar Ahora",
    stillUnsure: "¿Aún no sabes qué opción elegir?",
    stillUnsureDesc: "No hay problema. Envía una consulta general y te dirigiremos al equipo adecuado rápidamente.",
    contactTeam: "Contactar a Nuestro Equipo",
  },
  zh: {
    contactUs: "联系我们",
    chooseOption: "我们如何帮助您？",
    chooseDesc: "选择最符合您咨询的选项",
    generalInquiry: "一般查询",
    generalDesc: "对我们的服务有疑问？与我们联系。",
    employment: "就业申请",
    employmentDesc: "有兴趣加入我们的团队？申请可用职位。",
    outsourcing: "对外包感兴趣",
    outsourcingDesc: "寻找BPO合作伙伴？让我们讨论您的业务需求。",
    expert: "咨询专家",
    expertDesc: "需要关于策略、范围或下一步的直接建议？请联系我们的团队。",
    contactNow: "立即联系",
    applyNow: "立即申请",
    learnMore: "了解更多",
    talkNow: "立即咨询",
    stillUnsure: "还不确定该选择哪一项？",
    stillUnsureDesc: "没关系。发送一般咨询，我们会快速将您转给合适的团队。",
    contactTeam: "联系我们的团队",
  },
  tl: {
    contactUs: "Makipag-ugnayan sa Amin",
    chooseOption: "Paano namin kayo matutulungan?",
    chooseDesc: "Piliin ang opsyon na best describes ang iyong inquiry",
    generalInquiry: "General Inquiry",
    generalDesc: "May mga tanong tungkol sa aming services? Makipag-ugnayan sa amin.",
    employment: "Application for Employment",
    employmentDesc: "Interested na sumali sa aming team? Apply para sa available position.",
    outsourcing: "Interested sa Outsourcing",
    outsourcingDesc: "Naghahanap ng BPO partner? Discuss natin ang iyong business needs.",
    expert: "Talk to an Expert",
    expertDesc: "Kailangan ng direct guidance sa strategy, scope, o next steps? Makipag-usap sa aming team.",
    contactNow: "Makipag-ugnayan Ngayon",
    applyNow: "Mag-Apply Ngayon",
    learnMore: "Alamin Pa",
    talkNow: "Makipag-usap Ngayon",
    stillUnsure: "Hindi pa sigurado kung alin ang pipiliin?",
    stillUnsureDesc: "Walang problema. Magpadala ng general inquiry at agad ka naming ituturo sa tamang team.",
    contactTeam: "Kontakin ang Aming Team",
  },
  fr: {
    contactUs: "Nous Contacter",
    chooseOption: "Comment pouvons-nous vous aider ?",
    chooseDesc: "Sélectionnez l'option qui décrit le mieux votre demande",
    generalInquiry: "Demande Générale",
    generalDesc: "Vous avez des questions sur nos services ? Contactez-nous.",
    employment: "Candidature Emploi",
    employmentDesc: "Intéressé par notre équipe ? Postulez pour une position disponible.",
    outsourcing: "Intéressé par l'Externalisation",
    outsourcingDesc: "Vous cherchez un partenaire BPO ? Discutons de vos besoins.",
    expert: "Parler à un Expert",
    expertDesc: "Besoin de conseils directs sur la stratégie, le périmètre ou les prochaines étapes ? Parlez à notre équipe.",
    contactNow: "Nous Contacter",
    applyNow: "Postuler Maintenant",
    learnMore: "En Savoir Plus",
    talkNow: "Parler Maintenant",
    stillUnsure: "Vous ne savez toujours pas quelle option choisir ?",
    stillUnsureDesc: "Aucun problème. Envoyez une demande générale et nous vous orienterons rapidement vers la bonne équipe.",
    contactTeam: "Contacter Notre Équipe",
  },
} as const;

type ContactLang = keyof typeof contactTexts;

export default function Contact() {
  const { language } = useLanguage();
  const t = contactTexts[(language as ContactLang) || "en"] || contactTexts.en;

  const options = [
    {
      title: t.generalInquiry,
      description: t.generalDesc,
      action: t.contactNow,
      href: "/help-center",
    },
    {
      title: t.employment,
      description: t.employmentDesc,
      action: t.applyNow,
      href: "/apply",
    },
    {
      title: t.outsourcing,
      description: t.outsourcingDesc,
      action: t.learnMore,
      href: "/outsourcing",
    },
    {
      title: t.expert,
      description: t.expertDesc,
      action: t.talkNow,
      href: "/contact",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 sm:pt-24">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-indigo-500 opacity-20 blur-3xl sm:right-10 sm:top-40 sm:h-72 sm:w-72 lg:right-20 lg:h-96 lg:w-96"></div>
        <div className="absolute bottom-20 left-0 h-40 w-40 rounded-full bg-purple-500 opacity-15 blur-3xl sm:bottom-32 sm:left-10 sm:h-56 sm:w-56 lg:bottom-40 lg:left-20 lg:h-72 lg:w-72"></div>
      </div>

      <div className="relative z-10">
        <section className="mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:mb-16">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              {t.contactUs}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl">
              {t.chooseDesc}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {options.map((option, index) => (
              <Link key={index} href={option.href}>
                <div className="group h-full rounded-2xl border border-slate-800/50 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 sm:p-7">
                  <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">{option.title}</h3>

                  <p className="mb-6 text-slate-300 leading-relaxed">{option.description}</p>

                  <div className="text-sm font-semibold text-indigo-300 transition-colors group-hover:text-indigo-200 sm:text-base">
                    {option.action}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 p-6 text-center backdrop-blur-md sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{t.stillUnsure}</h2>
              <p className="mb-6 text-slate-300 sm:text-lg">
                {t.stillUnsureDesc}
              </p>
              <Link
                href="/help-center"
                className="inline-flex rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 sm:px-8 sm:py-4 sm:text-base"
              >
                {t.contactTeam}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
