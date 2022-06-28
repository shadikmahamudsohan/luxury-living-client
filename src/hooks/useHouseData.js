import axios from "axios";
import { useEffect, useState } from "react";

const useHouseData = () => {
    const [houses, setHouses] = useState([]);
    const [loading, isLoading] = useState(false);
    useEffect(() => {
        isLoading(true);
        axios.get('https://enigmatic-forest-90835.herokuapp.com/houses')
            .then(res => {
                setHouses(res.data);
                isLoading(false);
            });
    }, []);

    return [houses, loading];
};

export default useHouseData;