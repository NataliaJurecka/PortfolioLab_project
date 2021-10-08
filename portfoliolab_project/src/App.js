import React from 'react';
import './scss/main.scss';
import Nav from "./comonents/Nav"
import Home from "./comonents/Home/Home";
import Form from "./comonents/Form";
import Login from "./comonents/Login";
import Register from "./comonents/Register";
import Logout from "./comonents/Logout";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
            <Nav/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/oddaj-rzeczy' component={Form}/>
                <Route path='/logowanie' component={Login}/>
                <Route path='/rejestracja' component={Register}/>
                <Route path='/wylogowano' component={Logout}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;


