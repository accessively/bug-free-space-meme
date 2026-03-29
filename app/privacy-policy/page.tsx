"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";

const privacyContent = {
  en: {
    title: "Privacy Policy",
    intro:
      "Accessively values your privacy and handles personal data with care, transparency, and security. This policy explains what information we collect through www.accessivelybpo.com, why we collect it, how we use it, and what choices you have.",
    sections: [
      {
        title: "Who We Are",
        content:
          "Accessively provides outsourcing, virtual assistance, digital support, recruitment, and customer engagement services. When you contact us, submit an application, request support, or send a business inquiry through this website, Accessively acts as the party responsible for handling that information.",
      },
      {
        title: "Information We Collect",
        content:
          "We may collect information you voluntarily provide, including your name, email address, phone number, company details, job application details, inquiry content, uploaded files such as resumes or images, and any other information you choose to submit through our forms.",
      },
      {
        title: "How We Use Your Information",
        content:
          "We use submitted information to respond to inquiries, review applications, provide consultations, contact sales leads, improve our services, manage support requests, maintain business records, and protect the website from abuse, spam, and fraudulent activity.",
      },
      {
        title: "Uploaded Files and Attachments",
        content:
          "If you upload a resume, image, or other supported attachment, the file may be stored securely on our systems and may be forwarded by email to the appropriate Accessively team so your request can be reviewed and handled. Please avoid uploading unnecessary sensitive data.",
      },
      {
        title: "Consent and Legal Basis",
        content:
          "Where required, we rely on your consent before processing form submissions. In other cases, we may process information when necessary to take steps requested by you, respond to your inquiry, evaluate employment interest, operate our business, or comply with legal obligations.",
      },
      {
        title: "Cookies and Site Functionality",
        content:
          "We may use cookies and similar technologies to remember preferences, support website functionality, understand site usage, and improve performance. You can manage non-essential cookie preferences through our cookie banner, while essential cookies may still be used for site operation and security.",
      },
      {
        title: "Spam Prevention and Security",
        content:
          "We use reasonable administrative and technical safeguards to protect personal information. These safeguards may include rate limiting, form validation, anti-spam checks, restricted access, and secure handling of submitted records and email notifications. No system is completely risk-free, but we take practical steps to reduce unauthorized access, misuse, or loss.",
      },
      {
        title: "Sharing of Information",
        content:
          "We do not sell your personal information. We may share data with trusted service providers or tools only when reasonably necessary to operate the website, deliver requested communications, store submissions, or support our business operations. We may also disclose information when required by law or to protect legal rights and security.",
      },
      {
        title: "Data Retention",
        content:
          "We retain submitted information only for as long as reasonably necessary for the purpose it was collected, including communications, recruitment review, client follow-up, legal compliance, dispute resolution, record keeping, and fraud prevention. Retention periods may vary based on the type of request and applicable legal requirements.",
      },
      {
        title: "Your Rights and Choices",
        content:
          "Subject to applicable law, you may request access to, correction of, or deletion of personal data we hold about you. You may also object to certain processing or withdraw consent where consent was the basis for processing. To make a request, contact us using the details below.",
      },
      {
        title: "Third-Party Links",
        content:
          "Our website may link to third-party websites, platforms, or social media services. We do not control those third parties and are not responsible for their privacy practices. You should review their policies separately before sharing personal information with them.",
      },
      {
        title: "Policy Updates",
        content:
          "We may update this Privacy Policy from time to time to reflect website changes, service updates, legal requirements, or operational improvements. When we make material updates, we will revise the effective date on this page.",
      },
      {
        title: "Contact Us",
        content:
          "If you have questions about this Privacy Policy or how Accessively handles personal information, contact us using the details below.",
      },
    ],
    email: "Email:",
    website: "Website:",
    effectiveDate: "Effective Date:",
    back: "Back to Home",
  },
  es: {
    title: "Política de Privacidad",
    intro:
      "Tu privacidad es importante para nosotros. La política de Accessively es respetar tu privacidad con respecto a cualquier información que podamos recopilar en nuestro sitio web, www.accessivelybpo.com, y otras plataformas que poseemos y operamos.",
    sections: [
      { title: "Información que Recopilamos", content: "Solo solicitamos información personal cuando es necesaria para brindarte nuestros servicios. Recopilamos información de manera justa y legal, con tu conocimiento y consentimiento." },
      { title: "Cookies y Seguimiento", content: "Usamos cookies y tecnologías similares para recordar preferencias, comprender el tráfico del sitio y mejorar la experiencia de navegación. Puedes aceptar o rechazar las cookies no esenciales desde nuestro banner de cookies. Las cookies esenciales pueden seguir utilizándose para mantener el sitio seguro y funcionando correctamente." },
      { title: "Retención de Datos", content: "Conservamos la información recopilada solo durante el tiempo necesario para prestar los servicios solicitados. Protegemos los datos con métodos comercialmente aceptables para evitar pérdida o acceso no autorizado." },
      { title: "Compartición de Información", content: "No compartimos información personal identificable públicamente ni con terceros, excepto cuando lo exige la ley o es necesario para brindar nuestros servicios." },
      { title: "Enlaces Externos", content: "Nuestro sitio puede contener enlaces a sitios externos no operados por nosotros. No tenemos control sobre su contenido ni prácticas." },
      { title: "Tus Derechos", content: "Eres libre de rechazar nuestra solicitud de información personal, entendiendo que podríamos no poder brindar algunos servicios sin ella." },
      { title: "Aceptación de Términos", content: "El uso continuo de nuestro sitio se considerará como aceptación de nuestras prácticas de privacidad e información personal." },
      { title: "Contáctanos", content: "Si tienes preguntas sobre cómo manejamos los datos, puedes contactarnos en:" },
    ],
    email: "Correo:",
    website: "Sitio web:",
    effectiveDate: "Fecha de vigencia:",
    back: "Volver al Inicio",
  },
  zh: {
    title: "隐私政策",
    intro:
      "您的隐私对我们非常重要。Accessively 的政策是尊重您在我们网站 www.accessivelybpo.com 及我们拥有和运营的其他平台上的隐私。",
    sections: [
      { title: "我们收集的信息", content: "我们仅在提供服务所必需时收集个人信息，并会告知收集原因及用途。" },
      { title: "Cookie 与跟踪", content: "我们使用 Cookie 和类似技术来记住偏好、了解网站流量并改善浏览体验。您可以通过 Cookie 横幅接受或拒绝非必要 Cookie。为保证网站安全和正常运行，必要 Cookie 仍可能被使用。" },
      { title: "数据保留", content: "我们仅在提供服务所需期间保留数据，并使用合理方式防止丢失或未经授权访问。" },
      { title: "信息共享", content: "除法律要求或服务必要外，我们不会公开或向第三方共享可识别个人信息。" },
      { title: "外部链接", content: "网站可能包含外部链接。我们无法控制这些网站的内容和隐私实践。" },
      { title: "您的权利", content: "您可以拒绝提供个人信息，但我们可能无法提供部分服务。" },
      { title: "条款接受", content: "继续使用本网站即表示您接受我们的隐私做法。" },
      { title: "联系我们", content: "如对数据处理有疑问，可通过以下方式联系我们：" },
    ],
    email: "邮箱：",
    website: "网站：",
    effectiveDate: "生效日期：",
    back: "返回首页",
  },
  tl: {
    title: "Patakaran sa Privacy",
    intro:
      "Mahalaga sa amin ang iyong privacy. Patakaran ng Accessively na igalang ang iyong privacy sa anumang impormasyong nakokolekta sa aming website na www.accessivelybpo.com at iba pang platform na aming pinapatakbo.",
    sections: [
      { title: "Impormasyong Kinokolekta", content: "Humihingi lamang kami ng personal na impormasyon kapag kinakailangan para maibigay ang aming serbisyo, at may iyong pahintulot." },
      { title: "Cookies at Pagsubaybay", content: "Gumagamit kami ng cookies at kahalintulad na teknolohiya para tandaan ang preferences, maunawaan ang traffic ng site, at mapaganda ang browsing experience. Maaari mong tanggapin o tanggihan ang mga hindi kinakailangang cookie sa aming cookie banner. Ang mga essential cookie ay maaari pa ring gamitin upang mapanatiling secure at gumagana nang tama ang website." },
      { title: "Pagpapanatili ng Data", content: "Iniingatan lang namin ang data hangga't kailangan sa serbisyo at pinoprotektahan ito laban sa pagkawala o hindi awtorisadong access." },
      { title: "Pagbabahagi ng Impormasyon", content: "Hindi namin ibinabahagi ang personal na impormasyon maliban kung kinakailangan ng batas o ng serbisyo." },
      { title: "External Links", content: "Maaaring may links sa external websites. Wala kaming kontrol sa kanilang content at privacy practices." },
      { title: "Iyong Mga Karapatan", content: "Maaari kang tumanggi sa pagbibigay ng impormasyon, ngunit maaaring hindi maibigay ang ilang serbisyo." },
      { title: "Pagtanggap ng Terms", content: "Ang patuloy na paggamit ng website ay nangangahulugang tinatanggap mo ang aming privacy practices." },
      { title: "Makipag-ugnayan", content: "Kung may tanong ka tungkol sa paghawak namin ng data, makipag-ugnayan sa:" },
    ],
    email: "Email:",
    website: "Website:",
    effectiveDate: "Petsa ng Pagkakabisa:",
    back: "Bumalik sa Home",
  },
  fr: {
    title: "Politique de Confidentialité",
    intro:
      "Votre vie privée est importante pour nous. La politique d'Accessively est de respecter votre confidentialité concernant les informations collectées sur www.accessivelybpo.com et nos autres plateformes.",
    sections: [
      { title: "Informations Collectées", content: "Nous demandons des informations personnelles uniquement lorsque cela est nécessaire pour fournir nos services, avec votre consentement." },
      { title: "Cookies et Suivi", content: "Nous utilisons des cookies et des technologies similaires pour mémoriser les préférences, comprendre le trafic du site et améliorer l'expérience de navigation. Vous pouvez accepter ou refuser les cookies non essentiels depuis notre bannière cookies. Des cookies essentiels peuvent néanmoins être utilisés pour assurer la sécurité et le bon fonctionnement du site." },
      { title: "Conservation des Données", content: "Nous conservons les données uniquement pendant la durée nécessaire au service et les protégeons contre l'accès non autorisé." },
      { title: "Partage des Informations", content: "Nous ne partageons pas d'informations personnelles identifiables, sauf obligation légale ou nécessité de service." },
      { title: "Liens Externes", content: "Notre site peut contenir des liens externes. Nous ne contrôlons pas leur contenu ni leurs pratiques de confidentialité." },
      { title: "Vos Droits", content: "Vous pouvez refuser de fournir certaines informations, mais certains services peuvent ne pas être disponibles." },
      { title: "Acceptation des Conditions", content: "Votre utilisation continue du site vaut acceptation de nos pratiques de confidentialité." },
      { title: "Contactez-nous", content: "Pour toute question sur la gestion des données, contactez-nous à :" },
    ],
    email: "E-mail :",
    website: "Site web :",
    effectiveDate: "Date d'effet :",
    back: "Retour à l'Accueil",
  },
} as const;

type PrivacyLang = keyof typeof privacyContent;

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const c = privacyContent[(language as PrivacyLang) || "en"] || privacyContent.en;

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{c.title}</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                {c.intro}
              </p>

              {c.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.content}</p>
                </div>
              ))}

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-900 font-medium">{c.email}</span>
                  <span className="text-gray-600">solutions@accessivelybpo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">{c.website}</span>
                  <span className="text-gray-600">www.accessivelybpo.com</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>{c.effectiveDate}</strong> March 29, 2026
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