import Axios from "axios";
import { BASE_URL } from "../config";

export const fetchData = async (username) => {
    const url = BASE_URL + "/user/details?username=" + username;
    const apiData = await Axios.get(url);
    console.log(apiData.data.userDetails);
    return apiData.data.userDetails;
};
