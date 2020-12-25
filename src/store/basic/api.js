import axios from 'axios';

const getSpaceXData = () => {
    return axios.get(`https://api.spacexdata.com/v3/history`);
}

const getSpaceXAddress = () => {
    return axios.get(`https://api.spacexdata.com/v3/payloads`);
}

export default { getSpaceXData, getSpaceXAddress };