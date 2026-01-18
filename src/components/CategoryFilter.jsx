export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`
            px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all duration-200
            flex items-center space-x-2 text-sm md:text-base
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900
            ${selectedCategory === category.id
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
              : 'glass-effect text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700/80 hover:shadow-md hover:scale-105'
            }
          `}
          aria-pressed={selectedCategory === category.id}
        >
          <span className="text-lg md:text-xl">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}