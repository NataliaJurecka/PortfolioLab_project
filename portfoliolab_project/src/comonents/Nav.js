import React from 'react';
// import './App.css';
import { Link} from "react-router-dom";

function Nav() {

    return (
        <div>
            <nav className="web_nav">
                <ul className="nav-links">
                    <Link  to='/logowanie'>
                        <li>Zaloguj</li>
                    </Link>
                    <Link  to='/rejestracja'>
                        <li>Załóż konto</li>
                    </Link>
                </ul>
            </nav>
            <nav className='nav-home'>
                <ul>
                    <Link  to='/'>
                        <li>Start</li>
                    </Link>
                    <Link  to='/'>
                        <li>O co chodzi?</li>
                    </Link>
                    <a>
                        <li>O nas</li>
                    </a>
                    <a>
                        <li>Fundacja i organizacje</li>
                    </a>
                    <a>
                        <li>Kontakt</li>
                    </a>

                </ul>
            </nav>
        </div>
    );
}

export default Nav;