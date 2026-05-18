import React, { useState, useEffect } from 'react';
import './css/CookieBanner.css';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
        setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
        <p>
            Ce site utilise des cookies pour analyser le trafic via Google Analytics 
            et améliorer votre expérience.
        </p>
        <button onClick={acceptCookies}>Accepter</button>
        </div>
    );
};

export default CookieBanner;