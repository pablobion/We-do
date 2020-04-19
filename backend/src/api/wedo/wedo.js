const restful = require('node-restful')

const mongoose = restful.mongoose
mongoose.Promise = global.Promise; // ADD THIS
mongoose.connect('localhost:27017/mydb');

const wedoSchema = new mongoose.Schema({
    description: {type: String, require: true},
    done:{type: Boolean, required: true, default: false},
    createAt:{type: Date, default: Date.now}
})

module.exports = restful.model('wedo', wedoSchema)