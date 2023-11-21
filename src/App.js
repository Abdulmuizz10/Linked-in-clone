import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLoginContext } from "./context/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

function App() {
  // const user = localStorage.getItem("user");

  const { user } = useLoginContext();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/home" /> : <Login />}
          </Route>
          {user && (
            <Route path="/home">
              <Header />
              <Home user={user} />
            </Route>
          )}
          {/* // ) : (
          //   <Route path="/">
          //     <Login />
          //   </Route>
          // )} */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
