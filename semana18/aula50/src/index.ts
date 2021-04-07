import app from './app'
import getUserByEmail from './endpoints/Gets/getUsersByEmail'
import getUserById from './endpoints/Gets/getUsersById'
import createUser from './endpoints/Posts/createUser'
import login from './endpoints/Posts/login'


app.get('/user/profile', getUserById)
app.get('/user/:email', getUserByEmail)
app.post('/user/create', createUser)
app.post('/user/login', login)
