const getRandomFruitsName = require('./main');

test('Get fruits name text', () => {
  expect(getRandomFruitsName()).toBeTruthy();
});
