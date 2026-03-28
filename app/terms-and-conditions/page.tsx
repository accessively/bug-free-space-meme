"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";

const termsContent = {
  en: {
    title: "Terms and Conditions",
    sections: [
      { title: "1. Terms", content: "By accessing the website at www.accessivelybpo.com, you agree to be bound by these Terms and Conditions, all applicable laws and regulations." },
      { title: "2. Use License", content: "Permission is granted to temporarily access the materials on Accessively's website for personal, non-commercial use only." },
      { title: "3. Disclaimer", content: "All materials on Accessively's website are provided on an \"as is\" basis. Accessively makes no warranties, expressed or implied." },
      { title: "4. Limitations of Liability", content: "In no event shall Accessively be liable for any damages, including loss of data, profits, or business interruption." },
      { title: "5. Accuracy of Materials", content: "Materials on this website may include technical or typographical errors. Content may be updated at any time without notice." },
      { title: "6. Links to Third-Party Sites", content: "Accessively may include links to external websites. We are not responsible for their content or practices." },
      { title: "7. Modifications", content: "Accessively may revise these Terms and Conditions at any time without notice." },
      { title: "8. Governing Law", content: "These Terms and Conditions are governed by the laws of the Republic of the Philippines." },
      { title: "9. Contact Information", content: "For any questions regarding these Terms and Conditions, you may contact us at:" },
    ],
    restrictionsTitle: "Under this license, you may not:",
    restrictions: [
      "Modify or copy the materials",
      "Use the materials for any commercial purpose or public display",
      "Attempt to reverse engineer or decompile any software on the website",
      "Remove any copyright or proprietary notations",
      "Transfer or mirror the materials on another server",
    ],
    email: "Email:",
    website: "Website:",
    effectiveDate: "Effective Date:",
    back: "Back to Home",
  },
  es: {
    title: "Términos y Condiciones",
    sections: [
      { title: "1. Términos", content: "Al acceder a www.accessivelybpo.com, aceptas estos Términos y Condiciones y las leyes aplicables." },
      { title: "2. Licencia de Uso", content: "Se concede permiso para acceder temporalmente al material del sitio para uso personal y no comercial." },
      { title: "3. Descargo de Responsabilidad", content: "Todo el material se proporciona \"tal cual\" y Accessively no ofrece garantías expresas o implícitas." },
      { title: "4. Limitación de Responsabilidad", content: "Accessively no será responsable por daños, incluyendo pérdida de datos, ganancias o interrupción del negocio." },
      { title: "5. Exactitud del Material", content: "El contenido puede incluir errores técnicos o tipográficos y puede actualizarse sin previo aviso." },
      { title: "6. Enlaces a Terceros", content: "Podemos incluir enlaces externos. No somos responsables por su contenido o prácticas." },
      { title: "7. Modificaciones", content: "Accessively puede modificar estos términos en cualquier momento sin previo aviso." },
      { title: "8. Ley Aplicable", content: "Estos términos se rigen por las leyes de la República de Filipinas." },
      { title: "9. Información de Contacto", content: "Para preguntas sobre estos términos, contáctanos en:" },
    ],
    restrictionsTitle: "Bajo esta licencia, no puedes:",
    restrictions: [
      "Modificar o copiar materiales",
      "Usar materiales con fines comerciales o exhibición pública",
      "Intentar descompilar software del sitio",
      "Eliminar avisos de propiedad intelectual",
      "Transferir o replicar materiales en otro servidor",
    ],
    email: "Correo:",
    website: "Sitio web:",
    effectiveDate: "Fecha de vigencia:",
    back: "Volver al Inicio",
  },
  zh: {
    title: "条款与条件",
    sections: [
      { title: "1. 条款", content: "访问 www.accessivelybpo.com 即表示您同意受这些条款和适用法律约束。" },
      { title: "2. 使用许可", content: "仅允许为个人非商业用途临时访问本网站资料。" },
      { title: "3. 免责声明", content: "本网站内容按“现状”提供，Accessively 不作任何明示或暗示保证。" },
      { title: "4. 责任限制", content: "Accessively 对任何损失（包括数据、利润或业务中断）不承担责任。" },
      { title: "5. 材料准确性", content: "网站内容可能包含技术或排版错误，且可随时更新。" },
      { title: "6. 第三方链接", content: "我们可能包含外部链接，对其内容和做法不负责。" },
      { title: "7. 修改", content: "Accessively 可随时修改这些条款，恕不另行通知。" },
      { title: "8. 适用法律", content: "本条款受菲律宾共和国法律管辖。" },
      { title: "9. 联系方式", content: "如有疑问，请通过以下方式联系我们：" },
    ],
    restrictionsTitle: "在此许可下，您不得：",
    restrictions: ["修改或复制资料", "将资料用于商业用途", "反向工程网站软件", "移除版权声明", "转移或镜像资料到其他服务器"],
    email: "邮箱：",
    website: "网站：",
    effectiveDate: "生效日期：",
    back: "返回首页",
  },
  tl: {
    title: "Mga Tuntunin at Kundisyon",
    sections: [
      { title: "1. Mga Tuntunin", content: "Sa pag-access sa www.accessivelybpo.com, sumasang-ayon ka sa mga tuntunin at naaangkop na batas." },
      { title: "2. Lisensya sa Paggamit", content: "Pinahihintulutan ang pansamantalang pag-access sa materyales para sa personal at hindi komersyal na gamit lamang." },
      { title: "3. Disclaimer", content: "Ang lahat ng materyales ay ibinibigay nang \"as is\" at walang anumang garantiya mula sa Accessively." },
      { title: "4. Limitasyon ng Pananagutan", content: "Hindi mananagot ang Accessively sa anumang pinsala gaya ng pagkawala ng data o kita." },
      { title: "5. Katumpakan ng Materyales", content: "Maaaring may technical o typographical errors ang content at maaaring baguhin anumang oras." },
      { title: "6. Mga External Link", content: "Maaaring may links sa third-party websites at hindi kami responsable sa kanilang content." },
      { title: "7. Mga Pagbabago", content: "Maaaring baguhin ng Accessively ang mga tuntuning ito anumang oras nang walang paunang abiso." },
      { title: "8. Governing Law", content: "Ang mga tuntuning ito ay pinamamahalaan ng batas ng Republika ng Pilipinas." },
      { title: "9. Contact Information", content: "Para sa mga tanong tungkol sa mga tuntuning ito, makipag-ugnayan sa:" },
    ],
    restrictionsTitle: "Sa ilalim ng lisensyang ito, hindi mo maaaring:",
    restrictions: ["Baguhin o kopyahin ang materyales", "Gamitin sa komersyal na layunin", "I-reverse engineer ang software", "Tanggalin ang copyright notices", "I-transfer o i-mirror ang materyales"],
    email: "Email:",
    website: "Website:",
    effectiveDate: "Petsa ng Pagkakabisa:",
    back: "Bumalik sa Home",
  },
  fr: {
    title: "Conditions Générales",
    sections: [
      { title: "1. Conditions", content: "En accédant à www.accessivelybpo.com, vous acceptez ces Conditions et les lois applicables." },
      { title: "2. Licence d'Utilisation", content: "L'accès temporaire aux contenus est autorisé pour un usage personnel et non commercial uniquement." },
      { title: "3. Clause de non-responsabilité", content: "Tous les contenus sont fournis \"en l'état\" sans garantie expresse ou implicite." },
      { title: "4. Limitation de Responsabilité", content: "Accessively ne peut être tenu responsable des dommages, pertes de données ou interruption d'activité." },
      { title: "5. Exactitude des Contenus", content: "Le contenu peut comporter des erreurs techniques ou typographiques et peut être mis à jour sans préavis." },
      { title: "6. Liens Tiers", content: "Nous pouvons inclure des liens externes. Nous ne sommes pas responsables de leur contenu." },
      { title: "7. Modifications", content: "Accessively peut modifier ces conditions à tout moment sans préavis." },
      { title: "8. Droit Applicable", content: "Ces conditions sont régies par les lois de la République des Philippines." },
      { title: "9. Contact", content: "Pour toute question concernant ces conditions, contactez-nous à :" },
    ],
    restrictionsTitle: "Sous cette licence, vous ne pouvez pas :",
    restrictions: ["Modifier ou copier les contenus", "Utiliser les contenus à des fins commerciales", "Tenter de décompiler le logiciel", "Supprimer les mentions de propriété", "Transférer ou miroiter les contenus"],
    email: "E-mail :",
    website: "Site web :",
    effectiveDate: "Date d'effet :",
    back: "Retour à l'Accueil",
  },
} as const;

type TermsLang = keyof typeof termsContent;

export default function TermsAndConditions() {
  const { language } = useLanguage();
  const c = termsContent[(language as TermsLang) || "en"] || termsContent.en;

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{c.title}</h1>

            <div className="prose prose-lg max-w-none">
              {c.sections.slice(0, 2).map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.title}</h2>
                  <p className={`text-gray-600 ${idx === 1 ? "mb-4" : "mb-6"}`}>{section.content}</p>
                </div>
              ))}
              <p className="text-gray-600 mb-4">{c.restrictionsTitle}</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                {c.restrictions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {c.sections.slice(2).map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.title}</h2>
                  <p className={`text-gray-600 ${section.title.includes("Contact") || section.title.includes("Contacto") || section.title.includes("Contact") || section.title.includes("联系我们") || section.title.includes("Makipag") ? "mb-4" : "mb-6"}`}>{section.content}</p>
                </div>
              ))}

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-900 font-medium">{c.email}</span>
                  <span className="text-gray-600">Solutions@accessivelybpo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">{c.website}</span>
                  <span className="text-gray-600">www.accessivelybpo.com</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>{c.effectiveDate}</strong> March 23, 2026
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {c.back}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}