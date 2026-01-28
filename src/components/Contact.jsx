import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Get In <span className="text-blue-500">Touch</span>
                    </h2>
                    <p className="text-gray-400">
                        Have a project in mind or just want to verify my skills? Let's connect.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
                    {/* Contact Info */}
                    <div className="space-y-8 flex flex-col items-center text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">Let's Talk</h3>
                            <p className="text-gray-400 text-lg">
                                I'm currently available for freelance projects and job opportunities.
                            </p>
                        </div>

                        <div className="space-y-6 w-full max-w-md">
                            <a href="mailto:muskanwagh16@gmail.com" className="flex items-center gap-6 p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-300 hover:text-blue-400 hover:border-blue-500/30 transition-all group">
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                    <FaEnvelope className="text-2xl text-blue-500" />
                                </div>
                                <span className="font-semibold text-lg">muskanwagh1608@gmail.com</span>
                            </a>
                            <a href="https://github.com/Maahi-0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-300 hover:text-white hover:border-white/30 transition-all group">
                                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                                    <FaGithub className="text-2xl" />
                                </div>
                                <span className="font-semibold text-lg">github.com/Maahi-0</span>
                            </a>
                        </div>

                        <div className="pt-10 w-full border-t border-white/10">
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Connect on Socials</p>
                            <div className="flex gap-6 justify-center">
                                <a href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600/20 hover:text-blue-400 text-gray-400 transition-all hover:scale-110 hover:border-blue-500/30">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a href="https://twitter.com/muskanwagh" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-blue-400/20 hover:text-blue-400 text-gray-400 transition-all hover:scale-110 hover:border-blue-500/30">
                                    <FaTwitter className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
