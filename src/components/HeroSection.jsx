import { useMemo } from 'react'
import { tools } from '../data/tools'
import { useTranslation } from '../hooks/useTranslation'

export default function HeroSection() {
  const { t } = useTranslation()

  const stats = useMemo(() => {
    const categories = new Set(tools.map(tool => tool.category))
    return {
      total: tools.length,
      categories: categories.size
    }
  }, [])

  return (
    <section className="relative mb-6 md:mb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5 rounded-2xl"></div>
      <div className="relative container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200/50 dark:border-blue-800/50">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
              {stats.total} {t('hero.toolsAvailable')}
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Statistiques compactes */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="glass-effect rounded-xl px-4 py-2.5 border border-gray-200/50 dark:border-slate-700/50">
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {stats.total}
              </div>
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {t('hero.totalTools')}
              </div>
            </div>
            <div className="glass-effect rounded-xl px-4 py-2.5 border border-gray-200/50 dark:border-slate-700/50">
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                {stats.categories}
              </div>
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {t('hero.categories')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}