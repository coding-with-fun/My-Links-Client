import React, { useState } from "react";

const AddLink = () => {
    const [toggleAddLink, setToggleAddLink] = useState(false);
    const [newLinkDetails, setNewLinkDetails] = useState({
        name: "",
        url: "",
    });

    const handleToggle = () => {
        setToggleAddLink(!toggleAddLink);
    };

    const handleChange = (e) => {
        setNewLinkDetails({
            ...newLinkDetails,
            [e.target.id]: e.target.value,
        });
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
                            <span>
                                <i class="fas fa-plus-circle"></i>
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
