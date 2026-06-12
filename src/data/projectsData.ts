import inxourceLandingImg from "../assets/image.png";
import inxourcePaymentsImg from "../assets/image2.png";
import trybaeDashboardImg from "../assets/image3.png";
import drivemetricsImg from "../assets/drivemetrics.png";
import edurootImg from "../assets/eduroot.png";
import namarTechImg from "../assets/namar_tech.png";
import techrootsWebImg from "../assets/techroots_web.png";
import transworldImg from "../assets/transworld.png";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "website" | "web-system" | "mobile-app" | "desktop-app";
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: any;
  longDescription?: string;
  features?: string[];
  screenshots?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "TryBae Business Dashboard",
    slug: "trybae-business-dashboard",
    description: "A comprehensive, real-time business management dashboard developed for TryBae to streamline operations, customer relations, order processing, and visual reporting.",
    longDescription: `The TryBae Business Dashboard is a full-featured management tool designed to empower administrators and business owners with central control and data intelligence. 

It consolidates critical business workflows into a unified, secure portal. The system focuses on easing administrative burdens, managing data pipelines, and presenting clean, real-time metrics so businesses can react instantly to market demands.

By linking management services, inventory tracking, and client logs, the application provides business operators with a holistic view of their active ecosystem, ensuring day-to-day operations run smoothly.`,
    category: "web-system",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hooks", "ApexCharts"],
    liveUrl: "https://dashboard.inxource.com",
    image: trybaeDashboardImg,
    features: [
      "Real-time management dashboard offering central KPIs and operational metrics.",
      "Interactive notification panels for instant internal alert dispatching and triage.",
      "Comprehensive order, stock inventory, and customer profile management logs.",
      "Embedded Point of Sale (POS) system integration for handling instant sales transactions.",
      "Dynamic analytical charting engine for sales trend visualization and reports."
    ]
  },
  {
    id: "2",
    title: "inXource Payments Storefront",
    slug: "inxource-payments-storefront",
    description: "A responsive, secure, and user-centric payment checkout storefront designed for high-performance product browsing and customer payments.",
    longDescription: `inXource Payments is a modern, high-speed storefront application designed to facilitate seamless customer payments. It provides a mobile-first catalog browsing and checkout interface that handles the transaction lifecycle from start to finish.

The storefront is built to optimize conversion rates by offering a clean, simple layout, smooth checkout animations, and instant transaction responses. 

It provides businesses with a robust public-facing gateway for taking customer payments, supporting multiple options like Mobile Money and cash handling, while keeping the security protocols and payment pipelines isolated.`,
    category: "web-system",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Axios"],
    liveUrl: "https://store.inxource.com",
    image: inxourcePaymentsImg,
    features: [
      "Responsive catalog display supporting image rendering and customization options.",
      "Complete checkout pipeline handling cart management and order creation.",
      "Multiple secure payment options, including Mobile Money and local cash flows.",
      "Integrated promotions, discount calculations, and subscription handling.",
      "Mobile-first, responsive layouts utilizing smooth frame animations."
    ]
  },
  {
    id: "3",
    title: "Inxource Marketing Website",
    slug: "inxource-marketing-website",
    description: "The public-facing marketing and user documentation site for Inxource, a business intelligence platform tailored for African SMEs and enterprises.",
    longDescription: `The Inxource Landing Page serves as the public marketing site and documentation hub for the Inxource business intelligence platform. It provides tailored paths for SMEs and enterprise clients, explaining the platform's value proposition and guiding users through onboarding.

The website is optimized for fast loading speeds, search engine visibility (SEO), and conversion tracking. 

It features clean marketing landing views, illustrative interface mockups, interactive user guides, and direct registration paths for the core dashboard systems.`,
    category: "website",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    liveUrl: "https://inxource.com",
    image: inxourceLandingImg,
    features: [
      "Custom landing paths tailored for individual SMEs and enterprise scale requirements.",
      "Fully optimized for search engines (SEO) and fast initial loading metrics.",
      "Interactive user guides and step-by-step product onboarding tutorials.",
      "Sleek marketing sections with responsive animations and navigation panels."
    ]
  },
  {
    id: "4",
    title: "Drive Metrics Fleet Ecosystem",
    slug: "drive-metrics-fleet-ecosystem",
    description: "A premium, data-driven vehicle profitability, fleet tracking, and service compliance ecosystem optimized for the Zambian transit and logistics space.",
    longDescription: `The Drive Metrics Ecosystem is a comprehensive, multi-platform fleet management and vehicle compliance portal tailored for the Zambian logistics market. It spans a Next.js 16 Web Dashboard, Next.js 16 Admin Panel, and a companion Flutter Mobile App.

The system enables vehicle owners, drivers, and renters to log financials (income and expenses), manage vehicle documents (RTSA fitness, tax, white book compliance), and list vehicles for hire.

The Admin Portal lets operators perform document verifications, verify identity credentials, and triage driver applications, ensuring a secure and compliant transit ecosystem.`,
    category: "web-system",
    technologies: ["Next.js 16", "TypeScript", "PostgreSQL", "Supabase", "NextAuth.js v5", "Tailwind CSS v4", "Flutter", "Dart", "Recharts"],
    image: drivemetricsImg,
    features: [
      "Multi-Platform architecture featuring a Next.js Web Portal, Next.js Admin Panel, and Flutter companion mobile application.",
      "Automated vehicle profitability dashboard with income and expense tracking at a vehicle and fleet level.",
      "RTSA regulatory compliance workflow to upload and verify white books, fitness certificates, and road tax.",
      "KYC entity validation for corporate fleet registration and fleet manager verification.",
      "Interactive charts, real-time reports, and driver invitations dispatch platform."
    ]
  },
  {
    id: "5",
    title: "Eduroot School Management System",
    slug: "eduroot-school-management-system",
    description: "A production-ready, AI-powered, multi-tenant School & College Management System designed to streamline educational administration and finance tracking.",
    longDescription: `Eduroot is a high-performance, multi-tenant administrative system built for schools and colleges. Operating in dual-mode (K-12 School grading and Higher Education programs/departments), the platform manages students, lecturers, academic calendars, timetables, lesson planning, and online admissions.

The system features a built-in Groq AI engine (Llama-3.3-70b) that automates lesson plan reviews, student application screening, and administrative reports.

Payments are handled via Lenco integration for Card and Mobile Money options, paired with automated invoicing and email alerting to keep parents and administrators fully informed.`,
    category: "web-system",
    technologies: ["React", "Vite", "Wouter", "TanStack Query", "Tailwind CSS v4", "Express.js v5", "PostgreSQL", "Drizzle ORM", "Groq AI (Llama 3)", "Lenco Payments"],
    image: edurootImg,
    features: [
      "Multi-tenant architecture supporting multiple educational institutions under isolated data contexts.",
      "AI-powered application screening, lesson plan generation, and administrator assistance using Groq (Llama 3).",
      "Comprehensive academic calendar, grade book, program catalog, and section scheduler.",
      "Integrated fee management and invoice tracking with Lenco payments for Cards and Mobile Money.",
      "Role-based access portals (RBAC) customized for Super Admins, Teachers, Students, and Parents."
    ]
  },
  {
    id: "6",
    title: "Namar Technologies Corporate Website",
    slug: "namar-technologies-corporate-website",
    description: "A modern, responsive corporate website showcasing IT services, client testimonials, and Sophos security licensing with smooth animations.",
    longDescription: `The Namar Technologies website is a sleek corporate showcase engineered to highlight their suite of enterprise IT services and consulting options.

Adhering to a customized red/white visual theme, the site features responsive layouts, collapsible navigations, smooth carousel animations, and careers listing modules.

The contact system uses EmailJS for direct customer lead routing to support custom licensing requests, Sophos firewall configurations, and software procurement inquiries.`,
    category: "website",
    technologies: ["React", "React Router DOM", "Framer Motion", "CSS Modules", "React Icons", "EmailJS"],
    image: namarTechImg,
    features: [
      "Fully responsive corporate layout with custom red and white visual theme.",
      "Interactive testimonials carousel and company FAQs section.",
      "Sleek services directory highlighting Business Software Solutions, IT Licensing, Sophos, and Cloud consultancy.",
      "Integrated contact and lead capture form built on EmailJS Browser API.",
      "Progressive Web App (PWA) ready with custom manifest files and offline capabilities."
    ]
  },
  {
    id: "7",
    title: "TechRoots Zambia Corporate Website",
    slug: "techroots-zambia-corporate-website",
    description: "A modern, high-performance corporate site for TechRoots Zambia built with Next.js 14, TypeScript, and Tailwind CSS to highlight local IT solutions.",
    longDescription: `The TechRoots Zambia website is a high-performance, responsive corporate portfolio designed to explain and pitch their digital transformation services to local businesses.

Emphasizing fast load times and optimized rendering, the Next.js 14 App Router application features company stat tracking, modular service descriptions, client portfolios with case studies, and a TypeScript-safe contact capture module.`,
    category: "website",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Inter font"],
    image: techrootsWebImg,
    features: [
      "Built with Next.js 14 App Router for Server-Side Rendering (SSR) and SEO optimization.",
      "Clean and responsive layouts using Tailwind CSS grid and flex systems.",
      "TypeScript-enforced schemas for client feedback, portfolio items, and contact validation.",
      "Modular stats tracking dashboard showing company metrics and client retention rates.",
      "Pre-configured Docker support for seamless containerized production builds."
    ]
  },
  {
    id: "8",
    title: "Transformative Healing Clinic Website",
    slug: "transformative-healing-clinic-website",
    description: "A premium healthcare and wellness platform designed for doctor search, services scheduling, and patient inquiry management.",
    longDescription: `The Transformative Healing website is a modern wellness and medical clinic platform designed to connect patients with healthcare providers.

Built on React and Tailwind CSS v4, the application includes sections for care recovery programs, doctor details, booking inquiries, and privacy policies.

Patient email routing and newsletter sign-ups are integrated via Mailtrap API, and the site features fluid entry animations using animate.css.`,
    category: "website",
    technologies: ["React", "Vite", "Tailwind CSS v4", "React Router DOM", "Mailtrap", "Lucide Icons", "Animate.css"],
    image: transworldImg,
    features: [
      "Responsive pages for clinical services, staff profiles, and client reviews.",
      "Patient contact forms integrated with Mailtrap for transaction notifications.",
      "Smooth UI entrance effects using Animate.css modules.",
      "Tailwind CSS v4 configuration for clean styling and high-performance compilation.",
      "Comprehensive multi-page routing handled with React Router DOM."
    ]
  }
];

