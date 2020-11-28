import React, { createContext, useState } from "react";
import { fetchData } from "../api/User.api";

// Create context
export const UserContext = createContext();

// Provider component
export const UserProvider = (props) => {
    const [user, setUser] = useState();

    const GetUserData = async (username) => {
        console.log("object");
        const user_data = await fetchData(username);
        setUser(user_data);
    };

    return (
        <UserContext.Provider value={{ user, GetUserData }}>
            {props.children}
        </UserContext.Provider>
    );
};
