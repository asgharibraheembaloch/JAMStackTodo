import React from 'react'
import { Button, Container, Flex, Heading } from 'theme-ui'

const props = () => {
  return (
    <Container>
      <Flex sx={{flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Todo App</Heading>
        <Button sx={{ marginTop: 2, color: 'black' }}
            onClick={()=>alert("Login")}
        >Login</Button>
      </Flex>
    </Container>
  );
};

export default props