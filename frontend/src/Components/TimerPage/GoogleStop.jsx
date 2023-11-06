import { Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { msToTime } from "../TimerPage/api";

const Googlestop = ({watch}) => {
 

  return (
    <div>
      <Text color='black' fontSize={"20px"}>{msToTime(watch)}</Text>
    </div>
  );
};

export default Googlestop;
