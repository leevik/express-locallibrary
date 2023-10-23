const mongoose = require("mongoose")

const schema = mongoose.Schema;

const genreSchema = new schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    }
})

genreSchema.virtual("url").get(function() {
    return `/genre/${this._id}`
})

module.exports = mongoose.model("genre", genreSchema)