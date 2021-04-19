import app from "./controller/app"
import userRouter from "./routers/userRouter"

app.use('/user', userRouter)
