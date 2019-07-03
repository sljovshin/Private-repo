const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'private'
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }],
    allowComments: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('article', ArticleSchema)