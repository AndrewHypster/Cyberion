"use client";
import { useEffect, useRef, useState } from "react";

export default function ObservedElement({
  children,
  className,
  activeClass,
  threshold = 0.5,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Спрацьовує лише один раз
        }
      },
      { threshold } // 0.5 означає, що видно половину елемента
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${className} ${isVisible ? activeClass : ""}`}>
      {children}
    </div>
  );
}
