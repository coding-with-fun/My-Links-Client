import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Links = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="links__container">
            {user?.links.map((link) => {
                return (
                    <div className="link__container" key={link.url}>
                        <p>{link.name}</p>
                        <p>{link.url}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Links;
