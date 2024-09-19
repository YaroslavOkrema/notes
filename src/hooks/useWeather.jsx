import axios from "axios";
import {useEffect, useState} from "react";

export function useWeather(lat, lon) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (lat && lon) {
            fetchData(lat, lon);
        }
    }, [lat, lon]);

    async function fetchData(lat, lon) {
        const apiKey = '642c1ad128fd816bcb4ea30d07064974';

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
        console.log(response.data);
    }

    return weatherData;
}