import React from "react";
import { Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import "./App.scss";
import PrivateRoute from "./utils/PrivateRoute";
import Page404 from "./Pages/Page404/Page404";
import Page500 from "./Pages/Page500/Page500";
import DefaultLayout from "./containers/DefaultLayout";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div className="animated fadeIn pt-3 text-center">Loading...</div>;
  }
  return (
    <Switch>
      <PrivateRoute
        exact
        path="/404"
        name="Page 404"
        render={(props) => <Page404 {...props} />}
      />
      <PrivateRoute
        exact
        path="/500"
        name="Page 500"
        render={(props) => <Page500 {...props} />}
      />
      <PrivateRoute
        path="/"
        name="Home"
        render={(props) => <DefaultLayout {...props} />}
      />
    </Switch>
  );
};

export default App;
