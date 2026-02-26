"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  text?: string;
  texts?: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursor?: boolean;
}

export function TypeWriter({
  text,
  texts,
  speed = 50,
  deleteSpeed = 30,
  pauseTime = 2000,
  className = "",
  cursor = true,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  // Single text mode (original behavior)
  const singleMode = !texts || texts.length === 0;
  const resolvedText = singleMode ? (text ?? "") : "";

  // Single text effect
  useEffect(() => {
    if (!singleMode) return;

    let index = 0;
    setDisplayText("");
    setIsComplete(false);

    const interval = setInterval(() => {
      if (index < resolvedText.length) {
        setDisplayText(resolvedText.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [resolvedText, speed, singleMode]);

  // Multi-text rotating effect
  useEffect(() => {
    if (singleMode || !texts) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    const typeText = async (str: string) => {
      for (let i = 0; i <= str.length; i++) {
        if (cancelled) return;
        setDisplayText(str.slice(0, i));
        await sleep(speed);
      }
    };

    const deleteText = async (str: string) => {
      for (let i = str.length; i >= 0; i--) {
        if (cancelled) return;
        setDisplayText(str.slice(0, i));
        await sleep(deleteSpeed);
      }
    };

    const run = async () => {
      let index = 0;
      while (!cancelled) {
        const current = texts[index];
        await typeText(current);
        if (cancelled) return;
        setIsComplete(true);
        await sleep(pauseTime);
        if (cancelled) return;
        setIsComplete(false);
        await deleteText(current);
        if (cancelled) return;
        await sleep(300);
        index = (index + 1) % texts.length;
      }
    };

    run();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [texts, speed, deleteSpeed, pauseTime, singleMode]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <motion.span
          animate={{ opacity: isComplete ? [1, 0] : 1 }}
          transition={{
            duration: 0.5,
            repeat: isComplete ? Infinity : 0,
            repeatType: "reverse",
          }}
          className="inline-block ml-1 w-0.5 h-[1em] bg-current align-middle"
        />
      )}
    </span>
  );
}
