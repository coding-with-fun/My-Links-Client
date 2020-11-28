import Axios from "axios";
import { BASE_URL } from "../config";

export const fetchData = async (username) => {
    let url;
    let headers;

    if (username) {
        url = BASE_URL + "/user/details?username=" + username;
    } else {
        const token = localStorage.getItem("my-links-user-id");
        url = BASE_URL + "/user/details";

        if (token) {
            headers = {
                "x-auth-token": token,
            };
        }
    }

    const apiData = await Axios.get(url, { headers: headers });
    console.log(apiData.data.userDetails);
    return apiData.data.userDetails;
};
