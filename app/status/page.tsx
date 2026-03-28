"use client";

import React, { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { pageTexts } from "@/app/pageTexts";

type StatusType = "operational" | "maintenance" | "disruption";

interface StatusUpdate {
  id: string;
  title: string;
  description: string;
  details: string;
  dateTime: string;
}

const statusConfig: Record<
  StatusType,
  { label: string; icon: string; badgeClass: string; dotClass: string; defaultMessage: string }
> = {
  operational: {
    label: "Operational",
    icon: "🟢",
    badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
    dotClass: "bg-emerald-400",
    defaultMessage: "All systems are currently running smoothly with no known issues.",
  },
  maintenance: {
    label: "Maintenance",
    icon: "🟡",
    badgeClass: "bg-amber-500/15 text-amber-200 border-amber-400/40",
    dotClass: "bg-amber-300",
    defaultMessage: "Scheduled maintenance is in progress for selected services.",
  },
  disruption: {
    label: "Service Disruption",
    icon: "🔴",
    badgeClass: "bg-rose-500/15 text-rose-200 border-rose-400/40",
    dotClass: "bg-rose-300",
    defaultMessage: "Some services are currently affected. Our team is actively working on resolution.",
  },
};

export default function StatusPage() {
  const { language } = useLanguage();
  const t = pageTexts[language].statusPage;
  const currentStatus: StatusType = "operational";
  const liveMessage = t.liveMessage;
  const updates: StatusUpdate[] = [
    {
      id: "1",
      title: t.updateTitle,
      description: t.updateDescription,
      details: t.updateDetails,
      dateTime: t.updateDate,
    },
  ];
  const [selectedUpdate, setSelectedUpdate] = useState<StatusUpdate | null>(null);

  const selectedStatus = statusConfig[currentStatus];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <style>{`
        @keyframes hero-drift {
          0% { transform: scale(1.05) translate3d(0, 0, 0); }
          50% { transform: scale(1.08) translate3d(-1.5%, -1%, 0); }
          100% { transform: scale(1.05) translate3d(0, 0, 0); }
        }
        .status-hero-image {
          animation: hero-drift 18s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-10 overflow-hidden rounded-3xl border border-slate-800/70">
          <div
            className="absolute inset-0 status-hero-image bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/Lobby.png')" }}
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-indigo-500/15" />
          <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(15,23,42,0.72)]" />
          <div className="relative z-10 px-6 py-14 md:py-16 backdrop-blur-[1px]">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h1>
            <p className="mt-4 text-slate-200 text-lg max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 mb-8">
          <div>
            <p className="text-slate-400 text-sm mb-2">{t.currentStatus}</p>
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${selectedStatus.badgeClass}`}>
                <span>{selectedStatus.icon}</span>
                {t.operational}
              </span>
            </div>
            <p className="text-slate-300 mt-4">{t.operationalMessage}</p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t.liveStatusMessage}</h2>
          <p className="text-slate-300">{liveMessage}</p>
        </section>

        <section className="rounded-2xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">{t.recentUpdates}</h2>
          <div className="space-y-4">
            {updates.map((update) => (
              <article
                key={update.id}
                className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 md:p-5 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
              >
                <div className="relative pl-6 md:pl-8">
                  <span className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${selectedStatus.dotClass}`} />
                  <h3 className="text-white font-semibold text-lg">{update.title}</h3>
                  <p className="text-slate-300 mt-1">{update.description}</p>
                  <p className="text-slate-400 text-sm mt-2">{update.dateTime}</p>
                </div>
                <button
                  onClick={() => setSelectedUpdate(update)}
                  className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-colors duration-200"
                >
                  {t.learnMore}
                </button>
              </article>
            ))}
          </div>
        </section>

      </div>

      {selectedUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedUpdate(null)} />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white">{selectedUpdate.title}</h3>
            <p className="text-slate-400 text-sm mt-2">{selectedUpdate.dateTime}</p>
            <p className="text-slate-300 mt-5 leading-relaxed">{selectedUpdate.details}</p>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedUpdate(null)}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors duration-200"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
