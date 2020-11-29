import React, { useEffect, useState } from "react";

const InputDetails = ({ link, index, handleDelete, handleSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempLink, setTempLink] = useState({
        name: "",
        url: "",
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setTempLink({
            ...tempLink,
            [e.target.id]: e.target.value,
        });
    };

    useEffect(() => {
        setTempLink(link);
    }, [link]);

    return (
        <div className="admin_input_details__container">
            <span>
                <i className="fas fa-sort"></i>
            </span>
            <div className="details__container">
                <div className="details-group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={tempLink.name}
                        readOnly={isEditing ? false : true}
                        onChange={(e) => handleChange(e)}
                    />
                    <span onClick={() => handleEditToggle()}>
                        {isEditing ? (
                            <i
                                className="fas fa-times-circle"
                                onClick={() => handleSave(index, tempLink)}
                            ></i>
                        ) : (
                            <i className="fas fa-pen"></i>
                        )}
                    </span>
                </div>

                <div className="details-group">
                    <input
                        type="text"
                        name="url"
                        id="url"
                        className="form-control"
                        value={tempLink.url}
                        readOnly={isEditing ? false : true}
                        onChange={(e) => handleChange(e)}
                    />
                    <span onClick={() => handleDelete(index)}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InputDetails;
