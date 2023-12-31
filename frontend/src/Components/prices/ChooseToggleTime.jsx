import { Box, Text, Image, Stack, Button, Divider, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import TimePicker from 'react-time-picker'

const ChooseToggleTime = () => {
  const navigate=useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('10:00');

  localStorage.setItem("date",startDate)
  localStorage.setItem("time",value)
  console.log(value)
  console.log(startDate);
  return (
    <Box bg="#f5f8fa" w="100%" h={"1700px"} textAlign={"center"}>

      <Flex w="300px" pt="50px" m="auto">
        <Stack>
        <Box w="20px" h="20px" ml="50px" border={"3px solid red"} borderRadius="50%"></Box>
        <Text fontSize={"13px"}>CHOOSE TIME</Text>
        </Stack>
        
        <Divider mt="10px" color={"black"} border="3px solid"/>
        <Stack>
        <Box w="20px" h="20px" border={"3px solid gray"} borderRadius="50%"></Box>
        
        <Text fontSize={"13px"}>YOUR INFO</Text>
        </Stack>
       
      </Flex>
      <Stack direction={{lg:"row",md:"column",base:"column"}} gap="20px" w="50%" m={"auto"} mt="50px">
        {/* **  Date Picker** */}
        <Box m={"auto"} bg="rgb(252, 253, 247)" p="60px" w={{lg:"90%",md:"90%"}} h="400px" ml={{base:"-60px",md:"10px"}}>
          <Text mt="20px" fontSize={"25px"}>Find a time to meet </Text>
         <Box w="300px" border={"1px solid black"} m="auto" mt="20px" p="10px">
         <DatePicker
      
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}   //to disable past dates
            isClearable  //for cancelling date
            showYearDropdown
            scrollableMonthYearDropdown
          />
         </Box>
        </Box>
        {/* ***** */}

        <Box  m={{lg:"auto",md:"auto"}} bg="white" p={{lg:"40px",md:"60px",base:"20px"}} w={{lg:"80%",md:"90%",base:"150%"}} ml={{md:"30px",base:"-50px"}}>
          <Text textAlign={"left"} fontSize="17px" fontWeight={"bold"}>Meeting duration</Text>
          <Button w={{lg:"250px",md:"250px",base:"170px" }}  mt="20px">30 min</Button>
          <Text textAlign={"left"} fontSize="17px" fontWeight={"bold"} mt="20px">What time works best?</Text>
       <Box mt="20px" >
       <TimePicker
                onChange={(newValue)=>setValue(newValue) }
                value={value}
            />
       </Box>
       <Button w={{lg:"250px",md:"250px",base:"170px" }} mt="50px" onClick={()=> navigate("/YourInfo")}>Next</Button>
        </Box>
      </Stack>


      <Box>

      </Box>
    </Box>
  );
};

export default ChooseToggleTime;
