import React from "react";
import { motion, easeOut } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Terminal,
  Globe,
  Cpu,
  LucideIcon,
  Server,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Layout,
  Coffee,
  GitMerge,
  Monitor,
  Wifi,
  Keyboard,
} from "lucide-react";
import { HeroTextContent } from "./Components/HeroTextContent";

// Types
interface FloatingIcon {
  Icon: LucideIcon;
  x: number;
  y: number;
  delay: number;
  size?: number;
  color?: string;
  rotationDelay?: number;
}



// Constants
// Constants
const FLOATING_ICONS: FloatingIcon[] = [
  // Top Left Area
  { Icon: Code2, x: 10, y: 15, delay: 0, size: 28, color: "text-blue-400/60" },
  { Icon: Database, x: 5, y: 25, delay: 0.8, size: 32, color: "text-green-400/60" },
  { Icon: GitBranch, x: 15, y: 35, delay: 1.2, size: 26, color: "text-orange-400/60" },

  // Top Right Area
  { Icon: Terminal, x: 85, y: 20, delay: 0.4, size: 30, color: "text-purple-400/60" },
  { Icon: Globe, x: 90, y: 30, delay: 0.6, size: 34, color: "text-cyan-400/60" },
  { Icon: Cpu, x: 80, y: 40, delay: 1.4, size: 36, color: "text-red-400/60" },

  // Bottom Left Area
  { Icon: Server, x: 12, y: 65, delay: 1.8, size: 30, color: "text-yellow-400/60" },
  { Icon: Cloud, x: 8, y: 75, delay: 0.2, size: 32, color: "text-indigo-400/60" },
  { Icon: Shield, x: 18, y: 85, delay: 1.0, size: 28, color: "text-emerald-400/60" },

  // Bottom Right Area
  { Icon: Zap, x: 88, y: 70, delay: 1.6, size: 24, color: "text-amber-400/60" },
  { Icon: Layout, x: 82, y: 80, delay: 0.9, size: 30, color: "text-pink-400/60" },
  { Icon: Smartphone, x: 92, y: 90, delay: 1.1, size: 26, color: "text-teal-400/60" },

  // Center Left
  { Icon: Monitor, x: 20, y: 50, delay: 1.7, size: 32, color: "text-violet-400/60" },
  { Icon: GitMerge, x: 25, y: 55, delay: 0.7, size: 28, color: "text-rose-400/60" },

  // Center Right
  { Icon: Coffee, x: 75, y: 45, delay: 0.3, size: 24, color: "text-lime-400/60" },
  { Icon: Wifi, x: 70, y: 60, delay: 1.3, size: 28, color: "text-sky-400/60" },

  // Top Center
  { Icon: Keyboard, x: 50, y: 10, delay: 0.5, size: 30, color: "text-fuchsia-400/60" },

  // Bottom Center
  { Icon: Smartphone, x: 50, y: 90, delay: 1.5, size: 26, color: "text-cyan-400/60" },

  // Far Left
  { Icon: Code2, x: 2, y: 50, delay: 0.1, size: 24, color: "text-blue-400/40" },

  // Far Right
  { Icon: Terminal, x: 98, y: 50, delay: 1.9, size: 24, color: "text-purple-400/40" },
];



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const floatingImageVariants = {
  floating: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeOut,
    },
  },
};
// Floating Icons Component - Spread Around
const FloatingIcons: React.FC = () => (
  <>
    {FLOATING_ICONS.map(({ Icon, x, y, delay, size = 32, color = "text-blue-400/60" }, index) => (
      <motion.div
        key={`floating-icon-${index}`}
        className={`absolute ${color} pointer-events-none`}
        style={{
          left: `${x}%`,
          top: `${y}%`,
        }}
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Icon size={size} />
      </motion.div>
    ))}
  </>
);



const BackgroundGlow: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"></div>
  </div>
);



const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen  relative flex items-center py-20 bg-slate-900 text-white overflow-hidden"
    >
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcons />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <HeroTextContent />
          {/* Image Section */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center relative">
            <motion.div
              variants={itemVariants}
            >
              <motion.img
                src="/images/joshuaIcon.png"
                alt="Joshua Sibanda - Software Developer"
                className="w-100 h-100 object-contain drop-shadow-2xl rounded-2xl relative z-10"
                variants={floatingImageVariants}
                animate="floating"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <BackgroundGlow />
    </section>
  );
};

export default Hero;