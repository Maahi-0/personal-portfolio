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
            className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--card-border)] hover:bg-[var(--bg-primary)] transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <FaSun className="text-lg" />
            ) : (
                <FaMoon className="text-lg" />
            )}
        </button>
    );
};

export default ThemeToggle;
