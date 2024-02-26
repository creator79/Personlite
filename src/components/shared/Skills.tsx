"use client";
import React from "react";
import { ContainerScroll } from "@/components/aceternity/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-6xl font-bold text-white px-10 mt-20 pb-4 overflow-hidden">
              {" "}
              Skills 🥯{" "}
            </h1>
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Scroll Animations
            </span>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "React Js",
    image:
      "https://assets-v2.lottiefiles.com/a/b3202668-1151-11ee-939e-cf25d6aad422/k1qbZAOrp7.gif",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Next Js",
    image:
      "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo-thumbnail.png",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Node JS",
    image:
      "https://www.ambientinfotech.com/wp-content/uploads/2023/01/NODEJS_CIRCLE.gif",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Express Js",
    image:
      "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "MongoDB",
    image:
      "https://assets-v2.lottiefiles.com/a/2a2a499e-116d-11ee-8f41-7f82227ba589/MIgBtJS610.gif",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "PostgreSQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png",
    badge: "Mentor",
  },

  {
    name: "Sarah Brown",
    designation: "JavaScript ",
    image:
      "https://miro.medium.com/v2/resize:fit:960/1*-tOldEbfjijxn9VqZeULqg.gif",
  },

  {
    name: "Richard Taylor",
    designation: "Docker",
    image:
      "https://assets-v2.lottiefiles.com/a/a8f464c6-1172-11ee-93d6-4ff65dbb03d0/zGLmMrwT4s.gif",
  },
  {
    name: "Linda Anderson",
    designation: "Git/GitHub",
    image:
      "https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif",
  },

  {
    name: "William Thomas",
    designation: "TypeScript",
    image:
      "https://d2i2xyh28mr8fx.cloudfront.net/wp-content/uploads/2023/03/03165900/WHATS-TYPESCRIPT_.png",
    badge: "Badger",
  },
];
