import User from '../models/User'
import { Request, Response } from 'express'


export const userController = {
    getUsers: async (req: Request, res: Response) => {
        const allUsers = await User.find()
        res.json({success: true, response: allUsers})
    },

    newUser: (req: Request, res: Response) => {
        console.log(req.body)
        const { name, tag, urlImage } = req.body

        const newUser = new User({
            name,
            tag,
            urlImage
        })

        newUser.save()
        res.json({success: true})
    },

    

    newStat: async (req: Request, res: Response) => {
        const {totalScore, date} = req.body
        const { id } = req.params
        console.log(req.params, req.body, "BODY")
        const userUpdated = await User.findOneAndUpdate({_id: id}, {$push: {totalScore: {score: totalScore, date}}}, {new: true})
        res.json({success: true})
    },

    findOne: async (req: Request, res: Response) => {
        const { id } = req.params

        const getUser = await User.findById({_id: id})
        res.json({success: true, response: getUser})
    }
}

