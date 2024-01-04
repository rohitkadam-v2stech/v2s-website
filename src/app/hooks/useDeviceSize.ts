import { useState, useEffect } from "react";

const useDeviceSize = (): {
  isOnMobile: boolean;
  isOnTablet: boolean;
  isOnDesktop: boolean;
  isOnLargeDesktop: boolean;
} => {
  const [isOnMobile, setIsOnMobile] = useState<boolean>(false);
  const [isOnTablet, setIsOnTablet] = useState<boolean>(false);
  const [isOnDesktop, setIsOnDesktop] = useState<boolean>(false);
  const [isOnLargeDesktop, setIsOnLargeDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 600px)").matches;
      const isTablet = window.matchMedia(
        "(min-width: 601px) and (max-width: 1024px)"
      ).matches;
      const isDesktop = window.matchMedia(
        "(min-width: 1025px) and (max-width: 1440px)"
      ).matches;
      const isLargeDesktop = window.matchMedia("(min-width: 1441px)").matches;

      setIsOnMobile(isMobile);
      setIsOnTablet(isTablet);
      setIsOnDesktop(isDesktop);
      setIsOnLargeDesktop(isLargeDesktop);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isOnMobile, isOnTablet, isOnDesktop, isOnLargeDesktop };
};

export default useDeviceSize;
