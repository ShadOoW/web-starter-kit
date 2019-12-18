import { observable, action } from 'mobx';

class ReadmeService {
  @observable response = [];

  @observable isLoaded = false;

  @observable hasError = false;

  constructor(
    initialData = { response: '', isLoaded: false, hasError: false },
  ) {
    if (initialData) {
      this.response = initialData.response;
      this.isLoaded = initialData.isLoaded;
      this.hasError = initialData.hasError;
    }
  }

  @action async fetch() {
    this.isLoaded = false;
    this.hasError = false;

    const resp = await fetch(
      'https://raw.githubusercontent.com/ShadOoW/web-starter-kit/master/README.md',
    );
    this.response = await resp.text();
    this.isLoaded = true;
  }

  data() {
    return {
      response: this.response,
      isLoaded: this.isLoaded,
      hasError: this.hasError,
    };
  }
}

export default ReadmeService;
