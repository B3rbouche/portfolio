import React, { useState } from 'react';
import './css/Admin.css';

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Champs pour le projet et le profil
    const [nom, setNom] = useState('');
    const [photo, setPhoto] = useState('');
    const [descBreve, setDescBreve] = useState('');
    const [descComplete, setDescComplete] = useState('');
    const [newAdminUser, setNewAdminUser] = useState('');
    const [newAdminPass, setNewAdminPass] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.success) setIsLoggedIn(true);
        else alert("Identifiants incorrects");
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nom, photo, desc_breve: descBreve, desc_complete: descComplete })
        });
        if (res.ok) alert("Projet publié !");
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/user/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: newAdminUser, password: newAdminPass })
        });
        if (res.ok) alert("Profil mis à jour !");
    };

    if (!isLoggedIn) {
        return (
            <div className="admin-container login-box">
                <h1>Connexion Admin</h1>
                <form onSubmit={handleLogin} className="admin-form">
                    <input type="text" placeholder="Utilisateur" onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Déconnexion</button>
            
            <section className="admin-section">
                <h2>Ajouter un Projet</h2>
                <form onSubmit={handleAddProject} className="admin-form">
                    <input type="text" placeholder="Nom du projet" onChange={(e) => setNom(e.target.value)} required />
                    <input type="text" placeholder="URL de l'image (ex: /images/test.jpg)" onChange={(e) => setPhoto(e.target.value)} />
                    <textarea placeholder="Description courte" onChange={(e) => setDescBreve(e.target.value)} required />
                    <textarea placeholder="Description complète" onChange={(e) => setDescComplete(e.target.value)} required />
                    <button type="submit">Publier</button>
                </form>
            </section>

            <section className="admin-section">
                <h2>Modifier mon compte</h2>
                <form onSubmit={handleUpdateProfile} className="admin-form">
                    <input type="text" placeholder="Nouvel utilisateur" onChange={(e) => setNewAdminUser(e.target.value)} required />
                    <input type="password" placeholder="Nouveau mot de passe" onChange={(e) => setNewAdminPass(e.target.value)} required />
                    <button type="submit">Mettre à jour le profil</button>
                </form>
            </section>
        </div>
    );
}

export default Admin;