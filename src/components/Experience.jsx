import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Google Student Ambassador",
        company: "Google for Gemini",
        period: "2025 - 2026",
        description: "Representing Google AI initiatives on campus, promoting Gemini and other AI tools, and facilitating AI-focused learning opportunities for students.",
    },
    {
        role: "Campus Ambassador",
        company: "MyCaptain",
        period: "2025",
        description: "Leading marketing initiatives and student community engagement as a Campus Ambassador for MyCaptain.",
    },
    {
        role: "Campus Representative",
        company: "Pregrad",
        period: "2025",
        description: "Representing Pregrad as a Campus Ambassador Intern, focusing on student outreach and career acceleration initiatives.",
    },
    {
        role: "Sponsorship Co-Lead",
        company: "Google Developers Group on Campus SUI Indore",
        period: "2024 - 2025",
        description: "Leading sponsorship initiatives, managing relations with partners, and securing resources for community events and technical workshops.",
    },
    {
        role: "Mern Stack Development & DSA",
        company: "Technical Skill Enhancement",
        period: "Ongoing",
        description: "Currently focusing on mastering the MERN stack (MongoDB, Express, React, Node.js) and strengthening Data Structures and Algorithms proficiency.",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                        Career <span className="text-[var(--text-primary)]">Journey.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg font-light max-w-xl mx-auto">
                        Mapping my involvement in technical communities and leadership roles.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10 pb-12 border-l-2 border-[var(--card-border)] last:border-0 last:pb-0"
                        >
                            {/* Dot indicator */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-[var(--bg-primary)]" />

                            <div className="card-minimal hover:border-black/30 dark:hover:border-white/30 p-6"> {/* Added p-6 for consistent padding */}
                                <span className="text-[var(--text-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-2 block opacity-60">
                                    {exp.period}
                                </span>
                                <h3 className="text-2xl font-bold mb-1 tracking-tight">{exp.role}</h3>
                                <p className="text-[var(--text-primary)] font-medium mb-4 opacity-70">
                                    {exp.company}
                                </p>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-light">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
