const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true, 
    },
    tag: {
        type: String,
        default: "Công nghệ"
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('notes', UserSchema);