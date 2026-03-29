"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const devBannerContent = {
  en: {
    bannerTitle: "Our main website is currently under development and more updates are on the way.",
    learnMore: "Learn more",
    dismissLabel: "Dismiss banner",
    modalLabel: "Upcoming features",
    modalTitle: "What's coming next",
    modalSubtitle: "Our new website is under active development. Here's a closer look at what to expect.",
    closeLabel: "Close",
    features: [
      {
        title: "Owner Dashboard",
        summary: "Track business progress",
        detail: "A private and secure dashboard where business owners can monitor KPIs, team performance, project milestones, and real-time analytics in one place.",
      },
      {
        title: "Optimized Website",
        summary: "Redesigned for speed and clarity",
        detail: "A rebuilt frontend with faster load times, stronger SEO, mobile-first design, and a cleaner user experience that reflects your brand better.",
      },
      {
        title: "Integrated AI",
        summary: "Smart assistance built in",
        detail: "AI-powered tools are being embedded across the platform, from automated replies and smart scheduling to recommendations that support faster decisions.",
      },
      {
        title: "Live Consultation",
        summary: "Real-time expert access",
        detail: "Connect directly with an Accessively specialist through live chat or video call for immediate answers and guidance when you need it.",
      },
      {
        title: "Faster Applications",
        summary: "Streamlined onboarding",
        detail: "A simplified application flow with smart autofill, instant status updates, and quicker turnaround so getting started feels frictionless.",
      },
      {
        title: "And Many More",
        summary: "More features on the way",
        detail: "We are continuously building more capabilities, including integrations, notifications, multi-user controls, and other improvements shaped by your feedback.",
      },
    ],
  },
  es: {
    bannerTitle: "Nuestro sitio web principal está en desarrollo y vienen más actualizaciones.",
    learnMore: "Más información",
    dismissLabel: "Cerrar aviso",
    modalLabel: "Próximas funciones",
    modalTitle: "Lo que viene después",
    modalSubtitle: "Nuestro nuevo sitio web está en desarrollo activo. Aquí tienes una vista más cercana de lo que puedes esperar.",
    closeLabel: "Cerrar",
    features: [
      {
        title: "Panel del Propietario",
        summary: "Sigue el progreso del negocio",
        detail: "Un panel privado y seguro donde los dueños de negocio pueden monitorear KPI, rendimiento del equipo, hitos del proyecto y analíticas en tiempo real desde un solo lugar.",
      },
      {
        title: "Sitio Web Optimizado",
        summary: "Rediseñado para velocidad y claridad",
        detail: "Un frontend reconstruido con tiempos de carga más rápidos, mejor SEO, diseño mobile-first y una experiencia más clara que representa mejor tu marca.",
      },
      {
        title: "IA Integrada",
        summary: "Asistencia inteligente incorporada",
        detail: "Herramientas impulsadas por IA se integran en toda la plataforma, desde respuestas automáticas y programación inteligente hasta recomendaciones para decidir más rápido.",
      },
      {
        title: "Consulta en Vivo",
        summary: "Acceso experto en tiempo real",
        detail: "Conéctate directamente con un especialista de Accessively mediante chat en vivo o videollamada para obtener respuestas y orientación al momento.",
      },
      {
        title: "Solicitudes Más Rápidas",
        summary: "Incorporación simplificada",
        detail: "Un proceso de solicitud más simple con autocompletado inteligente, actualizaciones instantáneas y tiempos de respuesta más rápidos para empezar sin fricción.",
      },
      {
        title: "Y Mucho Más",
        summary: "Más funciones en camino",
        detail: "Seguimos desarrollando nuevas capacidades, incluidas integraciones, notificaciones, controles multiusuario y otras mejoras guiadas por tus comentarios.",
      },
    ],
  },
  zh: {
    bannerTitle: "我们的主网站正在开发中，更多更新即将推出。",
    learnMore: "了解更多",
    dismissLabel: "关闭横幅",
    modalLabel: "即将推出的功能",
    modalTitle: "接下来将推出什么",
    modalSubtitle: "我们的新网站正在积极开发中，以下是即将推出内容的更详细预览。",
    closeLabel: "关闭",
    features: [
      {
        title: "业主管理面板",
        summary: "追踪业务进展",
        detail: "一个私密且安全的控制面板，企业所有者可以在一个地方查看 KPI、团队表现、项目里程碑和实时分析数据。",
      },
      {
        title: "优化后的网站",
        summary: "为速度与清晰度重新设计",
        detail: "全新重建的前端带来更快的加载速度、更好的 SEO、移动优先设计，以及更能体现品牌价值的清晰体验。",
      },
      {
        title: "集成式 AI",
        summary: "内置智能辅助",
        detail: "AI 工具将贯穿整个平台，从自动回复和智能排程到帮助更快决策的建议系统。",
      },
      {
        title: "实时咨询",
        summary: "实时专家支持",
        detail: "通过实时聊天或视频通话直接联系 Accessively 专家，在需要时立即获得解答和指导。",
      },
      {
        title: "更快的申请流程",
        summary: "更顺畅的入门体验",
        detail: "简化后的申请流程配备智能自动填充、即时状态更新和更快的处理速度，让开始合作更轻松。",
      },
      {
        title: "以及更多功能",
        summary: "更多功能即将到来",
        detail: "我们正在持续构建更多能力，包括集成、通知系统、多用户权限控制，以及更多由用户反馈推动的改进。",
      },
    ],
  },
  tl: {
    bannerTitle: "Ang aming pangunahing website ay kasalukuyang dine-develop at mas marami pang update ang darating.",
    learnMore: "Alamin pa",
    dismissLabel: "Isara ang banner",
    modalLabel: "Mga paparating na feature",
    modalTitle: "Ano ang susunod",
    modalSubtitle: "Aktibong dine-develop ang aming bagong website. Narito ang mas malinaw na preview ng mga darating.",
    closeLabel: "Isara",
    features: [
      {
        title: "Dashboard ng May-ari",
        summary: "Subaybayan ang progreso ng negosyo",
        detail: "Isang pribado at secure na dashboard kung saan masusubaybayan ng mga may-ari ng negosyo ang KPI, performance ng team, project milestones, at real-time analytics sa iisang lugar.",
      },
      {
        title: "Na-optimize na Website",
        summary: "Muling dinisenyo para sa bilis at linaw",
        detail: "Isang rebuilt na frontend na may mas mabilis na loading, mas mahusay na SEO, mobile-first na disenyo, at mas malinaw na user experience na mas akma sa iyong brand.",
      },
      {
        title: "Integrated AI",
        summary: "May kasamang matalinong tulong",
        detail: "Ang mga AI-powered na tool ay inilalagay sa buong platform, mula automated replies at smart scheduling hanggang recommendations na tumutulong sa mas mabilis na pagdedesisyon.",
      },
      {
        title: "Live Consultation",
        summary: "Real-time na access sa eksperto",
        detail: "Direktang makipag-ugnayan sa isang Accessively specialist sa pamamagitan ng live chat o video call para sa agarang sagot at gabay kapag kailangan mo ito.",
      },
      {
        title: "Mas Mabilis na Applications",
        summary: "Pinadaling onboarding",
        detail: "Isang pinasimpleng application flow na may smart autofill, instant status updates, at mas mabilis na turnaround para mas madali ang pagsisimula.",
      },
      {
        title: "At Marami Pang Iba",
        summary: "Mas marami pang feature ang paparating",
        detail: "Patuloy kaming gumagawa ng mas marami pang kakayahan, kabilang ang integrations, notifications, multi-user controls, at iba pang mga improvement na hinubog ng inyong feedback.",
      },
    ],
  },
  fr: {
    bannerTitle: "Notre site principal est actuellement en cours de développement et d'autres mises à jour arrivent.",
    learnMore: "En savoir plus",
    dismissLabel: "Fermer la bannière",
    modalLabel: "Fonctionnalités à venir",
    modalTitle: "Ce qui arrive ensuite",
    modalSubtitle: "Notre nouveau site est en développement actif. Voici un aperçu plus précis de ce que vous pouvez attendre.",
    closeLabel: "Fermer",
    features: [
      {
        title: "Tableau de Bord Propriétaire",
        summary: "Suivez l'évolution de votre activité",
        detail: "Un tableau de bord privé et sécurisé où les dirigeants peuvent suivre les KPI, les performances d'équipe, les étapes clés des projets et les analyses en temps réel au même endroit.",
      },
      {
        title: "Site Web Optimisé",
        summary: "Repensé pour la vitesse et la clarté",
        detail: "Une interface reconstruite avec des temps de chargement plus rapides, un meilleur SEO, un design mobile-first et une expérience plus claire qui représente mieux votre marque.",
      },
      {
        title: "IA Intégrée",
        summary: "Une assistance intelligente intégrée",
        detail: "Des outils basés sur l'IA sont intégrés à toute la plateforme, des réponses automatiques et de la planification intelligente jusqu'aux recommandations pour décider plus vite.",
      },
      {
        title: "Consultation en Direct",
        summary: "Accès immédiat à un expert",
        detail: "Contactez directement un spécialiste Accessively par chat en direct ou appel vidéo pour obtenir des réponses et un accompagnement immédiats.",
      },
      {
        title: "Candidatures Plus Rapides",
        summary: "Intégration simplifiée",
        detail: "Un parcours de candidature simplifié avec remplissage intelligent, mises à jour instantanées du statut et délais réduits pour commencer sans friction.",
      },
      {
        title: "Et Bien Plus Encore",
        summary: "D'autres fonctionnalités arrivent",
        detail: "Nous développons en continu de nouvelles capacités, notamment des intégrations, des notifications, des contrôles multi-utilisateurs et d'autres améliorations guidées par vos retours.",
      },
    ],
  },
} as const;

export default function DevBanner() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const content = devBannerContent[language] || devBannerContent.en;
  const features = content.features;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div className="relative z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            {/* Clickable text area */}
            <button
              onClick={() => { setModalOpen(true); setActiveIndex(null); }}
              className="flex-1 min-w-0 text-left group"
            >
              <p className="font-semibold text-sm sm:text-base group-hover:underline underline-offset-2 transition">
                {content.bannerTitle}
              </p>
              <p className="text-indigo-200 text-xs sm:text-sm mt-0.5">
                {features.map((f, i) => (
                  <span key={f.title}>
                    <span className="text-white font-medium">{f.title}</span>
                    {i < features.length - 1 && (
                      <span className="text-indigo-300"> · </span>
                    )}
                  </span>
                ))}
                <span className="ml-2 text-indigo-200 text-xs border border-indigo-300/50 rounded px-1.5 py-0.5">
                  {content.learnMore}
                </span>
              </p>
            </button>

            {/* Dismiss */}
            <button
              onClick={() => setVisible(false)}
              aria-label={content.dismissLabel}
              className="shrink-0 text-indigo-200 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={content.modalLabel}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-2xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white">{content.modalTitle}</h2>
                <p className="text-indigo-200 text-sm mt-0.5">
                  {content.modalSubtitle}
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                aria-label={content.closeLabel}
                className="shrink-0 text-indigo-200 hover:text-white transition-colors mt-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Feature list */}
            <div className="divide-y divide-slate-800">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full text-left px-6 py-4 hover:bg-slate-800/50 transition-colors group"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
                        {f.title}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">{f.summary}</p>
                    </div>
                    <svg
                      className={`w-4 h-4 shrink-0 text-indigo-400 transition-transform duration-200 ${activeIndex === i ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {activeIndex === i && (
                    <p className="mt-3 text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                      {f.detail}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
