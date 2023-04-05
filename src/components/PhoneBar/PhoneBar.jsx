import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhoneBar = () => {

    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            console.log(loadedData);
            const phonesData = loadedData.map(phone =>{
                
            })

        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default PhoneBar;