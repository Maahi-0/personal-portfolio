import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent transition-colors duration-500">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-700/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-sm md:text-md uppercase tracking-[0.4em] text-blue-400 mb-4 font-bold"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            textShadow: [
                                "0 0 0px rgba(96, 165, 250, 0)",
                                "0 0 20px rgba(96, 165, 250, 0.8)",
                                "0 0 0px rgba(96, 165, 250, 0)"
                            ],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Hello World, I'm
                    </motion.h2>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
                            Muskan wagh
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Crafting digital experiences with code and creativity.
                        <br />
                        <span className="text-gray-500 text-lg">
                            Building Scalable Web Experiences with Next.js and Aspiring Software Engineer
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <span className="text-sm tracking-widest">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent mx-auto mt-2" />
            </motion.div>
        </section>
    );
};

export default Hero;
