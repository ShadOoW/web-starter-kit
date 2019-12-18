import { observable, action, computed } from 'mobx';

class GithubService {
  size = 5;

  @observable response = [];

  @observable page = 1;

  @observable isLoaded = false;

  @observable hasError = true;

  constructor(
    initialData = { response: [], isLoaded: false, hasError: false },
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
    this.page = 1;

    const res = await fetch(
      'https://api.github.com/repos/ShadOoW/web-starter-kit/commits',
    );
    this.response = await res.json();
    if (this.response.constructor === Array) {
      this.isLoaded = true;
    } else {
      this.hasError = true;
    }
  }

  @action showMore() {
    this.page += 1;
  }

  @computed get canShowMore() {
    return this.page * this.size < this.response.length;
  }

  @computed get commits() {
    return this.response.slice(
      0,
      this.page * this.size > this.response.length
        ? this.response.length
        : this.page * this.size,
    );
  }

  data() {
    return {
      response: this.response,
      isLoaded: this.isLoaded,
      hasError: this.hasError,
    };
  }
}

export default GithubService;
