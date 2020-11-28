import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="admin_header__container">
            <h1>Welcome {user?.name}</h1>

            <div className="image_container">
                <img src={user?.userImage} alt="" />
            </div>
        </div>
    );
};

export default Header;
