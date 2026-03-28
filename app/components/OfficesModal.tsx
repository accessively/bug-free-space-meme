"use client";

import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";

const modalExtras = {
  en: {
    services: [
      "Social Media Management",
      "Customer Support & Virtual Assistance",
      "Content Creation & Engagement",
      "Lead Generation & Outreach",
      "Administrative Support",
      "Business Process Outsourcing (BPO) Solutions",
    ],
    whyChoose: [
      "Proven Experience – 50+ successful projects",
      "Dedicated Team – 20+ professionals",
      "Cost Efficiency – Lower overhead, high quality",
      "Performance Monitoring – Ensured accountability",
      "Scalable Solutions – Grow as you expand",
      "Client-Focused Approach – Your success is our priority",
    ],
    commitmentPrefix: "Our Commitment:",
  },
  es: {
    services: ["Gestión de Redes Sociales", "Soporte al Cliente y Asistencia Virtual", "Creación de Contenido e Interacción", "Generación de Leads y Alcance", "Soporte Administrativo", "Soluciones BPO"],
    whyChoose: ["Experiencia comprobada – 50+ proyectos", "Equipo dedicado – 20+ profesionales", "Eficiencia de costos", "Monitoreo de desempeño", "Soluciones escalables", "Enfoque centrado en el cliente"],
    commitmentPrefix: "Nuestro Compromiso:",
  },
  zh: {
    services: ["社交媒体管理", "客户支持与虚拟助理", "内容创作与互动", "线索获取与拓展", "行政支持", "BPO 解决方案"],
    whyChoose: ["丰富经验 – 50+ 项目", "专注团队 – 20+ 专业人员", "成本效率", "绩效监控", "可扩展方案", "以客户为中心"],
    commitmentPrefix: "我们的承诺：",
  },
  tl: {
    services: ["Social Media Management", "Customer Support at Virtual Assistance", "Content Creation at Engagement", "Lead Generation at Outreach", "Administrative Support", "BPO Solutions"],
    whyChoose: ["Napatunayang karanasan – 50+ proyekto", "Dedicated team – 20+ professionals", "Cost efficiency", "Performance monitoring", "Scalable solutions", "Client-focused approach"],
    commitmentPrefix: "Aming Pangako:",
  },
  fr: {
    services: ["Gestion des réseaux sociaux", "Support client et assistance virtuelle", "Création de contenu et engagement", "Génération de leads", "Support administratif", "Solutions BPO"],
    whyChoose: ["Expérience prouvée – 50+ projets", "Équipe dédiée – 20+ professionnels", "Efficacité des coûts", "Suivi des performances", "Solutions évolutives", "Approche centrée client"],
    commitmentPrefix: "Notre Engagement :",
  },
} as const;

type ModalLang = keyof typeof modalExtras;

interface LocationMarker {
  id: string;
  city: string;
  country: string;
  label: string;
  description: string;
}

interface OfficesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTab: "locations" | "about";
  onTabChange: (tab: "locations" | "about") => void;
  locations: LocationMarker[];
}

const OfficesModal: React.FC<OfficesModalProps> = ({
  isOpen,
  onClose,
  selectedTab,
  onTabChange,
  locations,
}) => {
  const { language } = useLanguage();
  const t = translations[language];
  const extra = modalExtras[(language as ModalLang) || "en"] || modalExtras.en;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {selectedTab === "locations"
              ? t.offices?.title || "Our Offices"
              : t.offices?.aboutTitle || "About Accessively"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700 bg-slate-800">
          <button
            onClick={() => onTabChange("locations")}
            className={`flex-1 px-4 py-3 font-semibold transition-all duration-200 ${
              selectedTab === "locations"
                ? "text-indigo-400 border-b-2 border-indigo-400 bg-slate-700 bg-opacity-50"
                : "text-slate-400 hover:text-slate-300"
            }`}
          >
            {t.offices?.locationsTab || "Locations"}
          </button>
          <button
            onClick={() => onTabChange("about")}
            className={`flex-1 px-4 py-3 font-semibold transition-all duration-200 ${
              selectedTab === "about"
                ? "text-indigo-400 border-b-2 border-indigo-400 bg-slate-700 bg-opacity-50"
                : "text-slate-400 hover:text-slate-300"
            }`}
          >
            {t.offices?.aboutTab || "About Us"}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {selectedTab === "locations" ? (
            /* Locations Tab */
            <div className="p-6 space-y-4">
              {locations.map((location, idx) => (
                <div
                  key={location.id}
                  className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-indigo-500 text-2xl">●</span>
                        <h3 className="text-lg font-bold text-white">
                          {location.city}
                        </h3>
                      </div>
                      <p className="text-slate-400 ml-8 mb-2">
                        {location.country}
                      </p>
                      <p className="text-sm text-indigo-400 ml-8 font-semibold">
                        {location.label}
                      </p>
                      <p className="text-xs text-slate-300 ml-8 mt-2 leading-relaxed">
                        {location.description}
                      </p>
                    </div>
                    <div className="text-3xl text-slate-700 group-hover:text-indigo-400 transition-colors">
                      ↗
                    </div>
                  </div>
                </div>
              ))}

              {/* Coverage note */}
              <div className="bg-indigo-900 bg-opacity-20 border border-indigo-700 rounded-lg p-4 mt-6">
                <p className="text-sm text-indigo-300">
                  {t.offices?.mapNote ||
                    "Our distributed office network enables 24/7 support and seamless service delivery across multiple time zones."}
                </p>
              </div>
            </div>
          ) : (
            /* About Tab */
            <div className="p-6 space-y-6 text-slate-300">
              {/* Who We Are */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.offices?.whoWeAreTitle || "Who We Are"}
                </h3>
                <p className="text-sm leading-relaxed">
                  {t.offices?.whoWeAreContent ||
                    "Accessivelybpo.com is a modern outsourcing and BPO agency dedicated to helping businesses scale faster, reduce operational costs, and increase productivity. Since our founding in 2025, we have successfully completed over 50+ projects across multiple industries, powered by a team of 20+ skilled professionals who are committed to delivering excellence.\n\nWe are not just a service provider—we are a growth partner. Our goal is to help companies unlock their full potential by giving them access to reliable, trained, and performance-driven remote teams."}
                </p>
              </section>

              {/* What We Do */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.offices?.whatWeDoTitle || "What We Do"}
                </h3>
                <p className="text-sm leading-relaxed mb-3">
                  {t.offices?.whatWeDoIntro ||
                    "We specialize in providing tailored outsourcing solutions that adapt to the unique needs of each client. Our services include:"}
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  {extra.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-indigo-500">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-indigo-500">◆</span>
                    {t.offices?.missionTitle || "Our Mission"}
                  </h4>
                  <p className="text-xs leading-relaxed">
                    {t.offices?.missionContent ||
                      "To make outsourcing accessible, efficient, and impactful for businesses of all sizes. We aim to remove the barriers that prevent companies from scaling by offering cost-effective, high-quality talent solutions without compromising on performance or reliability."}
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-indigo-500">◆</span>
                    {t.offices?.visionTitle || "Our Vision"}
                  </h4>
                  <p className="text-xs leading-relaxed">
                    {t.offices?.visionContent ||
                      "We envision Accessivelybpo.com becoming a global leader in outsourcing—recognized for innovation, trust, and results. We strive to create opportunities not only for businesses but also for talented individuals who want to grow their careers in a dynamic, remote-first environment."}
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.offices?.whyChooseTitle || "Why Choose Accessivelybpo.com?"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {extra.whyChoose.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-500 text-lg">✓</span>
                      <span className="text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Commitment */}
              <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-4 border border-indigo-700">
                <p className="text-sm leading-relaxed">
                  <strong className="text-indigo-300">{extra.commitmentPrefix}</strong>{" "}
                  {t.offices?.commitmentContent ||
                    "We are committed to delivering not just services, but results. Every project is handled with professionalism, attention to detail, and a strong focus on client satisfaction. Transparency, communication, and consistency are at the core of everything we do."}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-800 border-t border-slate-700 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            {t.offices?.close || "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficesModal;
