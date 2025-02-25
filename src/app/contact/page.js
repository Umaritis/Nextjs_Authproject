"use client"
import React from 'react'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Contactpage() {
  const router = useRouter();
  useEffect(()=>{
    const user= localStorage.getItem('user');
    if(!user){
      router.push("/loginpage")
    }
  },[]);
  return (

    <div>
      <p>This is the contact us page</p>
    </div>
  )
}

export default Contactpage
