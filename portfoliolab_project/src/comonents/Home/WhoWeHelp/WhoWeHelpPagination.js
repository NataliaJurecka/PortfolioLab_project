import React from 'react';


const Pagination = ({ itemsParPage, totalItems, onChange}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsParPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='buttons'>
                {pageNumbers.map(number => (
                    <li  key={number}>
                        <button onClick={() => onChange(number)} className='btn_3'><span>{number}</span></button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;