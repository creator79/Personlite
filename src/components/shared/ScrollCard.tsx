"use client";
import React from "react";
import { StickyScroll } from "@/components/aceternity/sticky-scroll-reveal";
import projectsData from "@/lib/projectsData.json";

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <div className="ml-4 mt-[8rem]">
        <h1 className="text-4xl font-bold text-pink-600  pb-4">
          Projects<span className="text-white">.built()</span>
        </h1>
        <span className="text-xl font-semibold mt-6 ">
          Some projects that are close to my heart ♡
        </span>
        <p className="font-mono opacity-40 mb-20">
          Below are some of my favourite projects I've worked on so far, these
          include hackathon submissions, side tinkers, etc.
        </p>
      </div>
      <StickyScroll
        content={projectsData.map((project) => ({ ...project, link: "" }))}
      />
    </div>
  );
}
