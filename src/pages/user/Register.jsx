import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Register = () => {
  return (
    <VStack>
      <Box
        p={"20px 10px"}
        w={"30%"}
        align={"center"}
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input type="text" />
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          <Button mt={4} colorScheme="teal" type="submit">
            Register
          </Button>
        </FormControl>
      </Box>
    </VStack>
  );
};
