import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center row">
                    <div className=" col-md-6">
                        <img src="https://i.ibb.co/YbR6Yv6/hotel404.jpg" alt=""
                            className="img-fluid" />
                    </div>
                    <div className=" col-md-6 mt-5">
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead">
                            The page you are looking for does not exist.
                        </p>
                        <Link to="/" className="btn btn-main-primary">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;