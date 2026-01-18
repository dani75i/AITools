#!/bin/bash

# Script de déploiement rapide
# Usage: ./deploy.sh [vercel|netlify|surge]

echo "🚀 Déploiement de AI Tools Directory"
echo ""

# Vérifier que le build fonctionne
echo "📦 Construction de l'application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build. Veuillez corriger les erreurs avant de déployer."
    exit 1
fi

echo "✅ Build réussi!"
echo ""

# Déploiement selon l'argument
case "$1" in
    vercel)
        echo "🌐 Déploiement sur Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "⚠️  Vercel CLI non installé. Installez-le avec: npm i -g vercel"
            echo "Ou déployez via https://vercel.com"
        fi
        ;;
    netlify)
        echo "🌐 Déploiement sur Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            echo "⚠️  Netlify CLI non installé. Installez-le avec: npm i -g netlify-cli"
            echo "Ou déployez via https://netlify.com"
        fi
        ;;
    surge)
        echo "🌐 Déploiement sur Surge..."
        if command -v surge &> /dev/null; then
            cd dist
            surge
            cd ..
        else
            echo "⚠️  Surge CLI non installé. Installez-le avec: npm i -g surge"
        fi
        ;;
    *)
        echo "📖 Guide de déploiement:"
        echo ""
        echo "Options disponibles:"
        echo "  ./deploy.sh vercel   - Déployer sur Vercel"
        echo "  ./deploy.sh netlify  - Déployer sur Netlify"
        echo "  ./deploy.sh surge    - Déployer sur Surge"
        echo ""
        echo "💡 Pour plus d'options, consultez DEPLOYMENT.md"
        echo ""
        echo "🌐 Déploiement recommandé:"
        echo "1. Poussez votre code sur GitHub"
        echo "2. Allez sur https://vercel.com"
        echo "3. Importez votre repository"
        echo "4. Cliquez sur 'Deploy' - C'est tout!"
        ;;
esac