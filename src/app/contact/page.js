"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Contactpage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/loginpage");
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from storage
    setIsLoggedIn(false); // Update state
    router.push("/loginpage"); // Redirect to login page
  };

  return (
    <div>
      <p>This is the contact us page</p>

      {/* Show logout button only if user is logged in */}
      {isLoggedIn && (
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Contactpage;
