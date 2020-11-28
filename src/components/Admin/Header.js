import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="admin_header__container">
            <div className="welcome_container">Welcome {user?.name}</div>

            <div className="image_container">
                <img src={user?.userImage} alt="" />
            </div>
        </div>
    );
};

export default Header;
