import {useEffect, useState} from "react";
import {getWeatherByCoords} from "../API/requestByCoord";
import {useLocation} from "./useLocation";

export function useWeather() {
    const {location} = useLocation();
    const [weatherData, setWeatherData] = useState({});
    const [icon, setIcon] = useState('');

    useEffect(() => {
        if (location.lat && location.lon) {
            fetchData(location.lat, location.lon);
        }
    }, [location]);

    async function fetchData(lat, lon) {
        const response = await getWeatherByCoords(lat, lon);
        setWeatherData(response.data);

        if (response.data.weather && response.data.weather.length > 0) {
            const iconPath = response.data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconPath}@2x.png`;
            setIcon(iconUrl);
        }
    }

    return {
        icon,
        temp: weatherData?.main?.temp,
        description: weatherData?.weather?.[0]?.description,
        humidity: weatherData?.main?.humidity,
        wind: weatherData?.wind?.speed,
        country: weatherData?.sys?.country,
        name: weatherData?.name,
    };
}