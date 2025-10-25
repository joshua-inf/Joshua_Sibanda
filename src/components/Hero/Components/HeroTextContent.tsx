import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../Hero";


export const HeroTextContent = () => {
    interface CTAButton {
        href: string;
        label: string;
        variant: "primary" | "secondary";
    }
    const CTA_BUTTONS: CTAButton[] = [
        { href: "#projects", label: "View My Work", variant: "primary" },
        { href: "#contact", label: "Get In Touch", variant: "secondary" },
    ];
    const CTAButtons: React.FC = () => (
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {CTA_BUTTONS.map(({ href, label, variant }) => (
                <a
                    key={href}
                    href={href}
                    className={`
              px-6 py-3 rounded-lg transition font-medium relative z-10
              ${variant === "primary"
                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-600/25"
                            : "border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                        }
            `}
                >
                    {label}
                </a>
            ))}
        </div>
    );

    return (
        <>
            {/* Text Content */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left relative z-10">
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 font-heading"
                    variants={itemVariants}
                >
                    Hi, I'm{" "}
                    <span className="text-blue-500 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Joshua Sibanda
                    </span>
                </motion.h1>



                <motion.h2
                    className="text-xl md:text-2xl text-slate-300 mb-8 font-semibold"
                    variants={itemVariants}
                >
                    <Typewriter />
                </motion.h2>

                <motion.p
                    className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed"
                    variants={itemVariants}
                >
                    Passionate software developer based in Zambia, specializing in
                    building web and mobile applications that solve real-world
                    problems and enhance user experiences. I love exploring new
                    technologies, learning continuously, and turning creative ideas
                    into functional, efficient, and visually appealing applications.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <CTAButtons />
                </motion.div>
            </div>
        </>
    )
}



const Typewriter: React.FC = () => {
    const phrases = [
        "Software Developer & Tech Enthusiast",
        "Full-Stack Web Developer",
        "React & Next.js Specialist",
        "Open Source Contributor",
        "Passionate About UI/UX Design",
        "JavaScript & TypeScript Expert",
        "Building Scalable Web Applications",
        "Mobile App Developer with Flutter",
        "Problem Solver & Critical Thinker",
        "Continuous Learner & Innovator",
        "Tech Blogger & Community Mentor",
    ];

    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let typingSpeed = 100;

        if (isDeleting) typingSpeed /= 2;

        const timeout = setTimeout(() => {
            if (!isDeleting && !pause) {
                setText(currentPhrase.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentPhrase.length) {
                    setPause(true);
                    setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
                }
            } else if (isDeleting) {
                setText(currentPhrase.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setPause(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, pause, phraseIndex, phrases]);

    return (
        <motion.h2
            className="text-xl md:text-2xl text-slate-300 mb-8 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {text}
            <span className="border-r-2 border-slate-300 ml-1 animate-pulse"></span>
        </motion.h2>
    );
};
