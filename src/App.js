import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import SignIn from "./components/AuthForms/SignIn";
import Home from "./components/Home/Home";
import User from "./components/User/User";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/admin" component={Admin} />
                <Route path="/:user" component={User} />
            </Switch>
        </Router>
    );
};

export default App;
