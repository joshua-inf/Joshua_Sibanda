import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader: React.FC<{ duration?: number }> = ({ duration = 2000 }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Heartbeat Image */}
                    <motion.img
                        src="/images/joshuaIcon.png"
                        alt="Loading"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Loading Text */}
                    <motion.span
                        className="text-white text-lg md:text-xl font-medium tracking-wider"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    >
                        Loading...
                    </motion.span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
