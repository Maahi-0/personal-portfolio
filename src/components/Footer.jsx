import React from "react";

const Footer = () => {
    return (
        <footer className="py-8 bg-[#050505] border-t border-white/5 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Maahi. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    new sm
                </p>
            </div>
        </footer>
    );
};

export default Footer;
