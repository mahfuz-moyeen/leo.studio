import React, { useEffect, useState } from 'react';

const Services = ({item}) => {
    const {img,name,price,duration,takePhoto,editedPhoto,print,description} = item;
    return (
        <div>
           <h2>{name}</h2>
           <h2>{price}</h2>
        </div>
    );
};

export default Services;