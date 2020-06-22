import React from "react";
import styles from "./App.module.css";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
//import components
import { NavbarComponent } from "./components";
//import screens
import {
  HomeScreen,
  BlogScreen,
  PhotographScreen,
  AboutScreen,
  BlogReadScreen
} from "./screens/";

export default function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className={styles.container}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/BlogScreen" component={BlogScreen} />
            <Route path="/PhotographScreen" component={PhotographScreen} />
            <Route path="/AboutScreen" component={AboutScreen} />
            <Route path="/BlogReadScreen" component={BlogReadScreen} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
