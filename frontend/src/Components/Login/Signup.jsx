import { Box, Heading, Text, Stack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup1 from "./Signupform";

const Signup = () => {
const nav=useNavigate()

  return (
    <>
      <Box bg={"#4B2C54"} width={"100%"} pt="5%" pb="5%">
      <Signup1 />
      </Box>
      <Box
        h={"50px"}
        backgroundColor="pink.400"
        display={"flex"}
        justifyContent="start"
        alignItems={"center"}
        pl="2%"
      >
        <Text>© 2023 Project Pilot. All rights reserved.</Text>
      </Box>
    </>
  );
};

export default Signup;
