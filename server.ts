import { Request, Response } from "express"

const express = require("express")
const path = require("path")
const cors = require("cors")
require("dotenv").config()
const router = require("./routes/index.ts")
require("./config/database")
const app = express()
const morgan = require("morgan")

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.listen(process.env.PORT || '0.0.0.0', () => console.log(`Server is running on port ${process.env.PORT}`))