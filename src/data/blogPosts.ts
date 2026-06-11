import cbuSchoolIct from "../assets/IMG_0372.jpg";
import reactEvolution from "../assets/react_evolution_timeline.png";
import damPhoto1 from "../assets/PHOTO-2026-02-04-22-48-57 2.jpg";
import damPhoto2 from "../assets/PHOTO-2026-02-04-22-48-58 3.jpg";
import damPhoto3 from "../assets/PHOTO-2026-02-04-22-48-59 2.jpg";
import damPhoto4 from "../assets/PHOTO-2026-02-04-22-48-59 3.jpg";
import damPhoto5 from "../assets/PHOTO-2026-02-04-22-48-59 4.jpg";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image?: any;
  author: {
    name: string;
    avatar: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "6",
    title: "Beyond Code: Field Sampling & Public Analytics on the Copperbelt",
    slug: "field-sampling-public-analytics-copperbelt",
    excerpt: "Reflecting on my experience working outside software engineering as a junior analyst helping investigate the Sino Metals tailings dam spillage.",
    publishedAt: "May 2, 2026",
    readTime: "5 min read",
    category: "Experience",
    image: damPhoto4,
    author: {
      name: "Joshua Sibanda",
      avatar: "/images/joshuaIcon.png"
    },
    content: `Earlier this year, I had the unique opportunity to step completely outside my comfort zone of software development. I was contracted as a junior field analyst with the Applied Science and Technology Association (ASTA) to assist in a critical environmental monitoring and public consultation project. 

The task at hand was of high gravity: investigating the aftermath and environmental data surrounding the major tailings storage facility (dam) spillage by Sino Metals in Chambishi, Copperbelt Province.

For a software engineer used to looking at screens and typing TypeScript classes, trading the IDE for field notebooks, sampling kits, and stakeholder briefs was an eye-opening experience.

### The Context: The Sino Metals Dam Spillage
In early 2025, a critical failure occurred at the tailings storage facility operated by Sino Metals Leach Zambia Limited in Chambishi. The collapse released millions of liters of mining waste containing toxic effluents into the Mwambashi stream, which connects to the Kafue River—a vital water source for much of the Copperbelt and central provinces. 

ASTA was contracted to gather independent information, run water quality analytics, assess the soil impact, and report on the overall environmental degradation.

[image: ${damPhoto3.src}]

### My Role: Sampling and Analytics
As a junior analyst, my work involved hands-on field sampling. We walked along the affected streams collecting water and sediment samples. I was tasked with tracking the data points, organizing coordinate logs, and supporting the team during the chemical analysis of heavy metal concentration. 

Working in the field required high precision. Unlike code, where you can easily undo an action or run a debugger, a contaminated sample means losing a day of fieldwork. 

[image: ${damPhoto5.src}]

### Holding Stakeholder Briefs
One of the most rewarding aspects of the project was participating in stakeholder briefings with the general public and local community members. The spillage directly impacted people's livestock, farming land, and drinking water. 

In these meetings, we presented our independent scientific findings and gathered testimonies from the locals. Hearing how the spillage altered their daily lives brought a human perspective to environmental science. It taught me the importance of clear, non-technical communication when presenting complex scientific data to stakeholders.

[image: ${damPhoto1.src}]

[image: ${damPhoto2.src}]

### Takeaways: The Value of Stepping Out of Your Area
This project reminded me that problem-solving isn't exclusive to writing code. The analytical thinking, attention to detail, and database logic I use in software development translated directly to tracking toxicological samples and compiling environmental reports. 

At the same time, seeing the challenges of field scientists and affected communities firsthand expanded my horizons. I returned to software engineering with a greater appreciation for data integrity and a strong interest in how technology can be used to monitor and prevent environmental disasters.`
  },
  {
    id: "5",
    title: "From Create React App to Next.js & AI: My 5-Year Web Dev Journey",
    slug: "from-cra-to-nextjs-and-ai-journey",
    excerpt: "Reflecting on my evolution from procedural React in 2021 with Create React App to building type-safe, AI-assisted interfaces using Vite and Next.js in 2026.",
    publishedAt: "June 11, 2026",
    readTime: "4 min read",
    category: "Milestones",
    image: reactEvolution,
    author: {
      name: "Joshua Sibanda",
      avatar: "/images/joshuaIcon.png"
    },
    content: `In 2021, I wrote my very first lines of React code. Armed with \`create-react-app\`, I stepped into the world of JavaScript frameworks. It felt magical—suddenly, instead of wrestling with index files and manual DOM manipulations, I was building reusable components. 

That was a simpler time: no TypeScript, no Vite, no AI-driven development. Just vanilla JavaScript, simple CSS, and state hooks. 

Looking back from 2026, the landscape has changed completely, and my personal development workflow has evolved with it.

### 2021: The Gateway of Create React App
Create React App (CRA) was the standard starting point for anyone learning React back then. Although it hid the complexities of Webpack and Babel, it gave me the foundation I needed. I learned about:
- **Component Lifecycle**: Understanding mounting, rendering, and state updates.
- **State Management**: Using \`useState\` and \`useEffect\` to create dynamic user interfaces.
- **Client Routing**: Breaking away from static page reloads.

However, as my projects grew, CRA's limitations became obvious. Build times were slow, hot-reloading was sluggish, and JavaScript's lack of typing made debugging large codebases a nightmare.

### The Gradual Slope: Introducing TypeScript
As I moved forward, I realized that writing raw JavaScript in large projects was like building a house without blueprints. In 2023, I decided to tackle TypeScript.

The learning curve was steep. I transitioned from writing flexible JavaScript objects to defining strict interfaces, type generics, and union types. It felt tedious at first, but the payoff was immense. TypeScript caught bugs in my editor before my code even ran. Today, typed coding is no longer an optional preference—it is a core engineering requirement.

### 2026: The Go-To Stack (Vite & Next.js)
Today, my go-to web frameworks are Vite and Next.js:
- **Vite**: Replaced CRA as my preferred build tool for single-page applications. Powered by esbuild, it starts up instantly and updates in milliseconds, making the developer feedback loop incredibly fast.
- **Next.js**: My default choice for full-stack, server-side rendered (SSR) applications. Features like App Router, Server Actions, and automatic routing make structuring projects clean and robust.

### The AI Era: Enhancing the Workflow
In 2026, software engineering is heavily integrated with AI coding assistants. AI hasn't replaced the developer; instead, it acts as an accelerator. I use AI to:
- **Write Boilerplate**: Generating typescript models, schemas, and basic tailwind structures quickly.
- **Refactor & Audit**: Finding performance bottlenecks and auditing CSS compliance.
- **Learn Concepts**: Quickly exploring documentation or dissecting complex systems design principles.

By combining the speed of Vite, the power of Next.js, the safety of TypeScript, and the intelligence of AI, my development throughput has tripled compared to my humble beginnings in 2021. The journey has been a gradual, rewarding climb—and the horizon of web development continues to expand.`
  },
  {
    id: "4",
    title: "Enrolling at Copperbelt University: Envisioning the Future of Systems Design",
    slug: "enrolling-cbu-systems-design-milestone",
    excerpt: "Reflecting on my enrollment at the Copperbelt University (CBU) School of ICT in 2023 for a Bachelor of Science in Information Systems, and how learning OOP and Systems Design impacted my journey.",
    publishedAt: "June 11, 2026",
    readTime: "5 min read",
    category: "Milestones",
    image: cbuSchoolIct,
    author: {
      name: "Joshua Sibanda",
      avatar: "/images/joshuaIcon.png"
    },
    content: `In 2023, I took one of the most significant steps of my life by enrolling in the Bachelor of Science in Information Systems program at the Copperbelt University (CBU) School of ICT. Stepping onto the campus, pictured above, marked the beginning of an intense intellectual and professional evolution. 

Looking back, this milestone has completely redefined how I approach technology, building the core foundation of my career as a software engineer.

### The Milestone: Entering the CBU School of ICT
Enrolling at CBU wasn't just about obtaining a degree; it was about immersing myself in a rigorous computing environment. Surrounded by like-minded peers and guided by lecturers passionate about technology, the atmosphere pushed me to think beyond basic scripting and coding. I began to view software not as isolated files of code, but as living, breathing information systems designed to serve humans.

### Demystifying Object-Oriented Programming (OOP)
Before CBU, I wrote code procedurally. OOP changed everything. Learning concepts like:
- **Encapsulation**: Hiding state and exposing only what is necessary, creating clear boundaries.
- **Inheritance & Polymorphism**: Writing dry, modular, and extensible components.
- **Abstraction**: Modeling real-world problems into clean, high-level code structures.

Mastering OOP meant my code transitioned from chaotic scripts to well-structured, maintainable, and readable software systems. It gave me the vocabulary and mental models to collaborate on professional codebases.

### The Power of Systems Design
Learning Systems Design at the School of ICT shifted my perspective from *writing* code to *architecting* software. I realized that a great software engineer doesn't just ask "how do I write this function?", but rather "how will this component interact with the database, the network, and the client?" and "how will this scale under load?"

Understanding data flow diagrams, entity-relationship modeling, and client-server architectures enabled me to design products that are robust, secure, and scalable.

### Exposure and Real-World Impact
Perhaps the greatest impact of my time at CBU has been the exposure. Being part of the ICT department exposed me to cutting-edge database designs, network protocols, and software methodologies. It provided opportunities to engage with local tech communities, participate in developer hackathons, and collaborate with other students on complex projects. 

This exposure instilled in me a deep sense of engineering rigor and a commitment to continuous learning, driving me to build solutions that resolve local challenges in Zambia and beyond.`
  }
];
