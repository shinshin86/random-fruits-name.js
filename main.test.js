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

    describe('If `maxWords` is not a number (strings case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: '1' })).toThrow()
      })

      test('Select Spanish', () => {
        expect(() => getRandomFruitsName('es', { maxWords: '1' })).toThrow()
      })

      test('Select Japanese', () => {
        expect(() => getRandomFruitsName('ja', { maxWords: '1' })).toThrow()
      })

      test('Select Portuguese', () => {
        expect(() => getRandomFruitsName('pt', { maxWords: '1' })).toThrow()
      })
    })

    describe('If `maxWords` is not a number (float case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: 1.23 })).toThrow()
      })

      test('Select Spanish', () => {
        expect(() => getRandomFruitsName('es', { maxWords: 1.23 })).toThrow()
      })

      test('Select Japanese', () => {
        expect(() => getRandomFruitsName('ja', { maxWords: 1.23 })).toThrow()
      })

      test('Select Portuguese', () => {
        expect(() => getRandomFruitsName('pt', { maxWords: 1.23 })).toThrow()
      })
    })

    describe('If `maxWords` is not a number (boolean case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('en', { maxWords: false })).toThrow()
      })

      test('Select Spanish', () => {
        expect(() => getRandomFruitsName('es', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('es', { maxWords: false })).toThrow()
      })

      test('Select Japanese', () => {
        expect(() => getRandomFruitsName('ja', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('ja', { maxWords: false })).toThrow()
      })

      test('Select Portuguese', () => {
        expect(() => getRandomFruitsName('pt', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('pt', { maxWords: false })).toThrow()
      })
    })
  })
})
