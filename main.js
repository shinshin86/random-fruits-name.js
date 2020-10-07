const enFruits = require('./langs/en.json');
const esFruits = require('./langs/es.json');
const jaFruits = require('./langs/ja.json');
const ptFruits = require('./langs/pt.json');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomFruitsName = (language = 'en') => {
  let fruits = enFruits.fruits;
  if (language === 'es') fruits = esFruits.fruits;
  if (language === 'ja') fruits = jaFruits.fruits;
  if (language === 'pt') fruits = ptFruits.fruits;
  return fruits[getRandomInt(fruits.length)];
};

module.exports = getRandomFruitsName;
