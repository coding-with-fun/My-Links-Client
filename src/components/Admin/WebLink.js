import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const WebLink = () => {
    const { user } = useContext(UserContext);
    const [userLink, setUserLink] = useState("");

    const copyToClipBoard = async () => {
        await navigator.clipboard.writeText(userLink + user?.userName);
    };

    useEffect(() => {
        setUserLink(`me.arccoder.in/`);
    }, [user]);

    return (
        <div className="admin_web_link__container">
            <div className="link">
                <span className="pre-link">{userLink}</span>
                <span className="user-link">{user?.userName}</span>
            </div>

            <span className="copy-icon" onClick={() => copyToClipBoard()}>
                <i className="far fa-copy"></i>
            </span>
        </div>
    );
};

export default WebLink;
