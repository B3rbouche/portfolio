import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
        setIsDarkMode(false);
        document.body.classList.remove('dark-theme');
        } else {
        document.body.classList.add('dark-theme');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
        } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
        }
    };

    return (
        <nav className="navbar-container">
        {/* Ce texte ne sera visible que via le CSS sur mobile */}
        <div className="nav-mobile-label">Navigation</div>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <span className={isOpen ? "bar open" : "bar"}></span>
            <span className={isOpen ? "bar open" : "bar"}></span>
            <span className={isOpen ? "bar open" : "bar"}></span>
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projets</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
            </button>
        </div>
        </nav>
    );
}

export default Navbar;