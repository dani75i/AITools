# 🚀 Guide de Déploiement

Ce guide vous explique comment déployer votre application AI Tools Directory sur différentes plateformes.

## 📋 Prérequis

1. Avoir un compte GitHub (recommandé)
2. Avoir Node.js installé localement
3. Avoir Git installé

## 🎯 Option 1 : Vercel (Recommandé - Le plus simple)

Vercel est la plateforme la plus simple pour déployer des applications React/Vite.

### Étapes :

1. **Préparer votre projet**
   ```bash
   # Assurez-vous que votre code est prêt
   npm run build
   ```

2. **Créer un compte sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub

3. **Déployer**
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Vite
   - Cliquez sur "Deploy"
   - Votre app sera en ligne en quelques secondes !

4. **Configuration automatique**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

**Avantages :**
- ✅ Gratuit
- ✅ Déploiement automatique à chaque push
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Prévisualisation des pull requests

---

## 🎯 Option 2 : Netlify

Netlify est une excellente alternative à Vercel.

### Étapes :

1. **Créer un compte sur Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Connectez-vous avec GitHub

2. **Déployer**
   - Cliquez sur "Add new site" > "Import an existing project"
   - Sélectionnez votre repository GitHub
   - Configurez :
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Cliquez sur "Deploy site"

3. **Configuration via fichier (optionnel)**
   - Créez un fichier `netlify.toml` à la racine (déjà créé pour vous)

**Avantages :**
- ✅ Gratuit
- ✅ Déploiement automatique
- ✅ HTTPS automatique
- ✅ Formulaires et fonctions serverless

---

## 🎯 Option 3 : Cloudflare Pages

Cloudflare Pages offre d'excellentes performances.

### Étapes :

1. **Créer un compte sur Cloudflare**
   - Allez sur [pages.cloudflare.com](https://pages.cloudflare.com)
   - Connectez-vous avec GitHub

2. **Déployer**
   - Cliquez sur "Create a project"
   - Sélectionnez votre repository
   - Configurez :
     - Framework preset: `Vite`
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Cliquez sur "Save and Deploy"

**Avantages :**
- ✅ Gratuit
- ✅ CDN ultra-rapide
- ✅ Déploiement automatique

---

## 🎯 Option 4 : GitHub Pages

GitHub Pages est gratuit mais nécessite une configuration supplémentaire.

### Étapes :

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Ajouter les scripts dans package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Configurer Vite pour GitHub Pages**
   - Modifiez `vite.config.js` pour ajouter `base: '/nom-du-repo/'`

4. **Déployer**
   ```bash
   npm run deploy
   ```

5. **Activer GitHub Pages**
   - Allez dans Settings > Pages de votre repo
   - Sélectionnez la branche `gh-pages`

**Note :** GitHub Pages nécessite que votre repo soit public (gratuit) ou un compte GitHub Pro.

---

## 🎯 Option 5 : Surge.sh (Simple et rapide)

Surge est parfait pour un déploiement rapide.

### Étapes :

1. **Installer Surge**
   ```bash
   npm install -g surge
   ```

2. **Build votre app**
   ```bash
   npm run build
   ```

3. **Déployer**
   ```bash
   cd dist
   surge
   ```
   - Suivez les instructions pour créer un compte
   - Choisissez un nom de domaine (ex: ai-tools-directory.surge.sh)

**Avantages :**
- ✅ Très rapide
- ✅ Gratuit
- ✅ Pas besoin de compte GitHub

---

## 🔧 Configuration pour le déploiement

### Vérifier le build localement

Avant de déployer, testez votre build :

```bash
# Construire l'application
npm run build

# Prévisualiser le build
npm run preview
```

### Variables d'environnement

Si vous avez besoin de variables d'environnement, créez un fichier `.env` :

```env
VITE_API_URL=https://api.example.com
```

Les variables doivent commencer par `VITE_` pour être accessibles dans le code.

---

## 📝 Checklist avant déploiement

- [ ] Tester le build localement (`npm run build`)
- [ ] Vérifier que toutes les fonctionnalités marchent
- [ ] Tester le mode sombre/clair
- [ ] Tester le changement de langue
- [ ] Vérifier la responsivité mobile
- [ ] Vérifier que tous les liens fonctionnent
- [ ] Optimiser les images si nécessaire

---

## 🆘 Dépannage

### Erreur 404 sur les routes
- Vérifiez que votre serveur est configuré pour servir `index.html` sur toutes les routes
- Vercel et Netlify le font automatiquement

### Assets non chargés
- Vérifiez que le `base` dans `vite.config.js` correspond à votre chemin de déploiement

### Build échoue
- Vérifiez les logs de build
- Assurez-vous que toutes les dépendances sont dans `package.json`

---

## 🌐 URLs de déploiement

Une fois déployé, votre application sera accessible via une URL comme :
- Vercel: `https://votre-app.vercel.app`
- Netlify: `https://votre-app.netlify.app`
- Cloudflare: `https://votre-app.pages.dev`
- Surge: `https://votre-app.surge.sh`

---

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Netlify](https://docs.netlify.com)
- [Documentation Cloudflare Pages](https://developers.cloudflare.com/pages)
- [Documentation Vite](https://vitejs.dev/guide/static-deploy.html)