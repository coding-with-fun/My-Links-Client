import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const TopLinks = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="top_links__container">
            {user?.top_links &&
                user.top_links.map((link) => {
                    return (
                        <div className="link_container" key={link.url}>
                            <span>{link.url}</span>
                        </div>
                    );
                })}
        </div>
    );
};

export default TopLinks;
