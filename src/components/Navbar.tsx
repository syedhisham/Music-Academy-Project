"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-0 md:top-20 inset-x-0 max-w-5xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex space-x-16 text-sm md:text-2xl">
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-5 text-sm md:text-2xl">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
              <HoveredLink href="/courses">Songwriting</HoveredLink>
              <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact_us"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
