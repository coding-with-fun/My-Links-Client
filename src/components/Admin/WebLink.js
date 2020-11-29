import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const WebLink = () => {
    const { user } = useContext(UserContext);
    const [userLink, setUserLink] = useState("");
    const [copyMessage, setCopyMessage] = useState({
        msg: null,
        status: true,
    });

    const copyToClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(userLink + user?.userName);
            setCopyMessage({
                msg: "Link copied successfully!!",
                status: true,
            });
        } catch (error) {
            setCopyMessage({
                msg: "Failed to copy link!!",
                status: false,
            });
        }
    };

    useEffect(() => {
        setUserLink(`me.arccoder.in/`);
    }, [user]);

    return (
        <div className="admin_web_link__container">
            <div className="link__container">
                <div className="link">
                    <span className="pre-link">{userLink}</span>
                    <span className="user-link">{user?.userName}</span>
                </div>

                <span className="copy-icon" onClick={() => copyToClipBoard()}>
                    <i className="far fa-copy"></i>
                </span>
            </div>

            {copyMessage.msg && (
                <div className="success_message__container">
                    <p className={copyMessage.status ? "success" : "error"}>
                        {copyMessage.msg}
                    </p>
                </div>
            )}
        </div>
    );
};

export default WebLink;
