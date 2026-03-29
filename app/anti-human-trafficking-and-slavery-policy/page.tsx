"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";

const policyContent = {
  en: {
    title: "Accessively Anti-Human Trafficking and Slavery Policy",
    intro:
      "Accessively supports a zero-tolerance approach to human trafficking, forced labor, debt bondage, child labor, and every form of modern slavery. This page outlines the standards expected in Accessively operations, supplier relationships, recruiting practices, and service delivery connected to our business.",
    sections: [
      {
        title: "Policy Commitment",
        content:
          "We expect all personnel, contractors, recruiters, vendors, and business partners to operate lawfully, ethically, and without coercion. No worker may be trafficked, compelled to work through threats, charged abusive recruitment fees, or denied freedom of movement as a condition of employment or engagement.",
      },
      {
        title: "Prohibited Practices",
        content:
          "Forced labor, involuntary servitude, deceptive recruitment, withholding of passports or government-issued identification, intimidation, unlawful wage deductions, retention of personal documents, physical abuse, threats, and exploitation of vulnerable workers are strictly prohibited.",
      },
      {
        title: "Recruitment Standards",
        content:
          "Recruitment must be transparent and lawful. Workers must receive accurate information about the nature of the role, compensation, work location, hours, benefits, and terms of engagement before they accept an offer. Recruitment fees that create debt dependency or unlawful financial pressure must not be imposed on workers.",
      },
      {
        title: "Worker Rights",
        content:
          "Workers must be free to resign in accordance with applicable law and contract terms, retain control of their own identity documents, receive wages on time, and work in conditions that respect dignity, safety, and lawful labor protections. No one may be threatened for raising concerns or refusing unlawful conduct.",
      },
      {
        title: "Supply Chain Expectations",
        content:
          "Suppliers, agencies, subcontractors, and service partners supporting Accessively-related or client-facing work must maintain controls that prevent trafficking and slavery risks in their own operations. We may require cooperation with due diligence reviews, remediation steps, or evidence of compliant labor practices when concerns arise.",
      },
      {
        title: "Reporting and Escalation",
        content:
          "Anyone who becomes aware of suspected trafficking, coercion, recruitment abuse, document confiscation, or exploitative working conditions should report it immediately. Reports made in good faith should be handled seriously, escalated promptly, and protected from retaliation to the extent permitted by law and company process.",
      },
      {
        title: "Investigation and Response",
        content:
          "Reported concerns may result in internal review, supplier investigation, suspension of relationships, corrective action plans, or referral to appropriate authorities where required. If a violation is substantiated, remedial measures may include contract termination, worker support coordination, policy enforcement, and strengthened compliance controls.",
      },
      {
        title: "Training and Oversight",
        content:
          "Accessively promotes awareness of ethical labor expectations through onboarding, management oversight, process controls, and periodic review of recruitment and vendor practices. Teams responsible for hiring, workforce management, procurement, and support operations should understand how to recognize and escalate trafficking indicators.",
      },
      {
        title: "Contact and Reporting Channel",
        content:
          "Questions about this policy, requests for clarification, or reports of possible violations may be sent to our support and compliance contact points below for review and routing.",
      },
    ],
    email: "Email:",
    website: "Website:",
    effectiveDate: "Effective Date:",
    back: "Back to Home",
  },
  es: {
    title: "Política de Accessively contra la Trata de Personas y la Esclavitud",
    intro:
      "Accessively aplica una política de tolerancia cero frente a la trata de personas, el trabajo forzoso, la servidumbre por deudas, el trabajo infantil y cualquier forma de esclavitud moderna.",
    sections: [
      { title: "Compromiso", content: "Todo trabajador, contratista, reclutador y proveedor debe actuar sin coerción, engaño ni explotación." },
      { title: "Prácticas Prohibidas", content: "Se prohíben el trabajo forzoso, la confiscación de documentos, las amenazas, los abusos y las tarifas de reclutamiento abusivas." },
      { title: "Estándares de Reclutamiento", content: "Las condiciones del trabajo deben explicarse con claridad antes de la contratación y no deben generar dependencia por deuda." },
      { title: "Derechos del Trabajador", content: "Los trabajadores deben conservar sus documentos, recibir pago puntual y poder denunciar problemas sin represalias." },
      { title: "Cadena de Suministro", content: "Los socios y proveedores deben mantener controles razonables para prevenir la trata y la esclavitud en sus operaciones." },
      { title: "Reportes e Investigación", content: "Toda sospecha debe reportarse de inmediato y puede derivar en revisión interna, acciones correctivas o terminación de relaciones comerciales." },
    ],
    email: "Correo:",
    website: "Sitio web:",
    effectiveDate: "Fecha de vigencia:",
    back: "Volver al Inicio",
  },
  zh: {
    title: "Accessively 反人口贩运与反奴役政策",
    intro:
      "Accessively 对人口贩运、强迫劳动、债役、童工以及任何形式的现代奴役实行零容忍。",
    sections: [
      { title: "政策承诺", content: "所有员工、承包商、招聘方和供应商都必须在合法、透明且无胁迫的条件下开展工作。" },
      { title: "禁止行为", content: "严禁强迫劳动、扣押证件、威胁、虐待、欺骗性招聘和剥削性收费。" },
      { title: "招聘标准", content: "候选人在接受岗位前应获得关于职责、薪酬、地点和条件的清晰准确信息。" },
      { title: "员工权利", content: "员工应保管自己的证件，按时获得报酬，并可在无报复风险的情况下提出关切。" },
      { title: "供应链要求", content: "合作伙伴和供应商应建立合理控制措施，防止其运营中出现人口贩运和奴役风险。" },
      { title: "举报与处理", content: "任何可疑情况都应立即上报，并可能触发调查、整改或终止合作。" },
    ],
    email: "邮箱：",
    website: "网站：",
    effectiveDate: "生效日期：",
    back: "返回首页",
  },
  tl: {
    title: "Patakaran ng Accessively Laban sa Human Trafficking at Slavery",
    intro:
      "May zero-tolerance ang Accessively laban sa human trafficking, forced labor, debt bondage, child labor, at lahat ng anyo ng modern slavery.",
    sections: [
      { title: "Pangako sa Patakaran", content: "Lahat ng empleyado, contractor, recruiter, at supplier ay dapat kumilos nang walang pamimilit, panlilinlang, o pagsasamantala." },
      { title: "Mga Ipinagbabawal", content: "Mahigpit na ipinagbabawal ang forced labor, pagkuha ng mga dokumento, pananakot, pang-aabuso, at abusadong recruitment fees." },
      { title: "Pamantayan sa Recruitment", content: "Dapat malinaw ang job terms, pasahod, lokasyon, at kundisyon bago tanggapin ang anumang role." },
      { title: "Karapatan ng Manggagawa", content: "May karapatan ang manggagawa sa sariling dokumento, tamang sahod, ligtas na kalagayan, at pagre-report nang walang retaliation." },
      { title: "Supply Chain Expectations", content: "Inaasahan sa mga partner at supplier ang makatwirang controls laban sa trafficking at slavery sa kanilang operasyon." },
      { title: "Pag-uulat at Imbestigasyon", content: "Ang anumang hinala ay dapat i-report agad at maaaring humantong sa review, corrective action, o pagputol ng relasyon sa supplier." },
    ],
    email: "Email:",
    website: "Website:",
    effectiveDate: "Petsa ng Pagkakabisa:",
    back: "Bumalik sa Home",
  },
  fr: {
    title: "Politique Accessively de Lutte contre la Traite des Etres Humains et l'Esclavage",
    intro:
      "Accessively applique une tolerance zero a l'egard de la traite des etres humains, du travail force, de la servitude pour dettes, du travail des enfants et de toute forme d'esclavage moderne.",
    sections: [
      { title: "Engagement", content: "Tous les travailleurs, sous-traitants, recruteurs et fournisseurs doivent agir sans coercition, tromperie ni exploitation." },
      { title: "Pratiques Interdites", content: "Le travail force, la confiscation de documents, les menaces, les abus et les frais de recrutement abusifs sont strictement interdits." },
      { title: "Normes de Recrutement", content: "Les conditions du poste doivent etre communiquees clairement avant toute acceptation de l'offre." },
      { title: "Droits des Travailleurs", content: "Les travailleurs doivent conserver leurs documents, etre payes a temps et signaler les problemes sans crainte de represailles." },
      { title: "Exigences de la Chaine d'Approvisionnement", content: "Les partenaires et fournisseurs doivent mettre en place des controles raisonnables pour prevenir les risques de traite et d'esclavage." },
      { title: "Signalement et Reponse", content: "Tout soupcon doit etre signale rapidement et peut entrainer une enquete, des mesures correctives ou la fin de la relation commerciale." },
    ],
    email: "E-mail :",
    website: "Site web :",
    effectiveDate: "Date d'effet :",
    back: "Retour a l'Accueil",
  },
} as const;

type PolicyLang = keyof typeof policyContent;

export default function AntiHumanTraffickingAndSlaveryPolicyPage() {
  const { language } = useLanguage();
  const content = policyContent[(language as PolicyLang) || "en"] || policyContent.en;

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{content.title}</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8">{content.intro}</p>

              {content.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.content}</p>
                </div>
              ))}

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-900 font-medium">{content.email}</span>
                  <span className="text-gray-600">solutions@accessivelybpo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">{content.website}</span>
                  <span className="text-gray-600">www.accessivelybpo.com</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>{content.effectiveDate}</strong> March 29, 2026
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {content.back}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}