const express = require('express')
const { allow } = require('joi')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

// Connect Database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message)
        // Exit process with failure
        process.exit(1)
    }
}

connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) =>
    res.send(
        'APi up, automatically deploys from origin/deploy, head to https://reptileapi.herokuapp.com/'
    )
)

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With'
    )

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200)
    } else {
        next()
    }
}

app.use(allowCrossDomain)

// Define Routes
app.use('/api/reptiles', require('./routes/reptiles'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
