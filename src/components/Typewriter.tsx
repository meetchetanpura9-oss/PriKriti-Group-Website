
'use client';
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 80,
  pauseTime = 1800,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIdx];

    if (!deleting && charIdx < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIdx === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, typingSpeed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
