import React from 'react';
import './css/Legal.css'; // On va créer ce petit fichier pour le style

function Legal() {
    return (
        <div className="legal-container">
            <div className="legal-card">
                <h1>Mentions Légales</h1>
                
                <section>
                    <h2>1. Édition du site</h2>
                    <p>
                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                        il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                    </p>
                    <ul>
                        <li><strong>Propriétaire du site :</strong> Lucas Barbier</li>
                        <li><strong>Contact :</strong> lucas.barbier9@sfr.fr</li>
                        <li><strong>Directeur de la publication :</strong> Lucas Barbier</li>
                    </ul>
                </section>

                <section>
                    <h2>2. Hébergement</h2>
                    <p>
                        Le site est hébergé sur un serveur privé (LXC).
                    </p>
                    <ul>
                        <li><strong>Hébergeur de l'infrastructure :</strong> Auto-hébergement</li>
                        <li><strong>Adresse de l'hébergeur :</strong> Domicile du propriétaire (adresse privée)</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Propriété intellectuelle et contrefaçons</h2>
                    <p>
                        Lucas Barbier est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site internet, 
                        notamment les textes, images (dont le logo "LB"), graphismes, logos, vidéos, architecture, icônes et sons.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                        quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Lucas Barbier.
                    </p>
                </section>

                <section>
                    <h2>4. Limitations de responsabilité</h2>
                    <p>
                        Lucas Barbier ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site. 
                        Lucas Barbier décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur son portfolio.
                    </p>
                </section>

                <section>
                    <h2>5. CNIL et gestion des données personnelles</h2>
                    <p>
                        Le site ne collecte pas de données personnelles à des fins commerciales. Dans le cas d'un formulaire de contact, 
                        les données transmises (Nom, Email) sont uniquement utilisées pour répondre à la demande de l'utilisateur.
                    </p>
                    <p>
                        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur dispose d’un droit d’accès, 
                        de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à l'éditeur du site.
                    </p>
                </section>

                <section>
                    <h2>6. Liens hypertextes et cookies</h2>
                    <p>
                        Le site contient des liens hypertextes vers d’autres sites (LinkedIn, projets externes, fichiers PDF). 
                        Lucas Barbier n’exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité à ce sujet.
                    </p>
                    <p>
                        La navigation sur le site peut provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur 
                        (notamment pour la mémorisation du thème Clair/Sombre via le stockage local).
                    </p>
                </section>

                <section>
                    <h2>7. Droit applicable et attribution de juridiction</h2>
                    <p>
                        Tout litige en relation avec l’utilisation du site est soumis au droit français. 
                        En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Legal;