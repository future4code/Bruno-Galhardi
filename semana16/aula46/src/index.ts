import app from './app'
import createActor from './endpoints/posts/createActor';
import getActorById from './endpoints/gets/getActorById';
import getActorByName from './endpoints/gets/getActorByName';
import getCountActor from './endpoints/gets/getCountActor';
import updateActor from './endpoints/puts/updateActor';
import deleteActor from './endpoints/delete/deleteActor';
import getAvgActor from './endpoints/gets/getAvgActor';





app.get('/actor/avg', getAvgActor)
app.get('/actor/gender', getCountActor)
app.get('/actor/name', getActorByName)
app.get('/actor/:id', getActorById)
app.put('/actor/:id', updateActor)

app.delete('/actor/:id', deleteActor)
app.post('/actor', createActor)







