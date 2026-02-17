import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="py-32 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-[var(--text-primary)]">
                        Academic <span className="text-[var(--text-primary)]">Background.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card-minimal dark:bg-black p-10 flex flex-col items-start"
                    >
                        <span className="text-[var(--text-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-60">
                            2023 — 2027
                        </span>
                        <h3 className="text-3xl font-bold mb-2 tracking-tight text-[var(--text-primary)]">Bachelor of Technology</h3>
                        <p className="text-[var(--text-secondary)] font-medium mb-8">
                            SAGE University Indore
                        </p>

                        <ul className="space-y-4 text-[var(--text-secondary)] font-light leading-relaxed">
                            <li className="flex gap-4">
                                <span className="text-[var(--text-primary)] font-bold">•</span>
                                3rd Year Student in Computer Science
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[var(--text-primary)] font-bold">•</span>
                                Specializing in MERN Stack Development
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[var(--text-primary)] font-bold">•</span>
                                Actively involved in Technical Communities
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col justify-center gap-6"
                    >
                        <h4 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Focus & Specialization</h4>
                        <p className="text-[var(--text-secondary)] text-lg font-light leading-relaxed">
                            My academic journey is centered around bridging the gap between theoretical foundations and practical, industry-standard engineering. I focus on building scalable systems while maintaining clean, maintainable codebases.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {["Architecture", "Real-world Labs", "Community Lead"].map((tag, i) => (
                                <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-primary)] border border-[var(--card-border)] px-3 py-1 rounded-full bg-[var(--bg-secondary)]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
