import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import ErroPage from '../Components/ErroPage/ErroPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage';
import FormPage from '../Pages/FormPage/FormPage';
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage';
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage';
import AdmPage from '../Pages/AdmPage/AdmPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Components/Header/Header'
import HeaderAdm from '../Components/HeaderAdm/HeaderAdm'
import HeaderForm from '../Components/HeaderForm/HeaderForm'
    

export default function Router() {
    return (
      <BrowserRouter>

        {/* <Header /> */}

        <Switch>
          <Route exact path="/">
            <Header/>
            <HomePage />
          </Route>

          <Route exact path={"/login"}>
            <Header/>
            <LoginPage />
          </Route>

          <Route exact path={"/application-form"}>
            <HeaderForm/>
            <FormPage />
          </Route>

          <Route exact path={"/trips/create"}>
            <HeaderAdm/>
            <CreateTripPage />
          </Route>

          <Route exact path={"/trips/list"}>
            <HeaderAdm/>
            <ListTripsPage />
          </Route>

          <Route exact path={"/trips/details"}>
            <TripDetailsPage />
          </Route>

          <Route exact path={"/admin"}>
            <HeaderAdm/>
            <AdmPage/>
          </Route>

          <Route>
            <ErroPage />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }