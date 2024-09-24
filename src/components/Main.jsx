import React from 'react';
import {useLocation} from "../hooks/useLocation";
import {useWeather} from "../hooks/useWeather";
import "../styles/Main.css";

const Main = () => {
    const { location} = useLocation();
    const {
        icon,
        temp,
        description,
        humidity,
        wind,
        country,
        name
    } = useWeather(location.lat, location.lon);

    return (
        <div>
            {(
                <div className="container">
                    <div className="left">
                        <div className="main-info">
                            {icon && <img src={icon} alt="Weather icon"/>}
                            <p className="temp">{temp}°C</p>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div className="other-info">
                            <div className="humidity">
                                <div>Humidity</div>
                                <p>{humidity}</p>
                            </div>
                            <div className="spacer"></div>
                            <div className="wind">
                                <div>Wind</div>
                                <p>{wind} M/S</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p>{name}, {country}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;