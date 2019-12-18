/* eslint-env jest */
import ReadmeService from './readme';

describe('Readme Service', () => {
  let service;

  beforeEach(() => {
    service = new ReadmeService();
    fetch.resetMocks();
  });

  it('Should init from default state.', () => {
    expect(service.isLoaded).toBe(false);
    expect(service.hasError).toBe(false);
    expect(service.response).toEqual('');
  });

  it('Should init from serialized state.', () => {
    service = new ReadmeService({
      response: 'hello',
      isLoaded: true,
      hasError: true,
    });
    expect(service.isLoaded).toBe(true);
    expect(service.hasError).toBe(true);
    expect(service.response).toBe('hello');
  });

  it('Should export serialized state.', () => {
    service = new ReadmeService({
      response: 'hello',
      isLoaded: true,
      hasError: true,
    });
    expect(service.data()).toEqual({
      response: 'hello',
      isLoaded: true,
      hasError: true,
    });
  });

  it('Should call endpoint.', async () => {
    const spy = fetch.mockResponseOnce(JSON.stringify([]));

    await service.fetch();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      'https://raw.githubusercontent.com/ShadOoW/web-starter-kit/master/README.md',
    );
  });
});
