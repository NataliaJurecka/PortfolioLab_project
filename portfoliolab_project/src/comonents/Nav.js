import React from 'react';
// import './App.css';
import { Link} from "react-router-dom";

function Nav() {

    return (
        <nav className="web_nav">
            <ul className="nav-links">
                <Link  to='/logowanie'>
                    <li>Zaloguj</li>
                </Link>
                <Link  to='rejestracja'>
                    <li>Załóż konto</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;