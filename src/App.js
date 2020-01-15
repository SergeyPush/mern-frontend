import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const login = useCallback(() => {
    setIsloggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsloggedIn(false);
  }, []);

  let routes;
  if (isloggedIn) {
    routes = (
      <Switch>
        <Route path="/places/new" component={NewPlace} />
        <Route path="/:userId/places" component={UserPlaces} />
        <Route path="/places/:placeId" component={UpdatePlace} />
        <Route exact path="/" component={Users} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/places/:placeId" component={UpdatePlace} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isloggedIn: isloggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
