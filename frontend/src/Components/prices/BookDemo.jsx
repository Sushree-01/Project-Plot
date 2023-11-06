import React from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
 
} from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";
import { Link as RouterLink, useNavigate  } from "react-router-dom";
import Navbar from "../NavComponents/Navbar";
import Footer from "../HomePage/Footer"
const BookDemo = () => {
  const navigate=useNavigate()
  return (
    <>

   <Navbar/>
    <Box bg="#010a06 " textAlign={"center"}>
      <Stack
        w={"90%"}
        margin="auto"
        p={{ lg: "100px", md: "100px", base: "20px" }}
        direction={{ lg: "row", md: "column", base: "column" }}
        gap={{ lg: "100px" }}
      >
        {/* **** */}
        <Box
          color={"#fdf1ec"}
          w={{ lg: "40%", md: "100%", base: "100%" }}
          textAlign={"left"}
        >
          <Text
            fontSize={{ lg: "45px", md: "40px", base: "25px" }}
            fontWeight="bold"
          >
            Book your{" "}
            <Text as="span" color={"#e57cd8"}>
              free demo
            </Text>{" "}
            of project pilot
          </Text>
          <Text
            fontSize={{ lg: "16.2px", md: "17px" }}
            fontWeight="bold"
            mt="40px"
          >
            Explore how you can use project pilot with your team to:
          </Text>
          <Box mt={"35px"}>
            <Flex gap="20px">
              <Box fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>
                <Text>Accurately scope projects and pinpoint scope creep</Text>
              </Box>
            </Flex>
            <Flex gap="20px" mt="20px">
              <Box fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>
                <Text>Plan and quote project budgets with confidence</Text>
              </Box>
            </Flex>
            <Flex gap="20px" mt="20px">
              <Box fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>
                <Text>Improve staffing and team allocation</Text>
              </Box>
            </Flex>
            <Flex gap="20px" mt="20px">
              <Box fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>
                <Text>Ensure project and client profitability</Text>
              </Box>
            </Flex>
            <Flex gap="20px" mt="20px">
              <Box fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>
                <Text>
                  Integrate time tracking with the tools your team uses
                </Text>
              </Box>
            </Flex>
          </Box>
          <Text mt="50px" fontSize={"16px"} fontWeight="bold">
            TRUSTED BY 70,000+ TEAMS WORLDWIDE
          </Text>
          <Image
            mt={{ lg: "40px", md: "70px", base: "70px" }}
            src="https://public-assets.toggl.com/b/static/3823ebd7e0f7f9fe55cc83646c5d683e/8428e/logo-demo-companies.avif"
          />

          <Flex
            mt="70px"
            gap={{ lg: "20px", md: "50px", base: "40px" }}
            mb={{ md: "80px", base: "80px" }}
          >
            <Image src="https://public-assets.toggl.com/b/static/5264c338174fe1ea20f3162461d5f954/14b67/illo-computer-tilt.avif" />
            <Box>
              <Text>
                Looking for help with general questions or a technical issue?
              </Text>
              <Text color={"#e57cd8"}>Contact our Support team</Text>
            </Box>
          </Flex>
        </Box>
        {/* *** */}

        <Box
          w={{ lg: "45%", md: "100%", base: "100%" }}
          bg="#fce5d8"
          p={{ lg: "40px", md: "40px", base: "20px" }}
          h="580px"
        >
          <Text textAlign={"left"} fontSize={"17px"} fontWeight="bold">
            Request a 30-minute custom demo for free.
          </Text>

          <Box>
            <FormControl>
              <Flex gap={{ lg: "20px", md: "20px", base: "20px" }} mt="30px">
                <Box>
                  <FormLabel>First Name*</FormLabel>
                  <Input type="email" borderColor={"black"} />
                </Box>
                <Box>
                  <FormLabel>Last Name*</FormLabel>
                  <Input type="email" borderColor={"black"} />
                </Box>
              </Flex>
              <Box mt="20px">
                <FormLabel>Company Email*</FormLabel>
                <Input type="email" borderColor={"black"} />
              </Box>
              <Box mt="20px">
                <FormLabel>
                  How many people will be using project pilot?*
                </FormLabel>
                <Input type="email" borderColor={"black"} />
              </Box>
              <Box mt="20px">
                <FormLabel>I plan to use project pilot primarily for:*</FormLabel>
                <Input type="email" borderColor={"black"} />
              </Box>
            </FormControl>
          </Box>

          <Button mt="30px" bg="#e57cd8" color={"white"} w="200px" p="20px" onClick={()=> navigate("/ToggleBook")}>
           
      
            submit
            
          </Button>
        </Box>
      </Stack>

      <Box m="auto" bg="#010a06 " mt={{base:"50px"}}>
        <Flex w={"80%"} gap="50px" m="auto" p={{lg:"50px",md:"50px",base:"20px"}} >
          <Box color={"#fdf1ec"}>
            <Text fontSize={{ lg: "32px", md: "20px", }} textAlign="left">
              “project pilot has given us actual data about our labor; we're able
              to see how much time each step of our creative process takes.”
            </Text>
            <Text fontSize={{lg:"15.2px",md:"15.2px",base:"12px"}} textAlign="left" mt="20px">
              — RogueMark Studios, Creative Agency
            </Text>
          </Box>
          <Box>
            <Image
              w={{lg:"500px",md:"500px",base:"600px"}}
              src="https://public-assets.toggl.com/b/static/c09775279d4d284adf0b2b3f09700ca6/40080/cs-roguemark-tilt.avif"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
    <Footer/>
    </>
  );
};

export default BookDemo;
