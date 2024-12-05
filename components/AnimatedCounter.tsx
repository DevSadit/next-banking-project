"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp 
      prefix="$ "
      decimals={2} 
      duration={2} 
      end={amount}>

      </CountUp>
    </div>
  );
};

export default AnimatedCounter;
