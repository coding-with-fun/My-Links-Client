import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import Header from "./Header";

const Admin = () => {
    const { GetUserData } = useContext(UserContext);

    const fetchData = async () => {
        await GetUserData();
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="admin__container">
            <Header />
        </div>
    );
};

export default Admin;
