import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { toggleLanguage } = useLanguage()
  const { t, language } = useTranslation()

  return (
    <header className="glass-effect shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('subtitle')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">{t('tagline')}</span>
            </div>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-700/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
              title={language === 'fr' ? t('switchToEnglish') : t('switchToFrench')}
            >
              {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-white/80 dark:bg-slate-700/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              title={theme === 'light' ? t('enableDarkMode') : t('enableLightMode')}
            >
              {theme === 'light' ? (
                <span className="text-xl">🌙</span>
              ) : (
                <span className="text-xl">☀️</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}