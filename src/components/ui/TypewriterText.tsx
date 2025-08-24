import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  loop?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  words, 
  speed = 120,
  deleteSpeed = 60,
  pauseTime = 2000,
  className = '',
  prefix = '',
  suffix = '',
  loop = true
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(speed);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setText(prev => prev.substring(0, prev.length - 1));
        setDelta(deleteSpeed);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setDelta(speed);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        if (loop) {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timeout = setTimeout(tick, delta);
    };

    timeout = setTimeout(tick, delta);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex, words, delta, speed, deleteSpeed, pauseTime, loop]);

  return (
    <span className={`inline-block ${className}`}>
      {prefix}
      <span>{text}</span>
      <span className="animate-blink ml-1">|</span>
      {suffix}
    </span>
  );
};

export default TypewriterText;