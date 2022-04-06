require('dotenv').config()
require('express-async-errors')

const express = require('express')
const mongoose = require('mongoose')
const app = express()


const connectDB = require('./db/connect')

const productsRouter = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.json())

// routes


app.get('/', (req, res) => {
    res.send('<a href="/api/v1/products">Store api</a>')
})





app.use('/api/v1/products', productsRouter)

// products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('Server work'))
    } catch (e) {
        console.log(e)
    }
}

start()