"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Aboutpage(){
  const router = useRouter();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(!user){
      router.push("/loginpage");
    }
    else{
      setIsLoggedIn(true);
    }
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