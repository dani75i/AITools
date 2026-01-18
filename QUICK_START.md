# ⚡ Déploiement Rapide - 5 Minutes

## Méthode la plus simple : Vercel

### Étape 1 : Préparer votre code
```bash
# Assurez-vous que tout fonctionne
npm run build
npm run preview  # Testez localement
```

### Étape 2 : Pousser sur GitHub
```bash
# Si vous n'avez pas encore de repo Git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git push -u origin main
```

### Étape 3 : Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" et connectez-vous avec GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez votre repository
5. Vercel détectera automatiquement Vite
6. Cliquez sur "Deploy"
7. Attendez 30 secondes... ✨

**C'est tout !** Votre app est maintenant en ligne ! 🎉

---

## Alternative : Netlify (tout aussi simple)

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "Add new site" > "Import an existing project"
4. Sélectionnez votre repo
5. Les paramètres sont déjà configurés (voir `netlify.toml`)
6. Cliquez sur "Deploy site"

---

## Alternative : Surge (sans compte GitHub)

```bash
# Installer Surge
npm install -g surge

# Build et déployer
npm run build
cd dist
surge
```

Suivez les instructions pour créer un compte et choisir un nom de domaine.

---

## 🎯 Résultat

Votre application sera accessible sur :
- Vercel: `https://votre-app.vercel.app`
- Netlify: `https://votre-app.netlify.app`
- Surge: `https://votre-app.surge.sh`

**Tous ces services sont gratuits !** 🆓

---

## 📝 Prochaines étapes

- ✅ Votre app est en ligne
- 🔄 Chaque push sur GitHub déclenchera un nouveau déploiement automatique
- 🌐 Vous pouvez ajouter un nom de domaine personnalisé dans les paramètres
- 📊 Consultez les analytics dans le dashboard de votre plateforme

Pour plus de détails, consultez [DEPLOYMENT.md](./DEPLOYMENT.md)