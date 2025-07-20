
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Code, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';
import {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiBootstrap,
  SiNodedotjs, SiPython, SiMongodb, SiMysql, SiPhp, SiTypescript, SiFramer,
  SiGithub, SiLinux, SiMinutemailer
} from 'react-icons/si';
import MagneticWrapper from './MagneticWrapper';
import { FaBeer } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Palette className="w-6 h-6" />,
    color: 'neon-blue',
    skills: [
      { name: 'TypeScript', level: 88, icon: <SiTypescript /> },
      { name: 'JavaScript', level: 90, icon: <SiJavascript /> },
      { name: 'HTML/CSS', level: 90, icon: <SiHtml5 /> },
      { name: 'React', level: 95, icon: <SiReact /> },
      { name: 'Framer Motion', level: 85, icon: <SiFramer /> },
      { name: 'Tailwind CSS', level: 92, icon: <SiTailwindcss /> },
      { name: 'Bootstrap', level: 90, icon: <SiBootstrap /> }
    ]
  },
  {
    title: 'Backend',
    icon: <Database className="w-6 h-6" />,
    color: 'neon-blue',
    skills: [
      { name: 'Node.js', level: 93, icon: <SiNodedotjs /> },
      { name: 'Python', level: 87, icon: <SiPython /> },
      { name: 'MongoDB', level: 82, icon: <SiMongodb /> },
      { name: 'MySQL', level: 85, icon: <SiMysql /> },
      { name: 'PHP', level: 50, icon: <SiPhp /> }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: <Zap className="w-6 h-6" />,
    color: 'neon-blue',
    skills: [
      { name: 'Git/GitHub', level: 95, icon: <SiGithub /> },
      { name: 'Linux', level: 78, icon: <SiLinux /> },
      { name: 'VS Code', level: 90, icon: <FaBeer /> },
      { name: 'EmailJS', level: 80, icon: <SiMinutemailer /> }
    ]
  },
];

const SkillBar = ({ skill, index, inView, color }: { skill: any, index: number, inView: boolean, color: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="space-y-2"
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className={`text-lg text-${color}`}>{skill.icon}</span>
        <span className="text-sm sm:text-base text-white font-medium">{skill.name}</span>
      </div>
      <span className="text-sm sm:text-base text-neon-blue font-bold">{skill.level}%</span>
    </div>
    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : {}}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
        className={`h-full bg-gradient-to-r from-${color} to-neon-purple rounded-full relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </motion.div>
    </div>
  </motion.div>
);

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.02}
                  transitionSpeed={2000}
                >
                  <MagneticWrapper strength={0.1}>
                    <div className="glass-card p-6 sm:p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-300 hover-glow">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <motion.div 
                          className={`p-2 sm:p-3 rounded-xl bg-${category.color}/20 text-${category.color}`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {category.icon}
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold holographic">{category.title}</h3>
                      </div>

                    {/* Skills List */}
                    <div className="space-y-6">
                      {category.skills.filter(Boolean).map((skill, skillIndex) => (
                        <SkillBar
                          key={skillIndex}
                          skill={skill}
                          index={skillIndex}
                          inView={inView}
                          color={category.color}
                        />
                      ))}
                    </div>
                    </div>
                  </MagneticWrapper>
                </Tilt>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
          >
            {[
              { number: '15+', label: 'Projects Completed', icon: '🚀' },
              { number: '1+', label: 'Years Experience', icon: '⏱️' },
              { number: '15+', label: 'Technologies', icon: '⚡' },
              { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
            ].map((stat, index) => (
              <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="glass-card p-4 sm:p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                    className="text-2xl sm:text-3xl font-bold gradient-text mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </Tilt>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
