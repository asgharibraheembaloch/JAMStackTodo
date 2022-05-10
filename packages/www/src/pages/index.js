import React, { useContext } from "react";
import { Button, Container, Flex, Heading, NavLink } from "theme-ui";
import { IdentityContext } from "../../netlifyIdentityContext";
import { Link } from "gatsby";

const Props = () => {
  const {identity} = useContext(IdentityContext);
  const {user} = useContext(IdentityContext);
  console.log(user)

  return (
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to={"/app"} p={2}>
          Dashboard
        </NavLink>
        {user && (<NavLink p={2}>
            {user.user_metadata.full_name}
        </NavLink>)}
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Todo App</Heading>
        <Button
          sx={{ marginTop: 2, color: "black" }}
          onClick={() => {
            identity.open();
          }}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};

export default Props;
