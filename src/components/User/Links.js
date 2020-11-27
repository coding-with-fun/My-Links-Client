import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Links = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="user_links__container container">
            {user?.links.map((link) => {
                return (
                    <a
                        href={link.url}
                        className="link__container"
                        key={link.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link.name}
                    </a>
                );
            })}
        </div>
    );
};

export default Links;
