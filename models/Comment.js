const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    authorComment: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    postId: {
        ref: 'Post',
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('Comment', commentSchema)