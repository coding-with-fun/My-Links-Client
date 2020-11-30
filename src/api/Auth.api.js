import Axios from "axios";
import { BASE_URL } from "../config";

let mid_url = BASE_URL + "/auth";

export const userSignIn = async (body) => {
    const url = mid_url + "/signin";

    const apiData = await Axios.post(url, body);
    console.log(apiData);
    return apiData.data;
};
