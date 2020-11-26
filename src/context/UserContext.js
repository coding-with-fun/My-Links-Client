import React, { createContext, useState } from "react";
import { fetchData } from "../api/User.api";

// Create context
export const UserContext = createContext();

// Provider component
export const UserProvider = (props) => {
    const [user, setUser] = useState();

    const SetUserData = async (username) => {
        const user_data = await fetchData(username);
        setUser(user_data);
    };

    return (
        <UserContext.Provider value={{ user, SetUserData }}>
            {props.children}
        </UserContext.Provider>
    );
};
