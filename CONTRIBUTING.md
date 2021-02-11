## How to Contribute

I will write about how to contributing to random-fruits-name.js.
If you are going to make a contribution, this is one guide.

We're looking forward to your contributions!

## Table of contents

- [If you are going to create a PR to add a language of support](#if-you-are-going-to-create-a-pr-to-add-a-language-of-support)

## If you are going to create a PR to add a language of support

If you want to create a PR to add to supported language, you can make the following modifications to the source code.

Of course, you do not have to follow this method.
If there is a smarter way, you are welcome to choose it.

In adding languages, you could refer to [this PR](https://github.com/shinshin86/random-fruits-name.js/pull/15/files) modification method.

### 1. Add lang file

First, you need to add the language file.
Please add it in the langs directory.

we are using [ISO-639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) as code for differents languages

```
langs/[new lang].json
```

The inside of the json file is structured like this.

```json
{
  "fruits": [
    "Apple",
    "Apricot",
    "Avocado",
    .
    .
    .
  ]
}
```

### 2. Fix main.js

Modify the `main.js` file in this way.

```diff
diff --git a/main.js b/main.js
--- a/main.js
+++ b/main.js
@@ -6,6 +6,7 @@ const nlFruits = require('./langs/nl.json')
 const frFruits = require('./langs/fr.json')
 const deFruits = require('./langs/de.json')
 const csFruits = require('./langs/cs.json')
+const newLangFruits = require('./langs/newlang.json')

 const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

@@ -28,7 +29,7 @@ const filterMaxWords = (fruits, maxWords) => {
  * @returns {string} return a string with fruits name, example: 'Apple'
  */
 const getRandomFruitsName = (language = 'en', option = {}) => {
-  if (!['en', 'es', 'ja', 'pt', 'nl', 'fr', 'de', 'cs'].includes(language)) {
+  if (!['en', 'es', 'ja', 'pt', 'nl', 'fr', 'de', 'cs', 'newlang'].includes(language)) {
     throw new Error('Selected language is invalid.')
   }

@@ -45,6 +46,7 @@ const getRandomFruitsName = (language = 'en', option = {}) => {
   if (language === 'fr') fruits = frFruits.fruits
   if (language === 'de') fruits = deFruits.fruits
   if (language === 'cs') fruits = csFruits.fruits
+  if (language === 'newlang') fruits = newLangFruits.fruits

   if ('maxWords' in option) fruits = filterMaxWords(fruits, option.maxWords)
   return fruits[getRandomInt(fruits.length)]
```

### 3.Fix main.test.js

Modify the `main.test.js` file in this way.

```diff
diff --git a/main.test.js b/main.test.js
--- a/main.test.js
+++ b/main.test.js
@@ -29,6 +29,10 @@ describe('random-fruits-name', () => {
     test('Get fruits name text in Czech', () => {
       expect(getRandomFruitsName('cs')).toBeTruthy()
     })
+
+    test('Get fruits name text in NewLang', () => {
+      expect(getRandomFruitsName('newlang')).toBeTruthy()
+    })
   })

   describe('maxWords option', () => {
@@ -96,6 +100,14 @@ describe('random-fruits-name', () => {
         // `fruitsName` should  hasn't space
         expect(fruitsName.split(' ').length).toEqual(1)
       })
+
+      test('Select NewLang', () => {
+        const fruitsName = getRandomFruitsName('newlang', { maxWords: 1 })
+        expect(fruitsName).toBeTruthy()
+
+        // `fruitsName` should  hasn't space
+        expect(fruitsName.split(' ').length).toEqual(1)
+      })
     })

     describe('If `maxWords: 2` is specified.', () => {
@@ -162,6 +174,14 @@ describe('random-fruits-name', () => {
         const wordCount = fruitsName.split(' ').length
         expect(wordCount <= 2).toBeTruthy()
       })
+
+      test('Select NewLang', () => {
+        const fruitsName = getRandomFruitsName('newlang', { maxWords: 2 })
+        expect(fruitsName).toBeTruthy()
+
+        const wordCount = fruitsName.split(' ').length
+        expect(wordCount <= 2).toBeTruthy()
+      })
     })

     describe('If `maxWords` is not a number (strings case).', () => {
@@ -196,6 +216,10 @@ describe('random-fruits-name', () => {
       test('Select Czech', () => {
         expect(() => getRandomFruitsName('cs', { maxWords: '1' })).toThrow()
       })
+
+      test('Select NewLang', () => {
+        expect(() => getRandomFruitsName('newlang', { maxWords: '1' })).toThrow()
+      })
     })

     describe('If `maxWords` is not a number (float case).', () => {
@@ -230,6 +254,10 @@ describe('random-fruits-name', () => {
       test('Select Czech', () => {
         expect(() => getRandomFruitsName('cs', { maxWords: 1.23 })).toThrow()
       })
+
+      test('Select NewLang', () => {
+        expect(() => getRandomFruitsName('newlang', { maxWords: 1.23 })).toThrow()
+      })
     })

     describe('If `maxWords` is not a number (boolean case).', () => {
@@ -272,6 +300,11 @@ describe('random-fruits-name', () => {
         expect(() => getRandomFruitsName('cs', { maxWords: true })).toThrow()
         expect(() => getRandomFruitsName('cs', { maxWords: false })).toThrow()
       })
+
+      test('Select NewLang', () => {
+        expect(() => getRandomFruitsName('newlang', { maxWords: true })).toThrow()
+        expect(() => getRandomFruitsName('newlang', { maxWords: false })).toThrow()
+      })
     })

     describe('If `maxWords` is not a number (value is empty case).', () => {
@@ -306,6 +339,10 @@ describe('random-fruits-name', () => {
       test('Select Czech', () => {
         expect(() => getRandomFruitsName('cs', { maxWords: '' })).toThrow()
       })
+
+      test('Select NewLang', () => {
+        expect(() => getRandomFruitsName('newlang', { maxWords: '' })).toThrow()
+      })
     })

     describe('When `maxWords` is specified without `lang`.', () => {
```

Make sure that the tests you added here pass.
The test command can be run with this command.

```sh
npm run test
```

### 4. Fix README.md

Modify the `README.md` file in this way.

```diff
diff --git a/README.md b/README.md
--- a/README.md
+++ b/README.md
@@ -37,6 +37,7 @@ function App() {
       <p>{getRandomFruitsName('fr')}</p> {/* Pomme */}
       <p>{getRandomFruitsName('de')}</p> {/* Apfel */}
       <p>{getRandomFruitsName('cs')}</p> {/* Jablko */}
+      <p>{getRandomFruitsName('newlang')}</p> {/* Apple */}
     </div>
   )
 }
@@ -57,6 +58,7 @@ console.log(getRandomFruitsName('nl')) // Appel
 console.log(getRandomFruitsName('fr')) // Pomme
 console.log(getRandomFruitsName('de')) // Apfel
 console.log(getRandomFruitsName('cs')) // Jablko
+console.log(getRandomFruitsName('newlang')) // Apple
```

```diff
diff --git a/README.md b/README.md
--- a/README.md
+++ b/README.md
#### Languages Supported
| Languages  | Code Lang |
| ---------- | --------- |
| English    | en        |
| Spanish    | es        |
| Japanese   | ja        |
| Portuguese | pt        |
| Dutch      | nl        |
| French     | fr        |
| German     | de        |
| Czech      | cs        |
+| NewLang    | newlang   |

we are using [ISO-639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) as code for differents languages

```



### 5.Format

This is the last one. Format the code you have added. This is necessary for the appearance of the code.
Run this command.

```sh
npm run fmt
````
