import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";

const Education = () => {
    return (
        <section id="education" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Educational <span className="text-blue-400">Background</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 p-8 bg-gradient-to-br from-blue-900/20 to-blue-500/5 border border-white/10 rounded-3xl"
                    >
                        <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Ongoing</span>
                        <h3 className="text-3xl font-bold text-white mb-2">Bachelor of Technology</h3>
                        <p className="text-gray-400 mb-6 font-medium">SAGE University Indore</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-gray-300">Degree Period: 2023 - 2027</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-gray-300">Currently in 3rd Year</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-gray-300">Major: Computer Science (MERN Specialization)</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3 space-y-6"
                    >
                        <h4 className="text-2xl font-bold text-white mb-4">Core Focus: <span className="text-blue-500">MERN Stack Projects</span></h4>
                        <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                            My academic journey is heavily complemented by practical application. I am dedicated to building full-stack applications using modern technologies, with a primary focus on bridging the gap between theoretical computer science and industry-ready development.
                        </p>

                        <div className="flex gap-6 text-4xl text-blue-400/50">
                            <SiMongodb className="hover:text-green-500 transition-colors" />
                            <SiExpress className="hover:text-white transition-colors" />
                            <SiReact className="hover:text-blue-400 transition-colors" />
                            <SiNodedotjs className="hover:text-green-600 transition-colors" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
