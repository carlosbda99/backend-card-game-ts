import { Router } from 'express'
import { deleteUser, findUser, insertUser } from './controller'
import express from 'express'

const userRouter: Router = express.Router()

userRouter.post('/user', insertUser)

userRouter.get('/user', findUser)

userRouter.delete('/user', deleteUser)

export default userRouter