import React from 'react';
import {useLocation} from "../hooks/useLocation";
import {useWeather} from "../hooks/useWeather";
import "../styles/Main.css";
import {useIcon} from "../hooks/useIcon";

const Main = () => {
    const location = useLocation();
    const weatherData = useWeather(location.lat, location.lon);
    const weatherIcon = useIcon(weatherData);

    return (
        <div>
            {weatherData && (
                <div className="container">
                    <div className="left">
                        <div className="main-info">
                            <img src={weatherIcon} alt="img"/>
                            <p className="temp">{weatherData.main.temp}°C</p>
                        </div>
                        <div>
                            <p>{weatherData.weather[0].description}</p>
                        </div>
                        <div className="other-info">
                            <div className="humidity">
                                <div>Humidity</div>
                                <p>{weatherData.main.humidity}</p>
                            </div>
                            <div className="spacer"></div>
                            <div className="wind">
                                <div>Wind</div>
                                <p>{weatherData.wind.speed} M/S</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p>{weatherData.name}, {weatherData.sys.country}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;