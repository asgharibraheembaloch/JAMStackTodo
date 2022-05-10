const React = require("react");
const netlifyIdentity = require("netlify-identity-widget");
const { useEffect, useState } = require("react");

const IdentityContext = React.createContext({});
exports.IdentityContext = IdentityContext;

const IdentityProvidor = (props) => {
  const [user, setUser] = useState();
  useEffect(() => {
    netlifyIdentity.init({});
  });
  netlifyIdentity.on("login", (user) => {
    netlifyIdentity.close();
    setUser(user);
  });
  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close();
    setUser();
  });
  return (
    <IdentityContext.Provider
      value={{ identity: netlifyIdentity, user: user }}
    >
      {props.children}
    </IdentityContext.Provider>
  );
};

exports.Provider = IdentityProvidor;