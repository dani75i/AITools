export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300
            flex items-center space-x-2
            ${selectedCategory === category.id
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105'
              : 'bg-white/80 dark:bg-slate-700/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md'
            }
          `}
        >
          <span className="text-xl">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}