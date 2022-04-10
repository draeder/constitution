const Constitution = require('./')

let constitution = new Constitution()
constitution.on('constitution', data => {
  console.log(data)
})