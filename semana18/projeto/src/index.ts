import app from './app'
import getRecipeById from './Endpoints/Recipe/Gets/getRecipeById'
import createRecipe from './Endpoints/Recipe/Posts/createRecipe'
import getUserById from './Endpoints/User/Gets/getUserById'
import getUserProfile from './Endpoints/User/Gets/getUserProfile'
import createUser from './Endpoints/User/Posts/createUser'
import login from './Endpoints/User/Posts/login'

app.get('/recipe/:id', getRecipeById)
app.get('/user/profile', getUserProfile)
app.get('/user/:id', getUserById)
app.post('/recipe', createRecipe)
app.post('/user/signup', createUser)
app.post('/user/login', login)