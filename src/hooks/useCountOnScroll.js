"use client";
import { useEffect, useState, useRef } from "react";

const useCountOnScroll = (target, duration, initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  const [isCounting, setIsCounting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounting(true);
          } else {
            setIsCounting(false);
            setCount(initialCount); // Reset count to initialCount when out of view
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [initialCount]);

  useEffect(() => {
    if (isCounting && count < target) {
      const startTime = Date.now();
      const step = target - initialCount; // Total steps required
      const intervalTime = duration / step; // Calculate the interval time based on total duration and steps

      const animateCount = () => {
        const elapsedTime = Date.now() - startTime;
        const currentStep = Math.min(Math.floor(elapsedTime / intervalTime), step);

        setCount(initialCount + currentStep);

        if (currentStep < step) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isCounting, target, duration, initialCount]);

  return { count, elementRef };
};

export default useCountOnScroll;
