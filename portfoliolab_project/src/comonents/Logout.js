import React from 'react';
import decorUrl from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
// import './App.css';

function Logout() {
    return (
        <div className='logout_view'>
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <img className='decor' src={decorUrl} alt=''/>
            <Link to='/'><button className='btn_3'>Strona główna</button></Link>
        </div>
    );
}

export default Logout;