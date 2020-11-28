import React from "react";

const InputDetails = ({ link, handleEdit, isEditing }) => {
    return (
        <div className="admin_input_details__container">
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
                        readOnly
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
