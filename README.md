# AI Tools Directory

Une application web moderne et élégante pour découvrir et lister des outils d'intelligence artificielle par catégories.

## 🚀 Fonctionnalités

- **Interface moderne** : Design épuré avec animations fluides
- **Filtrage par catégories** : Texte, Images, Musique, Vidéos, Code, Voix
- **Cartes interactives** : Chaque outil présenté dans une carte élégante
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Design glassmorphism** : Effet de verre moderne avec backdrop blur

## 🛠️ Technologies

- **React 18** : Framework JavaScript moderne
- **Vite** : Build tool ultra-rapide
- **Tailwind CSS** : Framework CSS utilitaire
- **PostCSS** : Traitement CSS avancé

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 🎨 Catégories d'outils

- ✍️ **Texte** : ChatGPT, Claude, Jasper, Copy.ai
- 🎨 **Images** : Midjourney, DALL-E, Stable Diffusion, Leonardo.ai
- 🎵 **Musique** : Suno AI, Udio, AIVA, Mubert
- 🎬 **Vidéos** : Runway, Pika Labs, Synthesia, HeyGen
- 💻 **Code** : GitHub Copilot, Cursor, Replit, Codeium
- 🎤 **Voix** : ElevenLabs, Murf, Speechify, Play.ht

## 📝 Structure du projet

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── ToolCard.jsx
│   ├── data/
│   │   └── tools.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Utilisation

1. Lancez l'application avec `npm run dev`
2. Naviguez vers `http://localhost:5173`
3. Cliquez sur les catégories pour filtrer les outils
4. Cliquez sur "Visiter →" pour accéder à l'outil

## 🚀 Déploiement

Votre application est prête à être déployée ! Consultez le fichier [DEPLOYMENT.md](./DEPLOYMENT.md) pour un guide complet.

### Déploiement rapide avec Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Cliquez sur "Deploy" - C'est tout ! 🎉

Votre application sera en ligne en quelques secondes avec :
- ✅ HTTPS automatique
- ✅ Déploiement automatique à chaque push
- ✅ CDN global
- ✅ URL personnalisable

### Autres options

- **Netlify** : [netlify.com](https://netlify.com)
- **Cloudflare Pages** : [pages.cloudflare.com](https://pages.cloudflare.com)
- **Surge.sh** : Déploiement ultra-rapide via CLI

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions détaillées.

## 📄 Licence

MIT