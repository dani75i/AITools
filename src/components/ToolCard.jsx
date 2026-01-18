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
    <div className="card-hover glass-effect rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl flex flex-col h-full transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 group">
      {/* Header avec icône et badge */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categoryColors[tool.category] || 'from-gray-400 to-gray-600'} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {categoryIcons[tool.category] || '🤖'}
          </div>
          <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-200/50 dark:border-blue-700/50">
            {t(`categories.${tool.category}`)}
          </span>
        </div>
        
        {/* Titre et description */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {tool.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 min-h-[3.75rem]">
          {description}
        </p>
      </div>
      
      {/* Tags - au milieu */}
      <div className="px-6 py-3 flex items-center flex-wrap gap-2 border-t border-gray-100 dark:border-slate-700/50">
        {tool.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2.5 py-1 bg-gray-100/80 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200/50 dark:border-slate-600/50"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Bouton en bas */}
      <div className="p-6 pt-4 mt-auto">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group/btn"
        >
          <span>{t('visit')}</span>
          <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}