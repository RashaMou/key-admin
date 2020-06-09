import React from "react";
import { Button } from "reactstrap";
import { useAuth0 } from "../../react-auth0-spa";

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
    </div>
  );
};

export default Logout;
