import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const UserDetails = () => {
    const { user, setUser } = useContext(UserContext);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div className="admin_user_details__container">
            <form>
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
                        rows="3"
                        value={user?.about}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </form>
        </div>
    );
};

export default UserDetails;
