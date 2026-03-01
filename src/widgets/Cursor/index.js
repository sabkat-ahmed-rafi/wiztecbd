"use client";
import React, { useState, useEffect } from "react";

const isClickableElement = (element) => {
  const clickableTags = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT"];
  return clickableTags.includes(element.tagName) || element.closest("[data-clickable]");
};

export const CursorDotSingle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div>
      <div
        className="fixed w-2.5 h-2.5 bg-success_main rounded-full pointer-events-none z-50"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export const CursorDot = () => {
  const [dots, setDots] = useState([]);

  const handleClick = (e) => {
    if (isClickableElement(e.target)) return;
    const newDots = [];
    const numDots = 10;

    for (let i = 0; i < numDots; i++) {
      const angle = (Math.PI * 2 * i) / numDots;
      const velocity = 100 + Math.random() * 50;
      const lifetime = 500 + Math.random() * 500;

      newDots.push({
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        angle,
        velocity,
        lifetime,
        startTime: Date.now(),
      });
    }

    setDots((prevDots) => [...prevDots, ...newDots]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => prevDots.filter((dot) => Date.now() - dot.startTime < dot.lifetime));
    }, 16);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const clickListener = (e) => handleClick(e);
    window.addEventListener("click", clickListener);
    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50">
      {dots.map((dot) => {
        const elapsedTime = Date.now() - dot.startTime;
        const progress = elapsedTime / dot.lifetime;
        const moveX = Math.cos(dot.angle) * dot.velocity * progress;
        const moveY = Math.sin(dot.angle) * dot.velocity * progress;

        return (
          <div
            key={dot.id}
            className="fixed w-2.5 h-2.5 bg-success_main rounded-full pointer-events-none"
            style={{
              left: dot.x + moveX,
              top: dot.y + moveY,
              transform: "translate(-50%, -50%)",
              opacity: 1 - progress,
            }}
          />
        );
      })}
    </div>
  );
};
