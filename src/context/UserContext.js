import React, { createContext, useState } from "react";
import { fetchData, updateLink } from "../api/User.api";

// Create context
export const UserContext = createContext();

// Provider component
export const UserProvider = (props) => {
    const [user, setUser] = useState({
        about: "",
        email: "",
        links: [],
        name: "",
        userImage: "",
        userName: "",
    });

    const GetUserData = async (username) => {
        const user_data = await fetchData(username);
        setUser(user_data);
    };

    const UpdateLink = async (body) => {
        const { status } = await updateLink(body);
        if (status) {
            GetUserData();
        }
    };

    return (
        <UserContext.Provider
            value={{ user, setUser, GetUserData, UpdateLink }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
