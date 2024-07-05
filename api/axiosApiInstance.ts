import axios from "axios";

const axiosApiInstance = axios.create({
    baseURL: 'https://m0m0sha-vkr-e23d.twc1.net/api/v1/',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
});

export default axiosApiInstance;