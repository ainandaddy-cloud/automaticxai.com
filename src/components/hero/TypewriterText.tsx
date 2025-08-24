import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setText(prev => prev.substring(0, prev.length - 1));
        setDelta(60);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setDelta(120);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }

      timeout = setTimeout(tick, delta);
    };

    timeout = setTimeout(tick, delta);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex, words, delta]);

  return (
    <span className="inline-block min-w-[300px] md:min-w-[400px]">
      <span className="text-gradient-accent">{text}</span>
      <span className="animate-blink text-accent-500">|</span>
    </span>
  );
};

export default TypewriterText;