const restful = require('node-restful')

const mongoose = restful.mongoose
mongoose.Promise = global.Promise; // ADD THIS

mongoose.connect('localhost:27017/mydb')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

const wedoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    idcard:{type: String, required: true},
    done:{type: Boolean, required: true, default: false},
    createAt:{type: Date, default: Date.now},
})


module.exports = restful.model('wedo', wedoSchema)

