import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const App = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="app__container">
            <h1>Hello {user.name}</h1>
        </div>
    );
};

export default App;
