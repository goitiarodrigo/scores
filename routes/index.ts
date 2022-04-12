import { userController } from "../controllers/user";
import express from 'express'

const router = express.Router()

router.route('/user/new-user')
    .post(userController.newUser)

router.route('/user/new-stat/:id')
    .put(userController.newStat)
    
router.route('/user/get-users')
    .get(userController.getUsers)

router.route('/user/get-user/:id')
    .get(userController.findOne)

    
export default router

