import {Request, Response} from 'express'
import express from 'express'
import * as path from 'path'
import cors from 'cors'
require('dotenv').config()
require('./config/database')
const app = express()
import morgan from 'morgan'

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.listen(process.env.PORT || '0.0.0.0', () => console.log(`Server is running on port ${process.env.PORT}`))