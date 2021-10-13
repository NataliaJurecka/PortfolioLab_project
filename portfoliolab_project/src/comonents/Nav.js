import React from 'react';
// import './App.css';
import { Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'

function Nav() {

    const options = {
        smooth: true,
        duration: 500,
        delay: 200,
    }

    return (
        <div className='nav'>
            <nav className="web_nav">
                <ul className="nav-login">
                    <Link  to='/logowanie'>
                        <li>Zaloguj</li>
                    </Link>
                    <Link  to='/rejestracja'>
                        <li>Załóż konto</li>
                    </Link>
                </ul>
            </nav>
            <nav className='nav-home'>
                <ul className='nav-page'>
                    <Link to='/'><li>Start</li></Link>
                    <li><ScrollLink to="simple_steps" {...options}>O co chodzi?</ScrollLink></li>
                    <li><ScrollLink to="about_us" {...options}>O nas</ScrollLink></li>
                    <li><ScrollLink to="who-we-help" {...options}>Fundacje i organizacje</ScrollLink></li>
                    <li><ScrollLink to="contact" {...options}>Kontakt</ScrollLink></li>


                </ul>
            </nav>
        </div>
    );
}

export default Nav;