import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[var(--bg-secondary)] overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                        Let's <span className="text-[var(--text-primary)]">Connect.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg font-light max-w-xl mx-auto">
                        Whether you have a specific project in mind or just want to say hello, I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Channels */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold tracking-tight mb-8 text-[var(--text-primary)]">Reach out via</h3>

                        <a href="mailto:muskanwagh1608@gmail.com" className="card-minimal flex items-center gap-6 group hover:border-black/30 dark:hover:border-white/30">
                            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full text-[var(--text-primary)] group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Email</p>
                                <p className="text-[var(--text-primary)] font-medium">muskanwagh1608@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="card-minimal flex items-center gap-6 group hover:border-black/30 dark:hover:border-white/30">
                            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full text-[var(--text-primary)] group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                <FaLinkedin className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">LinkedIn</p>
                                <p className="text-[var(--text-primary)] font-medium">Muskan Wagh</p>
                            </div>
                        </a>
                    </motion.div>

                    {/* Quick Message / CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-minimal dark:bg-black p-10 flex flex-col justify-center text-center md:text-left"
                    >
                        <h3 className="text-3xl font-bold tracking-tight mb-6 text-[var(--text-primary)]">Want to collaborate?</h3>
                        <p className="text-[var(--text-secondary)] mb-10 font-light leading-relaxed">
                            I'm currently looking for new opportunities and would love to discuss how I can help your team.
                        </p>
                        <a
                            href="mailto:muskanwagh1608@gmail.com"
                            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-80 transition-all text-center"
                        >
                            Send a Message
                        </a>
                    </motion.div>
                </div>

                {/* Social Sidebar/Bottom */}
                <div className="mt-32 pt-12 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[var(--text-secondary)] text-sm font-light">
                        © 2024 Muskan Wagh. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {[{ icon: <FaGithub />, href: "#" }, { icon: <FaTwitter />, href: "#" }, { icon: <FaLinkedin />, href: "#" }].map((social, i) => (
                            <a key={i} href={social.href} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xl transition-colors">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
