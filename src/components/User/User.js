import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import Header from "./Header";
import Links from "./Links";

const User = () => {
    const { SetUserData } = useContext(UserContext);

    const fetchData = async () => {
        await SetUserData(window.location.pathname.substring(1));
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="user__container">
            <Header />

            <Links />
        </div>
    );
};

export default User;
