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
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        console.log(response.data);
    }

    return weatherData;
}