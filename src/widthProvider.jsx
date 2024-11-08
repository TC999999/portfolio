import widthContext from "./widthContext.js";
import { useState, useEffect } from "react";

const WidthProvider = ({ children }) => {
  const minScreenWidth = window.matchMedia("(max-width: 975px)");
  const [isWide, setIsWide] = useState(false);

  function mediaWatcher(minScreenWidth) {
    if (minScreenWidth.matches) {
      setIsWide(false);
    } else {
      setIsWide(true);
    }
  }

  useEffect(() => {
    mediaWatcher(minScreenWidth);
  }, []);

  minScreenWidth.addEventListener("change", function () {
    mediaWatcher(minScreenWidth);
  });

  return (
    <widthContext.Provider value={{ isWide }}>{children}</widthContext.Provider>
  );
};

export default WidthProvider;
