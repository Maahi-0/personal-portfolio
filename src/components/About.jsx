import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const About = () => {
    return (
        <section id="about" className="py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
                            <img
                                src={profileImg}
                                alt="Muskan Wagh"
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                            <div className="absolute inset-0 border-[12px] border-white/10 dark:border-black/10 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
                            A little <span>about me.</span>
                        </h2>

                        <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                            <p>
                                I’m currently in my 3rd year of Computer Science, driven by the thrill of building technology that solves real-world problems. What started as curiosity has evolved into a dedicated pursuit of software excellence.
                            </p>
                            <p>
                                My expertise lies in crafting modern, scalable web applications using <span className="text-[var(--text-primary)] font-medium">React.js</span> and <span className="text-[var(--text-primary)] font-medium">Next.js</span>. I bridge the gap between design and development, ensuring seamless user experiences backed by robust systems.
                            </p>
                            <p>
                                Every project is a lesson in problem-solving and growth. I’m constantly experimenting with new technologies like MongoDB and specialized APIs to understand the full stack of modern product development.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
