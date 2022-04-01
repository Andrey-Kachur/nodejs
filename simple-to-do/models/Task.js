const { model, Schema } = require('mongoose')


const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must have name'],
        trim: true,
        maxlength: [20, 'name cant be more than 20']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = model('Task', TaskSchema)