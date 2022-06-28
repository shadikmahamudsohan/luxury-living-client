import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomSpinner from '../../components/CustomSpinner';
import useOneHouseData from '../../hooks/useOneHouseData';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [house, loading] = useOneHouseData(id);
    if (loading) {
        return <CustomSpinner />;
    }
    console.log(house);
    return (
        <div className='booking'>
            <button onClick={() => { navigate(`/${window.history.back()}`); }} className='btn p-3 m-2 btn-main-primary go-back'>{"<-Back"}</button>
            <img className='booking-image' src={house?.image} alt="background" />
            <div className='overlay'></div>
            <div className='container mx-auto d-flex align-items-center justify-content-center'>
                <div className="my-5 card shadow">
                    <div className="row g-0">
                        <div className="col-12 col-md-6">
                            <img src={house?.image} className="rounded-start card-image" alt="..." />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-main-primary">{house?.name}</h5>
                                <p className="paragraph-text">
                                    <ul>
                                        <li>price: {house?.price}</li>
                                        <li>availableFrom: {house?.availableFrom}</li>
                                        <li>bathrooms: {house?.bathrooms}</li>
                                        <li>bedrooms: {house?.bedrooms}</li>
                                        <li>customer: {house?.customer}</li>
                                        <li>location: {house?.location}</li>
                                        <li>rooms: {house?.rooms}</li>
                                        <li>start: {house?.start}</li>
                                        <li>structureType: {house?.structureType}</li>
                                        <li>description: {house?.description}</li>
                                    </ul>
                                </p>
                                <Link to="/"><button className='btn btn-main-primary mb-5 px-4'>Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;