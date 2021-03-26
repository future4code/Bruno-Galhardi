import app from './app'
import createActor from './endpoints/posts/createActor';
import getActorById from './endpoints/gets/getActorById';
import getActorByName from './endpoints/gets/getActorByName';
import getCountActor from './endpoints/gets/getCountActor';
import updateActor from './endpoints/puts/updateActor';
import deleteActor from './endpoints/delete/deleteActor';
import getAvgActor from './endpoints/gets/getAvgActor';
import getActorByGender from './endpoints/gets/getActorByGender';




app.get('/actor/gender', getActorByGender)
app.get('/actor/avg', getAvgActor)
app.get('/actor/gender', getCountActor)
app.get('/actor/name', getActorByName)
app.get('/actor/:id', getActorById)

app.post('/actor/update', updateActor)
app.post('/actor', createActor)
app.delete('/actor/delete/:id', deleteActor)








