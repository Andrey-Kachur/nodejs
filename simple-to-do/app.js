const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = require('./db/connect')
const port = process.env.PORT || 3000
const tasksRouter = require('./routes/tasks.route')
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)


app.use(notFound)
app.use(errorHandlerMiddleware)




app.get('/', (req, res) => {
    res.end('ok')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('server start'))
    } catch (e) {
        console.log(e)
    }
}


start()