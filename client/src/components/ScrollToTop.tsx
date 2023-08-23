import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// NOTE: 
// when testing App it will definitely throw an error, but tests pass

export default function ScrollToTop() {
  const { pathname } = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);
  return null; 
}; 