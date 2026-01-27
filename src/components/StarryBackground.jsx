import React, { useMemo } from "react";
import { motion } from "framer-motion";

const StarryBackground = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
    }, []);

    const comets = useMemo(() => {
        return Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 50,
            duration: Math.random() * 5 + 10,
            delay: Math.random() * 20,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050b18]">
            {/* Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white shadow-lg"
                    style={{
                        width: star.size,
                        height: star.size,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.8, 1], // Blooming effect
                        boxShadow: [
                            "0 0 2px rgba(255, 255, 255, 0.5)",
                            "0 0 8px rgba(255, 255, 255, 1)",
                            "0 0 2px rgba(255, 255, 255, 0.5)"
                        ]
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Comets / Shooting Stars */}
            {comets.map((comet) => (
                <motion.div
                    key={`comet-${comet.id}`}
                    className="absolute h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-400 to-white opacity-0"
                    style={{
                        top: `${comet.y}%`,
                        left: `${comet.x}%`,
                        rotate: "-35deg",
                    }}
                    animate={{
                        x: ["-10vw", "110vw"],
                        y: ["0vh", "60vh"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: comet.duration,
                        delay: comet.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Subtle Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-[150px]" />
        </div>
    );
};

export default StarryBackground;
