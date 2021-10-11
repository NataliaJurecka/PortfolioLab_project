import React from 'react';
import {Link} from "react-router-dom";
import Icon_1 from '../../assets/Icon-1.svg';
import Icon_2 from '../../assets/Icon-2.svg';
import Icon_3 from '../../assets/Icon-3.svg';
import Icon_4 from '../../assets/Icon-4.svg';
import decorUrl from "../../assets/Decoration.svg";

function SimpleSteps() {

    return (
        <div className='simple_steps'>
            <h1>Wystarczą 4 proste kroki</h1>
            <img className='decor' src={decorUrl} alt=''/>
            <div className='simple_steps_container'>
                <div className='step'>
                    <img src={Icon_1} alt=''/>
                    <h2>Wybierz rzeczy</h2>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='step'>
                    <img src={Icon_2} alt=''/>
                    <h2>Spakuj je</h2>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className='step'>
                    <img src={Icon_3} alt=''/>
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className='step'>
                    <img src={Icon_4} alt=''/>
                    <h2>Zamów kuriera</h2>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to='/logowanie'>
                <button className='btn_1'><span>ODDAJ RZECZY</span></button>
            </Link>
        </div>
    );
}

export default SimpleSteps;