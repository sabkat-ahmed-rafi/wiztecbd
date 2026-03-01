import { useRef, useEffect, useState } from "react";

const useEdgeScroll = (direction = "horizontal", scrollSpeed = 20, scrollIntervalTime = 5) => {
  const scrollContainerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false); // Default to false
  const scrollInterval = useRef(null);

  // Check if window is available (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 768); // Desktop if width > 768px
    }
  }, []); // Only runs once when the component mounts

  const handleMouseMove = (e) => {
    if (!isDesktop) return; // Exit early if not desktop

    const container = scrollContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mousePosition = direction === "horizontal" ? e.clientX - rect.left : e.clientY - rect.top;
    const containerSize = direction === "horizontal" ? container.clientWidth : container.clientHeight;
    const scrollSize = direction === "horizontal" ? container.scrollWidth : container.scrollHeight;
    const scrollPosition = direction === "horizontal" ? container.scrollLeft : container.scrollTop;

    if (mousePosition > (2 * containerSize) / 3 && scrollPosition < scrollSize - containerSize) {
      if (!scrollInterval.current) {
        scrollInterval.current = setInterval(() => {
          if (direction === "horizontal") {
            container.scrollLeft += scrollSpeed;
          } else {
            container.scrollTop += scrollSpeed;
          }
        }, scrollIntervalTime);
      }
    } else if (mousePosition < containerSize / 3 && scrollPosition > 0) {
      if (!scrollInterval.current) {
        scrollInterval.current = setInterval(() => {
          if (direction === "horizontal") {
            container.scrollLeft -= scrollSpeed;
          } else {
            container.scrollTop -= scrollSpeed;
          }
        }, scrollIntervalTime);
      }
    } else {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 768); // Update desktop status on resize
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      const container = scrollContainerRef.current;
      if (container && isDesktop) {
        container.addEventListener("mousemove", handleMouseMove);
      }

      return () => {
        window.removeEventListener("resize", handleResize);
        if (container) {
          container.removeEventListener("mousemove", handleMouseMove);
        }
        clearInterval(scrollInterval.current);
      };
    }
  }, [isDesktop]); // Dependency on isDesktop to adjust mousemove listener

  return scrollContainerRef;
};

export default useEdgeScroll;
