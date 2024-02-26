import React from "react";
import Hero from "@/components/shared/Hero";
import Spotlight from "@/components/shared/Spotlight";
import Macbook from "@/components/shared/Macbook";
import Cards from "@/components/shared/Cards";
import Lamp from "@/components/shared/Lamp";
import Gemini from "@/components/shared/Gemini";
import PinCard from "@/components/shared/PinCard";

import { TracingBeam } from "@/components/aceternity/tracing-beam";
const page = () => {
  return (
    <>
      <Hero />
      <Spotlight />
      <Macbook />
      {/* <TracingBeam>
      </TracingBeam> */}
      {/* <PinCard /> */}
      <Gemini />
      {/* <Lamp /> */}

      <Cards />

      {/* <Gemini /> */}
    </>
  );
};

export default page;
