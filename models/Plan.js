const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    budget: {
        type: Number,
        default: 0
    },
    creationDate: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Plan', planSchema);