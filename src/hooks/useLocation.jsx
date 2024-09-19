import {useEffect, useState} from "react";

export function useLocation() {
    const [location, setLocation] = useState({});

    useEffect(() => {
        getLocation();
    }, []);

    function getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            setLocation({ lat, lon });
        });
    }

    return location;
}