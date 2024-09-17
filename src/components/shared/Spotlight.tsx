import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/aceternity/Spotlight";

export default function SpotlightPreview() {
  return (
    <>
      <Spotlight className="-top-40 left-5 md:left-65 md:-top-20" fill="pink" />
    </>
  );
}
