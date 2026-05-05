import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 180;
const FRAME_DIR = "images/frames scroll";

export default function CinematicScroll() {
  const sectionRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(1);

  const formatFrameNumber = (value) => {
    return String(value).padStart(3, "0");
  };

  const getFrameSrc = (frameNumber) => {
    return `${FRAME_DIR}/ezgif-frame-${formatFrameNumber(frameNumber)}.jpg`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const maxScroll = rect.height - viewHeight;
      let progress = 0;
      
      if (rect.top <= 0) {
        progress = Math.abs(rect.top) / maxScroll;
      }
      
      progress = Math.min(Math.max(progress, 0), 1);
      const frame = Math.round(1 + progress * (FRAME_COUNT - 1));
      
      setCurrentFrame(frame);

      // Preload
      if (frame + 1 <= FRAME_COUNT) new Image().src = getFrameSrc(frame + 1);
      if (frame + 2 <= FRAME_COUNT) new Image().src = getFrameSrc(frame + 2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial setup

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="cinematic-scroll-section" id="walkthrough" ref={sectionRef}>
      <div className="scroll-sticky-container">
        <div className="scroll-canvas-wrapper">
          <img 
            className="frame-scroll-image blend-screen" 
            src={getFrameSrc(currentFrame)} 
            alt={`Hox Ai Tutor walkthrough frame ${currentFrame}`} 
          />
        </div>

      </div>
    </section>
  );
}
