import React from 'react';
import { BrowserRouter,Switch , Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path='/detail/:id'>
          <Detail />
        </Route>
        <Redirect to="/" /> 
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
