import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Homepage() {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-[#0D4715] font-serif font-bold text-lg flex items-center justify-between h-16 px-8 text-white">
        <div className="ml-16">
          <Link href="/">
            <span className="cursor-pointer font-extrabold text-[#F1F0E9]">
              Logo
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8 pr-16">
          <Button className="bg-[#F1F0E9] text-[#41644A] p-6 rounded-3xl">
            <Link href="/loginpage">
              <span className="cursor-pointer">Login Here</span>
            </Link>
          </Button>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex h-full">
        {/* left */}
        <div className="bg-[#41644A] h-screen font-extrabold font-serif flex items-center text-6xl text-justify pl-24 tracking-wide w-[70%]">
          <h1 className="text-[#F1F0E9]">
            Bring All <br />
            Your Work <br /> Together
          </h1>
        </div>
        {/* right */}
        <div className="w-[30%] font-serif text-[#41644A] bg-[#F1F0E9] text-justify text-sm flex items-center justify-center">
          <div className="w-[80%]">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sit illum voluptatum sed explicabo voluptate commodi. Cumque earum natus eaque illum ullam eligendi voluptas assumenda error, distinctio accusamus saepe reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores harum adipisci eligendi earum illum ratione reiciendis asperiores sed, delectus blanditiis ad nostrum voluptas necessitatibus sit distinctio, ea hic aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eum doloremque delectus molestiae illum accusantium quos ullam distinctio assumenda, in reiciendis id explicabo inventore magnam veritatis, maxime, rerum dolore laboriosam.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
