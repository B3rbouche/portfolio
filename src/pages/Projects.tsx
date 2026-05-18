import React, { useState, useEffect } from 'react';
import './css/Projects.css';

function Projects() {
    const [listeProjets, setListeProjets] = useState([]);
    const [projetSelectionne, setProjetSelectionne] = useState(null); // État pour la modale

    useEffect(() => {
        // On appelle ton API (le Reverse Proxy Apache fera le lien vers le port 5000)
        fetch('/api/projects')
            .then(response => {
                if (!response.ok) throw new Error('Erreur réseau');
                return response.json();
            })
            .then(data => {
                setListeProjets(data); // On met les vrais projets de la BDD dans l'état
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des projets:", error);
            });
    }, []);

    return (
        <div className="projects-container">
            <h1>Mes Réalisations</h1>
            
            <div className="projects-grid">
                {listeProjets.map((p) => (
                    <div key={p.id} className="project-card" onClick={() => setProjetSelectionne(p)}>
                        <div className="project-card-img">
                            <img src={p.photo} alt={p.nom} />
                        </div>
                        <h3>{p.nom}</h3>
                        <p>{p.desc_breve}</p>
                        <span className="read-more">En savoir plus...</span>
                    </div>
                ))}
            </div>

            {/* LA MODALE (s'affiche uniquement si un projet est sélectionné) */}
            {projetSelectionne && (
                <div className="modal-overlay" onClick={() => setProjetSelectionne(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setProjetSelectionne(null)}>&times;</button>
                        
                        <img src={projetSelectionne.photo} alt={projetSelectionne.nom} className="modal-image" />
                        
                        <div className="modal-body">
                            <h2>{projetSelectionne.nom}</h2>
                            <div className="modal-complete-desc" dangerouslySetInnerHTML={{ __html: projetSelectionne.desc_complete }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;