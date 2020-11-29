import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const UserDetails = () => {
    const { user, setUser, UpdateUser } = useContext(UserContext);

    const [aboutCharacters, setAboutCharacters] = useState({
        count: 0,
        class: "",
    });

    const [valueUpdated, setValueUpdated] = useState(false);

    useEffect(() => {
        let aboutClass = "primary";

        if (user.about.length > 250) {
            aboutClass = "warning";
        }

        if (user.about.length > 299) {
            aboutClass = "danger";
        }

        setAboutCharacters({
            class: aboutClass,
            count: user.about.length,
        });
    }, [user]);

    const handleSave = () => {
        setValueUpdated(false);
        UpdateUser(user);
    };

    const handleChange = (e) => {
        if (!valueUpdated) {
            setValueUpdated(true);
        }

        if (!e.target.value) {
            setValueUpdated(false);
        }

        if (e.target.id === "about") {
            if (e.target.value.length < 301) {
                setUser({
                    ...user,
                    [e.target.id]: e.target.value,
                });
            }
        } else {
            setUser({
                ...user,
                [e.target.id]: e.target.value,
            });
        }
    };

    return (
        <div className="admin_user_details__container">
            <form className="user-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={user?.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        className="form-control"
                        value={user?.userName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={user?.email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        className="form-control"
                        aria-describedby="aboutHelp"
                        rows="6"
                        value={user?.about}
                        onChange={(e) => handleChange(e)}
                    />
                    <label className={`about-count ${aboutCharacters.class}`}>
                        {aboutCharacters.count}/300
                    </label>
                </div>
            </form>

            {valueUpdated && (
                <div className="submit_btn__container" onClick={handleSave}>
                    <span>Update</span>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
