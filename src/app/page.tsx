import React from "react";
import Hero from "@/components/shared/Hero";
import Spotlight from "@/components/shared/Spotlight";
import Macbook from "@/components/shared/Macbook";
import Cards from "@/components/shared/Cards";
import Gemini from "@/components/shared/Gemini";
import Skills from "@/components/shared/Skills";
import Globe from "@/components/shared/Globe"

const page = () => {
  return (
    <>
      <Hero />
      <Spotlight />
      <Macbook />
      {/* <TracingBeam>
      </TracingBeam> */}
      <Gemini />
      <Skills />
      <Globe/>

      {/* <Cards /> */}
    </>
  );
};

export default page;
