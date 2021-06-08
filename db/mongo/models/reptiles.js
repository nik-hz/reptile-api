const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const reptileSchema = new Schema({
    type_species: {
        type: String,
        required: false,
    },
    Species: {
        type: String,
        required: [true, 'snake needs a species'],
    },
    Author: {
        type: String,
        required: false,
    },
    Subspecies: {
        type: String,
        required: false,
    },
    Common_name: {
        type: String,
        required: false,
    },
    Familyetc: {
        type: String,
        required: false,
    },
    'sp#': {
        type: Number,
        required: false,
    },
    'changes\r': {
        type: String,
        required: false,
    },
})

const Reptile = mongoose.model('Reptile', reptileSchema)

module.exports = Reptile
