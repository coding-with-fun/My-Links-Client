import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const AddLink = () => {
    const { user, setUser } = useContext(UserContext);

    const [toggleAddLink, setToggleAddLink] = useState(true);
    const [newLinkDetails, setNewLinkDetails] = useState({
        name: "",
        url: "",
    });

    const handleToggle = () => {
        if (!toggleAddLink) {
            setNewLinkDetails({
                name: "",
                url: "",
            });
        }

        setToggleAddLink(!toggleAddLink);
    };

    const handleChange = (e) => {
        setNewLinkDetails({
            ...newLinkDetails,
            [e.target.id]: e.target.value,
        });
    };

    const handleSave = () => {
        let tempData = user.links;
        tempData.push(newLinkDetails);
        setUser({
            ...user,
            links: tempData,
        });
        setNewLinkDetails({
            name: "",
            url: "",
        });
        setToggleAddLink(true);
    };

    return (
        <div className="admin_add_link__container">
            {toggleAddLink ? (
                <div className="btn__container">
                    <span onClick={handleToggle}>Add new link</span>
                </div>
            ) : (
                <div className="add_link__container">
                    <div className="input__container">
                        <div className="details-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={newLinkDetails.name}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder="Name of link"
                            />
                            <span onClick={handleSave}>
                                <i className="fas fa-plus-circle"></i>
                            </span>
                        </div>

                        <div className="details-group">
                            <input
                                type="text"
                                name="url"
                                id="url"
                                value={newLinkDetails.url}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder="URL of link"
                            />
                            <span onClick={handleToggle}>
                                <i className="fas fa-times-circle"></i>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddLink;
