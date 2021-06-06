const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const snakeSchema = new Schema({
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

// farmSchema.post('findOneAndDelete', async function (farm) {
//     if (farm.products.length) {
//         const res = await Product.deleteMany({ _id: { $in: farm.products } })
//         console.log(res)
//     }
// })

const Snake = mongoose.model('Snake', snakeSchema)

module.exports = Snake
