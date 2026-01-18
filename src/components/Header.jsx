import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { toggleLanguage } = useLanguage()
  const { t, language } = useTranslation()

  return (
    <header className="glass-effect shadow-sm dark:shadow-slate-900/20 sticky top-0 z-50 border-b border-gray-200/50 dark:border-slate-700/50 backdrop-blur-xl bg-white/95 dark:bg-slate-900/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:scale-105">
                <span className="text-xl md:text-2xl">🤖</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
                {t('title')}
              </h1>
              <p className="hidden sm:block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t('subtitle')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden lg:flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/30">
              <span className="text-xs md:text-sm font-medium text-blue-700 dark:text-blue-300">{t('tagline')}</span>
            </div>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 md:px-4 py-2 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 font-medium text-xs md:text-sm shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              title={language === 'fr' ? t('switchToEnglish') : t('switchToFrench')}
              aria-label={language === 'fr' ? t('switchToEnglish') : t('switchToFrench')}
            >
              {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              title={theme === 'light' ? t('enableDarkMode') : t('enableLightMode')}
              aria-label={theme === 'light' ? t('enableDarkMode') : t('enableLightMode')}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}