import React from 'react';
import imageUrl from '../../assets/Background Image.png';
import fbImgUrl from '../../assets/Facebook.svg';
import igImgUrl from '../../assets/Instagram.svg';

function Contact() {
    return (
        <>
            <div className='contact_section'>
                <img className='contact_background' src={imageUrl} alt=''/>
            </div>
        </>
    );
}

export default Contact;