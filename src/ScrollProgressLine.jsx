import { useEffect, useState, useRef } from "react";

export default function ScrollProgressLine() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (lineRef.current && dotRef.current) {
      const lineHeight = lineRef.current.offsetHeight - dotRef.current.offsetHeight;
      const dotPosition = (scrollPercent / 100) * lineHeight;
      dotRef.current.style.top = `${dotPosition}px`;
    }
  }, [scrollPercent]);

  return (
    <div ref={lineRef} className="scroll-line">
      <div ref={dotRef} className="scroll-dot"></div>
    </div>
  );
}
