import axios from "axios";

async function fetchIp(ipLocation) {
    return (await axios.get(`https://api.geoapify.com/v1/ipinfo?&apiKey=9fb38933b1d54fc6b84d1dd770d0bcb2${ipLocation ? '&ip=' + ipLocation : ''}`)).data;
}

async function fetchGeocode(cityName = '') {
    return (await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${cityName}&apiKey=9fb38933b1d54fc6b84d1dd770d0bcb2`)).data;

}


export { fetchIp, fetchGeocode };