import React, { useState } from "react";

const InputDetails = ({ link }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="admin_input_details__container">
            <span>
                <i class="fas fa-sort"></i>
            </span>
            <div className="details__container">
                <div className="details-group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={link.name}
                        readOnly={isEditing ? false : true}
                    />
                    <span onClick={() => handleEdit()}>
                        {isEditing ? (
                            <i className="fas fa-times-circle"></i>
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
                        value={link.url}
                        readOnly={isEditing ? false : true}
                    />
                    <span>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InputDetails;
