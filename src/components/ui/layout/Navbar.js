"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  const [isloggedin, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  },[])

  const handleLogout = ()=>{
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("loginpage")
  }


  return (
    <div>
      <div className="bg-[#0D4715] font-serif font-bold text-lg flex items-center justify-between h-16 px-8 text-white">
        <div className="ml-16">
          <Link href="/">
            <span className="cursor-pointer font-extrabold text-[#F1F0E9]">
              Logo
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8 pr-16">
          {isloggedin  ? (
            <Button onClick={handleLogout} className="bg-red-500 text-white p-6 rounded-3xl">
              Logout
            </Button>
          ) : (
            <Button className="bg-[#F1F0E9] text-[#41644A] p-6 rounded-3xl">
              <Link href="/loginpage">
                <span className="cursor-pointer">Login Here</span>
              </Link>
            </Button>
          )}
        </div>
        </div>
        
      </div>
  );
}

export default Navbar;
