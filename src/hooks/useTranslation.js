import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

export function useTranslation() {
  const { language } = useLanguage()
  
  const t = (key, params = {}) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (!value || typeof value !== 'string') {
      return key
    }
    
    // Remplacer les paramètres dynamiques {{param}}
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(param => {
        value = value.replace(new RegExp(`{{${param}}}`, 'g'), params[param])
      })
    }
    
    return value
  }
  
  return { t, language }
}