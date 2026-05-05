import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState("Hi Hox Ai Tutor, I need more details.");
  const waNumber = "919995550353";

  const options = [
    { text: "Personalized Learning Engine", msg: "I want to know more about your Personalized Learning Engine." },
    { text: "Performance Analytics Dashboard", msg: "Please share details about the Performance Analytics Dashboard." },
    { text: "Teacher Control Panel", msg: "I need details about the Teacher Control Panel and exam management features." },
    { text: "Pricing for Schools", msg: "Please share pricing plans for schools and institutions." },
    { text: "Request Live Demo", msg: "I want to request a live demo of Hox Ai Tutor." }
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buildWaLink = (message) => {
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <div className="wa-widget" data-wa-widget>
        <button className="wa-float-btn wa-scroll-top" type="button" aria-label="Back to top" onClick={scrollToTop}>&#8593;</button>
        <button className="wa-float-btn wa-open" type="button" aria-label="Open WhatsApp chat" onClick={() => setIsOpen(true)}>
          <svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <circle cx="16" cy="16" r="16" fill="#fff" />
            <path fill="#ff6b5a"
              d="M23.7 8.3A9.9 9.9 0 0 0 7.1 19.1L6 24.2l5.2-1a9.9 9.9 0 0 0 4.7 1.2A10 10 0 0 0 26 14.5a9.8 9.8 0 0 0-2.3-6.2ZM16 22.3a8 8 0 0 1-4.1-1.1l-.3-.2-3 .6.6-2.9-.2-.3a8 8 0 1 1 7 3.9Zm4.5-5.9c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.5l.4-.4.2-.3v-.3c-.1-.1-.5-1.1-.7-1.6-.2-.4-.3-.4-.5-.4H13c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.4.9 2.6a9.1 9.1 0 0 0 3.5 3.2c2.2.9 2.2.6 2.6.6.4 0 1.3-.5 1.5-1 .2-.4.2-.9.2-1 0-.1-.2-.2-.4-.3Z" />
          </svg>
        </button>
      </div>

      <section className="wa-panel" hidden={!isOpen} aria-label="WhatsApp quick chat">
        <div className="wa-panel-head">
          <div>
            <h3>Chat with Hox Ai Tutor Team</h3>
            <p>Adaptive learning support for schools and institutions</p>
          </div>
          <button type="button" className="wa-close" aria-label="Close chat" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        <div className="wa-panel-body">
          <p className="wa-intro">Hi there! Choose a topic to learn more about Hox Ai Tutor, or start a custom conversation.</p>
          <div className="wa-options">
            {options.map((option, idx) => (
              <button 
                key={idx} 
                type="button" 
                className={`wa-option ${activeMessage === option.msg ? "active" : ""}`}
                onClick={() => setActiveMessage(option.msg)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <a className="wa-start-btn" href={buildWaLink(activeMessage)} target="_blank" rel="noopener noreferrer">
            Start Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
