"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations";
import OfficesModal from "./OfficesModal";

const OfficesMap = dynamic(() => import("./OfficesMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-xl border border-slate-700 bg-slate-800 flex items-center justify-center" style={{ height: "420px" }}>
      <p className="text-slate-400 text-sm">Loading map...</p>
    </div>
  ),
});

const officesExtra = {
  en: {
    locations: [
      { label: "Main Operations Hub", description: "Core operations center focused on delivery leadership, client coordination, and workflow execution." },
      { label: "Support Office", description: "Regional support office providing day-to-day client assistance and 24/7 service continuity." },
      { label: "Administrative Center", description: "Administrative base handling internal operations, compliance coordination, and team support." },
    ],
    openOfficeDetails: "Open office details",
  },
  es: {
    locations: [
      { label: "Centro Principal de Operaciones", description: "Centro principal enfocado en liderazgo operativo, coordinación con clientes y ejecución de flujos de trabajo." },
      { label: "Oficina de Soporte", description: "Oficina regional que brinda asistencia diaria al cliente y continuidad de servicio 24/7." },
      { label: "Centro Administrativo", description: "Base administrativa para operaciones internas, cumplimiento y soporte del equipo." },
    ],
    openOfficeDetails: "Ver detalles de la oficina",
  },
  zh: {
    locations: [
      { label: "主要运营中心", description: "核心运营中心，专注交付管理、客户协调与流程执行。" },
      { label: "支持办公室", description: "区域支持办公室，提供日常客户协助与 24/7 服务连续性。" },
      { label: "行政中心", description: "行政基地，负责内部运营、合规协调与团队支持。" },
    ],
    openOfficeDetails: "查看办公室详情",
  },
  tl: {
    locations: [
      { label: "Pangunahing Operations Hub", description: "Sentrong operasyon para sa delivery leadership, client coordination, at workflow execution." },
      { label: "Support Office", description: "Regional office para sa araw-araw na client assistance at 24/7 service continuity." },
      { label: "Administrative Center", description: "Administrative base para sa internal operations, compliance coordination, at team support." },
    ],
    openOfficeDetails: "Buksan ang detalye ng opisina",
  },
  fr: {
    locations: [
      { label: "Centre Opérationnel Principal", description: "Centre principal axé sur la direction opérationnelle, la coordination client et l'exécution des workflows." },
      { label: "Bureau de Support", description: "Bureau régional assurant l'assistance client quotidienne et la continuité de service 24h/24 et 7j/7." },
      { label: "Centre Administratif", description: "Base administrative pour les opérations internes, la conformité et le support d'équipe." },
    ],
    openOfficeDetails: "Ouvrir les détails du bureau",
  },
} as const;

type OfficesLang = keyof typeof officesExtra;

interface LocationMarker {
  id: string;
  city: string;
  country: string;
  label: string;
  description: string;
}

const OfficesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const extra = officesExtra[(language as OfficesLang) || "en"] || officesExtra.en;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"locations" | "about">(
    "locations"
  );

  const locations: LocationMarker[] = [
    {
      id: "cdo",
      city: "Cagayan de Oro",
      country: "Philippines",
      label: "Main Operations Hub",
      description:
        "Core operations center focused on delivery leadership, client coordination, and workflow execution.",
    },
    {
      id: "launion",
      city: "La Union",
      country: "Philippines",
      label: "Support Office",
      description:
        "Regional support office providing day-to-day client assistance and 24/7 service continuity.",
    },
    {
      id: "muntinlupa",
      city: "Muntinlupa",
      country: "Philippines",
      label: "Administrative Center",
      description:
        "Administrative base handling internal operations, compliance coordination, and team support.",
    },
  ];

  return (
    <section id="offices" className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.offices?.title || "Our Offices & Locations"}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t.offices?.subtitle ||
              "Strategically located to serve clients globally with efficiency and reliability."}
          </p>
        </div>

        {/* Office Cards UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <button
              key={location.id}
              onClick={() => {
                setSelectedTab("locations");
                setIsModalOpen(true);
              }}
              className="text-left bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-indigo-400 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="w-11 h-11 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21h18M5 21V7a1 1 0 011-1h3a1 1 0 011 1v14m0 0h4m-4 0V11a1 1 0 011-1h2a1 1 0 011 1v10m0 0h4m-4 0V9a1 1 0 011-1h2a1 1 0 011 1v12"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{location.city}</h3>
              <p className="text-slate-400 text-sm mb-3">{location.country}</p>

              <div className="inline-block bg-indigo-600/20 border border-indigo-500 rounded-full px-3 py-1 mb-4">
                <p className="text-indigo-300 text-xs font-semibold">{extra.locations[index]?.label || location.label}</p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {extra.locations[index]?.description || location.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">{extra.openOfficeDetails}</span>
                <span className="text-indigo-400">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="mb-12">
          <OfficesMap />
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              setSelectedTab("locations");
              setIsModalOpen(true);
            }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            {t.offices?.viewLocations || "View All Locations"}
          </button>
          <button
            onClick={() => {
              setSelectedTab("about");
              setIsModalOpen(true);
            }}
            className="border border-indigo-400 hover:bg-indigo-400 hover:bg-opacity-10 text-indigo-300 hover:text-indigo-200 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            {t.offices?.learnMore || "Learn More About Us"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <OfficesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          locations={locations}
        />
      )}
    </section>
  );
};

export default OfficesSection;
