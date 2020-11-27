import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import About from "./About";
import Header from "./Header";
import Links from "./Links";

const User = () => {
    const { SetUserData, user } = useContext(UserContext);

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

            {user?.about ? (
                <>
                    <hr />

                    <About />
                </>
            ) : null}

            {user?.links.length > 0 ? (
                <>
                    <hr />

                    <Links />
                </>
            ) : null}
        </div>
    );
};

export default User;
