import {
  Box,
  
} from "@chakra-ui/react";
import React from "react";
import Footer from "../HomePage/Footer"
import Navbar from "../NavComponents/Navbar";
import Apps from "./Apps";

import Faqs from "./Faqs";
import PlanComparison from "./PlanComparison";
import PriceSignup from "./PriceSignup";

import PricesTop from "./PricesTop";
import Trial from "./Trial";
import MainRotes from "./MainRotes";
const Prices = () => {
  return (
    <>
     <Navbar/> 
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
