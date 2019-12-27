import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/places/new" component={NewPlace} />
        <Route exact path="/" component={Users} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
