import React from 'react';
import imageUrl from '../../assets/Background Image.png';
import fbImgUrl from '../../assets/Facebook.svg';
import igImgUrl from '../../assets/Instagram.svg';
import decorUrl from "../../assets/Decoration.svg";

function Contact() {
    return (
        <>
            <div id="contact" className='contact_section'>
                <img className='contact_background' src={imageUrl} alt=''/>
            </div>
            <h1>Skontaktuj się z nami</h1>
            <img className='decor' src={decorUrl} alt=''/>
            <label>
                <label>
                    <input type='text'/>
                    <input type='email'/>
                </label>
                <label>
                    <input type='textarea'/>
                </label>
            </label>
            <button>Wyślij</button>
            <img src={fbImgUrl} alt=''/>
            <img src={igImgUrl} alt=''/>
        </>
    );
}

export default Contact;