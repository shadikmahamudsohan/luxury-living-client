import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center row">
                    <div class=" col-md-6">
                        <img src="https://i.ibb.co/YbR6Yv6/hotel404.jpg" alt=""
                            class="img-fluid" />
                    </div>
                    <div class=" col-md-6 mt-5">
                        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                        <p class="lead">
                            The page you are looking for does not exist.
                        </p>
                        <Link to="/" class="btn btn-main-primary">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;