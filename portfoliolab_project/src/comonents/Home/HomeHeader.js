import React from 'react';
import {Link} from "react-router-dom";
import imageUrl from '../../assets/Home-Hero-Image.jpg'
import decorUrl from '../../assets/Decoration.svg'

function HomeHeader() {

    return (
        <div className='home-header'>


            <div className='Help-container'>
                <h1> Zacznij pomagać!
                    <p> Oddaj niechciane rzeczy w zaufane ręce</p>
                </h1>
                <img className='decor' src={decorUrl} alt=''/>
                <div className='button-container-header'>
                    <Link to='/logowanie'>
                        <button className='btn_1'><span>ODDAJ RZECZY</span></button>
                    </Link>
                    <Link to='/logowanie'>
                        <button className='btn_1'><span>ZORGANIZUJ ZBIÓRKĘ</span></button>
                    </Link>
                </div>
            </div>
            <img className='home-header-img' src={imageUrl} alt=''/>
        </div>
    );
}

export default HomeHeader;
