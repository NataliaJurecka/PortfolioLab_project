import React from 'react';
import {Link} from "react-router-dom";
// import './App.css';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/logowanie'>
            <h1>Oddaj rzeczy</h1>
            </Link>
            <Link to='logowanie'>
            <h1>Zorganizuj zbiórkę</h1>
            </Link>
        </div>
    );
}

export default Home;


