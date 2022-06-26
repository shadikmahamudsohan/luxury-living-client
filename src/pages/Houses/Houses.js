import React from 'react';
import CustomSpinner from '../../components/CustomSpinner';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import useHouseData from '../../hooks/useHouseData';
import House from './House';

const Houses = () => {
    const [houses, loading] = useHouseData();
    if (loading) {
        return <CustomSpinner />;
    }
    return (
        <>
            <NavbarComponent />
            <h1 className='text-main-primary text-center mt-5 mb-4'>Choose Your House</h1>
            <div className='container mx-auto row mb-5 g-3'>
                {
                    houses?.map(h => <House
                        key={h._id}
                        data={h}
                    />)
                }
            </div>
        </>

    );
};

export default Houses;