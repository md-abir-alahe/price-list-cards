import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <span>{feature}</span>
        </div>
    );
};

export default Feature;