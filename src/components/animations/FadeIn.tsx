import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  scale?: boolean;
}

export const FadeIn = ({ children, delay = 0, direction = "up", className = "", scale = false }: FadeInProps) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initialState = {
    opacity: 0,
    ...directions[direction],
    ...(scale && { scale: 0.95 })
  };

  const animateState = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale && { scale: 1 })
  };

  return (
    <motion.div
      initial={initialState}
      whileInView={animateState}
      viewport={{ once: true, margin: "-80px", amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px", amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.6, 
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          } 
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New component for scroll-triggered reveal animations
export const ScrollReveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px", amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced slide-in animation for cards and sections
export const SlideIn = ({ 
  children, 
  direction = "left", 
  delay = 0, 
  className = "" 
}: { 
  children: ReactNode; 
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}) => {
  const slideDirections = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: -60 },
    down: { x: 0, y: 60 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...slideDirections[direction],
        scale: 0.9
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-60px", amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 90,
        damping: 18
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
