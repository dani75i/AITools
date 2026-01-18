import { useTranslation } from '../hooks/useTranslation'

export default function ToolCard({ tool }) {
  const { t } = useTranslation()
  
  const categoryColors = {
    text: 'from-purple-500 to-pink-500',
    image: 'from-blue-500 to-cyan-500',
    music: 'from-green-500 to-emerald-500',
    video: 'from-red-500 to-orange-500',
    code: 'from-indigo-500 to-purple-500',
    voice: 'from-yellow-500 to-amber-500',
  }

  const categoryIcons = {
    text: '✍️',
    image: '🎨',
    music: '🎵',
    video: '🎬',
    code: '💻',
    voice: '🎤',
  }

  // Récupérer la description traduite si disponible, sinon utiliser celle par défaut
  const description = t(`tools.${tool.name}`) || tool.description

  return (
    <div className="card-hover glass-effect rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-700">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[tool.category] || 'from-gray-400 to-gray-600'} flex items-center justify-center text-2xl shadow-lg`}>
          {categoryIcons[tool.category] || '🤖'}
        </div>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
          {t(`categories.${tool.category}`)}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{tool.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 flex-wrap gap-1">
          {tool.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          {t('visit')} →
        </a>
      </div>
    </div>
  )
}