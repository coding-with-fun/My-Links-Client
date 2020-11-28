import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

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
                            <div className="details__container">
                                <div className="details-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        value={link.name}
                                        readOnly
                                    />
                                    <span>
                                        <i class="fas fa-pen"></i>
                                    </span>
                                </div>

                                <div className="details-group">
                                    <input
                                        type="text"
                                        name="url"
                                        id="url"
                                        className="form-control"
                                        value={link.url}
                                        readOnly
                                    />
                                    <span>
                                        {/* <i class="fas fa-times-circle"></i> */}
                                        <i class="fas fa-trash"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </form>
        </div>
    );
};

export default MyLinks;
