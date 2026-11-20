import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedWord: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em]"
    >
      {word}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = useMemo(() => text.split(' '), [text]);

  return (
    <p
      ref={containerRef}
      style={style}
      className={`relative select-text ${className}`}
    >
      {words.map((word, idx) => {
        const start = idx / words.length;
        const step = 1 / words.length;
        const end = Math.min(1, start + step * 2.5);
        return (
          <AnimatedWord
            key={`${word}-${idx}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
