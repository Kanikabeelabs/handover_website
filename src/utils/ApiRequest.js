import axios from "axios";

export const postRequest = async(url,data)=>{
    console.log(process.env.REACT_APP_BASE_URL)
    let repsonse = await axios.post(url,data)
    if(repsonse.status === '1')
    return repsonse.data
}