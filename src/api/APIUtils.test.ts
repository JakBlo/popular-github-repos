import {getPopularRepos} from './APIUtils';

describe('api function test', () => {
  test('get an api response', async () => {
    expect(getPopularRepos('2022-10-01')).toBeTruthy()
  });
});