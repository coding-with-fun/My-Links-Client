import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import User from "./components/User/User";

const App = () => {
    return (
        <div className="app__container">
            <Router>
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
