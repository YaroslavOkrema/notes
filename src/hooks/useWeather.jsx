import axios from "axios";
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../constants/const.ts";

export function useWeather(lat, lon) {
    const [weatherData, setWeatherData] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        if (lat && lon) {
            fetchData(lat, lon);
        }
    }, [lat, lon]);

    async function fetchData(lat, lon) {
        const apiUrl = `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(apiUrl);
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