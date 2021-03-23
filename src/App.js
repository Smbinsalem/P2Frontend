// Styling
import { GlobalStyle } from "../src/components/Styles";

// Components

import "./App.css";
import Home from "./components/Home";

import NavigationBar from "./components/Navbar/NavigationBar";
import University from "./components/University";
import Student from "./components/Student";
import Course from "./components/Course";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/university" component={University} />
        <Route path="/student" component={Student} />
        <Route path="/course" component={Course} />
      </Switch>
    </>
  );
}

export default App;
