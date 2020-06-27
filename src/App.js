import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
    <div className="App">
      <div>
        <button onClick={toPage("home")} style={padding}>
          home
        </button>
        <button onClick={toPage("notes")} style={padding}>
          notes
        </button>
        <button onClick={toPage("users")} style={padding}>
          users
        </button>
      </div>
      {content()}
    </div>
  );
};

export default App;
