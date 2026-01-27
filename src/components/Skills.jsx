import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaCuttlefish } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiPython, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiSqlalchemy } from "react-icons/si";

const skills = [
    { name: "C", icon: <FaCuttlefish className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
    { name: "nodejs", icon: <SiNodedotjs className="text-yellow-400" /> },
    { name: "expressjs", icon: <SiExpress className="text-yellow-400" /> },
    { name: "Mongodb", icon: <SiMongodb className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Git", icon: <FaGithub className="text-white" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        My <span className="text-blue-500">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 custom-shadow"
                        >
                            <div className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                                {skill.icon}
                            </div>

                            <span className="text-gray-300 font-medium tracking-wide group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
