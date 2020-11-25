import React, { createContext, useEffect, useState } from "react";

// Create context
export const UserContext = createContext();

// Provider component
export const UserProvider = (props) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        setUser({
            name: "Harsh",
        });
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {props.children}
        </UserContext.Provider>
    );
};
