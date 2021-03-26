import app from './app'
import getTaskById from './endpoints/gets/getTaskById'
import getUserById from './endpoints/gets/getUserById'
import updateUsers from './endpoints/posts/updateUser'
import createTask from './endpoints/puts/createTask'
import createUser from './endpoints/puts/createUser'



app.get('/user/:id', getUserById)
app.get('/task/:id', getTaskById)
app.put('/user', createUser)
app.put('/task', createTask)
app.post('/user/edit/:id', updateUsers)

