import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import ErroPage from '../Components/ErroPage/ErroPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage';
import FormPage from '../Pages/FormPage/FormPage';
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage';
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Components/Header/Header'

    

export default function Router() {
    return (
      <BrowserRouter>

        {/* <Header /> */}

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path={"/login"}>
            <LoginPage />
          </Route>

          <Route exact path={"/application-form"}>
            <FormPage />
          </Route>

          <Route exact path={"/trips/create"}>
            <CreateTripPage />
          </Route>

          <Route exact path={"/trips/list"}>
            <ListTripsPage />
          </Route>

          <Route exact path={"/trips/details"}>
            <TripDetailsPage />
          </Route>

          <Route>
            <ErroPage />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }