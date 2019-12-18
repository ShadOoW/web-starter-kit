/* eslint-env jest */
import GithubService from './github';

describe('Github Service', () => {
  let service;

  beforeEach(() => {
    service = new GithubService();
    fetch.resetMocks();
  });

  it('Should init from default state.', () => {
    expect(service.isLoaded).toBe(false);
    expect(service.hasError).toBe(false);
    expect(service.page).toBe(1);
    expect(service.response).toEqual([]);
    expect(service.size).toBe(5);
  });

  it('Should init from serialized state.', () => {
    service = new GithubService({
      response: [{}, {}, {}],
      isLoaded: true,
      hasError: true,
    });
    expect(service.isLoaded).toBe(true);
    expect(service.hasError).toBe(true);
    expect(service.response.length).toBe(3);
  });

  it('Should export serialized state.', () => {
    service = new GithubService({
      response: [{}, {}, {}],
      isLoaded: true,
      hasError: true,
    });
    expect(service.data()).toEqual({
      response: [{}, {}, {}],
      isLoaded: true,
      hasError: true,
    });
  });

  it('Should call endpoint.', async () => {
    const spy = fetch.mockResponseOnce(JSON.stringify([]));

    await service.fetch();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      'https://api.github.com/repos/ShadOoW/web-starter-kit/commits',
    );
  });

  it('Should set hasError if API responds with an object.', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    await service.fetch();
    expect(service.hasError).toBe(true);
  });

  it('Should paginate', async () => {
    fetch.mockResponseOnce(JSON.stringify([{}, {}, {}, {}, {}, {}]));

    await service.fetch();

    expect(service.page).toBe(1);
    expect(service.canShowMore).toBe(true);
    expect(service.commits.length).toBe(5);

    service.showMore();

    expect(service.page).toBe(2);
    expect(service.canShowMore).toBe(false);
    expect(service.commits.length).toBe(6);
  });
});
