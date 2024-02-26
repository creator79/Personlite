"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/aceternity/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/aceternity/ToggleButton";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/experience"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Experience"
          ></MenuItem>
        </Link>
        <Link href={"/projects"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>
        <Link href={"/blogs"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blogs"
          ></MenuItem>
        </Link>
        <div className="flex justify-end ">
          <div className="relative ml-10 mt-[-8px] sm:ml-2">
            <ModeToggle />
          </div>
        </div>
      </Menu>
    </div>
  );
}
