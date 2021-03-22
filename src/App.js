// Styling
import { GlobalStyle } from "../src/components/Styles";

// Components

import "./App.css";
import Home from "./components/Home";

import NavigationBar from "./components/Navbar/NavigationBar";
import University from "./Models/University";
import Student from "./Models/Student";
import Course from "./Models/Course";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <NavigationBar>
      <Router>
        <Switch>
          <Route path="/" exact component={<Home />} />
          <Route path="/university" component={University} />
          <Route path="/student" component={Student} />
          <Route path="/course" component={Course} />
        </Switch>
      </Router>
    </NavigationBar>
  );
}

export default App;
