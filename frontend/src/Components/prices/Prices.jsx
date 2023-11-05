import {
  Box,
  
} from "@chakra-ui/react";
import React from "react";
import Footer from "../HomePage/Footer"

import Apps from "./Apps";

import Faqs from "./Faqs";
import PlanComparison from "./PlanComparison";


import PricesTop from "./PricesTop";
import Trial from "./Trial";

const Prices = () => {
  return (
    <>
     {/* <Navbar/>  */}
    <Box style={{width:"100%"}}
    mt="-20px"
    bg="#010a06"
      color={"#FCE5D8"}
      fontFamily={"sans-serif"}
      // w={{ base: "100%", md: "100%", lg: "100%" }}
      textAlign={"center"}
      
    >
      <PricesTop />

      <Trial />

      <Faqs />

      {/* <PriceSignup /> */}
      <PlanComparison/>
      <Apps/>
    </Box>
     <Footer/> 
    </>
  );
};

export default Prices;
