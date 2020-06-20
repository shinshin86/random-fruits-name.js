# Random Fruits name

Generate the names of random fruits.

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
