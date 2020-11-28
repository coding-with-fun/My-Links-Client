import React, { useEffect } from "react";
import { fetchData } from "../../api/User.api";
import Header from "./Header";

const Admin = () => {
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
