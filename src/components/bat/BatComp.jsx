import React from "react";
import HangingBat from "../../assets/hanging-bat.png";
import BatEye from "./BatEye";

function BatComp() {
  return (
    <div className="absolute -top-[67px] right-[20%] hidden h-[300px] md:block">
      <img src={HangingBat} alt="HangingBat" className="h-full" />
      <BatEye position={"left-[49%]"} />
      <BatEye position={"left-[53%]"} />
    </div>
  );
}

export default BatComp;
