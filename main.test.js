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

    test('Get fruits name text in Dutch', () => {
      expect(getRandomFruitsName('nl')).toBeTruthy()
    })

    test('Get fruits name text in Czech', () => {
      expect(getRandomFruitsName('cs')).toBeTruthy()
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

      test('Select Dutch', () => {
        const fruitsName = getRandomFruitsName('nl', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })

      test('Select French', () => {
        const fruitsName = getRandomFruitsName('fr', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })

      test('Select German', () => {
        const fruitsName = getRandomFruitsName('de', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })

      test('Select Czech', () => {
        const fruitsName = getRandomFruitsName('cs', { maxWords: 1 })
        expect(fruitsName).toBeTruthy()

        // `fruitsName` should  hasn't space
        expect(fruitsName.split(' ').length).toEqual(1)
      })
    })

    describe('If `maxWords: 2` is specified.', () => {
      test('Select English', () => {
        const fruitsName = getRandomFruitsName('en', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

      test('Select Spanish', () => {
        const fruitsName = getRandomFruitsName('es', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

      test('Select Japanese', () => {
        const fruitsName = getRandomFruitsName('ja', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

      test('Select Portuguese', () => {
        const fruitsName = getRandomFruitsName('pt', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

      test('Select Dutch', () => {
        const fruitsName = getRandomFruitsName('nl', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

      test('Select French', () => {
        const fruitsName = getRandomFruitsName('fr', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

      test('Select German', () => {
        const fruitsName = getRandomFruitsName('de', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
      })

      test('Select Czech', () => {
        const fruitsName = getRandomFruitsName('cs', { maxWords: 2 })
        expect(fruitsName).toBeTruthy()

        const wordCount = fruitsName.split(' ').length
        expect(wordCount <= 2).toBeTruthy()
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

      test('Select Dutch', () => {
        expect(() => getRandomFruitsName('nl', { maxWords: '1' })).toThrow()
      })

      test('Select French', () => {
        expect(() => getRandomFruitsName('fr', { maxWords: '1' })).toThrow()
      })

      test('Select German', () => {
        expect(() => getRandomFruitsName('de', { maxWords: '1' })).toThrow()
      })

      test('Select Czech', () => {
        expect(() => getRandomFruitsName('cs', { maxWords: '1' })).toThrow()
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

      test('Select Dutch', () => {
        expect(() => getRandomFruitsName('nl', { maxWords: 1.23 })).toThrow()
      })

      test('Select French', () => {
        expect(() => getRandomFruitsName('nl', { maxWords: 1.23 })).toThrow()
      })

      test('Select German', () => {
        expect(() => getRandomFruitsName('de', { maxWords: 1.23 })).toThrow()
      })

      test('Select Czech', () => {
        expect(() => getRandomFruitsName('cs', { maxWords: 1.23 })).toThrow()
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

      test('Select Dutch', () => {
        expect(() => getRandomFruitsName('nl', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('nl', { maxWords: false })).toThrow()
      })

      test('Select French', () => {
        expect(() => getRandomFruitsName('fr', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('fr', { maxWords: false })).toThrow()
      })

      test('Select German', () => {
        expect(() => getRandomFruitsName('de', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('de', { maxWords: false })).toThrow()
      })

      test('Select Czech', () => {
        expect(() => getRandomFruitsName('cs', { maxWords: true })).toThrow()
        expect(() => getRandomFruitsName('cs', { maxWords: false })).toThrow()
      })
    })

    describe('If `maxWords` is not a number (value is empty case).', () => {
      test('Select English', () => {
        expect(() => getRandomFruitsName('en', { maxWords: '' })).toThrow()
      })

      test('Select Spanish', () => {
        expect(() => getRandomFruitsName('es', { maxWords: '' })).toThrow()
      })

      test('Select Japanese', () => {
        expect(() => getRandomFruitsName('ja', { maxWords: '' })).toThrow()
      })

      test('Select Portuguese', () => {
        expect(() => getRandomFruitsName('pt', { maxWords: '' })).toThrow()
      })

      test('Select Dutch', () => {
        expect(() => getRandomFruitsName('nl', { maxWords: '' })).toThrow()
      })

      test('Select French', () => {
        expect(() => getRandomFruitsName('fr', { maxWords: '' })).toThrow()
      })

      test('Select German', () => {
        expect(() => getRandomFruitsName('de', { maxWords: '' })).toThrow()
      })

      test('Select Czech', () => {
        expect(() => getRandomFruitsName('cs', { maxWords: '' })).toThrow()
      })
    })

    describe('When `maxWords` is specified without `lang`.', () => {
      test('Only specify `maxWords` as an option.', () => {
        expect(() => getRandomFruitsName({ maxWords: 1 })).toThrow()
      })
    })
  })

  describe('If specify a non-existent option', () => {
    test('Specify `test` option', () => {
      expect(() => getRandomFruitsName('en', { test: 1 })).toThrow()
    })
  })
})
