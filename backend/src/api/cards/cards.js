const restful = require('node-restful')

const mongoose = restful.mongoose

const cardsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    createAt:{type: Date, default: Date.now}
})

module.exports = restful.model('cards', cardsSchema)
