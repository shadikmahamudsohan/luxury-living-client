import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Your Id is {id}</h1>
        </div>
    );
};

export default Booking;