import React from 'react';
import Service from '../Service/Service'
import useServices from '../../../../Hooks/useServices'; 
import { Row } from 'react-bootstrap';

const Services = () => {
    const [services] = useServices();
    return (
        <div className=' container my-5'>
            <h1 className='text-center my-5'><span className='text-primary'>My</span> Services</h1>
                <div className='container'>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {
                            services.map(item => <Service
                                key={item.id}
                                item={item}
                            />)
                        }
                    </Row>
                </div>
            </div>
    );
};

export default Services;