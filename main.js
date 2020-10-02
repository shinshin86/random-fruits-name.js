const enFruits = require('./en.json');
const esFruits = require('./es.json');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomFruitsName = (language = 'en') => {
  let fruits = enFruits.fruits;
  if (language === 'es') fruits = esFruits.fruits;
  return fruits[getRandomInt(fruits.length)];
};

module.exports = getRandomFruitsName;
