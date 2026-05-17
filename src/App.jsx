import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

import About from "./components/About";
import Vision from "./components/Vision";
import Features from "./components/Features";
import Problem from "./components/Problem";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

function App() {
  const videoRef = useRef(null);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (!video.duration || Number.isNaN(video.duration)) return;
        
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;
        
        const scrollProgress = Math.max(0, Math.min(1, window.scrollY / scrollableHeight));
        const targetTime = scrollProgress * (video.duration * 0.999);
        video.currentTime = targetTime;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const handleLoadedMetadata = () => {
      handleScroll();
    };
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      revealElements.forEach((el) => observer.observe(el));

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    } else {
      revealElements.forEach((el) => el.classList.add("in-view"));
    }
  }, []);

  return (
    <>
      <div className="cinematic-intro">
        <div className="intro-streak"></div>
        <div className="intro-logo">Hox Ai Tutor</div>
      </div>
      <video 
        ref={videoRef}
        className="app-bg-video" 
        src={`${baseUrl}videos/mp.mp4`} 
        muted 
        playsInline 
      ></video>
      <div className="video-overlay"></div>

      <Header />

      <main>
        <Hero />
        <About />
        <Vision />
        <Features />
        <Problem />
        <Trust />
        <Pricing />
        <Roadmap />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}

export default App;
