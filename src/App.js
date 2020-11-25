import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";

const App = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="app__container">
            <Router>
                <h1>Hello {user.name}</h1>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/:user" component={User} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
