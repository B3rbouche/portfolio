import React from 'react';
import './css/Contact.css';

function Contact() {
    const coordonnees = {
        nom: "Barbier",
        prenom: "Lucas",
        email: "lucas.barbier9@sfr.fr",
        linkedin: "https://www.linkedin.com/in/lucas-barbier-dev-res/",
        lieu: "Doissin"
    };

    return (
        <div className="contact-container">
            <h1>Mes Coordonnées</h1>
            <div className="contact-card"> 
                <h3>{coordonnees.prenom} {coordonnees.nom}</h3>
                <p><strong>Email :</strong> <a href={`mailto:${coordonnees.email}`}>{coordonnees.email}</a></p>
                <p><strong>LinkedIn :</strong> <a href={coordonnees.linkedin} target="_blank" rel="noopener noreferrer">Mon profil professionnel</a></p>
                <p><strong>Lieu :</strong> {coordonnees.lieu}</p>
            </div>
        </div>
    );
}

export default Contact;