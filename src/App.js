import React, { useState } from "react";
import {
  Container,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import "./App.css";

import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
);

const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? "important" : ""}</strong>
      </div>
    </div>
  );
};

const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {notes.map((note) => (
            <TableRow key={note.id}>
              <TableCell>
                <Link to={`/notes/${note.id}`}>{note.content}</Link>
              </TableCell>
              <TableCell>{note.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

const Users = () => (
  <div>
    <h2>TKTL notes app</h2>
    <ul>
      <li>Matti Luukkainen</li>
      <li>Juha Tauriainen</li>
      <li>Arto Hellas</li>
    </ul>
  </div>
);

const Login = (props) => {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onLogin("mluukkai");
    history.push("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        {/* <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group> */}
      </form>
    </div>
  );
};

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "HTML is easy",
      important: true,
      user: "Matti Luukkainen",
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      important: false,
      user: "Matti Luukkainen",
    },
    {
      id: 3,
      content: "Most important methods of HTTP-protocol are GET and POST",
      important: true,
      user: "Arto Hellas",
    },
  ]);

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const login = (user) => {
    setUser(user);
    setMessage(`welcome ${user}`);
    setTimeout(() => {
      setMessage(null);
    }, 10000);
  };

  const padding = { padding: 5 };

  const match = useRouteMatch("/notes/:id");
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null;

  return (
    <Container>
      {message && <span>{message}</span>}
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
      {/* <Nav.Link href="#" as="span"> */}
      <Link style={padding} to="/">
        home
      </Link>
      {/* </Nav.Link> */}
      {/* <Nav.Link href="#" as="span"> */}
      <Link style={padding} to="/notes">
        notes
      </Link>
      {/* </Nav.Link> */}
      {/* <Nav.Link href="#" as="span"> */}
      <Link style={padding} to="/users">
        users
      </Link>
      {/* </Nav.Link> */}
      {/* <Nav.Link href="#" as="span"> */}
      {user ? (
        <em>{user} logged in</em>
      ) : (
        <Link style={padding} to="/login">
          login
        </Link>
      )}
      {/* </Nav.Link> */}
      {/* </Navbar.Collapse> */}
      {/* </Navbar> */}

      <Switch>
        <Route path="/notes/:id">
          <Note note={note} />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} />
        </Route>
        <Route path="/users">
          {user ? <Users /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div>
        <br />
        <i>Note app, based on Department of CS 2020</i>
      </div>
    </Container>
  );
};

export default App;
