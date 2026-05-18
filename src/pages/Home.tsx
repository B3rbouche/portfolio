import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

function Home() {
    const [dernierProjet, setDernierProjet] = useState<any>(null);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) setDernierProjet(data[0]); // Le premier car ORDER BY id DESC
            });
    }, []);

    return (
        <div className="home-container">
            {/* Section 1 : Bienvenue */}
            <section className="intro-section">
                <h1>Bienvenue sur mon Portfolio</h1>
                <p>Ce site vitrine a été conçu comme un espace centralisé pour présenter la diversité et la qualité de mes réalisations. Que vous soyez intéressé par le développement web, des scripts Python complexes, de la gestion d’infrastructures réseau, ou d’autres projets techniques, vous trouverez ici un aperçu détaillé de mes compétences et de mon expérience.
                Chaque projet est une démonstration concrète de ma capacité à transformer une idée en une solution fonctionnelle et aboutie. N’hésitez pas à explorer les différentes catégories pour découvrir les détails techniques, les objectifs atteints, et les technologies utilisées.</p>
            </section>

            {/* Section 2 : À Propos */}
            <section className="about-section">
                <h1>Ȧ Propos de Moi</h1>
                <p>Passionné depuis tout petit par tout ce qui touche à l’informatique, j’ai tout naturellement emprunté des études dans ce domaine. Je suis alors en première année de <strong>BTS CIEL IR à ORT Lyon</strong>.
                Grâce à cette formation, j’apprends différents langages de programmations tel que le python, le c++ (Arduino) ou encore les langages du web (HTML, CSS, JS…). Ma spécialité étant Informatique et Réseaux, je suis aussi formé sur la gestion de clients et serveurs en réseau, tout en passant par son architecture.
                Curieux de nature, j’ai aussi accompli quelques projets personnels que vous pouvez visiter sur mon site.
                Pratiquant du vélo, je sais faire preuve de rigueur et de discipline.
                Si vous souhaitez en savoir plus, vous avez à disposition mon <a href="/mon-cv.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>, et je suis disponible pour échanger sur <a href="https://www.linkedin.com/in/lucas-barbier-dev-res/" target="_blank" rel="noopener noreferrer">LinkedIn.</a></p>
            </section>

            {/* Section 3 : Dernier Projet Dynamique */}
            <section className="latest-project-section">
                <h1>Mon dernier projet</h1>
                {dernierProjet ? (
                    <div className="latest-card">
                        <div className="project-image">
                            <img src={dernierProjet.photo} alt={dernierProjet.nom} />
                        </div>
                        <div className="project-details">
                            <h3>{dernierProjet.nom}</h3>
                            <p className="short-desc">{dernierProjet.desc_breve}</p>
                            <Link to="/projects" className="btn-view-projects">Voir tous mes projets</Link>
                        </div>
                    </div>
                ) : (
                    <p>Chargement du dernier projet...</p>
                )}
            </section>
        </div>
    );
}

export default Home;