import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center mb-3'>
            <CheckBadgeIcon className="h-6 w-6 text-green-400" />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;