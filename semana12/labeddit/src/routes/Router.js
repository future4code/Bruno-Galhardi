import React from 'react'
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import PostPage from '../Pages/PostPage/PostPage'
import ErroPage from '../Pages/ErroPage/ErroPage'
import { Switch, Route} from 'react-router-dom'


export default function Router(props) {
    return (

        <Switch>
        <Route exact path="/">
            <HomePage/>
          </Route>

          <Route exact path="/login">
            <LoginPage btnOut={props.btnOut} setBtnOut={props.setBtnOut}/>
          </Route>

          <Route exact path={"/register"}>
            <RegisterPage btnOut={props.btnOut} setBtnOut={props.setBtnOut}/>
          </Route>

          <Route exact path={"/feed"}>
              <FeedPage/>            
          </Route>

          <Route exact path={"/post"}>
            <PostPage/>
          </Route>
          
          <Route>
            <ErroPage />
          </Route>

        </Switch>
      
    );
  }