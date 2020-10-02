const getRandomFruitsName = require('./main');

test('Get fruits name text with default name', () => {
  expect(getRandomFruitsName()).toBeTruthy();
});

test('Get fruits name text in English', () => {
  expect(getRandomFruitsName('en')).toBeTruthy();
});

test('Get fruits name text in Spanish', () => {
  expect(getRandomFruitsName('es')).toBeTruthy();
});
