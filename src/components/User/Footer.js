import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Footer = () => {
    const { user } = useContext(UserContext);

    return <div className="footer__container">{user?.name}</div>;
};

export default Footer;
