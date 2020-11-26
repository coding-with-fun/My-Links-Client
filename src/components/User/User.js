import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import About from "./About";
import Header from "./Header";
import Links from "./Links";
import TopLinks from "./TopLinks";

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
        <div className="user__container container">
            <Header />

            <hr />

            <About />

            <hr />

            <TopLinks />

            <hr />

            <Links />
        </div>
    );
};

export default User;
