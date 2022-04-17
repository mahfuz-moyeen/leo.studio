import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            {/* banner section  */}
            <Banner/>

            {/* services section  */}
            <div className='my-5'>
            <h1 className='text-center my-5'>My Services</h1>
            <div className='container'>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    services.map(item => <Services 
                    key={item.id}
                    item={item}
                    />)
                }
                </Row>
            </div>
        </div>
        </div>
    );
};

export default Home;