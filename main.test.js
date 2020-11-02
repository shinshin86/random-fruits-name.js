const getRandomFruitsName = require('./main')

describe('random-fruits-name', () => {
  describe('Basic usage', () => {
    test('Get fruits name text with default name', () => {
      expect(getRandomFruitsName()).toBeTruthy()
    })

    test('Get fruits name text in English', () => {
      expect(getRandomFruitsName('en')).toBeTruthy()
    })

    test('Get fruits name text in Spanish', () => {
      expect(getRandomFruitsName('es')).toBeTruthy()
    })

    test('Get fruits name text in Japanese', () => {
      expect(getRandomFruitsName('ja')).toBeTruthy()
    })

    test('Get fruits name text in Portuguese', () => {
      expect(getRandomFruitsName('pt')).toBeTruthy()
    })
  })

  describe('maxWords option', () => {
    describe('If `maxWords: 1` is specified.', () => {
      test('Select English', () => {
        const fruitsName = getRandomFruitsName('en', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })

      test('Select Spanish', () => {
        const fruitsName = getRandomFruitsName('es', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })

      test('Select Japanese', () => {
        const fruitsName = getRandomFruitsName('ja', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })

      test('Select Portuguese', () => {
        const fruitsName = getRandomFruitsName('pt', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })
    })
  })
})
