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
        description: "Valued Founding Team Member (2024-2025).",
    },
    {
        title: "Campus Ambassador",
        issuer: "MyCaptain",
        image: certMyCaptain,
        description: "Successfully completed program in Marketing.",
    },
    {
        title: "Smart India Hackathon 2025",
        issuer: "SAGE University Indore",
        image: certSIH,
        description: "Showcasing technical creativity and teamwork.",
    },
    {
        title: "Full Stack Development",
        issuer: "Coding Blocks",
        image: certCodingBlocks,
        description: "Summer Training in Full Stack Engineering.",
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-32 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-[var(--text-primary)]">
                        Professional <span className="text-[var(--text-primary)]">Certifications.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg font-light max-w-xl mx-auto">
                        Validating my expertise through industry-recognized accomplishments.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group card-minimal overflow-hidden !p-0 border border-[var(--card-border)] bg-[var(--card-bg)]"
                        >
                            <div className="aspect-[16/9] overflow-hidden bg-black/5 dark:bg-black/20 flex items-center justify-center p-8">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="max-w-full max-h-full object-contain transition-all duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <span className="text-[var(--text-primary)] opacity-70 text-[10px] font-bold uppercase tracking-widest mb-2 block">{cert.issuer}</span>
                                <h3 className="text-2xl font-bold mb-2 tracking-tight text-[var(--text-primary)]">
                                    {cert.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
