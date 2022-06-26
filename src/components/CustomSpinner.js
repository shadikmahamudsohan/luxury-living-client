import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const CustomSpinner = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }} className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status" style={{ width: '50px', height: '50px' }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default CustomSpinner;