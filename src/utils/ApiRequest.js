import axios from "axios";

export const postRequest = async (url, data) => {
    let response = await axios.post(process.env.REACT_APP_BASE_URL + url, data);
    return response;

}

export const getRequest = async (url, data) => {
    let response = await axios.get(process.env.REACT_APP_BASE_URL + url);
    return response;
}