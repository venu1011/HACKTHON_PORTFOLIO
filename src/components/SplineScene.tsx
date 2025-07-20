import { motion } from 'framer-motion';

export default function SplineScene() {
  return (
    <div className="spline-wrapper">
      <motion.div 
        className="w-full h-full flex items-center justify-center relative"
        animate={{ 
          background: [
            "radial-gradient(circle, rgba(0,217,255,0.05) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)",
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute w-40 h-40 border border-primary/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border border-secondary/30 rounded-lg rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  );
}