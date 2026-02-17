import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Projects", href: "#projects" },
        { name: "About me", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Contact me", href: "#contact" },
    ];

    const socials = [
        { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
        { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--card-border)] py-3"
                : "bg-transparent py-6"}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tighter">
                    MW<span className="text-[var(--text-primary)]">.</span>
                </a>

                {/* Desktop Center Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Right Socials + Toggle */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-4 border-r border-[var(--card-border)] pr-6">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-lg"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-[var(--text-primary)] focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--card-border)] shadow-xl"
                >
                    <div className="flex flex-col p-8 gap-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-lg font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex justify-center gap-6 pt-4 border-t border-[var(--card-border)]">
                            {socials.map((social, index) => (
                                <a key={index} href={social.href} className="text-2xl text-[var(--text-secondary)]">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
