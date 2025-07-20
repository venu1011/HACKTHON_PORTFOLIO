
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Logo and Quote */}
          <div className="space-y-4">
            <span className="text-3xl font-bold gradient-text">S VENU</span>
            <p className="text-muted-foreground max-w-md mx-auto">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>&</span>
            <Coffee className="w-4 h-4 text-amber-500" />
            <span>by VENU S</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-6 border-t border-white/10 text-sm text-muted-foreground"
          >
            <p>&copy; 2025 S VENU. All rights reserved.</p>
          </motion.div>

          {/* Decorative Element */}
          <div className="flex justify-center pt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
