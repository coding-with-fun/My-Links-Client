import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import AddLink from "./AddLink";
import InputDetails from "./InputDetails";

const MyLinks = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="admin_my_links__container">
            <form className="links-form">
                {console.log(user.links)}
                {user.links.map((link) => {
                    return (
                        <div className="form-group" key={link.url}>
                            <InputDetails link={link} />
                        </div>
                    );
                })}
            </form>

            <AddLink />
        </div>
    );
};

export default MyLinks;
