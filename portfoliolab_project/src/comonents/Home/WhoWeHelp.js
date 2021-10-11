import React, { useState, useEffect } from 'react';
import decorUrl from "../../assets/Decoration.svg";

const WhoWeHelp = () => {
    const [fundation, setFundation] = useState({});
    const [current, setCurrent] = useState("fundations");

    useEffect(() => {
        fetch(`http://localhost:3005/${current}`)
            .then(res => res.json())
            .then(fund => setFundation(fund))
    }, [current])

    const handleFundation = (fund) => () => {
        setCurrent(fund)
    }

    console.log(fundation);

    return (
    <div id='who-we-help' className='who-we-help'>
        <h1 className='who-we-help-title'>Komu pomagamy?</h1>
        <img className='decor' src={decorUrl} alt=''/>
        <div className='btn_container'>
            <button className='btn_2' onClick={handleFundation("fundations")}><span>Fundacjom</span></button>
            <button className='btn_2' onClick={handleFundation("organizations")}><span>Organizacjom</span></button>
            <button className='btn_2' onClick={handleFundation("local")}><span>Lokalnym zbiórkom</span></button>
        </div>
        <div className='description_section'>
            <h2 className='description'>{fundation?.desc}</h2>
            <ul>
                {fundation?.items?.map(el => (
                    <li>
                        <div>
                            <p className='el_title'>{el.title}</p>
                            <p className='el_subtitle'>{el.subtitle}</p>
                        </div>
                        <i className='el_description'>{el.desc}</i>
                    </li>
                ))}
            </ul>
        </div>
        <div className='buttons'>
            <button className='btn_3'><span>1</span></button>
            <button className='btn_3'><span>2</span></button>
            <button className='btn_3'><span>3</span></button>
        </div>
    </div>
    )
}

export default WhoWeHelp;
