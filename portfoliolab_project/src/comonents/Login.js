import React from 'react';
import decorUrl from "../assets/Decoration.svg";
import { Link} from "react-router-dom";

function Login() {
    return (
        <div className='login_view'>
            <h1>Zaloguj się</h1>
            <img className='decor' src={decorUrl} alt=''/>
            <div className='login_form'>
                <label>E-mail
                    <input type='email'/>
                </label>
                <label>Hasło
                    <input type='password'/>
                </label>
            </div>
            <div className='btn-container'>
                <Link to='/rejestracja'><button className='btn_3'>Załóż konto</button></Link>
                <button className='btn_3'>Zaloguj się</button>
            </div>
        </div>
    );
}

export default Login;