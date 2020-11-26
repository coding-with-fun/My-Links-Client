import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Image from "./Harsh_1000.jpg";

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="header__container container">
            <div className="img__container">
                <img src={Image} alt="Profile Img" />
            </div>

            <div className="name__container">
                <p>@{user?.user_name}</p>
            </div>
        </div>
    );
};

export default Header;
