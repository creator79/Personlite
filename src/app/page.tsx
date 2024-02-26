import React from "react";
import Hero from "@/components/shared/Hero";
import Spotlight from "@/components/shared/Spotlight";
import Macbook from "@/components/shared/Macbook";
import Cards from "@/components/shared/Cards";
import Lamp from "@/components/shared/Lamp";
import Gemini from "@/components/shared/Gemini";

const page = () => {
  return (
    <>
      <Hero />
      <Spotlight />
      <Macbook />
      {/* <TracingBeam>
      </TracingBeam> */}
      <Gemini />
      {/* <Lamp /> */}

      <Cards />

      {/* <Gemini /> */}
      <div
      className="visme_d"
      data-title="Untitled Project"
      data-url="n08w0d3m-untitled-project?fullPage=true"
      data-domain="forms"
      data-full-page="true"
      data-min-height="100vh"
      data-form-id="23250"
    />
    
    </>
  );
};

export default page;
