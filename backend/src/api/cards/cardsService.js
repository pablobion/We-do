const cards = require('./cards')


cards.methods(['get','post','put','delete'])
cards.updateOptions({new: true, runValidators: true})


module.exports = cards