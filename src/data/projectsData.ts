import inxourceLandingImg from "../assets/image.png";
import inxourcePaymentsImg from "../assets/image2.png";
import trybaeDashboardImg from "../assets/image3.png";

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
  }
];
