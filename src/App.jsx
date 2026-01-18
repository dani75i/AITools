import { useState, useMemo } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryFilter from './components/CategoryFilter'
import SearchBar from './components/SearchBar'
import ToolCard from './components/ToolCard'
import { tools } from './data/tools'
import { useTranslation } from './hooks/useTranslation'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { t } = useTranslation()

  const categories = [
    { id: 'all', name: t('categories.all'), icon: '🔍' },
    { id: 'text', name: t('categories.text'), icon: '✍️' },
    { id: 'image', name: t('categories.image'), icon: '🎨' },
    { id: 'music', name: t('categories.music'), icon: '🎵' },
    { id: 'video', name: t('categories.video'), icon: '🎬' },
    { id: 'code', name: t('categories.code'), icon: '💻' },
    { id: 'voice', name: t('categories.voice'), icon: '🎤' },
  ]

  const filteredTools = useMemo(() => {
    let result = tools

    // Filtrer par catégorie
    if (selectedCategory !== 'all') {
      result = result.filter(tool => tool.category === selectedCategory)
    }

    // Filtrer par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter(tool => {
        const name = tool.name.toLowerCase()
        const description = (t(`tools.${tool.name}`) || tool.description).toLowerCase()
        const tags = tool.tags.join(' ').toLowerCase()
        const category = t(`categories.${tool.category}`).toLowerCase()
        
        return name.includes(query) || 
               description.includes(query) || 
               tags.includes(query) ||
               category.includes(query)
      })
    }

    return result
  }, [selectedCategory, searchQuery, t])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Barre de recherche sticky */}
        <div className="sticky top-16 md:top-20 z-40 mb-4 -mx-4 px-4 py-3 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-slate-900/80 dark:to-slate-900 backdrop-blur-sm">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </div>
        
        {/* Filtres par catégorie */}
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Résultats */}
        {searchQuery && filteredTools.length > 0 && (
          <div className="mb-6 px-4 py-3 glass-effect rounded-xl border border-gray-200/50 dark:border-slate-700/50 max-w-2xl">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {filteredTools.length} {filteredTools.length === 1 ? t('results.singular') : t('results.plural')} {t('results.for')} "{searchQuery}"
            </div>
          </div>
        )}

        {/* Grille d'outils */}
        <div className="mt-8">
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list">
              {filteredTools.map((tool, index) => (
                <div 
                  key={tool.id} 
                  role="listitem"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className="animate-fadeIn"
                >
                  <ToolCard tool={tool} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700">
                <svg className="w-10 h-10 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {t('noToolsFound')}
              </h3>
              {(searchQuery || selectedCategory !== 'all') && (
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
                  {t('tryDifferentSearch')}
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App