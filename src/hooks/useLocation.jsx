import {useEffect, useState} from "react";

export function useLocation() {
    const [location, setLocation] = useState({});

    useEffect(() => {
        getLocation();
    }, []);

    function getLocation() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat, longitude: lon}}) => {
                setLocation({lat, lon});
            }
        );
    }

    return {
        location
    };
}