import React from 'react';
import {Link} from "react-router-dom";




function SimpleSteps() {

    return (
        <div className='simple_steps'>
            <h1>Wystarczą 4 proste kroki</h1>
            <span className='decor'/>
            <div className='simple_steps_container'>
                <div className='step'>
                    <img alt=''/>
                    <h1>Wybierz rzeczy</h1>
                    <span> </span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='step'>
                    <img alt=''/>
                    <h1>Spakuj je</h1>
                    <span> </span>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className='step'>
                    <img alt=''/>
                    <h1>Zdecyduj komu chcesz pomóc</h1>
                    <span> </span>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className='step'>
                    <img alt=''/>
                    <h1>Zamów kuriera</h1>
                    <span> </span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to='/logowanie'>
                <button>ODDAJ RZECZY</button>
            </Link>
        </div>
    );
}

export default SimpleSteps;