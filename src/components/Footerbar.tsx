import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footerbar.css';

function Footerbar() {
    return (
        <div className="footerbar-container">
            <div className="footer-links">
                <Link to="/contact">Contact</Link>
                <Link to="/legal">Mentions Légales</Link>
                <a href="https://www.linkedin.com/in/lucas-barbier-dev-res/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/docs/CV Lucas Barbier.pdf" target="_blank" rel="noopener noreferrer">Mon CV (PDF)</a>
            </div>
        </div>
    );
}

export default Footerbar;