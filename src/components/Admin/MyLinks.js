import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import InputDetails from "./InputDetails";

const MyLinks = () => {
    const { user } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="admin_my_links__container">
            <form className="links-form">
                {user.links.map((link) => {
                    return (
                        <div className="form-group" key={link.url}>
                            <InputDetails
                                link={link}
                                handleEdit={handleEdit}
                                isEditing={isEditing}
                            />
                        </div>
                    );
                })}
            </form>
        </div>
    );
};

export default MyLinks;
