# 🌐 Portfolio — Lucas Barbier

Site web personnel développé avec **React** et **TypeScript**, mettant en valeur mes projets, mes compétences et mes informations de contact.

---

## 📋 Table des matières

- [Aperçu](`#aperçu`)
- [Technologies utilisées](`#technologies-utilisées`)
- [Prérequis](`#prérequis`)
- [Installation](`#installation`)
- [Scripts disponibles](`#scripts-disponibles`)
- [TypeScript](`#typescript`)
- [Structure du projet](`#structure-du-projet`)
- [Composants principaux](`#composants-principaux`)
- [Pages](`#pages`)
- [Licence](`#licence`)

---

## 📖 Aperçu

Ce portfolio présente mes réalisations professionnelles et personnelles. Il intègre une interface moderne grâce à **Chakra UI** et des animations fluides via **Framer Motion**.

---

## 🛠️ Technologies utilisées

| Technologie | Version | Rôle |
|---|---|---|
| [React](https://react.dev/) | ^19.2.4 | Framework UI |
| [TypeScript](https://www.typescriptlang.org/) | ^6.0.3 | Typage statique |
| [Chakra UI](https://chakra-ui.com/) | ^3.35.0 | Bibliothèque de composants |
| [Framer Motion](https://www.framer-motion.com/) | ^12.39.0 | Animations |
| [Emotion](https://emotion.sh/) | ^11.x | CSS-in-JS (requis par Chakra UI) |
| [React Router DOM](https://reactrouter.com/) | ^7.13.2 | Routage côté client |
| [React GA4](https://github.com/PriceRunner/react-ga4) | ^3.0.1 | Google Analytics 4 |
| [Web Vitals](https://web.dev/vitals/) | ^2.1.4 | Mesure des performances |

---

## ✅ Prérequis

Avant de commencer, assure-toi d'avoir installé sur ta machine :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [Yarn](https://yarnpkg.com/) (gestionnaire de paquets)

Pour vérifier les versions installées :

```bash
node --version
yarn --version
```

---

## 🚀 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/B3rbouche/portfolio.git
cd portfolio
```

### 2. Installer les dépendances avec Yarn

```bash
yarn install
```

### 3. Lancer le serveur de développement

```bash
yarn start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

---

## 📦 Scripts disponibles

| Commande | Description |
|---|---|
| `yarn start` | Lance le serveur de développement |
| `yarn build` | Compile le projet pour la production dans le dossier `build/` |
| `yarn test` | Exécute les tests unitaires |
| `yarn eject` | Éjecte la configuration Create React App (irréversible) |

---

## 🔷 TypeScript

Ce projet est entièrement rédigé en **TypeScript**, un sur-ensemble typé de JavaScript qui améliore la maintenabilité et la détection d'erreurs à la compilation.

### Configuration (`tsconfig.json`)

- **Cible** : `ES2020` — compatibilité moderne avec les navigateurs récents.
- **JSX** : `react-jsx` — support natif de la syntaxe JSX dans les fichiers `.tsx`.
- **Mode strict** : désactivé (`"strict": false`) pour faciliter la migration progressive.
- **`allowJs`** : activé pour permettre la coexistence de fichiers `.js` et `.ts`.
- **`moduleResolution`** : `node` — résolution des modules à la manière de Node.js.
- **`resolveJsonModule`** : activé pour importer des fichiers `.json` directement.
- **`isolatedModules`** : activé pour une compatibilité optimale avec les outils de build.

### Bonnes pratiques TypeScript appliquées

- Les composants React utilisent l'extension `.tsx`.
- Les types globaux (ex. : déclarations de modules d'images) sont définis dans `src/declarations.d.tsx`.
- Les types des bibliothèques tierces sont installés via `@types/react`, `@types/react-dom`, etc.

---

## 📁 Structure du projet

```
portfolio/
├── public/                  # Fichiers statiques publics
│   ├── docs/
│   │   └── CV Lucas Barbier.pdf
│   ├── images/              # Images du portfolio
│   ├── index.html
│   └── manifest.json
├── src/                     # Code source
│   ├── components/          # Composants réutilisables
│   │   ├── CookieBanner.tsx
│   │   ├── Footerbar.tsx
│   │   ├── Navbar.tsx
│   │   └── css/
│   ├── pages/               # Pages de l'application
│   │   ├── Admin.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Legal.tsx
│   │   ├── Projects.tsx
│   │   └── css/
│   ├── App.tsx              # Composant racine et routage
│   ├── declarations.d.tsx   # Déclarations de types globaux
│   ├── index.tsx            # Point d'entrée de l'application
│   └── reportWebVitals.tsx  # Mesure des performances
├── package.json
├── tsconfig.json
└── yarn.lock
```

---

## 🧩 Composants principaux

### `Navbar.tsx`
Barre de navigation présente sur toutes les pages. Permet de naviguer entre les différentes sections du portfolio.

### `Footerbar.tsx`
Pied de page affiché en bas de chaque page. Contient des informations de contact et des liens utiles.

### `CookieBanner.tsx`
Bandeau de consentement aux cookies, conforme aux réglementations RGPD. S'affiche lors de la première visite de l'utilisateur.

---

## 📄 Pages

| Page | Chemin | Description |
|---|---|---|
| **Accueil** | `Home.tsx` | Page principale de présentation |
| **Projets** | `Projects.tsx` | Liste et détails des projets réalisés |
| **Contact** | `Contact.tsx` | Formulaire et informations de contact |
| **Mentions légales** | `Legal.tsx` | Mentions légales et politique de confidentialité |
| **Administration** | `Admin.tsx` | Page d'administration (accès restreint) |

---

## 📜 Licence

Ce projet est un portfolio personnel. Tous droits réservés © Lucas Barbier.