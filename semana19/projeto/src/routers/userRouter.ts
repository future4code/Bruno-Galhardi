import express from 'express'
import { login } from '../controller/login'
import { signup } from '../controller/singup'

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)

export default userRouter