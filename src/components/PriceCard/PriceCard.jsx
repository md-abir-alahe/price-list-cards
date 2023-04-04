import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold '>{price.price}</span>
                <span className='text-2xl text-white font-bold'>/month</span>
            </h2>
            <h5 className='text-2xl text-center font-bold'>{price.name}</h5>
            <p className='underline font-bold text-white'>Features : </p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
        </div>
    );
};

export default PriceCard;