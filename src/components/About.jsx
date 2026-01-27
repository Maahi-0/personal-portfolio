import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const About = () => {
    return (
        <section id="about" className="py-24 bg-transparent text-white relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Image/Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-[3/4] md:aspect-square bg-gradient-to-tr from-blue-900/40 to-blue-500/20 rounded-2xl overflow-hidden relative group">
                        <img
                            src={profileImg}
                            alt="Muskan Wagh"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/30 rounded-full blur-[80px] -z-10" />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-blue-500">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        I am a dedicated developer with a strong foundation in C, C++, and modern web based technologies.
                        specially in Mern stack development.Passionate about building efficient solutions and exploring the world of web developmentand software engineering.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        My journey involves constant learning and applying new concepts to real-world projects.
                        From low-level programming to crafting responsive web interfaces, I enjoy every aspect of the development lifecycle.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-blue-400 mb-1">5+</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Projects Completed</p>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-blue-500 mb-1">2+</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years Coding</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
