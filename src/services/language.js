import { observable, action } from 'mobx';
import { i18n } from 'lib/i18n';
import { setDirection } from 'utils';

class LanguageService {
  @observable language = '';

  constructor(initialData = '') {
    if (initialData) {
      this.language = initialData.language;
    }
  }

  @action changeLanguage(value) {
    this.language = value;
    i18n.changeLanguage(value);
    setDirection(value);
  }

  data() {
    return {
      language: this.language,
    };
  }
}

export default LanguageService;
