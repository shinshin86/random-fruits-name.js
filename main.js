const enFruits = require('./langs/en.json')
const esFruits = require('./langs/es.json')
const jaFruits = require('./langs/ja.json')
const ptFruits = require('./langs/pt.json')

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const filterMaxWords = (fruits, maxWords) => {
  if (!Number.isInteger(maxWords))
    throw new Error('The value of maxWords is incorrect.')

  // If `maxWords` is 1, no space is allowed in the string.
  const allowSpaceCount = maxWords - 1

  const filteredFruits = fruits.filter((f) => {
    return f.split(' ').length - 1 <= allowSpaceCount
  })
  return filteredFruits
}

/**
 * Get Random Fruit Name
 * @param {string} language - choose  language of random fruit, default is english: 'en', function ue [ISO-639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
 * @returns {string} return a string with fruits name, example: 'Apple'
 */
const getRandomFruitsName = (language = 'en', option = {}) => {
  if (!['en', 'es', 'ja', 'pt'].includes(language)) {
    throw new Error('Selected language is invalid.')
  }

  const optionKeys = Object.keys(option)
  if (!!optionKeys.length && !optionKeys.includes('maxWords')) {
    throw new Error('Specified option is invalid.')
  }

  let fruits = enFruits.fruits
  if (language === 'es') fruits = esFruits.fruits
  if (language === 'ja') fruits = jaFruits.fruits
  if (language === 'pt') fruits = ptFruits.fruits

  if ('maxWords' in option) fruits = filterMaxWords(fruits, option.maxWords)
  return fruits[getRandomInt(fruits.length)]
}

module.exports = getRandomFruitsName
