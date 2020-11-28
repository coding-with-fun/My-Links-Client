import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const WebLink = () => {
    const { user } = useContext(UserContext);
    const [userLink, setUserLink] = useState("");

    const copyToClipBoard = async () => {
        await navigator.clipboard.writeText(userLink);
    };

    useEffect(() => {
        setUserLink(`links.arccoder.in/${user?.userName}`);
    }, [user]);

    return (
        <div>
            <span>{userLink}</span>

            <span onClick={() => copyToClipBoard()}>
                <i className="far fa-copy"></i>
            </span>
        </div>
    );
};

export default WebLink;
