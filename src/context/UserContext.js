import React, { createContext, useState } from "react";
import { deleteLink, fetchData, updateLink } from "../api/User.api";

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

    const DeleteLink = async (body) => {
        const user_data = await deleteLink(body);
        console.log(user_data);
        setUser(user_data);
    };

    return (
        <UserContext.Provider
            value={{ user, setUser, GetUserData, UpdateLink, DeleteLink }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
