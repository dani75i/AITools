import { useState } from 'react'
import Header from './components/Header'
import CategoryFilter from './components/CategoryFilter'
import ToolCard from './components/ToolCard'
import { tools } from './data/tools'
import { useTranslation } from './hooks/useTranslation'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
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

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('exploreTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('exploreDescription')}
          </p>
        </div>
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {t('noToolsFound')}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App