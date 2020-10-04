# Random Fruits name

[![Build Status](https://travis-ci.org/shinshin86/random-fruits-name.js.svg?branch=master)](https://travis-ci.org/shinshin86/random-fruits-name.js)

Generate the names of random fruits.

The name of fruits refers to this page.
[Wikijunior:Fruit Alphabet/Complete](https://en.wikibooks.org/wiki/Wikijunior:Fruit_Alphabet/Complete)

## Install

```bash
npm install random-fruits-name
# or
yarn add random-fruits-name
```

## Usage

### React

```bash
import React from 'react';
import getRandomFruitsName from 'random-fruits-name'

function App() {
  return (
    <div>
      <p>{getRandomFruitsName()}</p>
    </div>
  );
}

export default App;
```

### Node.js

```javascript
const getRandomFruitsName = require('random-fruits-name');
console.log(getRandomFruitsName());
```

Now with differents languages, using [ISO-639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

```javascript
const getRandomFruitsName = require('random-fruits-name');
console.log(getRandomFruitsName('en')); // Apples;
console.log(getRandomFruitsName('es')); // Manzana;
console.log(getRandomFruitsName('ja')); // りんご;
```

_currently only support 'en' and 'es' and 'ja' languages, but you can make a Pull Request and add the language you want_

## Development

Test

```bash
npm run test
```

Code format

```bash
npm run fmt
```
