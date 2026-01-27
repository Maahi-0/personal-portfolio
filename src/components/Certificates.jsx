import React from "react";
import { motion } from "framer-motion";
import certMyCaptain from "../assets/cert-mycaptain.png";
import certPregrad from "../assets/cert-pregrad.png";
import certSIH from "../assets/cert-sih.png";
import certCodingBlocks from "../assets/cert-codingblocks.png";
import certGDGFounding from "../assets/cert-gdg-founding.png";

const certificates = [
    {
        title: "Founding Team Member",
        issuer: "GDG on Campus SUI Indore",
        image: certGDGFounding,
        description: "Recognized as a valued Founding Team Member of Google Developer Groups on Campus (2024-2025).",
    },
    {
        title: "Campus Ambassador - Marketing",
        issuer: "MyCaptain",
        image: certMyCaptain,
        description: "Successfully completed the Campus Ambassador program in Marketing.",
    },
    {
        title: "Campus Ambassador Intern",
        issuer: "Pregrad",
        image: certPregrad,
        description: "Served as a Campus Ambassador Intern, contributing to student community growth.",
    },
    {
        title: "Smart India Hackathon 2025",
        issuer: "SAGE University Indore",
        image: certSIH,
        description: "Participated in the Internal SIH 2025, showcasing technical creativity and teamwork.",
    },
    {
        title: "Full Stack Development",
        issuer: "Coding Blocks x SAGE University",
        image: certCodingBlocks,
        description: "Completed Summer Training in Full Stack Development.",
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        My <span className="text-blue-500">Certifications</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A collection of my achievements and professional certifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all"
                        >
                            <div className="aspect-[1.4/1] overflow-hidden bg-black/40">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-blue-200/60 text-sm font-medium mb-3">{cert.issuer}</p>
                                <p className="text-gray-400 text-sm">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
