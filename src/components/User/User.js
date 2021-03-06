import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";

const User = () => {
    const { GetUserData, user } = useContext(UserContext);

    const fetchData = async () => {
        await GetUserData(window.location.pathname.substring(1));
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="user__container container">
            <Header />

            <div className="details__container">
                {user?.about && <About />}

                {user?.links.length > 0 && (
                    <>
                        <hr />
                        <Links />
                    </>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default User;
