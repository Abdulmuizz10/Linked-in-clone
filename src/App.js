import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {user ? (
            <Route path="/home">
              <Header />
              <Home user={user} />
            </Route>
          ) : (
            <Route path="/">
              <Login />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
