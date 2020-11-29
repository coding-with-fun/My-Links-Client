import Axios from "axios";
import { BASE_URL } from "../config";

const token = localStorage.getItem("my-links-user-id");
let mid_url = BASE_URL + "/user";
let headers;

export const fetchData = async (username) => {
    let url;
    if (username) {
        url = mid_url + "/details?username=" + username;
    } else {
        url = mid_url + "/details";

        if (token) {
            headers = {
                "x-auth-token": token,
            };
        }
    }

    const apiData = await Axios.get(url, { headers: headers });
    return apiData.data.userDetails;
};

export const updateLink = async (body) => {
    const url = mid_url + "/updatelink";
    headers = {
        "x-auth-token": token,
    };

    const apiData = await Axios.patch(url, body, { headers: headers });
    return apiData.data.userDetails;
};

export const deleteLink = async (body) => {
    const url = mid_url + "/deletelink";
    headers = {
        "x-auth-token": token,
        _id: body,
    };

    const apiData = await Axios.delete(url, { headers: headers });
    return apiData.data.userDetails;
};
