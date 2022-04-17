import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div>
            <Banner/>

            <div>
            <h1 className='text-center my-5'>My Services</h1>
            <div>
                {
                    services.map(item => {<Services 
                        key={item.id}
                        item={item}
                        />
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default Home;