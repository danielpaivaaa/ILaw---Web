import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const transition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",      // evita reflow de scroll
        flexDirection: "row",    // garante que layout lado-a-lado funcione
        position: "relative"     // útil para posicionar filhos
      }}
    >
      {children}
    </motion.div>
  );
}
