import React from 'react';
// import {Link} from "react-router-dom";
import imageUrl from '../../assets/People.jpg'
import decorUrl from "../../assets/Decoration.svg";
import signatureUrl from '../../assets/Signature.svg'


function AboutUs() {

    return (
        <div className='about_us'>
            <div className='text_container'>
                <h1 className='about_us_tittle'>O nas</h1>
                <img className='decor' src={decorUrl} alt=''/>
                <p className='about_us_text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className='signature' src={signatureUrl} alt=''/>
            </div>
            <div className='img_container'>
                <img className='about_us_img' src={imageUrl} alt=''/>
            </div>
        </div>
    );
}

export default AboutUs;