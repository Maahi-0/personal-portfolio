import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

const skills = [
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-black dark:text-white" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { name: "Git", icon: <FaGithub />, color: "text-white" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                        Technical <span className="text-[var(--text-primary)]">Expertise.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg font-light max-w-xl mx-auto">
                        A curated list of technologies I use to build robust and scalable digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="card-minimal flex flex-col items-center justify-center gap-4 py-8 group">
                                <div className={`text-4xl transition-all duration-500 ${skill.color}`}>
                                    {skill.icon}
                                </div>
                                <span className="text-[var(--text-primary)] text-sm font-semibold tracking-tight">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
