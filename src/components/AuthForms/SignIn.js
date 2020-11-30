import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const SignIn = () => {
    const { UserSignIn } = useContext(UserContext);
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setSignInData({
            ...signInData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        UserSignIn(signInData);
    };

    return (
        <div className="sign_in__container">
            <form>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignIn;
