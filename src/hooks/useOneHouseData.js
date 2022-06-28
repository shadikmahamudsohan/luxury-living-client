import { useEffect, useState } from 'react';
import axios from "axios";

const useOneHouseData = (id) => {
    const [houser, setHouse] = useState();
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        isLoading(true);
        axios.get(`https://enigmatic-forest-90835.herokuapp.com/houses/${id}`)
            .then(res => {
                setHouse(res.data);
                isLoading(false);
            });
    }, [id]);
    return [houser, loading];
};

export default useOneHouseData;