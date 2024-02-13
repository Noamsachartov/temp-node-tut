const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=> {
    console.log(`data recieved ${name}, ID:${id}`)
})

//more than one method for the same event
customEmitter.on('response',()=> {
    console.log(`Some other logic here`)
})

customEmitter.emit('response','john',34)