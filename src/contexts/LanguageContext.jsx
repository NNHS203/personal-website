import React, { createContext, useState, useContext } from 'react'
import { translations } from '../locales/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const value = {
    language,
    setLanguage,
    t: (key) => {
      try {
        const keys = key.split('.')
        let translation = translations[language]
        if (!translation) {
          console.warn(`Translation not found for language: ${language}`)
          translation = translations['en'] // 使用英语作为后备语言
        }
        for (const k of keys) {
          if (translation === undefined || translation === null) {
            console.warn(`Translation key not found: ${key}`)
            return key
          }
          translation = translation[k]
        }
        return translation || key
      } catch (error) {
        console.error(`Error getting translation for key: ${key}`, error)
        return key
      }
    }
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}