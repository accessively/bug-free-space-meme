"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";
import OfficesSection from "./components/OfficesSection";

const benefitsComparisonItems = [
  {
    title: "Expert Talent Pool",
    accessively: "Accessively recruits highly specialized professionals.",
    others: "Other agencies often hire generalists.",
  },
  {
    title: "Cost Efficiency",
    accessively: "Accessively delivers maximum ROI with competitive pricing.",
    others: "Others may charge more for similar results.",
  },
  {
    title: "Customized Solutions",
    accessively: "Accessively tailors services to each client.",
    others: "Others use a one-size-fits-all model.",
  },
  {
    title: "24/7 Availability",
    accessively: "Accessively provides round-the-clock service.",
    others: "Many agencies work limited hours.",
  },
  {
    title: "Multi-Industry Experience",
    accessively: "Accessively serves diverse sectors.",
    others: "Competitors may have narrow focus.",
  },
  {
    title: "Advanced Technology",
    accessively: "Accessively integrates AI, automation, and analytics.",
    others: "Other agencies rely on outdated systems.",
  },
  {
    title: "Scalable Teams",
    accessively: "Accessively allows seamless expansion.",
    others: "Others struggle with rapid scaling.",
  },
  {
    title: "High-Quality Standards",
    accessively: "Accessively maintains strict QA.",
    others: "Competitors often have inconsistent service quality.",
  },
  {
    title: "Data Security & Compliance",
    accessively: "Accessively follows top security protocols.",
    others: "Other agencies may have weaker safeguards.",
  },
  {
    title: "Multilingual Support",
    accessively: "Accessively provides global communication capabilities.",
    others: "Others often lack language diversity.",
  },
  {
    title: "Fast Onboarding",
    accessively: "Accessively gets teams ready quickly.",
    others: "Others have slower setup processes.",
  },
  {
    title: "Transparent Reporting",
    accessively: "Accessively offers real-time updates.",
    others: "Others provide limited visibility.",
  },
  {
    title: "Flexible Engagement Models",
    accessively: "Accessively supports hourly, project-based, and dedicated teams.",
    others: "Other agencies limit options.",
  },
  {
    title: "Innovation-Driven",
    accessively: "Accessively continuously adopts new technologies.",
    others: "Others often stick to traditional methods.",
  },
  {
    title: "Client-Centric Approach",
    accessively: "Accessively prioritizes satisfaction.",
    others: "Competitors may focus on completing tasks only.",
  },
  {
    title: "Streamlined Communication",
    accessively: "Accessively ensures clarity and responsiveness.",
    others: "Others can have delayed or unclear communication.",
  },
  {
    title: "Performance Tracking",
    accessively: "Accessively tracks KPIs rigorously.",
    others: "Others provide minimal metrics.",
  },
  {
    title: "Proactive Problem Solving",
    accessively: "Accessively anticipates challenges.",
    others: "Others react slowly.",
  },
  {
    title: "Certified Professionals",
    accessively: "Accessively ensures verified expertise.",
    others: "Other agencies may not verify qualifications.",
  },
  {
    title: "Experienced Leadership",
    accessively: "Accessively’s managers have BPO industry experience.",
    others: "Others may lack hands-on leadership.",
  },
  {
    title: "Time Zone Flexibility",
    accessively: "Accessively works across global time zones.",
    others: "Others may be limited regionally.",
  },
  {
    title: "Modern CRM Systems",
    accessively: "Accessively uses advanced tools.",
    others: "Competitors rely on outdated or manual systems.",
  },
  {
    title: "Employee Retention",
    accessively: "Accessively maintains a stable workforce.",
    others: "High turnover is common elsewhere.",
  },
  {
    title: "Continuous Training",
    accessively: "Accessively invests in upskilling.",
    others: "Other agencies may not provide regular training.",
  },
  {
    title: "Proven Track Record",
    accessively: "Accessively has satisfied global clients.",
    others: "Many agencies lack extensive references.",
  },
  {
    title: "Agile Project Management",
    accessively: "Accessively adapts to changing needs.",
    others: "Others follow rigid workflows.",
  },
  {
    title: "Operational Efficiency",
    accessively: "Accessively maximizes productivity.",
    others: "Competitors often waste resources.",
  },
  {
    title: "Strict Compliance",
    accessively: "Accessively follows industry regulations.",
    others: "Other agencies may have gaps in compliance.",
  },
  {
    title: "Cultural Understanding",
    accessively: "Accessively trains teams to align with client cultures.",
    others: "Others may overlook this.",
  },
  {
    title: "Seamless Integration",
    accessively: "Accessively works smoothly with existing systems.",
    others: "Others may disrupt operations.",
  },
  {
    title: "AI-Enhanced Services",
    accessively: "Accessively automates repetitive tasks.",
    others: "Competitors rely mostly on manual labor.",
  },
  {
    title: "Transparent Pricing",
    accessively: "Accessively ensures no hidden fees.",
    others: "Others can have unpredictable costs.",
  },
  {
    title: "Dedicated Account Managers",
    accessively: "Accessively provides personalized attention.",
    others: "Others give generic support.",
  },
  {
    title: "Reliable Infrastructure",
    accessively: "Accessively invests in modern hardware and software.",
    others: "Other agencies may have weaker setups.",
  },
  {
    title: "Flexible Contracts",
    accessively: "Accessively allows adaptable agreements.",
    others: "Competitors often have rigid terms.",
  },
  {
    title: "Focus on Core Business",
    accessively: "Accessively frees clients to focus on growth.",
    others: "Others require more management involvement.",
  },
  {
    title: "Business Continuity Plans",
    accessively: "Accessively ensures uninterrupted service.",
    others: "Other agencies may lack backups.",
  },
  {
    title: "Client Experience Priority",
    accessively: "Accessively emphasizes satisfaction.",
    others: "Competitors focus on completing work only.",
  },
  {
    title: "Rapid Issue Resolution",
    accessively: "Accessively addresses problems quickly.",
    others: "Others respond slower.",
  },
  {
    title: "Global Client Reach",
    accessively: "Accessively serves worldwide clients.",
    others: "Many agencies have limited geographic scope.",
  },
  {
    title: "Proven ROI",
    accessively: "Accessively delivers measurable results.",
    others: "Competitors’ ROI can be inconsistent.",
  },
  {
    title: "Ethical Business Practices",
    accessively: "Accessively operates transparently.",
    others: "Some agencies cut corners.",
  },
  {
    title: "Creative Problem Solving",
    accessively: "Accessively provides innovative solutions.",
    others: "Others stick to standard approaches.",
  },
  {
    title: "Specialized Support Teams",
    accessively: "Accessively assigns experts per function.",
    others: "Competitors often use generalists.",
  },
  {
    title: "Long-Term Partnerships",
    accessively: "Accessively builds enduring relationships.",
    others: "Others prioritize short-term contracts.",
  },
  {
    title: "Employee Engagement",
    accessively: "Accessively motivates staff for better results.",
    others: "Other agencies may have disengaged employees.",
  },
  {
    title: "Continuous Feedback Loops",
    accessively: "Accessively improves via client feedback.",
    others: "Competitors rarely optimize continuously.",
  },
  {
    title: "Data-Driven Insights",
    accessively: "Accessively provides analytics for growth.",
    others: "Others operate with minimal insight.",
  },
  {
    title: "Adaptability to Change",
    accessively: "Accessively quickly adjusts to trends or emergencies.",
    others: "Competitors may be slow to pivot.",
  },
  {
    title: "Your Growth Partner",
    accessively: "Accessively goes beyond outsourcing to actively support business success.",
    others: "Other agencies only execute tasks.",
  },
] as const;

const performanceTimeline = [
  "Aug 2025",
  "Sep 2025",
  "Oct 2025",
  "Nov 2025",
  "Dec 2025",
  "Jan 2026",
] as const;

const performanceMetricData = {
  members: {
    label: "Team members/staffs",
    values: [3, 6, 9.7, 12, 20, 28],
    lineStart: "#6366f1",
    lineEnd: "#a855f7",
    dotColor: "#c4b5fd",
  },
  retention: {
    label: "Client retention rate",
    values: [25, 45, 65, 76, 70, 84],
    lineStart: "#2563eb",
    lineEnd: "#14b8a6",
    dotColor: "#93c5fd",
  },
  delivery: {
    label: "Project delivery success rate",
    values: [67, 76, 72, 84, 87, 97],
    lineStart: "#8b5cf6",
    lineEnd: "#ec4899",
    dotColor: "#ddd6fe",
  },
} as const;

type PerformanceMetricKey = keyof typeof performanceMetricData;

const effectivenessMilestones = [
  { period: "Sep 2025", label: "New client onboarding system" },
  { period: "Dec 2025", label: "Process optimization implemented" },
  { period: "Feb 2026", label: "AI-assisted delivery rollout" },
] as const;

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showOriginStory, setShowOriginStory] = useState(false);
  const [expandedCertification, setExpandedCertification] = useState<string | null>(null);
  const [showBenefitsComparison, setShowBenefitsComparison] = useState(false);
  const [selectedPerformanceMetrics, setSelectedPerformanceMetrics] = useState<PerformanceMetricKey[]>(["members", "retention", "delivery"]);
  const { language } = useLanguage();
  const t = translations[language];

  const originStoryParagraphs = [
    "Back in July 2025, everything was uncertain, but for Joshua, that uncertainty felt more like an open door than a dead end.",
    "He was young, driven, and restless. While others around him were still figuring things out, Joshua had already decided he wanted to build something of his own. Not just a business, but something meaningful-something that could grow beyond him.",
    "It started quietly. Joshua joined a small group of like-minded individuals online, people from different places, backgrounds, and age groups. At first, it was just conversations-ideas tossed around, questions asked, possibilities imagined.",
    "That is where he met Denver.",
    "There was something different about Denver. The way he analyzed ideas and broke things down made collaboration feel natural. One day, Joshua finally shared the concept he had been developing-a rough but intentional vision of a platform that could help people access opportunities more easily. Something scalable. Something impactful.",
    "Denver paused.",
    "Then he said something unexpected: he had been thinking about something similar.",
    "That moment turned alignment into action.",
    "What started as coincidence became collaboration. They began building-late nights, long calls, constant refinement. Joshua led the direction, shaping the bigger picture, while Denver helped strengthen and execute the ideas into something tangible.",
    "It was not easy. There were doubts, setbacks, and moments where things did not make sense. But they kept moving forward.",
    "Somewhere along that journey, Joshua met Jake.",
    "Jake stood out in a different way-curious, observant, and quietly ambitious. He often approached Joshua for advice, asking about business, growth, and direction. Joshua shared what he knew, offering guidance not just in answers, but in how to think.",
    "At first, Joshua kept his deeper plans private. What he and Denver were building still felt early, something not yet ready to be exposed. So instead, he focused on mentoring Jake-helping him sharpen his ideas and perspective.",
    "But Jake was persistent.",
    "He kept returning with new ideas, sharper questions, and clearer thinking each time. What started as mentorship slowly evolved into mutual understanding. Joshua began to see not just potential, but alignment.",
    "And eventually, he made a decision.",
    "He opened the door.",
    "Joshua shared the vision-what he and Denver had been building, and what it could become. Jake did not just understand it. He believed in it.",
    "That belief changed the trajectory.",
    "With Jake stepping in, the vision gained another layer-structure, leadership, and a shared sense of direction that pushed everything forward. What once felt like an idea between a few people began to take shape as something real.",
    "That was when Accessively truly began.",
    "It was no longer just a concept. It became a mission-driven by vision, strengthened by execution, and carried by people who chose to believe in it.",
    "What made Accessively different was not just the idea, but how it came together. Three individuals who were never meant to meet, yet found alignment in the same goal.",
    "They came from different places, different experiences, and different stages of life.",
    "But somehow, it worked.",
    "Because at the center of it all was a shared belief-led by vision, supported by action, and built through trust.",
    "Accessively did not start with a perfect plan.",
    "It started with strangers.",
    "Strangers who chose to build something that mattered."
  ];

  const localizedContent = {
    en: {
      aboutStats: { founded: "Founded", teamMembers: "Team Members", projects: "Projects", satisfaction: "Project Delivery Success Rate" },
      contactPlaceholders: {
        firstName: "John",
        lastName: "Doe",
        email: "john@company.com",
        company: "Your Company",
        message: "Describe your needs and goals...",
      },
      footerTagline:
        "Smart Solutions, Accessible Results. Elevating businesses through AI-powered virtual assistance and digital transformation.",
      founders: [
        {
          role: "Founder & CEO (Chief Executive Officer)",
          statement:
            "I founded this agency to bring Filipino talent to the world, with a focus on trust, quality, and long-term client success.",
        },
        {
          role: "Co-Founder & COO (Chief Operating Officer)",
          statement:
            "Leads the team at the highest level, serving as the backbone and visionary behind our strategy, systems, and overall success.",
        },
        {
          role: "Co-Founder & Head of Operations",
          statement:
            "Manages operations and team execution to ensure consistent, high-quality delivery and clear client alignment.",
        },
      ],
      testimonialQuotes: [
        "We were handling around 1,200 support tickets a month with a small in-house team. Accessively helped us set up triage workflows and live chat coverage, and our first-response time dropped from 11 hours to just under 3. Customer complaints are down and our team finally has breathing room.",
        "Our outbound process was inconsistent, and our pipeline showed it. After Accessively rebuilt our lead qualification and follow-up sequence, our qualified meetings increased by 42% over one quarter. The biggest win was that our sales reps now spend time on real opportunities instead of cold lists.",
        "Before working with Accessively, we had strong demand but messy operations. They documented our internal workflows, flagged duplicate steps, and helped us implement a weekly KPI dashboard. Within two months, our project handoff delays dropped by roughly 35%.",
        "We needed a client portal that looked professional and was easy for non-technical users. Accessively delivered a clean build, migrated our old data, and fixed issues quickly during rollout. Portal usage now sits at 78% of active clients, up from 24% on our old system.",
        "Our visual branding was inconsistent across campaigns, decks, and social channels. Accessively created a practical brand kit and reusable templates our team could actually follow. We launched our winter campaign on time, and click-through rates improved by 19% compared with the previous quarter.",
        "We brought Accessively in to review costs after a year of rapid growth. They spotted vendor overlap and proposed a phased consolidation plan that we could execute without disruptions. We trimmed operating expenses by just over 12% in four months while keeping service levels steady.",
        "We had content going out regularly, but it wasn't tied to revenue goals. Accessively helped us rework our messaging by audience and built a monthly content calendar aligned with launches. Engagement improved modestly at first, then accelerated, and inbound demo requests are now noticeably more consistent.",
        "The project itself was complex: three departments, multiple stakeholders, and a strict go-live date. Accessively kept communication structured with weekly summaries, risk logs, and clear ownership. We launched two weeks before deadline, and post-launch support was as strong as implementation.",
      ],
      certifications: {
        title: "Certifications & Expertise",
        intro: "Our commitment to professional excellence and continuous innovation",
        yearReceived: "Year Received",
        date: "Date",
        issuedBy: "Issued By",
        why: "Why We Earned This:",
        details: "Details:",
      },
      benefitsComparison: {
        title: "Benefits of Accessively",
        subtitle: "A detailed side-by-side comparison of how Accessively performs against typical agencies.",
        expand: "Show comparison",
        collapse: "Hide comparison",
        accessivelyLabel: "Accessively",
        othersLabel: "Other Agencies",
      },
      homeUi: {
        comparisonArea: "Comparison Area",
        performanceChartTitle: "Accessively Performance Growth Over Time",
        performanceChartDescription: "Click categories to compare individual performance from August 2025 to January 2026. Click a legend item or line to focus on one metric.",
        performanceMetricLabels: {
          members: "Team members and staff",
          retention: "Client retention rate",
          delivery: "Project delivery success rate",
        },
        originStoryEyebrow: "Origin Story",
        originStoryTitle: "How We Started",
        originStoryDescription: "Read the story of how Accessively took shape through conversation, persistence, and a shared belief in building something meaningful.",
        closeStory: "Close Story",
        closeStoryModalLabel: "Close story modal",
      },
    },
    es: {
      aboutStats: { founded: "Fundado", teamMembers: "Miembros del Equipo", projects: "Proyectos", satisfaction: "Tasa de éxito en la entrega de proyectos" },
      contactPlaceholders: { firstName: "Juan", lastName: "Pérez", email: "juan@empresa.com", company: "Tu Empresa", message: "Describe tus necesidades y objetivos..." },
      footerTagline:
        "Soluciones inteligentes, resultados accesibles. Impulsamos negocios con asistencia virtual y transformación digital con IA.",
      founders: [
        { role: "Fundador", statement: "Fundé esta agencia para llevar el talento filipino al mundo, con enfoque en confianza, calidad y éxito a largo plazo." },
        { role: "Cofundador", statement: "Como cofundador, fortalezco nuestra excelencia de servicio y eficiencia para que cada proyecto sea una victoria estratégica." },
        { role: "Cofundador", statement: "Lidero equipo y operaciones para entregar resultados rápidos y confiables con comunicación sólida con los clientes." },
      ],
      testimonialQuotes: [
        "Accessively transformó nuestras operaciones de servicio al cliente. Sus asistentes virtuales con IA redujeron el tiempo de respuesta en un 75%.",
        "La automatización de marketing y soporte de ventas nos ayudó a aumentar los leads calificados en un 150%.",
        "La consultoría empresarial de Accessively nos ayudó a optimizar operaciones y aumentar la eficiencia en un 40%.",
        "Trabajar con Accessively fue una experiencia fluida. Su equipo web aumentó nuestras conversiones en un 85%.",
        "Su servicio de diseño gráfico superó nuestras expectativas y reflejó perfectamente nuestra visión de marca.",
        "Sus consultores aportaron estrategias que redujeron costos en un 30% y mejoraron la calidad del servicio.",
        "La estrategia de contenido y redes sociales elevó nuestra interacción en un 200%.",
        "Desde la consulta inicial hasta la entrega final, Accessively mostró gran profesionalismo y compromiso.",
      ],
      certifications: {
        title: "Certificaciones y Experiencia",
        intro: "Nuestro compromiso con la excelencia profesional y la innovación continua",
        yearReceived: "Año Recibido",
        date: "Fecha",
        issuedBy: "Emitido Por",
        why: "Por qué obtuvimos esto:",
        details: "Detalles:",
      },
      benefitsComparison: {
        title: "Beneficios de Accessively",
        subtitle: "Una comparación detallada lado a lado de cómo Accessively supera a las agencias típicas.",
        expand: "Mostrar comparación",
        collapse: "Ocultar comparación",
        accessivelyLabel: "Accessively",
        othersLabel: "Otras Agencias",
      },
      homeUi: {
        comparisonArea: "Área de comparación",
        performanceChartTitle: "Crecimiento del rendimiento de Accessively a lo largo del tiempo",
        performanceChartDescription: "Haz clic en las categorías para comparar el rendimiento individual de agosto de 2025 a enero de 2026. Haz clic en una leyenda o en una línea para enfocarte en una métrica.",
        performanceMetricLabels: {
          members: "Miembros y personal del equipo",
          retention: "Tasa de retención de clientes",
          delivery: "Tasa de éxito en la entrega de proyectos",
        },
        originStoryEyebrow: "Historia de origen",
        originStoryTitle: "Cómo empezamos",
        originStoryDescription: "Lee la historia de cómo Accessively tomó forma a través de conversaciones, perseverancia y una creencia compartida en construir algo significativo.",
        closeStory: "Cerrar historia",
        closeStoryModalLabel: "Cerrar modal de historia",
      },
    },
    zh: {
      aboutStats: { founded: "成立", teamMembers: "团队成员", projects: "项目", satisfaction: "项目交付成功率" },
      contactPlaceholders: { firstName: "名", lastName: "姓", email: "name@company.com", company: "您的公司", message: "请描述您的需求和目标..." },
      footerTagline:
        "智能解决方案，可达成易获得的结果。通过人工智能虚拟助理和数字化转型提升企业。",
      founders: [
        { role: "创始人", statement: "我创立这家公司，是为了把菲律宾人才带向世界，专注于信任、质量和长期客户成功。" },
        { role: "联合创始人", statement: "作为联合创始人，我专注于服务卓越与流程效率，让每个项目都成为战略性成功。" },
        { role: "联合创始人", statement: "我负责团队与运营，确保快速可靠交付，并与客户保持高质量沟通。" },
      ],
      testimonialQuotes: [
        "Accessively 改变了我们的客服运营。AI 虚拟助理将响应时间缩短了 75%。",
        "我们获得的营销自动化与销售支持使合格线索提升了 150%。",
        "Accessively 的商业咨询帮助我们优化运营，效率提升了 40%。",
        "与 Accessively 合作非常顺畅。他们的网页开发团队使转化率提升了 85%。",
        "他们的平面设计服务超出预期，准确传达了我们的品牌愿景。",
        "他们的顾问提供了战略洞察，帮助我们降低 30% 成本并提升服务质量。",
        "他们实施的社媒与内容策略使互动率提升了 200%。",
        "从初次咨询到最终交付，Accessively 都展现了专业与投入。",
      ],
      certifications: {
        title: "认证与专业能力",
        intro: "我们对专业卓越与持续创新的承诺",
        yearReceived: "获得年份",
        date: "日期",
        issuedBy: "颁发机构",
        why: "我们为何获得此认证：",
        details: "详细信息：",
      },
      benefitsComparison: {
        title: "Accessively 的优势",
        subtitle: "详细对比 Accessively 与普通代理机构的差异。",
        expand: "显示对比",
        collapse: "隐藏对比",
        accessivelyLabel: "Accessively",
        othersLabel: "其他代理机构",
      },
      homeUi: {
        comparisonArea: "对比区域",
        performanceChartTitle: "Accessively 随时间推移的绩效增长",
        performanceChartDescription: "点击类别可比较 2025 年 8 月至 2026 年 1 月的各项表现。点击图例项目或曲线可聚焦单一指标。",
        performanceMetricLabels: {
          members: "团队成员与员工",
          retention: "客户留存率",
          delivery: "项目交付成功率",
        },
        originStoryEyebrow: "品牌起源",
        originStoryTitle: "我们如何开始",
        originStoryDescription: "了解 Accessively 如何通过对话、坚持以及共同建立有意义事业的信念逐步成形。",
        closeStory: "关闭故事",
        closeStoryModalLabel: "关闭故事弹窗",
      },
    },
    tl: {
      aboutStats: { founded: "Itinatag", teamMembers: "Mga Miyembro ng Team", projects: "Mga Proyekto", satisfaction: "Antas ng matagumpay na paghahatid ng proyekto" },
      contactPlaceholders: { firstName: "Juan", lastName: "Dela Cruz", email: "juan@kumpanya.com", company: "Iyong Kumpanya", message: "Ilarawan ang iyong pangangailangan at mga layunin..." },
      footerTagline:
        "Matalinong solusyon, abot-kayang resulta. Pinapaangat ang negosyo sa pamamagitan ng AI-powered virtual assistance at digital transformation.",
      founders: [
        { role: "Tagapagtatag", statement: "Itinatag ko ang ahensyang ito upang dalhin ang talento ng Pilipino sa mundo, na nakatuon sa tiwala, kalidad, at pangmatagalang tagumpay ng kliyente." },
        { role: "Co-Founder", statement: "Bilang co-founder, pinapahusay ko ang kalidad ng serbisyo at proseso upang maging strategic win ang bawat proyekto." },
        { role: "Co-Founder", statement: "Pinamumunuan ko ang team at operations para makapaghatid ng mabilis at maaasahang resulta na may malinaw na komunikasyon sa clients." },
      ],
      testimonialQuotes: [
        "Binago ng Accessively ang aming customer service operations at binawasan ang response time ng 75%.",
        "Nakatulong ang marketing automation at sales support para tumaas ng 150% ang qualified leads namin.",
        "Nakatulong ang business consulting ng Accessively para mapabilis ang operasyon at tumaas ng 40% ang efficiency.",
        "Napaka-smooth ng aming karanasan sa Accessively at tumaas ng 85% ang conversions namin.",
        "Lumampas sa inaasahan ang kanilang graphic design at tumugma sa aming brand vision.",
        "Nagbigay sila ng strategic insights na nagbaba ng gastos ng 30% habang pinapabuti ang kalidad ng serbisyo.",
        "Ang social media at content strategy nila ay nagtaas ng engagement namin ng 200%.",
        "Mula simula hanggang dulo, ipinakita ng Accessively ang propesyonalismo at dedikasyon.",
      ],
      certifications: {
        title: "Mga Sertipikasyon at Kadalubhasaan",
        intro: "Ang aming pangako sa propesyonal na kahusayan at tuloy-tuloy na inobasyon",
        yearReceived: "Taon ng Pagkakatanggap",
        date: "Petsa",
        issuedBy: "Inisyu Ng",
        why: "Bakit namin ito nakuha:",
        details: "Mga Detalye:",
      },
      benefitsComparison: {
        title: "Mga Benepisyo ng Accessively",
        subtitle: "Isang detalyadong paghahambing kung paano mas mahusay ang Accessively kumpara sa karaniwang agencies.",
        expand: "Ipakita ang paghahambing",
        collapse: "Itago ang paghahambing",
        accessivelyLabel: "Accessively",
        othersLabel: "Ibang Agencies",
      },
      homeUi: {
        comparisonArea: "Lugar ng paghahambing",
        performanceChartTitle: "Paglago ng performance ng Accessively sa paglipas ng panahon",
        performanceChartDescription: "I-click ang mga kategorya para ihambing ang bawat performance mula Agosto 2025 hanggang Enero 2026. I-click ang legend item o linya para tumuon sa iisang metric.",
        performanceMetricLabels: {
          members: "Mga miyembro at staff ng team",
          retention: "Antas ng pagpapanatili ng kliyente",
          delivery: "Antas ng matagumpay na paghahatid ng proyekto",
        },
        originStoryEyebrow: "Pinagmulan ng kuwento",
        originStoryTitle: "Paano Kami Nagsimula",
        originStoryDescription: "Basahin kung paano nabuo ang Accessively sa pamamagitan ng usapan, pagpupursigi, at iisang paniniwala sa pagbuo ng isang bagay na mahalaga.",
        closeStory: "Isara ang kuwento",
        closeStoryModalLabel: "Isara ang modal ng kuwento",
      },
    },
    fr: {
      aboutStats: { founded: "Fondé", teamMembers: "Membres de l'équipe", projects: "Projets", satisfaction: "Taux de réussite de livraison des projets" },
      contactPlaceholders: { firstName: "Jean", lastName: "Dupont", email: "jean@entreprise.com", company: "Votre entreprise", message: "Décrivez vos besoins et vos objectifs..." },
      footerTagline:
        "Solutions intelligentes, résultats accessibles. Nous aidons les entreprises grâce à l'assistance virtuelle alimentée par l'IA et la transformation numérique.",
      founders: [
        { role: "Fondateur", statement: "J'ai créé cette agence pour connecter le talent philippin au monde, avec un accent sur la confiance, la qualité et la réussite client à long terme." },
        { role: "Co-fondateur", statement: "En tant que co-fondateur, je structure notre excellence de service et notre efficacité afin que chaque projet soit une réussite stratégique." },
        { role: "Co-fondateur", statement: "Je dirige l'équipe et les opérations pour livrer rapidement des résultats fiables avec une communication client solide." },
      ],
      testimonialQuotes: [
        "Accessively a transformé nos opérations de support client et réduit le temps de réponse de 75%.",
        "L'automatisation marketing et le support commercial ont augmenté nos prospects qualifiés de 150%.",
        "Les services de conseil d'Accessively nous ont aidés à optimiser les opérations et à gagner 40% d'efficacité.",
        "Travailler avec Accessively a été fluide. Leur équipe web a augmenté nos conversions de 85%.",
        "Leur service de design graphique a dépassé nos attentes et reflété notre vision de marque.",
        "Leurs consultants nous ont aidés à réduire nos coûts de 30% tout en améliorant la qualité du service.",
        "Leur stratégie social media et contenu a augmenté notre engagement de 200%.",
        "De la consultation initiale à la livraison finale, Accessively a démontré professionnalisme et engagement.",
      ],
      certifications: {
        title: "Certifications et Expertise",
        intro: "Notre engagement envers l'excellence professionnelle et l'innovation continue",
        yearReceived: "Année d'obtention",
        date: "Date",
        issuedBy: "Délivré Par",
        why: "Pourquoi nous l'avons obtenue :",
        details: "Détails :",
      },
      benefitsComparison: {
        title: "Les Avantages d’Accessively",
        subtitle: "Une comparaison détaillée montrant comment Accessively se démarque des agences classiques.",
        expand: "Afficher la comparaison",
        collapse: "Masquer la comparaison",
        accessivelyLabel: "Accessively",
        othersLabel: "Autres Agences",
      },
      homeUi: {
        comparisonArea: "Zone de comparaison",
        performanceChartTitle: "Croissance des performances d'Accessively dans le temps",
        performanceChartDescription: "Cliquez sur les catégories pour comparer les performances entre août 2025 et janvier 2026. Cliquez sur un élément de légende ou une courbe pour vous concentrer sur une seule métrique.",
        performanceMetricLabels: {
          members: "Membres et personnel de l'équipe",
          retention: "Taux de rétention des clients",
          delivery: "Taux de réussite de livraison des projets",
        },
        originStoryEyebrow: "Histoire d'origine",
        originStoryTitle: "Comment nous avons commencé",
        originStoryDescription: "Découvrez comment Accessively a pris forme grâce aux échanges, à la persévérance et à une conviction partagée de construire quelque chose d'utile.",
        closeStory: "Fermer l'histoire",
        closeStoryModalLabel: "Fermer la fenêtre de l'histoire",
      },
    },
  };

  const locale = localizedContent[language] || localizedContent.en;
  const performanceMetricLabels = locale.homeUi.performanceMetricLabels as Record<PerformanceMetricKey, string>;

  type CertificationCard = {
    title: string;
    yearReceived?: string;
    date: string;
    issuedBy: string;
    why: string;
    details: string;
  };

  type CertificationCardKey =
    | "ai"
    | "marketing"
    | "customer"
    | "fullstack"
    | "leadership"
    | "security"
    | "analytics";

  const certificationCardsByLanguage: Record<string, Record<CertificationCardKey, CertificationCard>> = {
    en: {
      ai: {
        title: "Certification of Excellence Video Editing Services",
        yearReceived: "2025",
        date: "October 23, 2025",
        issuedBy: "Academy Leaders",
        why: "Recognition of outstanding video editing services for the Accessibility Program.",
        details:
          "This certificate is proudly awarded in recognition of outstanding video editing services rendered for the Accessibility Program held on October 23, 2025. Presented by Academy Leaders, this acknowledgment highlights the creativity, technical skill, and dedication demonstrated in producing high-quality visual content that effectively supported the program's mission of inclusivity and engagement. Your contribution played a vital role in enhancing the overall impact of the event, ensuring that the message of accessibility reached a wider audience in a clear and compelling manner. Your professionalism and commitment to excellence are truly commendable. Awarded this 23rd day of October, 2025.",
      },
      marketing: {
        title: "Certification of Excellence Graphic Design Services",
        yearReceived: "2025",
        date: "September 9, 2025",
        issuedBy: "Apponix Academy",
        why: "Recognition of exceptional graphic design services.",
        details:
          "This certificate is proudly awarded in recognition of exceptional Graphic Design Services rendered on September 9, 2025. Presented by Apponix Academy, this acknowledgment highlights the creativity, innovation, and attention to detail demonstrated in delivering high-quality visual designs. Your work has significantly contributed to enhancing visual communication and effectively representing ideas through compelling and professional design. Your dedication and artistic excellence are truly commendable. Awarded this 9th day of September, 2025.",
      },
      customer: {
        title: "HIPAA Compliance Training",
        yearReceived: "2026",
        date: "March 28, 2026",
        issuedBy: "Training.us / Carl B. Johnson (for Accessively)",
        why: "Recognition of successful HIPAA Compliance Training completion.",
        details:
          "This certificate is proudly awarded in recognition of the successful completion of HIPAA Compliance Training provided by Training.us. This certification confirms that the recipient has demonstrated a clear understanding of the standards and requirements for protecting sensitive health information in accordance with HIPAA regulations. Conducted on March 28, 2026, and presented by Carl B. Johnson for Accessively, this training reflects a commitment to maintaining confidentiality, integrity, and security in handling protected health information. Certificate ID: HIPAA-0049547. Awarded this 28th day of March, 2026.",
      },
      fullstack: {
        title: "IT Web Designing and Support",
        yearReceived: "2026",
        date: "November 19, 2026",
        issuedBy: "CertifyX",
        why: "Recognition of successfully mastering IT Web Designing and Support.",
        details:
          "This certificate is proudly awarded to Accessively in recognition of successfully mastering IT Web Designing and Support. This achievement includes proficiency in website creation, UI/UX fundamentals, and technical troubleshooting. Certified by CertifyX, this distinction reflects readiness to build, optimize, and support modern digital platforms with efficiency and innovation. The recipient has demonstrated strong technical knowledge and the ability to deliver effective digital solutions. Certificate ID: CTFX-2762391-28163. Awarded this 19th day of November, 2026.",
      },
      leadership: {
        title: "Cybersecurity Awareness (Cybersecurity Terminology & Information Security Awareness)",
        yearReceived: "Not specified",
        date: "Not specified",
        issuedBy: "LinkedIn Learning",
        why: "Recognition of successful completion of Cybersecurity Awareness training.",
        details:
          "This certificate is proudly awarded in recognition of the successful completion of Cybersecurity Awareness training, including Cybersecurity Terminology and Information Security Awareness, provided by LinkedIn Learning. This certification demonstrates a strong understanding of essential cybersecurity concepts, key terminology, and best practices for maintaining information security in today's digital environment. The recipient has shown commitment to protecting data and supporting secure systems. Certificate ID: 8dfladlc|35bled52/71462c167d38e8029275549a3f09462ebe6c4c395c93d5. Awarded upon completion.",
      },
      security: {
        title: "Customer Service (Managing Customer Feedback & Feedback Management)",
        yearReceived: "Not specified",
        date: "Not specified",
        issuedBy: "LinkedIn Learning",
        why: "Recognition of successful completion of Customer Service training.",
        details:
          "This certificate is proudly awarded in recognition of the successful completion of Customer Service training, including Customer Service: Managing Customer Feedback and Feedback Management, provided by LinkedIn Learning. This certification demonstrates a strong understanding of effective communication, customer engagement, and strategies for managing and responding to customer feedback. The recipient has shown the ability to enhance customer satisfaction and contribute to positive service experiences. Certificate ID: 8dffadlcf35bled5271462c167d388029275549a3f09462ebe6c4c395c93d5. Awarded upon completion.",
      },
      analytics: {
        title: "Medical Virtual Assistant Online Masterclass",
        yearReceived: "2025",
        date: "June 20, 2025",
        issuedBy: "Sync2VA Training",
        why: "Recognition of successful completion of the Medical Virtual Assistant Online Masterclass.",
        details:
          "Certificate of Completion. This certificate is proudly presented to Jake Manila as proof of successfully completing the Medical Virtual Assistant Online Masterclass provided by Sync2VA Training. This intensive program consisted of 40 hours of training over a 4-week period, equipping the participant with essential knowledge and skills required for medical virtual assistance. This achievement reflects dedication, competence, and readiness to perform in a professional healthcare support environment. Given this 20th day of June, 2025.",
      },
    },
    es: {
      ai: {
        title: "IA y Aprendizaje Automático",
        date: "Octubre 2025",
        issuedBy: "Programa Certificado de IA y Tecnología de Datos",
        why: "Para mantenernos a la vanguardia e integrar automatización inteligente en las operaciones empresariales.",
        details: "Esta certificación fortalece nuestra capacidad para optimizar procesos, analizar datos y aplicar soluciones inteligentes para el crecimiento del cliente.",
      },
      marketing: {
        title: "Marketing Digital",
        date: "Diciembre 2025",
        issuedBy: "Programa Avanzado de Certificación en Marketing Digital",
        why: "Para ofrecer campañas de alto rendimiento y crecimiento medible para nuestros clientes.",
        details: "Refuerza nuestra experiencia en generación de leads, optimización de conversión y posicionamiento de marca con estrategias modernas y escalables.",
      },
      customer: {
        title: "Experiencia del Cliente",
        date: "Febrero 2026",
        issuedBy: "Programa de Excelencia en Experiencia y Servicio al Cliente",
        why: "Para asegurar interacciones consistentes y de alta calidad con cada cliente.",
        details: "Demuestra nuestro compromiso con un soporte profesional, empático y orientado a soluciones que mejora retención y lealtad.",
      },
      fullstack: {
        title: "Desarrollo Full-Stack",
        date: "Enero 2026",
        issuedBy: "Programa de Certificación en Desarrollo Web Full-Stack",
        why: "Para entregar soluciones digitales completas y sistemas escalables de alto rendimiento.",
        details: "Nos permite crear plataformas web rápidas, responsivas y alineadas con objetivos de negocio en front-end y back-end.",
      },
      leadership: {
        title: "Liderazgo y Excelencia Operativa",
        date: "Marzo 2026",
        issuedBy: "Programa de Liderazgo Operativo y Excelencia de Procesos",
        why: "Para fortalecer nuestro liderazgo de proyectos y asegurar entregas consistentes para cada cliente.",
        details: "Esta certificación mejora la planificación, la estandarización de procesos y la coordinación del equipo para resultados escalables.",
      },
      security: {
        title: "Ciberseguridad y Protección de Datos",
        date: "Abril 2026",
        issuedBy: "Programa de Certificación en Ciberseguridad y Protección de Datos",
        why: "Para proteger la información del cliente, reducir riesgos operativos y mantener flujos de trabajo digitales seguros.",
        details: "Esta certificación refuerza nuestros estándares de seguridad en control de acceso, manejo de datos y prevención de amenazas.",
      },
      analytics: {
        title: "Analítica e Inteligencia de Negocio",
        date: "Mayo 2026",
        issuedBy: "Programa de Certificación en Analítica e Inteligencia de Negocio",
        why: "Para tomar decisiones basadas en evidencia y generar mejoras de rendimiento medibles para los clientes.",
        details: "Fortalece nuestra capacidad para crear dashboards KPI, interpretar tendencias y convertir datos operativos en estrategias de crecimiento.",
      },
    },
    zh: {
      ai: {
        title: "人工智能与机器学习",
        date: "2025年10月",
        issuedBy: "AI 与数据技术认证项目",
        why: "为了保持领先并将智能自动化融入业务运营。",
        details: "该认证提升了我们在流程自动化、数据分析和业务优化方面的能力，帮助客户更高效地增长。",
      },
      marketing: {
        title: "数字营销",
        date: "2025年12月",
        issuedBy: "高级数字营销认证项目",
        why: "为了为客户提供可衡量增长和高绩效营销活动。",
        details: "强化了我们在线索获取、转化优化和品牌定位方面的专业能力，支持可扩展增长。",
      },
      customer: {
        title: "客户体验",
        date: "2026年2月",
        issuedBy: "客户体验与服务卓越项目",
        why: "为了确保每位客户都获得稳定且高质量的服务体验。",
        details: "体现我们在专业、同理心和解决方案导向支持方面的承诺，提升留存与忠诚度。",
      },
      fullstack: {
        title: "全栈开发",
        date: "2026年1月",
        issuedBy: "全栈 Web 开发认证项目",
        why: "为了交付端到端数字化解决方案并构建高性能可扩展系统。",
        details: "使我们能够构建响应式、高性能且贴合业务目标的前后端平台。",
      },
      leadership: {
        title: "领导力与运营卓越",
        date: "2026年3月",
        issuedBy: "运营领导力与流程卓越项目",
        why: "为了强化项目领导能力，并确保每个客户项目都稳定高质量交付。",
        details: "该认证提升了我们的规划能力、流程标准化和团队协作能力，支持规模化稳定交付。",
      },
      security: {
        title: "网络安全与数据保护",
        date: "2026年4月",
        issuedBy: "网络安全与数据保护认证项目",
        why: "为了保护客户信息、降低运营风险，并保持安全的数字化工作流程。",
        details: "该认证强化了我们在访问控制、数据处理和威胁防护方面的安全标准，支持客户放心扩展业务。",
      },
      analytics: {
        title: "商业分析与智能",
        date: "2026年5月",
        issuedBy: "商业分析与智能认证项目",
        why: "为了实现更精准的数据驱动决策，并为客户带来可衡量的绩效提升。",
        details: "该培训提升了我们构建 KPI 仪表板、解读趋势并将运营数据转化为增长策略的能力。",
      },
    },
    tl: {
      ai: {
        title: "AI at Machine Learning",
        date: "Oktubre 2025",
        issuedBy: "Certified AI & Data Technology Program",
        why: "Para manatiling nangunguna at maisama ang matalinong automation sa operations.",
        details: "Pinapalakas nito ang kakayahan naming mag-automate ng proseso, magsuri ng data, at gumawa ng mas mahusay na desisyon para sa clients.",
      },
      marketing: {
        title: "Digital Marketing",
        date: "Disyembre 2025",
        issuedBy: "Advanced Digital Marketing Certification Program",
        why: "Para makapaghatid ng measurable growth at high-performing campaigns.",
        details: "Pinahusay nito ang aming lead generation, conversion optimization, at brand positioning para sa scalable results.",
      },
      customer: {
        title: "Customer Experience",
        date: "Pebrero 2026",
        issuedBy: "Customer Experience & Service Excellence Program",
        why: "Para masiguro ang consistent at mataas na kalidad na customer interactions.",
        details: "Ipinapakita nito ang commitment namin sa professional, empathetic, at solution-focused na suporta para sa long-term loyalty.",
      },
      fullstack: {
        title: "Full-Stack Development",
        date: "Enero 2026",
        issuedBy: "Full-Stack Web Development Certification Program",
        why: "Para magbigay ng end-to-end digital solutions at scalable high-performance systems.",
        details: "Nagbibigay ito ng kakayahan na bumuo ng responsive at mabilis na platforms na tumutugma sa goals ng clients.",
      },
      leadership: {
        title: "Leadership at Operational Excellence",
        date: "Marso 2026",
        issuedBy: "Operations Leadership and Process Excellence Program",
        why: "Para mapalakas ang project leadership at masigurong consistent ang delivery quality sa bawat client engagement.",
        details: "Pinapalakas ng certification na ito ang planning, process standardization, at team coordination para sa scalable na resulta.",
      },
      security: {
        title: "Cybersecurity at Data Protection",
        date: "Abril 2026",
        issuedBy: "Cybersecurity and Data Protection Certification Program",
        why: "Para maprotektahan ang client information, mabawasan ang risk, at mapanatiling secure ang digital workflows.",
        details: "Pinapatibay nito ang aming security standards sa access control, data handling, at threat prevention para sa mas ligtas na operations.",
      },
      analytics: {
        title: "Business Analytics at Intelligence",
        date: "Mayo 2026",
        issuedBy: "Business Analytics and Intelligence Certification Program",
        why: "Para makagawa ng mas eksaktong data-driven decisions at makapaghatid ng measurable performance improvements.",
        details: "Pinapalakas nito ang kakayahan naming gumawa ng KPI dashboards, mag-interpret ng trends, at gawing practical growth strategy ang data.",
      },
    },
    fr: {
      ai: {
        title: "IA et Machine Learning",
        date: "Octobre 2025",
        issuedBy: "Programme certifié IA et technologie des données",
        why: "Pour rester en avance et intégrer l'automatisation intelligente dans les opérations.",
        details: "Cette certification renforce notre capacité à optimiser les processus, analyser les données et accélérer la croissance des clients.",
      },
      marketing: {
        title: "Marketing Digital",
        date: "Décembre 2025",
        issuedBy: "Programme avancé de certification en marketing digital",
        why: "Pour fournir des campagnes performantes et une croissance mesurable.",
        details: "Elle améliore nos compétences en génération de leads, optimisation de conversion et positionnement de marque.",
      },
      customer: {
        title: "Expérience Client",
        date: "Février 2026",
        issuedBy: "Programme d'excellence en expérience et service client",
        why: "Pour garantir des interactions client cohérentes et de haute qualité.",
        details: "Elle confirme notre engagement envers un support professionnel, empathique et orienté solutions pour renforcer la fidélité.",
      },
      fullstack: {
        title: "Développement Full-Stack",
        date: "Janvier 2026",
        issuedBy: "Programme de certification en développement web full-stack",
        why: "Pour livrer des solutions digitales complètes et des systèmes scalables haute performance.",
        details: "Nous pouvons concevoir des plateformes front-end et back-end rapides, fiables et adaptées aux objectifs métiers.",
      },
      leadership: {
        title: "Leadership et Excellence Opérationnelle",
        date: "Mars 2026",
        issuedBy: "Programme de leadership opérationnel et d'excellence des processus",
        why: "Pour renforcer notre pilotage de projet et garantir une qualité de livraison constante pour chaque client.",
        details: "Cette certification améliore notre planification, la standardisation des processus et la coordination d'équipe pour des résultats durables.",
      },
      security: {
        title: "Cybersécurité et Protection des Données",
        date: "Avril 2026",
        issuedBy: "Programme de certification en cybersécurité et protection des données",
        why: "Pour protéger les informations clients, réduire les risques opérationnels et maintenir des workflows digitaux sécurisés.",
        details: "Cette certification renforce nos standards de sécurité en contrôle d'accès, gestion des données et prévention des menaces.",
      },
      analytics: {
        title: "Analytique et Intelligence d'Affaires",
        date: "Mai 2026",
        issuedBy: "Programme de certification en analytique et intelligence d'affaires",
        why: "Pour prendre des décisions plus précises fondées sur les données et livrer des améliorations mesurables.",
        details: "Elle améliore notre capacité à créer des tableaux KPI, interpréter les tendances et transformer les données en stratégies de croissance.",
      },
    },
  };

  const certificationCards = certificationCardsByLanguage[language] || certificationCardsByLanguage.en;

  const certificationPreviewImages = {
    ai: "/cert1.png",
    marketing: "/cert2.png",
    customer: "/cert3.png",
    fullstack: "/cert4.png",
    leadership: "/cert5.png",
    security: "/cert6.png",
    analytics: "/cert7.png",
  };

  // Testimonials Carousel Component
  const TestimonialsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const testimonials = [
      {
        name: "Sarah Mitchell",
        company: "Northbridge Logistics, LLC",
        date: "October 14, 2025",
        quote: locale.testimonialQuotes[0]
      },
      {
        name: "Daniel Brooks",
        company: "Harbor & Finch Retail Group",
        date: "October 29, 2025",
        quote: locale.testimonialQuotes[1]
      },
      {
        name: "Priya Nair",
        company: "Astera Health Systems",
        date: "November 12, 2025",
        quote: locale.testimonialQuotes[2]
      },
      {
        name: "Ethan Walker",
        company: "BlueCrest Property Management",
        date: "December 3, 2025",
        quote: locale.testimonialQuotes[3]
      },
      {
        name: "Olivia Carter",
        company: "Ridgeway Consumer Brands",
        date: "December 22, 2025",
        quote: locale.testimonialQuotes[4]
      },
      {
        name: "Mateo Alvarez",
        company: "SummitPeak Financial Partners",
        date: "January 15, 2026",
        quote: locale.testimonialQuotes[5]
      },
      {
        name: "Rachel Kim",
        company: "Everfield Software, Inc.",
        date: "February 2, 2026",
        quote: locale.testimonialQuotes[6]
      },
      {
        name: "Tyler Bennett",
        company: "Granite Point Construction Co.",
        date: "February 18, 2026",
        quote: locale.testimonialQuotes[7]
      }
    ];

    const previous = () => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const next = () => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToSlide = (index: number) => {
      setActiveIndex(index);
    };

    // Touch handlers for swipe support
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        next();
      }
      if (isRightSwipe) {
        previous();
      }
    };

    // Auto-play functionality
    useEffect(() => {
      if (!isAutoPlaying) return;

      const interval = setInterval(() => {
        next();
      }, 5000);

      return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const currentTestimonial = testimonials[activeIndex];

    return (
      <div className="relative">
        {/* Main Carousel Container */}
        <div
          className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Slides */}
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-full p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-8">
                    <div>
                      <h4 className="font-bold text-white text-xl">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.company}</p>
                      <p className="text-slate-500 text-xs mt-1">{testimonial.date}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex text-indigo-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-300 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={previous}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-purple-600 hover:bg-purple-500 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 w-8"
                  : "bg-slate-700 hover:bg-slate-600 w-2"
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
  };

  // Founders Carousel Component
  const FoundersCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const leaders = [
      {
        role: locale.founders[0].role,
        name: "Jake Manila",
        statement: locale.founders[0].statement,
        imageAlt: "Jake Manila - Founder",
        image: "/jake.jpg",
      },
      {
        role: locale.founders[1].role,
        name: "Joshua Dela Torre",
        statement: locale.founders[1].statement,
        imageAlt: "Joshua Dela Torre - Co-Founder",
        image: "/joshua.jpg",
      },
      {
        role: locale.founders[2].role,
        name: "Denver De Guzman",
        statement: locale.founders[2].statement,
        imageAlt: "Denver De Guzman - Co-Founder",
        image: "/denver.png",
      },
    ];

    const previous = () => {
      setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
    };

    const next = () => {
      setActiveIndex((prev) => (prev + 1) % leaders.length);
    };

    const goToSlide = (index: number) => {
      setActiveIndex(index);
    };

    // Touch handlers for swipe support
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        next();
      }
      if (isRightSwipe) {
        previous();
      }
    };

    return (
      <div className="relative">
        {/* Main Carousel Container */}
        <div
          className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md shadow-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {leaders.map((leader, index) => (
              <div key={index} className="w-full flex-shrink-0 min-h-[400px] p-12 flex flex-col items-center justify-center text-center">
                <div className="h-40 w-40 rounded-full border-4 border-white/20 shadow-2xl mb-8 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.imageAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <p className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-4">{leader.role}</p>
                <h4 className="text-4xl font-bold text-white mb-6">{leader.name}</h4>
                <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{leader.statement}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={previous}
            className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Previous founder"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Next founder"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center gap-4">
          {leaders.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-4 w-4 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-indigo-500 scale-125 shadow-lg shadow-indigo-500/50"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Show ${leaders[idx].name}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const EffectivenessLineChart = () => {
    const chartWidth = 980;
    const chartHeight = 420;
    const padding = { top: 30, right: 44, bottom: 64, left: 64 };
    const plotWidth = chartWidth - padding.left - padding.right;
    const plotHeight = chartHeight - padding.top - padding.bottom;
    const activeMetricKeys: PerformanceMetricKey[] = selectedPerformanceMetrics.length > 0 ? selectedPerformanceMetrics : ["members"];
    const primaryMetricKey: PerformanceMetricKey = activeMetricKeys[0];

    const pointsByMetric = Object.fromEntries(
      activeMetricKeys.map((metricKey) => {
        const metricConfig = performanceMetricData[metricKey];
        const points = performanceTimeline.map((period, index) => {
          const score = metricConfig.values[index];
          const x = padding.left + (index / (performanceTimeline.length - 1)) * plotWidth;
          const y = padding.top + ((100 - score) / 100) * plotHeight;
          return { period, score, x, y };
        });
        return [metricKey, points];
      })
    ) as Record<PerformanceMetricKey, Array<{ period: string; score: number; x: number; y: number }>>;

    const yTicks = [0, 20, 40, 60, 80, 100];
    const metricEntries = Object.entries(performanceMetricData) as Array<[
      PerformanceMetricKey,
      (typeof performanceMetricData)[PerformanceMetricKey]
    ]>;

    const togglePerformanceMetric = (metricKey: PerformanceMetricKey) => {
      setSelectedPerformanceMetrics((previous) => {
        if (previous.includes(metricKey)) {
          if (previous.length === 1) return previous;
          return previous.filter((item) => item !== metricKey);
        }
        return [...previous, metricKey];
      });
    };

    const focusPerformanceMetric = (metricKey: PerformanceMetricKey) => {
      setSelectedPerformanceMetrics([metricKey]);
    };

    const milestonePoints = effectivenessMilestones.reduce<Array<{ period: string; label: string; x: number; y: number }>>(
      (accumulator, milestone) => {
        const point = pointsByMetric[primaryMetricKey].find((item) => item.period === milestone.period);
        if (!point) return accumulator;
        accumulator.push({ period: milestone.period, label: milestone.label, x: point.x, y: point.y });
        return accumulator;
      },
      []
    );

    return (
      <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-4 shadow-2xl shadow-indigo-950/30 backdrop-blur-md sm:p-6">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">{locale.homeUi.performanceChartTitle}</h3>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">
          {locale.homeUi.performanceChartDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {metricEntries.map(([metricKey, metric]) => (
              <button
                key={metricKey}
                type="button"
                onClick={() => togglePerformanceMetric(metricKey)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeMetricKeys.includes(metricKey)
                    ? "border-indigo-300 bg-indigo-500/20 text-indigo-100"
                    : "border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                }`}
                aria-pressed={activeMetricKeys.includes(metricKey)}
              >
                {performanceMetricLabels[metricKey] ?? metric.label}
              </button>
            ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {metricEntries.map(([metricKey, metric]) => (
            <button
              key={`${metricKey}-legend`}
              type="button"
              onClick={() => focusPerformanceMetric(metricKey)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                activeMetricKeys.length === 1 && activeMetricKeys[0] === metricKey
                  ? "border-indigo-300 bg-indigo-500/15 text-indigo-100"
                  : "border-slate-600 bg-slate-800/40 text-slate-200 hover:border-slate-500"
              }`}
              aria-label={`Focus on ${metric.label}`}
            >
              <span className="h-0.5 w-8 rounded-full" style={{ backgroundColor: metric.lineStart }}></span>
              <span>{metric.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="h-auto min-w-[820px] w-full" role="img" aria-label="Line chart showing Accessively category performance growth from August 2025 to January 2026">

            {yTicks.map((tick) => {
              const y = padding.top + ((100 - tick) / 100) * plotHeight;
              return (
                <g key={tick}>
                  <line x1={padding.left} y1={y} x2={padding.left + plotWidth} y2={y} stroke="#334155" strokeWidth="1" strokeDasharray="4 6" />
                  <text x={padding.left - 12} y={y + 4} textAnchor="end" fontSize="12" fill="#94a3b8">
                    {tick}
                  </text>
                </g>
              );
            })}

            <line x1={padding.left} y1={padding.top + plotHeight} x2={padding.left + plotWidth} y2={padding.top + plotHeight} stroke="#64748b" strokeWidth="1.4" />
            <line x1={padding.left} y1={padding.top} x2={padding.left} y2={padding.top + plotHeight} stroke="#64748b" strokeWidth="1.4" />

            {activeMetricKeys.map((metricKey) => {
              const metricConfig = performanceMetricData[metricKey];
              const metricPoints = pointsByMetric[metricKey];
              const linePath = metricPoints
                .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
                .join(" ");

              return (
                <g key={metricKey}>
                  <path
                    d={linePath}
                    fill="none"
                    stroke={metricConfig.lineStart}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                    onClick={() => focusPerformanceMetric(metricKey)}
                  />
                  {metricPoints.map((point) => (
                    <circle
                      key={`${metricKey}-${point.period}`}
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill={metricConfig.dotColor}
                      stroke="#1e1b4b"
                      strokeWidth="1.8"
                      className="cursor-pointer"
                      onClick={() => focusPerformanceMetric(metricKey)}
                    />
                  ))}
                </g>
              );
            })}

            {pointsByMetric[primaryMetricKey].map((point) => {
              return (
                <text key={`${point.period}-label`} x={point.x} y={padding.top + plotHeight + 22} textAnchor="middle" fontSize="12" fill="#94a3b8">
                  {point.period}
                </text>
              );
            })}

            {milestonePoints.map((milestone) => (
              <g key={milestone.period}>
                <line x1={milestone.x} y1={padding.top + plotHeight} x2={milestone.x} y2={milestone.y - 10} stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 4" />
                <circle cx={milestone.x} cy={milestone.y} r="6" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />
              </g>
            ))}

            <text x={padding.left + plotWidth / 2} y={chartHeight - 12} textAnchor="middle" fontSize="13" fill="#cbd5e1" fontWeight="600">
              Time (Monthly)
            </text>
            <text
              transform={`translate(18 ${padding.top + plotHeight / 2}) rotate(-90)`}
              textAnchor="middle"
              fontSize="13"
              fill="#cbd5e1"
              fontWeight="600"
            >
              Score (0-100)
            </text>
          </svg>
        </div>
      </div>
    );
  };

  // Service Details Modal Component
  const ServiceModal = ({ service, onClose }: { service: string | null; onClose: () => void }) => {
    const serviceDetails: { [key: string]: { title: string; content: string } } = {
      "virtual-assistance": {
        title: t.serviceModal.virtualAssistanceTitle,
        content: t.serviceModal.virtualAssistanceContent
      },
      "sales-marketing": {
        title: t.serviceModal.salesMarketingTitle,
        content: t.serviceModal.salesMarketingContent
      },
      "graphic-design": {
        title: t.serviceModal.graphicDesignTitle,
        content: t.serviceModal.graphicDesignContent
      },
      "web-development": {
        title: t.serviceModal.webDevelopmentTitle,
        content: t.serviceModal.webDevelopmentContent
      },
      "customer-service": {
        title: t.serviceModal.customerServiceTitle,
        content: t.serviceModal.customerServiceContent
      }
    };

    if (!service) return null;

    const details = serviceDetails[service];

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-slate-900 rounded-3xl border border-slate-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white">{details.title}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-slate-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-8">
            <p className="whitespace-pre-line text-slate-300 text-lg leading-relaxed">{details.content}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                {t.serviceModal.getStartedWith} {details.title}
              </a>
              <button
                onClick={onClose}
                className="flex-1 border-2 border-slate-700 hover:border-indigo-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {t.serviceModal.close}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OriginStoryModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <div className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
          <div className="sticky top-0 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-100/80">{locale.homeUi.originStoryEyebrow}</p>
              <h2 className="text-3xl font-bold text-white">{locale.homeUi.originStoryTitle}</h2>
            </div>
            <button onClick={onClose} className="text-white transition-colors hover:text-slate-200" aria-label={locale.homeUi.closeStoryModalLabel}>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-5 p-8">
            {originStoryParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <button
                onClick={onClose}
                className="rounded-2xl border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-indigo-400 hover:text-white"
              >
                {locale.homeUi.closeStory}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="top" className="flex min-h-screen flex-1 flex-col overflow-x-hidden bg-slate-950">
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      <OriginStoryModal open={showOriginStory} onClose={() => setShowOriginStory(false)} />
      <style>{`
        @keyframes accessively-breathe {
          0% {
            opacity: 0.18;
            transform: translate3d(0, 10px, 0) scale(0.992);
            filter: blur(6px) drop-shadow(0 0 6px rgba(129, 140, 248, 0.18));
          }
          28% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0) drop-shadow(0 0 18px rgba(167, 139, 250, 0.55));
          }
          62% {
            opacity: 0.92;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0) drop-shadow(0 0 14px rgba(129, 140, 248, 0.38));
          }
          100% {
            opacity: 0.18;
            transform: translate3d(0, -10px, 0) scale(0.992);
            filter: blur(6px) drop-shadow(0 0 6px rgba(129, 140, 248, 0.18));
          }
        }
        @keyframes hero-lobby-float {
          0% { transform: scale(1.04) translate3d(0, 0, 0); }
          50% { transform: scale(1.08) translate3d(-1.5%, -1%, 0); }
          100% { transform: scale(1.04) translate3d(0, 0, 0); }
        }
        .hero-lobby-bg {
          animation: hero-lobby-float 20s ease-in-out infinite;
          will-change: transform;
        }
        .accessively-enter {
          display: inline-block;
          animation: accessively-breathe 5.6s cubic-bezier(0.37, 0, 0.63, 1) infinite;
          will-change: opacity, transform, filter;
        }
      `}</style>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div
          className="absolute inset-0 hero-lobby-bg bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/Lobby.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/60 to-slate-950/70"></div>
        <div className="absolute inset-0 bg-indigo-500/10"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(79,70,229,0.25)]"></div>

        {/* Animated Background Orbs */}
        <div className="absolute left-0 top-1/4 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl animate-pulse sm:left-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>
        <div className="absolute bottom-1/4 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-1000 sm:right-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500/5 blur-2xl animate-pulse delay-500 sm:h-56 sm:w-56 lg:h-64 lg:w-64"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl md:text-8xl">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent accessively-enter">
                Accessively
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
            {t.hero.title}
            <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-base leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#services"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 sm:px-10 sm:py-5 sm:text-lg sm:hover:scale-105"
            >
              <span className="relative z-10">{t.hero.exploreServices}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative rounded-2xl border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-bold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400 hover:bg-slate-800/50 hover:text-white sm:px-10 sm:py-5 sm:text-lg sm:hover:scale-105"
            >
              {t.hero.getStarted}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">{t.hero.projectsCompleted}</div>
            </div>
            <div className="backdrop-blur-md bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">{t.hero.expertTeam}</div>
            </div>
            <div className="backdrop-blur-md bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">2025</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">{t.hero.founded}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.about.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.about.missionTitle}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {t.about.missionContent}
                </p>
              </div>

              <div className="backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.about.visionTitle}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {t.about.visionContent}
                </p>
              </div>

              <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-slate-900/50 to-purple-500/10 p-8 backdrop-blur-md">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">{locale.homeUi.originStoryEyebrow}</p>
                <h3 className="mb-4 text-2xl font-bold text-white">{locale.homeUi.originStoryTitle}</h3>
                <p className="mb-6 leading-relaxed text-slate-300">
                  {locale.homeUi.originStoryDescription}
                </p>
                <button
                  onClick={() => setShowOriginStory(true)}
                  className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] hover:from-indigo-500 hover:to-purple-500"
                >
                  {locale.homeUi.originStoryTitle}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-3xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">2025</div>
                      <div className="text-slate-400 text-sm">{locale.aboutStats.founded}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">20+</div>
                      <div className="text-slate-400 text-sm">{locale.aboutStats.teamMembers}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">50+</div>
                      <div className="text-slate-400 text-sm">{locale.aboutStats.projects}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">97%+</div>
                      <div className="text-slate-400 text-sm">{locale.aboutStats.satisfaction}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div
          className="absolute inset-0 opacity-[0.03] bg-center bg-cover"
          style={{ backgroundImage: "url('/group.png')" }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.founders.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.founders.subtitle}
            </p>
          </div>

          <FoundersCarousel />
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="relative z-10">
          {/* Continuous carousel */}
          <div className="overflow-hidden relative">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent"></div>
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent"></div>

            <div className="animate-marquee items-center flex-nowrap">
              {[
                "/logo1.png",
                "/logo2.png",
                "/logo3.png",
                "/logo4.png",
                "/logo5.png",
                "/logo6.png",
                "/logo7.png",
                "/logo8.png",
                "/logo1.png",
                "/logo2.png",
                "/logo3.png",
                "/logo4.png",
                "/logo5.png",
                "/logo6.png",
                "/logo7.png",
                "/logo8.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 mx-8 w-[150px] h-[72px] flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`Partner logo ${(i % 8) + 1}`}
                    className="h-14 w-auto max-w-[130px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-indigo-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.services.title}</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <button
              id="service-virtual-assistance"
              onClick={() => setSelectedService("virtual-assistance")}
              className="group scroll-mt-28 backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{t.services.virtualAssistanceTitle}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t.services.virtualAssistanceDesc}
              </p>
              <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span className="text-sm font-semibold">{t.services.learnMore}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button
              id="service-sales-marketing"
              onClick={() => setSelectedService("sales-marketing")}
              className="group scroll-mt-28 backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{t.services.salesMarketingTitle}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t.services.salesMarketingDesc}
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm font-semibold">{t.services.learnMore}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button
              id="service-graphic-design"
              onClick={() => setSelectedService("graphic-design")}
              className="group scroll-mt-28 backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{t.services.graphicDesignTitle}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t.services.graphicDesignDesc}
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-semibold">{t.services.learnMore}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button
              id="service-web-development"
              onClick={() => setSelectedService("web-development")}
              className="group scroll-mt-28 backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{t.services.webDevelopmentTitle}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t.services.webDevelopmentDesc}
              </p>
              <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span className="text-sm font-semibold">{t.services.learnMore}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button
              id="service-customer-service"
              onClick={() => setSelectedService("customer-service")}
              className="group scroll-mt-28 backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{t.services.customerServiceTitle}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t.services.customerServiceDesc}
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm font-semibold">{t.services.learnMore}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.whyChooseUs.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="mb-14">
            <EffectivenessLineChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.whyChooseUs.aiPowered}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.whyChooseUs.aiPoweredDesc}
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.whyChooseUs.premiumQuality}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.whyChooseUs.premiumQualityDesc}
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.whyChooseUs.lightningFast}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.whyChooseUs.lightningFastDesc}
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.whyChooseUs.clientCentric}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.whyChooseUs.clientCentricDesc}
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.whyChooseUs.scalable}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.whyChooseUs.scalableDesc}
              </p>
            </div>

            <div className="group text-center backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.whyChooseUs.futureReady}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t.whyChooseUs.futureReadyDesc}
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-indigo-500/30 bg-slate-900/50 p-6 sm:p-8 shadow-2xl shadow-indigo-950/40 backdrop-blur-md">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">
                  {locale.benefitsComparison.title}
                </div>
                <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  {locale.benefitsComparison.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
                  {locale.benefitsComparison.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowBenefitsComparison((prev) => !prev)}
                className="inline-flex items-center justify-center gap-3 self-start rounded-full border border-indigo-400 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] hover:from-indigo-500 hover:to-purple-500"
                aria-expanded={showBenefitsComparison}
                aria-controls="benefits-comparison-panel"
              >
                {showBenefitsComparison
                  ? locale.benefitsComparison.collapse
                  : locale.benefitsComparison.expand}
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${showBenefitsComparison ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {showBenefitsComparison && (
              <div id="benefits-comparison-panel" className="mt-8">
                <div className="mb-6 grid gap-4 rounded-3xl border border-slate-700/60 bg-slate-950/60 p-4 text-sm sm:grid-cols-[1.1fr_1fr_1fr] sm:p-5">
                  <div className="font-semibold uppercase tracking-[0.18em] text-slate-400">{locale.homeUi.comparisonArea}</div>
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center font-semibold text-emerald-300">
                    {locale.benefitsComparison.accessivelyLabel}
                  </div>
                  <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-center font-semibold text-rose-300">
                    {locale.benefitsComparison.othersLabel}
                  </div>
                </div>

                <div className="space-y-4">
                  {benefitsComparisonItems.map((item) => (
                    <div
                      key={item.title}
                      className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 transition-colors duration-300 hover:border-indigo-500/40 sm:grid-cols-[1.1fr_1fr_1fr]"
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      </div>
                      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/8 p-4 text-sm leading-relaxed text-slate-200">
                        {item.accessively}
                      </div>
                      <div className="rounded-2xl border border-rose-500/20 bg-rose-500/8 p-4 text-sm leading-relaxed text-slate-300">
                        {item.others}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 animate-bg-drift"
          style={{ backgroundImage: "url('/banner.png')" }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{locale.certifications.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed cursor-pointer hover:text-white transition-colors duration-300"
               onClick={() => setExpandedCertification(expandedCertification === 'intro' ? null : 'intro')}>
              {locale.certifications.intro}
            </p>
          </div>

          {/* Emblem row */}
          <div className="flex flex-wrap items-center justify-center gap-10 mb-14">
            {[
              { src: "/emblem1.png", title: "Mapagobra International Certification", sub: "15372 Certified" },
              { src: "/emblem2.png", title: "Next Gen Outstanding Excellence", sub: "1053 Award" },
              { src: "/emblem3.png", title: "High Performance Gold Standard Support Team", sub: "3274 Award" },
            ].map((emblem, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <img
                  src={emblem.src}
                  alt={emblem.title}
                  className="h-24 w-auto object-contain opacity-90 transition-all duration-300 cursor-pointer hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(129,140,248,0.75)]"
                />
                <div className="text-center">
                  <p className="text-white font-semibold text-sm leading-snug max-w-[160px]">{emblem.title}</p>
                  <p className="text-indigo-400 text-xs font-medium mt-0.5">{emblem.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* AI & Machine Learning Card */}
            <div 
              onClick={() => setExpandedCertification(expandedCertification === 'ai' ? null : 'ai')}
              className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-32 h-24 rounded-2xl overflow-hidden border border-indigo-500/30 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20 p-1">
                    <img
                      src={certificationPreviewImages.ai}
                      alt={`${certificationCards.ai.title} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{certificationCards.ai.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">{locale.certifications.yearReceived}: {certificationCards.ai.yearReceived ?? "Not specified"} • {locale.certifications.date}: {certificationCards.ai.date}</p>
                    <p className="text-sm text-slate-400">{locale.certifications.issuedBy}: {certificationCards.ai.issuedBy}</p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${expandedCertification === 'ai' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {expandedCertification === 'ai' && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                    <img
                      src={certificationPreviewImages.ai}
                      alt={`${certificationCards.ai.title} full certificate`}
                      className="w-full h-[360px] object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.why}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.ai.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.details}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.ai.details}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Digital Marketing Card */}
            <div 
              onClick={() => setExpandedCertification(expandedCertification === 'marketing' ? null : 'marketing')}
              className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-32 h-24 rounded-2xl overflow-hidden border border-indigo-500/30 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20 p-1">
                    <img
                      src={certificationPreviewImages.marketing}
                      alt={`${certificationCards.marketing.title} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{certificationCards.marketing.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">{locale.certifications.yearReceived}: {certificationCards.marketing.yearReceived ?? "Not specified"} • {locale.certifications.date}: {certificationCards.marketing.date}</p>
                    <p className="text-sm text-slate-400">{locale.certifications.issuedBy}: {certificationCards.marketing.issuedBy}</p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${expandedCertification === 'marketing' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {expandedCertification === 'marketing' && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                    <img
                      src={certificationPreviewImages.marketing}
                      alt={`${certificationCards.marketing.title} full certificate`}
                      className="w-full h-[360px] object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.why}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.marketing.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.details}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.marketing.details}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Customer Experience Card */}
            <div 
              onClick={() => setExpandedCertification(expandedCertification === 'customer' ? null : 'customer')}
              className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-32 h-24 rounded-2xl overflow-hidden border border-indigo-500/30 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20 p-1">
                    <img
                      src={certificationPreviewImages.customer}
                      alt={`${certificationCards.customer.title} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{certificationCards.customer.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">{locale.certifications.yearReceived}: {certificationCards.customer.yearReceived ?? "Not specified"} • {locale.certifications.date}: {certificationCards.customer.date}</p>
                    <p className="text-sm text-slate-400">{locale.certifications.issuedBy}: {certificationCards.customer.issuedBy}</p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${expandedCertification === 'customer' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {expandedCertification === 'customer' && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                    <img
                      src={certificationPreviewImages.customer}
                      alt={`${certificationCards.customer.title} full certificate`}
                      className="w-full h-[360px] object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.why}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.customer.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.details}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.customer.details}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Full-Stack Development Card */}
            <div 
              onClick={() => setExpandedCertification(expandedCertification === 'fullstack' ? null : 'fullstack')}
              className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-32 h-24 rounded-2xl overflow-hidden border border-indigo-500/30 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20 p-1">
                    <img
                      src={certificationPreviewImages.fullstack}
                      alt={`${certificationCards.fullstack.title} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{certificationCards.fullstack.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">{locale.certifications.yearReceived}: {certificationCards.fullstack.yearReceived ?? "Not specified"} • {locale.certifications.date}: {certificationCards.fullstack.date}</p>
                    <p className="text-sm text-slate-400">{locale.certifications.issuedBy}: {certificationCards.fullstack.issuedBy}</p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${expandedCertification === 'fullstack' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {expandedCertification === 'fullstack' && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                    <img
                      src={certificationPreviewImages.fullstack}
                      alt={`${certificationCards.fullstack.title} full certificate`}
                      className="w-full h-[360px] object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.why}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.fullstack.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.details}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.fullstack.details}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Leadership & Operations Card */}
            <div
              onClick={() => setExpandedCertification(expandedCertification === 'leadership' ? null : 'leadership')}
              className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-32 h-24 rounded-2xl overflow-hidden border border-indigo-500/30 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20 p-1">
                    <img
                      src={certificationPreviewImages.leadership}
                      alt={`${certificationCards.leadership.title} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{certificationCards.leadership.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">{locale.certifications.yearReceived}: {certificationCards.leadership.yearReceived ?? "Not specified"} • {locale.certifications.date}: {certificationCards.leadership.date}</p>
                    <p className="text-sm text-slate-400">{locale.certifications.issuedBy}: {certificationCards.leadership.issuedBy}</p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${expandedCertification === 'leadership' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {expandedCertification === 'leadership' && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                    <img
                      src={certificationPreviewImages.leadership}
                      alt={`${certificationCards.leadership.title} full certificate`}
                      className="w-full h-[360px] object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.why}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.leadership.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.details}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.leadership.details}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Cybersecurity & Data Protection Card */}
            <div
              onClick={() => setExpandedCertification(expandedCertification === 'security' ? null : 'security')}
              className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-32 h-24 rounded-2xl overflow-hidden border border-indigo-500/30 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20 p-1">
                    <img
                      src={certificationPreviewImages.security}
                      alt={`${certificationCards.security.title} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{certificationCards.security.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">{locale.certifications.yearReceived}: {certificationCards.security.yearReceived ?? "Not specified"} • {locale.certifications.date}: {certificationCards.security.date}</p>
                    <p className="text-sm text-slate-400">{locale.certifications.issuedBy}: {certificationCards.security.issuedBy}</p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${expandedCertification === 'security' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {expandedCertification === 'security' && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                    <img
                      src={certificationPreviewImages.security}
                      alt={`${certificationCards.security.title} full certificate`}
                      className="w-full h-[360px] object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.why}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.security.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.details}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.security.details}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Business Analytics & Intelligence Card */}
            <div
              onClick={() => setExpandedCertification(expandedCertification === 'analytics' ? null : 'analytics')}
              className="group backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-32 h-24 rounded-2xl overflow-hidden border border-indigo-500/30 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20 p-1">
                    <img
                      src={certificationPreviewImages.analytics}
                      alt={`${certificationCards.analytics.title} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{certificationCards.analytics.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">{locale.certifications.yearReceived}: {certificationCards.analytics.yearReceived ?? "Not specified"} • {locale.certifications.date}: {certificationCards.analytics.date}</p>
                    <p className="text-sm text-slate-400">{locale.certifications.issuedBy}: {certificationCards.analytics.issuedBy}</p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${expandedCertification === 'analytics' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {expandedCertification === 'analytics' && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                    <img
                      src={certificationPreviewImages.analytics}
                      alt={`${certificationCards.analytics.title} full certificate`}
                      className="w-full h-[360px] object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.why}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.analytics.why}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">{locale.certifications.details}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {certificationCards.analytics.details}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.testimonials.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Offices & Locations Section */}
      <OfficesSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl">{t.contact.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">{t.contact.getInTouch}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group sm:items-center">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{t.contact.emailUs}</div>
                      <div className="text-slate-400">{t.contact.emailAddress}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group sm:items-center">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{t.contact.liveChat}</div>
                      <div className="text-slate-400">{t.contact.available24}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group sm:items-center">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4h.01M16 20h.01M12 20h.01M8 20h.01M12 4h.01M8 4h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{t.contact.socialMedia}</div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <a href="https://www.tiktok.com/@accessively.ph" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">TikTok</a>
                        <a href="https://www.instagram.com/accessivelyofficial/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                        <a href="https://www.threads.com/@accessivelyofficial" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Threads</a>
                        <a href="https://x.com/AOffical73700" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">X/Twitter</a>
                        <a href="https://facebook.com/Accessivelyofficial" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
                      </div>
                    </div>
                  </div>

                  <a href="https://wa.me/639936790350" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group sm:items-center">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 7.456 6.044 13.5 13.5 13.5h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.965-.852-1.089l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97c.34-.255.5-.688.417-1.173L5.46 2.852A1.125 1.125 0 004.372 2H3A2.25 2.25 0 00.75 4.25v2.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{t.contact.viberWhatsapp}</div>
                      <div className="text-slate-400">(+63) 993-679-0350</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            <div className="flex items-start lg:justify-end">
              <div className="w-full max-w-xl space-y-4">
                <div className="rounded-2xl border border-slate-800/60 bg-slate-900/45 p-6 backdrop-blur-sm sm:p-7">
                  <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{t.contact.startJourney}</h3>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/contact?type=consultation"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-500 sm:w-auto"
                    >
                      Book a Consultation
                    </a>
                    <a
                      href="/contact?type=sales"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 sm:w-auto"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/60 bg-slate-900/45 p-5 backdrop-blur-sm sm:p-6">
                  <h4 className="text-xl font-bold text-white mb-4">{t.contact.whyChooseUs}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">{t.contact.support24}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">{t.contact.aiPowered}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">{t.contact.security}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Accessively
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {locale.footerTagline}
              </p>
              <div className="flex space-x-4">
                <a href="https://www.tiktok.com/@accessively.ph" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/Accessivelyofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/accessivelyofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">{t.footer.services}</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.services.virtualAssistanceTitle}</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.services.salesMarketingTitle}</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.services.graphicDesignTitle}</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.services.webDevelopmentTitle}</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.services.customerServiceTitle}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">{t.footer.company}</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.footer.aboutUs}</a></li>
                <li><a href="#testimonials" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.testimonials.title}</a></li>
                <li><a href="/apply" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.footer.joinOurTeam}</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.header.contact}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">{t.footer.support}</h4>
              <ul className="space-y-3">
                <li><a href="/help-center" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.footer.helpCenter}</a></li>
                <li><a href="/privacy-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.footer.privacyPolicy}</a></li>
                <li><a href="/anti-human-trafficking-and-slavery-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.footer.antiHumanTraffickingPolicy}</a></li>
                <li><a href="/terms-and-conditions" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.footer.termsOfService}</a></li>
                <li><a href="/status" className="text-slate-400 hover:text-indigo-400 transition-colors">{t.footer.status}</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-8 py-6 border-y border-slate-800/50">
            <h4 className="text-lg font-bold text-white mb-5 text-center">{t.footer.followUs}</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { name: "TikTok", href: "https://www.tiktok.com/@accessively.ph" },
                { name: "Instagram", href: "https://www.instagram.com/accessivelyofficial/" },
                { name: "Threads", href: "https://www.threads.com/@accessivelyofficial" },
                { name: "X/Twitter", href: "https://x.com/AOffical73700" },
                { name: "Facebook", href: "https://facebook.com/Accessivelyofficial" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 font-semibold text-sm tracking-wide hover:border-indigo-400 hover:text-white hover:bg-indigo-600/20 transition-colors duration-300"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center">
              © 2026 Accessively. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:solutions@accessivelybpo.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md shadow-indigo-500/25">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>Email: solutions@accessivelybpo.com</span>
              </a>
              <a
                href="https://wa.me/639936790350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md shadow-indigo-500/25">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 7.456 6.044 13.5 13.5 13.5h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.965-.852-1.089l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97c.34-.255.5-.688.417-1.173L5.46 2.852A1.125 1.125 0 004.372 2H3A2.25 2.25 0 00.75 4.25v2.5z" />
                  </svg>
                </span>
                <span>Viber / WhatsApp: (+63) 993-679-0350</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
