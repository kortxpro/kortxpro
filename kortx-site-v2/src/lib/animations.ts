import type { Variants, Transition } from "framer-motion";

const smooth: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
const snappy: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

// Letter Reveal — letters rise individually with rotateX
export const letterRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

export const letterRevealChild: Variants = {
  hidden: { y: "100%", rotateX: -80, opacity: 0 },
  visible: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Clip Reveal — wipe from left with clip-path
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide from directions
export const slideFromLeft: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: smooth },
};

export const slideFromRight: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: smooth },
};

// Scale Reveal — zoom + fade for mockups
export const scaleReveal: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: smooth },
};

// Fade Up — simple but better curve
export const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: snappy },
};

// Fade In
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: smooth },
};

// Stagger container
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// Viewport config
export const viewportOnce = { once: true, margin: "-100px" as const };
export const viewportRepeat = { once: false, margin: "-100px" as const };
