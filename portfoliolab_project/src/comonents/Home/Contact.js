import React from 'react';
import imageUrl from '../../assets/Background Image.png';
import fbImgUrl from '../../assets/Facebook.svg';
import igImgUrl from '../../assets/Instagram.svg';
import decorUrl from "../../assets/Decoration.svg";

function Contact() {
    return (
        <div id="contact" className='contact_section'>
            <img className='contact_background' src={imageUrl} alt=''/>
            <div className='contact_elements'>
                <div className='contact-container'>
                    <h1>Skontaktuj się z nami</h1>
                    <img className='decor' src={decorUrl} alt=''/>
                    <div className='whole-form'>
                        <div className='form_first_section'>
                            <label className='input_box_small'>
                                <span className='input_box_info'>Wpisz swoje imię</span>
                                <input className='input_box' type='text' placeholder='Jan'/>
                            </label>
                            <label className='input_box_small'>
                                <span className='input_box_info'>Wpisz swoje imię</span>
                                <input className='input_box' type='email' placeholder='abc@xyz.pl'/>
                            </label>
                        </div>
                        <label className='input_box_large'>
                            <span className='input_box_info'> Wpisz swoją wiadomość</span>
                            <textarea className='input_textarea' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        </label>
                        <button className='btn_4'>Wyślij</button>
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