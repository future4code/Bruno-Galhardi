import app from "./controller/app"
import PostRouter from "./routers/postRouter"
import userRouter from "./routers/userRouter"


app.use('/user', userRouter)
app.use('/post', PostRouter)




