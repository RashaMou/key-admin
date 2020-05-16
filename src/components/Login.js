import React from "react";
import { Button } from "reactstrap";
import { useAuth0 } from "../react-auth0-spa";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      )}

      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
    </div>
  );
};

export default Login;
