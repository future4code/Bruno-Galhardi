import app from './app'
import getUserByEmail from './endpoints/Gets/getUsersByEmail'
import createUser from './endpoints/Posts/createUser'



app.get('/user/:email', getUserByEmail)
app.post('/user/create', createUser)
