/* eslint-env jest */
import { i18n } from 'lib/i18n';
import { setDirection } from 'utils';
import LanguageService from './language';

jest.mock('lib/i18n');
jest.mock('utils');

describe('Github Service', () => {
  let service;

  beforeEach(() => {
    service = new LanguageService();
  });

  it('Should init from default state.', () => {
    expect(service.language).toBe('');
  });

  it('Should init from serialized state.', () => {
    service = new LanguageService({
      language: 'my',
    });
    expect(service.language).toBe('my');
  });

  it('Should export serialized state.', () => {
    service = new LanguageService({
      language: 'my',
    });
    expect(service.data()).toEqual({ language: 'my' });
  });

  it('Should change language.', () => {
    service.changeLanguage('ru');
    expect(service.language).toBe('ru');
    expect(i18n.changeLanguage).toHaveBeenCalledTimes(1);
    expect(i18n.changeLanguage).toHaveBeenCalledWith('ru');
    expect(setDirection).toHaveBeenCalledTimes(1);
    expect(setDirection).toHaveBeenCalledWith('ru');
  });
});
