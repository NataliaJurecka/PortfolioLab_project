import React from 'react';
import './App.css';
import Home from "./comonents/Home/Home";
import Form from "./comonents/Form";
import Login from "./comonents/Login";
import Register from "./comonents/Register";
import Logout from "./comonents/Logout";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/oddaj-rzeczy' component={Form}/>
                <Route path='/logowanie' component={Login}/>
                <Route path='/rejestracja' component={Register}/>
                <Route path='/wylogowano' component={Logout}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;


