import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Links = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="links__container container">
            {user?.links.map((link) => {
                return (
                    <div className="link__container" key={link.url}>
                        <a href={link.url}>{link.name}</a>
                    </div>
                );
            })}
        </div>
    );
};

export default Links;
