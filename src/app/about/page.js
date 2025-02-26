"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Aboutpage(){
  const router = useRouter();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    
  }, []);
  const handleLogout = ()=>{
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/loginpage")
  }

  return(
    <div>
      <p>This is the About Us Page</p>
    </div>
  )
}
export default Aboutpage