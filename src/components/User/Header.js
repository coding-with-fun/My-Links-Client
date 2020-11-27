import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="header__container container">
            <div className="img__container">
                <img src={user?.userImage} alt="Profile Img" />
            </div>

            <div className="name__container">
                <p>@{user?.userName}</p>
            </div>
        </div>
    );
};

export default Header;
