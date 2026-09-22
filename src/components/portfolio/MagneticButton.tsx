import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  as?: "a" | "button";
  variant?: "solid" | "outline";
  target?: string;
  rel?: string;
  className?: string;
};

export function MagneticButton({
  children,
  href,
  as = "a",
  variant = "solid",
  target,
  rel,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
      : "border border-border-strong text-foreground hover:border-primary/60 hover:text-primary";

  const Comp = as === "button" ? motion.button : motion.a;

  return (
    <Comp
      href={href}
      target={target}
      rel={rel}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Comp>
  );
}
