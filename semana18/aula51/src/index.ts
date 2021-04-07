import app from './app'
import getUserByEmail from './endpoints/Gets/getUsersByEmail'
import getUserById from './endpoints/Gets/getUsersById'
import login from './endpoints/Posts/login'
import testCreateUser from './endpoints/Posts/testCreateUser'


app.get('/user/profile', getUserById)
app.get('/user/:email', getUserByEmail)
app.post('/user/create', testCreateUser)
app.post('/user/login', login)
