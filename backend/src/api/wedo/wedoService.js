const wedo = require('./wedo')

wedo.methods(['get','post','put','delete'])
wedo.updateOptions({new: true, runValidators: true})

module.exports = wedo