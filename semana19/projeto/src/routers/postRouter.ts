import express from 'express'
import { createPost } from '../controller/createPost'

const PostRouter = express.Router()

PostRouter.post('/create', createPost)
/* userRouter.post('/login', login)
 */
export default PostRouter