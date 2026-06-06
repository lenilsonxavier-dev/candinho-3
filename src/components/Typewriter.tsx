import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // millisecond delay per character
  onFinished?: () => void;
}

export default function Typewriter({ text, speed = 12, onFinished }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;

    // Reset when text changes
    setDisplayedText("");
    setIsCompleted(false);

    const tick = () => {
      if (index < text.length) {
        // Increment index by 1 (or 2 for extremely long texts to keep it nimble)
        const step = text.length > 500 ? 2 : 1;
        setDisplayedText(text.slice(0, index + step));
        index += step;
        timer = setTimeout(tick, speed);
      } else {
        setDisplayedText(text);
        setIsCompleted(true);
        if (onFinished) onFinished();
      }
    };

    tick();

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, onFinished]);

  // Allow clicking the message bubble to immediately complete the text
  const handleSkip = () => {
    if (!isCompleted) {
      setDisplayedText(text);
      setIsCompleted(true);
      if (onFinished) onFinished();
    }
  };

  // Helper function to format bold markdown syntax (**bold**) on the fly
  const formatText = (input: string) => {
    const parts = input.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-[#ffd700] font-black font-sans">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div 
      onClick={handleSkip}
      className={`whitespace-pre-line cursor-pointer select-none transition-all duration-150 relative ${
        !isCompleted ? "after:content-['|'] after:text-[#34d399] after:animate-pulse after:ml-0.5" : ""
      }`}
      title={!isCompleted ? "Clique para revelar tudo de uma vez! 🎨" : undefined}
    >
      <p className="inline leading-relaxed">{formatText(displayedText)}</p>
    </div>
  );
}
