import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="admin_header__container">
            <span>Welcome {user?.name}</span>
            <span>Update Details</span>

            <img src={user?.userImage} alt="" />
        </div>
    );
};

export default Header;
