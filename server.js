const express = require('express')
// const connectDB = require('./config/db')
const mongoose = require('mongoose')

const app = express()

// Connect Database
const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://123:1234@cluster0.0ol02.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }
        )
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

app.get('/', (req, res) => res.send('API up'))

// Define Routes
app.use('/api/snakes', require('./routes/snakes'))
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
