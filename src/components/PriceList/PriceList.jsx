import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect( () =>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[]);

    return (
        <div className='mx-8'>
            <h2 className='text-6xl bg-purple-300 text-purple-950 text-center font-bold p-4 '>Awesome Affordable Prices</h2>
            <div className='grid grid-cols-3 gap-3'>
            {
                prices.map(price => <PriceCard
                    key={price.id}
                    price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;