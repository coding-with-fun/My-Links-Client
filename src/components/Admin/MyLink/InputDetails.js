import React, { useEffect, useState } from "react";

const InputDetails = ({
    _id,
    url,
    name,
    index,
    handleDelete,
    handleSave,
    provided,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [emptyData, setEmptyData] = useState(false);
    const [tempLink, setTempLink] = useState({
        _id: "",
        name: "",
        url: "",
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        setIsChanged(false);

        if (!isChanged && emptyData) {
            setTempLink({
                _id,
                url,
                name,
            });
        }
    };

    const handleChange = (e) => {
        if (!isChanged) {
            setIsChanged(true);
        }
        setTempLink({
            ...tempLink,
            [e.target.id]: e.target.value,
        });
        if (!e.target.value) {
            setIsChanged(false);
            setEmptyData(true);
        }
    };

    useEffect(() => {
        setTempLink({
            _id,
            url,
            name,
        });
    }, [_id, url, name]);

    return (
        <div className="admin_input_details__container">
            <span {...provided.dragHandleProps}>
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
                            isChanged ? (
                                <i
                                    className="fas fa-check"
                                    onClick={() => handleSave(tempLink)}
                                ></i>
                            ) : (
                                <i className="fas fa-times"></i>
                            )
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
