import React from 'react';
import ContactForm from "./ContactForm";
import imageUrl from '../../../assets/Background Image.png';
import fbImgUrl from '../../../assets/Facebook.svg';
import igImgUrl from '../../../assets/Instagram.svg';
import decorUrl from "../../../assets/Decoration.svg";


function Contact() {
    return (
        <div id="contact" className='contact_section'>
            <img className='contact_background' src={imageUrl} alt=''/>
            <div>
                <div className='contact_elements'>
                    <div className='contact-container'>
                        <h1>Skontaktuj się z nami</h1>
                        <img className='decor' src={decorUrl} alt=''/>
                        <ContactForm/>
                    </div>
                </div>
                <div className='footer'>
                    <h1 className='copyright'>Copyright by Coders Lab</h1>
                    <div className='icons'>
                        <img src={fbImgUrl} alt=''/>
                        <img src={igImgUrl} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;