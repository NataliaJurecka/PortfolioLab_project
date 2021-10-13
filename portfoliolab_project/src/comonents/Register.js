import React from 'react';
import decorUrl from "../assets/Decoration.svg";
import {Link} from "react-router-dom";


function Register() {
    return (
        <div>
            <div className='registration_view'>
                <h1>Załóż konto</h1>
                <img className='decor' src={decorUrl} alt=''/>
                <div className='registration_form'>
                    <label>E-mail
                        <input type='email'/>
                    </label>
                    <label>Hasło
                        <input type='password'/>
                    </label>
                    <label>Powtórz hasło
                        <input type='password'/>
                    </label>
                </div>
                <div className='btn-container'>
                    <button className='btn_3'>Załóż konto</button>
                <Link to='/logowanie'><button className='btn_3'>Zaloguj się</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Register;