import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import InputDetails from "./InputDetails";

const MyLinks = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="admin_my_links__container">
            <form className="links-form">
                {user.links.map((link) => {
                    return (
                        <div className="form-group" key={link.url}>
                            <InputDetails link={link} />
                        </div>
                    );
                })}
            </form>
        </div>
    );
};

export default MyLinks;
