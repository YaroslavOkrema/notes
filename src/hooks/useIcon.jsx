import {useEffect, useState} from "react";

export function useIcon(weatherData) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        getIcon();
    }, [weatherData]);

    function getIcon() {
       if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
           const iconPath = weatherData.weather[0].icon;
           const iconUrl = `https://openweathermap.org/img/wn/${iconPath}@2x.png`;
           setIcon(iconUrl);
       }
    }

    return icon;
}