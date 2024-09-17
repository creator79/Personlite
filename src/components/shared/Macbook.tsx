import React from "react";
import { MacbookScroll } from "@/components/aceternity/macbook-scroll";
import Link from "next/link";
import Image from "next/image";

const MacbookScrollDemo = () => {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      
      <MacbookScroll
        title={
          <div className="mb-4 flex items-center justify-center md:flex-row">
            <Image
              src="/quote.png"
              width={50}
              height={50}
              alt="quote"
              className="mr-5 mb-5 h-15 w-10"
            />
            <span className="text-xl font-semibold text-black dark:text-white">
              A goofy lil boy who &apos;s in a love-hate relationship with coding
            </span>
            <br />

            <Image
              src="/unquote.png"
              width={50}
              height={50}
              alt="unquote"
              className="ml-5 mt-5 h-15 w-10"
            />
          </div>
        }
        badge={
          <Link href="https://github.com/creator79">
            <Badge className="h-20 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/5.svg`}
        showGradient={false}
      />
    </div>
  );
};
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white rotate-90"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MacbookScrollDemo;
