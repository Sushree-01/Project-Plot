import React from "react";
import {
    Box,
    Button,
    Flex,
    Text,
    Image,
  } from "@chakra-ui/react";
  import { IoMdArrowDropright } from "react-icons/io";
  
const Trial = () => {
  return <Box textAlign={"center"}>

<Box mt={50}>
        <Box w={"50%"} m="auto">
          <Text
            fontSize={{ base: "", md: "", lg: "15.36px" }}
            mt={{ lg: "100px" ,md:"100px" }}
          >
            All plans come with a free, 30-day trial of Toggl Track Premium—no
            credit card required. You can choose to upgrade at the end of the
            trial or continue using Track for free.
          </Text>
          <Text mt={{ base:"20px", lg: "30px"  }}>Still unsure?</Text>
          <Button
            bg={"#494749"}
            border="1px solid white"
            borderRadius={"30px"}
            height={{ lg: "50px" }}
            mt={{ base:"20px", lg: "30px" }}
            ml={{ base:"-40px" }}
            mb={{base:"50px"}}
           
            _hover={{ color: "white", bg: "rgb(133, 131, 131)" }}
          >
            Compare all plan features <IoMdArrowDropright />
          </Button>
        </Box>
      </Box>
      {/* **** */}

      {/* **COMPANY IMAGE** */}

      <Box mt={{ lg: "70px",md:"70px" ,base:"50px" }} >
        <Image
   
        w={{md:"90%",base:"90%",lg:"60%"}}
          m="auto"
          src="https://public-assets.toggl.com/b/static/1ede89b0d75ce5a9cd6476ba3f2d6cf4/83e96/brands-oneliner.avif"
        />
      </Box>
  </Box>;
};

export default Trial;
