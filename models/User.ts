import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    tag: {type: String, required: true},
    urlImage: {type: String, required: true},
    totalScore: [{score: {type: Number}, date: {type: String}} ]
})

const User = mongoose.model('user', userSchema)

export default User
