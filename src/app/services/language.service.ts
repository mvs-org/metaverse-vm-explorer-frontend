import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

export interface Language {
  id: string
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private defaultLanguage = 'en'

  private languages: Language[] = [
    {
      id: 'en',
      name: 'English',
    },
    {
      id: 'zh',
      name: '中文',
    },
  ]

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang(this.defaultLanguage)
    this.set(localStorage.getItem('language') || this.defaultLanguage)
  }

  async init() {
  }

  async set(languageKey: string) {
    for(const lang of this.languages){
      if(lang.id===languageKey){
        await this.translate.use(languageKey).toPromise()
        localStorage.setItem('language', languageKey)
        return
      }
    }
    console.log(`language ${languageKey} not available`)
  }

  currentLanguage(){
    return this.translate.currentLang
  }

  getLanguages() {
    return this.languages
  }

}
