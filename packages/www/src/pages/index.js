import React, { useEffect } from 'react'
import { Button, Container, Flex, Heading } from 'theme-ui'
import netlifyIdentity from "netlify-identity-widget";

const Props = () => {
    useEffect(()=>{
        netlifyIdentity.init({

        })
    })
  return (
    <Container>
      <Flex sx={{flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Todo App</Heading>
        <Button sx={{ marginTop: 2, color: 'black' }}
            onClick={()=> {netlifyIdentity.open()}}
        >Login</Button>
      </Flex>
    </Container>
  );
};

export default Props