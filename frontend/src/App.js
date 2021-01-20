import React, { useState } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Main from "./pages/Main";
import Play from "./pages/Play";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/play" component={Play} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
