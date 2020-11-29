import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import AddLink from "./AddLink";
import InputDetails from "./InputDetails";

const MyLinks = () => {
    const { user, setUser } = useContext(UserContext);

    const handleSave = (index, data) => {
        let tempData = user.links;
        tempData.splice(index, 1, data);

        setUser({
            ...user,
            links: tempData,
        });
    };

    const handleDelete = (index) => {
        let tempData = user.links;
        tempData.splice(index, 1);
        setUser({
            ...user,
            links: tempData,
        });
    };

    return (
        <div className="admin_my_links__container">
            <AddLink />

            <form className="links-form">
                {user.links.map((link, index) => {
                    return (
                        <div className="form-group" key={index}>
                            <InputDetails
                                link={link}
                                index={index}
                                handleDelete={handleDelete}
                                handleSave={handleSave}
                            />
                        </div>
                    );
                })}
            </form>
        </div>
    );
};

export default MyLinks;
