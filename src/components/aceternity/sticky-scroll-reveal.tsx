"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/aceternity/tracing-beam";

export const StickyScroll = ({
  content,
}: {
  content: {
    links: any;
    id: null | undefined;
    title: string;
    description: string;
    tags: string[];
    link: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[50rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 no-scrollbar"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
          <TracingBeam className="" >
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.id} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 2 : 0.6,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              <div className="flex flex-wrap mt-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-800 px-2 py-1 rounded mr-2 mb-2 text-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                {item.links.map((link: any, linkIndex: number) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-medium mt-2 block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="h-40" />
        </div>
          </TracingBeam>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
  );
};
