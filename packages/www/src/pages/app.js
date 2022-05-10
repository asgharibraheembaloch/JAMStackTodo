import React, { useContext } from "react";
import { Router } from "@reach/router";
import { IdentityContext } from "../../netlifyIdentityContext";

let Dash = () => {
    const {user} = useContext(IdentityContext);
    return (
        <div>{user && user.user_metadata.full_name}</div>
    )    
};

const Props = () => {
  return (
    <Router>
      <Dash path="/app" />
    </Router>
  );
};

export default Props;
