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
        <section id="experience" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Professional <span className="text-blue-500">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        My journey in community leadership and technical growth.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Connector */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-500/20" />

                            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 w-full md:w-auto">
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all hover:bg-white/10 group">
                                        <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                                        <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                        <p className="text-blue-200/60 font-medium mb-4">{exp.company}</p>
                                        <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>

                                <div className="absolute left-0 md:static w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

                                <div className="flex-1 hidden md:block" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
