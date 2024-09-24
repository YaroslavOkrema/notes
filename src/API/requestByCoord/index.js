import {API_KEY, API_URL} from "../../constants";
import axios from "axios";

export async function getWeatherByCoords(lat, lon) {
    const apiUrl = `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(apiUrl);
    return response;
}