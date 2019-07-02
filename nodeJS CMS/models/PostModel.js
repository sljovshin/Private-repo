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
    creationDate: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Article', ArticleSchema)