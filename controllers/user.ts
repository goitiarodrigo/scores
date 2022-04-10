import User from '../models/user'
import { Request, Response } from 'express'

export const userController = {
    getUsers: async (req: Request, res: Response) => {
        const allUsers = await User.find()
        res.json({success: true, response: allUsers})
    },

    newUser: (req: Request, res: Response) => {
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
        const {adr, kdr, score, total} = req.body
        const { id } = req.params

        const userUpdated = await User.findByIdAndUpdate({_id: id}, {$push: {adr, kdr, score, total}}, {new: true})
        res.json({success: true})
    },

    findOne: async (req: Request, res: Response) => {
        const { id } = req.params

        const getUser = await User.findById({_id: id})
        res.json({success: true, response: getUser})
    }
}