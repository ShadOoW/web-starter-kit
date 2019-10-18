import { observable, action } from 'mobx';
import { i18n } from 'lib/i18n';

class LanguageService {
  @observable language = '';

  constructor(initialData = '') {
    if (initialData) {
      this.language = initialData;
    }
  }

  @action changeLanguage(value) {
    this.language = value;
    i18n.changeLanguage(value);
  }

  data() {
    return {
      language: this.language,
    };
  }
}

export default LanguageService;
