import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/places/new" component={NewPlace} />
          <Route path="/:userId/places" component={UserPlaces} />
          <Route path="/places/:placeId" component={UpdatePlace} />
          <Route path="/auth" component={Auth} />
          <Route exact path="/" component={Users} />
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
