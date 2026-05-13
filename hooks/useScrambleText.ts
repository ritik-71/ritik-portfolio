"use client";

import { useState, useCallback, useEffect } from "react";

const CHARS = "ABCDEFGHIKLMNOPQRSTVXYZ0123456789";

export function useScrambleText(text: string) {
  const [displayText, setDisplayText] = useState(text);

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    scramble();
  }, [scramble]);

  return { displayText, scramble };
}
