import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
export const KanbanCreate = () => {
  return (
    <VStack>
      <Box
        p={"20px 10px"}
        w={"30%"}
        align={"center"}
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <FormControl>
          <FormLabel>title:</FormLabel>
          <Input type="text" />
          <FormLabel>Description</FormLabel>
          <Input type="text" />
          <Button mt={4} colorScheme="teal" type="submit">
            Create
          </Button>
        </FormControl>
      </Box>
    </VStack>
  );
};
