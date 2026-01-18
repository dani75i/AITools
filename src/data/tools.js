export const tools = [
  // IA de Texte
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Assistant conversationnel IA avancé pour la génération de texte, réponses et créativité.',
    category: 'text',
    url: 'https://chat.openai.com',
    tags: ['GPT', 'Conversation', 'Créatif']
  },
  {
    id: 2,
    name: 'Claude',
    description: 'Assistant IA développé par Anthropic, spécialisé dans la compréhension et la génération de texte.',
    category: 'text',
    url: 'https://claude.ai',
    tags: ['Assistant', 'Analyse', 'Éthique']
  },
  {
    id: 3,
    name: 'Jasper',
    description: 'Plateforme de rédaction IA pour le marketing et le contenu professionnel.',
    category: 'text',
    url: 'https://jasper.ai',
    tags: ['Marketing', 'SEO', 'Business']
  },
  {
    id: 4,
    name: 'Copy.ai',
    description: 'Générateur de contenu IA pour les copywriters et marketeurs.',
    category: 'text',
    url: 'https://copy.ai',
    tags: ['Copywriting', 'Marketing', 'Contenu']
  },
  
  // IA d'Images
  {
    id: 5,
    name: 'Midjourney',
    description: 'Générateur d\'images artistiques par IA avec des résultats époustouflants.',
    category: 'image',
    url: 'https://midjourney.com',
    tags: ['Art', 'Créatif', 'Premium']
  },
  {
    id: 6,
    name: 'DALL-E 3',
    description: 'Générateur d\'images IA d\'OpenAI, intégré à ChatGPT.',
    category: 'image',
    url: 'https://openai.com/dall-e-3',
    tags: ['OpenAI', 'Génération', 'Qualité']
  },
  {
    id: 7,
    name: 'Stable Diffusion',
    description: 'Modèle open-source de génération d\'images par IA, très personnalisable.',
    category: 'image',
    url: 'https://stability.ai',
    tags: ['Open Source', 'Personnalisable', 'Avancé']
  },
  {
    id: 8,
    name: 'Leonardo.ai',
    description: 'Plateforme complète pour la génération et l\'édition d\'images par IA.',
    category: 'image',
    url: 'https://leonardo.ai',
    tags: ['Édition', '3D', 'Gaming']
  },
  {
    id: 9,
    name: 'Runway ML',
    description: 'Outils créatifs IA pour la génération et l\'édition d\'images et vidéos.',
    category: 'image',
    url: 'https://runwayml.com',
    tags: ['Créatif', 'Vidéo', 'Édition']
  },
  
  // IA de Musique
  {
    id: 10,
    name: 'Suno AI',
    description: 'Générateur de musique IA qui crée des chansons complètes à partir de texte.',
    category: 'music',
    url: 'https://suno.ai',
    tags: ['Génération', 'Chansons', 'Vocaux']
  },
  {
    id: 11,
    name: 'Udio',
    description: 'Plateforme de création musicale IA pour générer des compositions originales.',
    category: 'music',
    url: 'https://udio.com',
    tags: ['Composition', 'Original', 'Créatif']
  },
  {
    id: 12,
    name: 'AIVA',
    description: 'Compositeur IA professionnel pour créer des musiques de film et publicités.',
    category: 'music',
    url: 'https://aiva.ai',
    tags: ['Professionnel', 'Cinéma', 'Commercial']
  },
  {
    id: 13,
    name: 'Mubert',
    description: 'Générateur de musique de fond IA pour le streaming et les médias.',
    category: 'music',
    url: 'https://mubert.com',
    tags: ['Streaming', 'Ambiance', 'Royalty-free']
  },
  
  // IA de Vidéos
  {
    id: 14,
    name: 'Runway Gen-2',
    description: 'Générateur de vidéos IA à partir de texte, images ou vidéos existantes.',
    category: 'video',
    url: 'https://runwayml.com',
    tags: ['Génération', 'Texte-à-vidéo', 'Avancé']
  },
  {
    id: 15,
    name: 'Pika Labs',
    description: 'Création de vidéos courtes par IA avec un contrôle créatif avancé.',
    category: 'video',
    url: 'https://pika.art',
    tags: ['Créatif', 'Court', 'Animation']
  },
  {
    id: 16,
    name: 'Synthesia',
    description: 'Création de vidéos avec présentateurs IA pour la formation et le marketing.',
    category: 'video',
    url: 'https://synthesia.io',
    tags: ['Avatars', 'Business', 'Formation']
  },
  {
    id: 17,
    name: 'HeyGen',
    description: 'Plateforme de création de vidéos avec avatars IA multilingues.',
    category: 'video',
    url: 'https://heygen.com',
    tags: ['Avatars', 'Multilingue', 'Business']
  },
  
  // IA de Code
  {
    id: 18,
    name: 'GitHub Copilot',
    description: 'Assistant de programmation IA qui suggère du code en temps réel.',
    category: 'code',
    url: 'https://github.com/features/copilot',
    tags: ['IDE', 'Autocomplétion', 'Développement']
  },
  {
    id: 19,
    name: 'Cursor',
    description: 'Éditeur de code avec IA intégrée pour une programmation assistée avancée.',
    category: 'code',
    url: 'https://cursor.sh',
    tags: ['Éditeur', 'IA', 'Productivité']
  },
  {
    id: 20,
    name: 'Replit Agent',
    description: 'Assistant IA pour le développement et le débogage de code.',
    category: 'code',
    url: 'https://replit.com',
    tags: ['Développement', 'Débogage', 'Cloud']
  },
  {
    id: 21,
    name: 'Codeium',
    description: 'Alternative gratuite à Copilot avec support multi-langages.',
    category: 'code',
    url: 'https://codeium.com',
    tags: ['Gratuit', 'Multi-langages', 'Open Source']
  },
  
  // IA de Voix
  {
    id: 22,
    name: 'ElevenLabs',
    description: 'Synthèse vocale IA ultra-réaliste avec clonage de voix.',
    category: 'voice',
    url: 'https://elevenlabs.io',
    tags: ['Synthèse', 'Clonage', 'Réaliste']
  },
  {
    id: 23,
    name: 'Murf',
    description: 'Générateur de voix off IA pour les vidéos et présentations.',
    category: 'voice',
    url: 'https://murf.ai',
    tags: ['Voix off', 'Commercial', 'Multilingue']
  },
  {
    id: 24,
    name: 'Speechify',
    description: 'Text-to-speech IA avec voix naturelles pour la lecture.',
    category: 'voice',
    url: 'https://speechify.com',
    tags: ['Lecture', 'Accessibilité', 'Productivité']
  },
  {
    id: 25,
    name: 'Play.ht',
    description: 'Générateur de voix IA avec plus de 800 voix dans 142 langues.',
    category: 'voice',
    url: 'https://play.ht',
    tags: ['Multilingue', 'Variété', 'API']
  },
]