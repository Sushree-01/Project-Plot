import { Box, Heading, Text, Stack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup1 from "./Signupform";

const Signup = () => {
const nav=useNavigate()

return (
  <>
    <Box bg={"red"} width={"100%"} pt="5%" pb="5%">
      
      <Box width={"70%"} margin="auto" textAlign={"left"}>
        <Box paddingTop={"6%"} paddingBottom={"4%"}>
          <Heading
            fontSize={["34px", "40px", "55px"]}
            fontFamily={["GT Haptik Medium", "sans-serif"]}
            wordBreak={"break-word"}
          >
            <Text color={"white"} textAlign={"left"}>
            Get started with a  {""}
              <span style={{ color: "rgb(229, 124, 216)" }}>
                <i>no-cost</i>
              </span>{" "}
              Project Pilot account.
            </Text>
          </Heading>
          <Text color={"white "} fontSize={"20px"} marginTop={"20px"}>
          Enjoy a credit card-free 30-day trial of Project Pilot Premium with all our plans.
            <br />
            You have the choice to upgrade once the trial period is over, or continue using Track for free without any time limit.
          </Text>
          <Text mt="30px" fontSize={"18px"} color="white">
            Already have an account?{" "}
            <Link
              style={{ color: "pink.800", textDecoration: "underline" }}
              to={"/login"}
            >
              Login Here
            </Link>
          </Text>
        </Box>

        <Stack direction={{ lg: "row", md: "column", base: "column" }}>
          <Box textAlign={"center"}>
            <Signup1 />
          </Box>
          <Spacer />
          <Box>
            <img src="https://i.postimg.cc/MZryZZDX/signtext.png" alt="" />
          </Box>
        </Stack>
      </Box>
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
