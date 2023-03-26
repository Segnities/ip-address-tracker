import axios from "axios";

async function fetchUserIp() {
    return await (await axios.get('https://api.geoapify.com/v1/ipinfo?&apiKey=9fb38933b1d54fc6b84d1dd770d0bcb2')).data;
}

export {fetchUserIp};