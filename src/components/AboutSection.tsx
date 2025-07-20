
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

const timelineData = [
  {
    year: '2024',
    title: 'Web Develop Intern',
    company: 'Internshala',
    description: 'Gained practical experience in frontend UI design, responsiveness, and basic backend integration.',
    icon: <Zap className="w-5 h-5" />,
    color: 'neon-blue'
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate developer with a love for creating innovative solutions that make a difference. 
              I combine technical expertise with creative problem-solving to build exceptional digital experiences.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <MagneticWrapper strength={0.15}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                gyroscope={true}
              >
                <div className="glass-card p-6 sm:p-8 rounded-2xl max-w-2xl hover-glow">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                  <div className="relative">
                    <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="text-2xl sm:text-4xl font-bold gradient-text">SV</span>
                      </div>
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 sm:w-8 h-6 sm:h-8 bg-neon-green rounded-full border-2 sm:border-4 border-background animate-pulse-glow"></div>
                  </div>
                  <div className="text-center md:text-left space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">S VENU</h3>
                    <p className="text-sm sm:text-base text-neon-blue font-medium">Full Stack Developer & AI Enthusiast</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Hey, I'm Venu — a curious mind with a love for building beautiful, functional websites.
I started my journey in tech by experimenting with small games and UI designs, and quickly fell in love with frontend development. Now, I bring ideas to life using React, Tailwind CSS, JavaScript, and a touch of GSAP for smooth animations.
I’ve also explored the backend with Python and REST APIs, and completed an 8-week internship through Internshala, where I built real-world projects and learned the value of clean, scalable code.
When I'm not coding, I’m improving my communication, learning something new, or turning everyday problems into mini side-projects.
My goal? To build products people love — and to keep growing as a full stack developer.
                    </p>
                  </div>
                </div>
                </div>
              </Tilt>
            </MagneticWrapper>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="space-y-8 px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">My Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink rounded-full"></div>
              
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4 sm:pr-8 text-right' : 'pl-4 sm:pl-8 text-left'}`}>
                      <Tilt
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        scale={1.02}
                      >
                        <div className="glass-card p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className={`p-1.5 sm:p-2 rounded-lg bg-${item.color}/20 text-${item.color}`}>
                              {item.icon}
                            </div>
                            <span className={`text-${item.color} font-bold text-base sm:text-lg`}>{item.year}</span>
                          </div>
                          <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{item.title}</h4>
                          <p className="text-sm sm:text-base text-neon-purple font-medium mb-1 sm:mb-2">{item.company}</p>
                          <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                        </div>
                      </Tilt>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className={`w-4 h-4 bg-gradient-to-r from-${item.color} to-${item.color} rounded-full border-4 border-background shadow-lg`}></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
