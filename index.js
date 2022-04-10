const fs = require('fs')
const EventEmitter = require('events').EventEmitter

let data = fs.readFileSync('constitution.json', 'utf8')
const Constitution = function(params){
  let constitution = this
  let events = new EventEmitter()
  constitution.emit = events.emit.bind(events)
  constitution.on = events.on.bind(events)
  constitution.once = events.once.bind(events)
  constitution.off = events.off.bind(events)

  try {
    setTimeout(()=>{
      constitution.emit('constitution', data)
    }, 1)
  } catch (err) {
    throw new Error(err)
  }
  return constitution
}

module.exports = Constitution