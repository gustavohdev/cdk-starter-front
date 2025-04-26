import { useEffect } from "react";

export function LogoutComponent() {

    useEffect(() => {
        const timer = setTimeout(() => {
          window.location.href = "/";
        }, 2000); // 2 seconds
    
        // Always good to clear timeout if component unmounts
        return () => clearTimeout(timer);
      }, []);
  
    return <div>Logging out...</div>;
  }