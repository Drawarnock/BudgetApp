const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    plan: {
        type: Schema.Types.ObjectId,
        ref: 'Plan'
    }
});

module.exports = mongoose.model('Action', actionSchema);