import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Learning React",
        description: "A comprehensive repository documenting my journey learning React.js, featuring various experiments and exercise components.",
        tech: ["React.js", "Hooks", "Vite"],
        github: "https://github.com/Maahi-0/Learning-React", // Assuming the repo name
        demo: null,
    },
    {
        title: "Node.js Projects",
        description: "Backend development explorations using Node.js and Express, focusing on API creation and server-side logic.",
        tech: ["Node.js", "Express", "REST API"],
        github: "https://github.com/Maahi-0/Node-js",
        demo: null,
    },
    {
        title: "Continuous Growth",
        description: "Work in progress. Growth is continuous by continuously working on new technologies and improving existing skills.",
        tech: ["MERN", "DSA", "Learning"],
        github: "https://github.com/Maahi-0",
        demo: null,
        isSpecial: true,
    },
    {
        title: "Library Management System",
        description: "A C++ application to manage library operations efficiently, featuring book tracking and member management.",
        tech: ["C++", "File Handling"],
        github: "https://github.com/Maahi-0/Library-Management-System",
        demo: null,
    },
    {
        title: "Digital Clock",
        description: "A real-time digital clock implementation demonstrating time manipulation in C.",
        tech: ["C", "Time Library"],
        github: "https://github.com/Maahi-0/Digital-Clock",
        demo: null,
    },
    {
        title: "Progress Bar",
        description: "A visual progress bar implementation for console applications.",
        tech: ["C", "Console UI"],
        github: "https://github.com/Maahi-0/Progress-Bar",
        demo: null,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Feautured <span className="text-blue-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        A selection of my recent work and experiments.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${project.isSpecial
                                    ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border-blue-500/50 shadow-blue-500/20"
                                    : "bg-[#111111] hover:border-blue-500/30 hover:shadow-blue-500/10"
                                }`}
                        >

                            {/* Card Decoration */}
                            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none transition-colors ${project.isSpecial ? "bg-blue-400/20" : "bg-gradient-to-br from-blue-500/20 to-transparent group-hover:from-blue-500/40"
                                }`} />

                            <div className="p-8 h-full flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-full border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        <FaGithub /> View Code
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
