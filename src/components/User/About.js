import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const About = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="user_about__container">
            {user?.about && <span>{user.about}</span>}
        </div>
    );
};

export default About;
