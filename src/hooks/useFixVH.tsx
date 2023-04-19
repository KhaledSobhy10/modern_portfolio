import { useEffect } from "react";

function useFixVH() {
  useEffect(() => {
    function setVH() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    setVH();
    const listen = () => {
      setVH();
    };
    // We listen to the resize event
    window.addEventListener("resize", listen);

    return () => window.removeEventListener("resize", listen);
  }, []);
}

export default useFixVH;
