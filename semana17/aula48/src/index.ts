import app from './app'
import getOrderByType from './endpoints/gets/getOrderByType'
import getUserByName from './endpoints/gets/getUserByName'
import getUserByType from './endpoints/gets/getUserByType'

app.get('/user/order' ,getOrderByType)
app.get('/users', getUserByName)

app.get('/users/:type', getUserByType)

