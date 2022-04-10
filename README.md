# Constitution
Return the text of the United States of America Constitution

## Usage
`npm i constitution`

## Example
```js
const Constitution = require('constitution')

let constitution = new Constitution()
constitution.on('constitution', data => {
  console.log(data)
})
```
