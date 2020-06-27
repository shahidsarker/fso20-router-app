import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
  </div>
);

const Notes = () => (
  <div>
    <h2>Notes</h2>
  </div>
);

const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

const App = () => {
  const [page, setPage] = useState("home");

  const toPage = (page) => (e) => {
    e.preventDefault();
    setPage(page);
  };

  const content = () => {
    if (page === "home") return <Home />;
    else if (page === "notes") return <Notes />;
    else if (page === "users") return <Users />;
  };

  const padding = { padding: 5 };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
      </div>

      <Switch>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div>
        <i>Note app, based on Department of CS 2020</i>
      </div>
    </Router>
  );
};

export default App;
