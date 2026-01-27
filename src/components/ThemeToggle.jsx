import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <FaSun className="text-xl text-yellow-500" />
            ) : (
                <FaMoon className="text-xl text-blue-400" />
            )}
        </button>
    );
};

export default ThemeToggle;
