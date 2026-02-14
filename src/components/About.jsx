import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const About = () => {
    return (
        <section id="about" className="py-24 bg-transparent text-white relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Image/Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-[3/4] md:aspect-square bg-gradient-to-tr from-blue-900/40 to-blue-500/20 rounded-2xl overflow-hidden relative group">
                        <img
                            src={profileImg}
                            alt="Muskan Wagh"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/30 rounded-full blur-[80px] -z-10" />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-blue-500">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        I’m currently in my 3rd year of Computer Science, and along the way I discovered that I don’t just enjoy using technology — I love building with it. What started as curiosity quickly turned into a passion for creating things that people can actually use and experience.

                        Today, I focus on building modern, scalable web applications using React.js and Next.js, while exploring how real products are designed from frontend experiences to backend systems. Learning databases like MongoDB and working with APIs helped me understand how everything connects behind the scenes.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">

                        Every project I work on is more than just code — it’s a lesson in problem-solving, patience, and growth. From debugging late at night to finally seeing something work, the journey keeps pushing me forward.

                        I’m still learning, still experimenting, and still growing — but I’m building with the vision of becoming a software engineer who creates meaningful and impactful products.

                        This portfolio isn’t just a collection of projects.
                        It’s a reflection of my progress and the path I’m carving in tech
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-blue-400 mb-1">5+</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Projects Completed</p>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-blue-500 mb-1">2+</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years Coding</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
