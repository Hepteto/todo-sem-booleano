const mongoose = require('mongoose')

const Todo = mongoose.model('ToDo', {
    name: String,
    desc: String,
    category: String,
    // situacao: {
    //     type: Boolean,
    //     default: false
    // }
    situation: String
   
})

module.exports = Todo
