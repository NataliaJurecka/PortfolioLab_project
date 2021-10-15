import React, { useState, useEffect } from 'react';
import Pagination from "./WhoWeHelpPagination";
import decorUrl from "../../../assets/Decoration.svg";


const WhoWeHelp = () => {
    const [fundation, setFundation] = useState({});
    const [current, setCurrent] = useState("fundations");
    const [item, setItems] = useState([1]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage,setItemsPerPage] = useState(3);

    useEffect(() => {
        fetch(`http://localhost:3005/${current}`)
            .then(res => res.json())
            .then(fund => setFundation(fund))
    }, [current])

    useEffect(() => {
        const fetchItems = async () => {
            setItems(`http://localhost:3005/${current}`);
        }
        fetchItems();
    }, []);

    const Items = ({items}) => {
        return (
            <ul>
                {items?.map(item => (
                    <li>
                        <div>
                            <p className='el_title'>{item.title}</p>
                            <p className='el_subtitle'>{item.subtitle}</p>
                        </div>
                        <i className='el_description'>{item.desc}</i>
                    </li>
                ))}
            </ul>
        );
    };
    // indexOfFirstItem
    const indexOfFirstItem = (currentPage -1) * itemsPerPage;
    const indexOfLastItem = indexOfFirstItem + itemsPerPage;
    console.log(indexOfFirstItem, indexOfFirstItem)
    const currentItems = fundation?.items?.slice(indexOfFirstItem, indexOfLastItem);

    const handleFundation = (fund) => () => {
        setCurrent(fund)
    }

    console.log(fundation);

    const handleCurrentPage = page => {
        setCurrentPage(page)
    }

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
            <Items items={currentItems}/>
        </div>
        <Pagination onChange={handleCurrentPage} itemsParPage={itemsPerPage} totalItems={fundation.items?.length}/>
    </div>
    )
};


export default WhoWeHelp;
