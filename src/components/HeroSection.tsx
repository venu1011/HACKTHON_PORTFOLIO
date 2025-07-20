
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';
import MagneticWrapper from './MagneticWrapper';
import ParticleSystem from './ParticleSystem';
import SplineScene from './SplineScene';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export default function HeroSection() {
  console.log('HeroSection rendering...');
  
  useEffect(() => {
    console.log('HeroSection useEffect running...');
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Particle System - Positioned absolutely to not affect layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleSystem count={20} />
      </div>
      
      {/* Background Spline Scene */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ 
          scale: [1, 1.01, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <SplineScene />
      </motion.div>

      {/* Background 3D Scene */}
      <motion.div 
        className="absolute inset-0 z-1"
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <ThreeScene />
      </motion.div>
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-neon-blue text-xl font-medium tracking-wider">
              Hello, I'm
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-2"
          >
            <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ 
                backgroundSize: "200% 200%"
              }}
            >
              <TypewriterText text="S VENU" />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4"
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white px-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Full Stack Developer & <span className="text-neon-purple">AI Enthusiast</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Crafting exceptional digital experiences with modern technologies. 
              <br className="hidden sm:block" />Specialized in React, Node.js, and cutting-edge AI/ML integration.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <MagneticWrapper strength={0.2}>
              <Button
                variant="cyber"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold hover-lift group relative ripple-effect"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </MagneticWrapper>
            <MagneticWrapper strength={0.2}>
              <Button
                variant="neon"
                size="lg" 
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold hover-glow ripple-effect"
                asChild
              >
                <a href="/S_VENU_Resume.pdf" download="S_VENU_Resume.pdf">
                  <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </MagneticWrapper>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8 px-4"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 1.8 + index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -15, 15, 0],
                  y: -10,
                  transition: { duration: 0.4, type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 sm:p-3 rounded-full neon-border hover-glow group relative overflow-hidden"
                aria-label={label}
              >
                <Icon className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-muted-foreground hover:text-neon-blue transition-colors cursor-pointer relative"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
          />
          <ChevronDown className="w-8 h-8 relative z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
