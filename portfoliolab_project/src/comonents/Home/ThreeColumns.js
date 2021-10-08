import React from 'react';
// import {Link} from "react-router-dom";



function ThreeColumns() {

    return (
        <div className='three_columns_section'>
            <div className='column_container'>
                <div className='number'>10</div>
                <h1>ODDANYCH WORKÓW</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='column_container'>
                <div className='number'>5</div>
                <h1>WSPARTYCH ORGANIZACJI</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='column_container'>
                <div className='number'>7</div>
                <h1>ZORGANIZOWANY ZBIÓREK</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
    );
}

export default ThreeColumns;