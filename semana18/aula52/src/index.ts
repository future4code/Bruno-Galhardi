import app from './app'
import getUserByEmail from './endpoints/Gets/getUsersByEmail'
import getUserById from './endpoints/Gets/getUsersById'
import login from './endpoints/Posts/login'
import testCreateUser from './endpoints/Posts/testCreateUser'
import getAddressInfo from './services/getAddressInfo'


app.get('/user/profile', getUserById)
app.get('/user/:email', getUserByEmail)
app.post('/user/create', testCreateUser)
app.post('/user/login', login)


let i = getAddressInfo("86041100")
console.log(i)