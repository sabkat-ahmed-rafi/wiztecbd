"use client";
import { useEffect, useRef, useState } from "react";

const ScrollAnimatedSection = ({ children, delay = 0, animationDuration = "0.8s", easing = "ease-out" }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  // Check if the environment is a browser
  useEffect(() => {
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      setIsBrowser(true);
    }
  }, []);

  // Set up IntersectionObserver to trigger animation
  useEffect(() => {
    if (!isBrowser) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.3 } // Trigger animation when 30% visible
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isBrowser, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`scroll-animate ${hasAnimated ? "visible" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: animationDuration,
        transitionTimingFunction: easing,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;
