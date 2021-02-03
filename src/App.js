import "./App.css";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AddPassword from "./components/AddPassword";
import PasswordList from "./components/PasswordList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PasswordList} />
        <Route exact path="/addpassword" component={AddPassword} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
