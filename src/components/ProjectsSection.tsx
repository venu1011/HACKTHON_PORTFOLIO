import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github, Play, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import ProjectSkeleton from '@/components/ProjectSkeleton';
import { useState, useEffect } from 'react';
import project1 from '@/assets/project2.png';
import project2 from '@/assets/project1.png';
import project3 from '@/assets/project3.png';
import project4 from '@/assets/project4.png';


const projects = [
  {
    id: 1,
    title: '🕵️‍♂️ Fake Review Detector',
    description: 'Detects fake or suspicious reviews using natural language processing.',
    image: project1,
    tags: ["Python","NLP","Machine Learning","Web Interface"],
    github: 'https://github.com',
    live: 'https://venu1011.github.io/Fake-Review-Detector/',
    featured: true,
    stats: { stars: 2, forks: 4 }
  },
  {
    id: 2,
    title: '🎬 Movie Explorer',
    description: ' Explore and browse movies by genre or title with a smooth UI and clean layout.',
    image: project2,
    tags: ['HTML','CSS','JavaScript','API'],
    github: 'https://github.com/venu1011/Movie-Explorer',
    live: 'https://venu1011.github.io/Movie-Explorer/',
    featured: true,
    stats: { stars: 9, forks: 2 }
  },
  {
    id: 3,
    title: '🧁 Recipe Finder',
    description: 'Searches and displays recipes using a public API. Features include search filters, favorites, dark mode, and smooth responsive design.',
    image: project3,
    tags: ['HTML','CSS','JavaScript','API'],
    github: 'https://github.com/venu1011/Recipe-Finder',
    live: 'https://venu1011.github.io/Recipe-Finder/',
    featured: false,
    stats: { stars: 6, forks: 2 }
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
    image: project4,
    tags: ['HTML','CSS','JavaScript', 'OpenWeather API', 'PWA'],
    github: 'https://github.com/venu1011/WEATHER-NOW',
    live: 'https://venu1011.github.io/WEATHER-NOW/',
    featured: false,
    stats: { stars: 12, forks: 19 }
  },
  
];

const ProjectCard = ({ project, index, inView }: { project: any, index: number, inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className={project.featured ? 'md:col-span-2' : ''}
  >
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={2000}
    >
      <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Project Actions */}
          <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button
              size="sm"
              className="cyber-button p-2"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="glass-card border-neon-purple/50 p-2"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 flex-1">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground shrink-0">
              <div className="flex items-center gap-1">
                <Star className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>{project.stats.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>{project.stats.forks}</span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium bg-muted/30 text-neon-blue rounded-full border border-neon-blue/20 hover:bg-neon-blue/10 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-2">
            <Button
              size="sm"
              className="cyber-button flex-1 text-xs sm:text-sm"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Play className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="glass-card border-neon-purple/50 hover:bg-neon-purple/10 px-3"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 sm:w-4 h-3 sm:h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [isLoading, setIsLoading] = useState(true);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 px-4 relative">
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications and creative solutions
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {isLoading ? (
              // Loading skeletons for featured projects
              <>
                <ProjectSkeleton featured />
                <ProjectSkeleton featured />
              </>
            ) : (
              featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    inView={inView}
                  />
                </motion.div>
              ))
            )}
          </div>

          {/* Other Projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center px-4"
            >
              More Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {isLoading ? (
                // Loading skeletons for other projects
                <>
                  <ProjectSkeleton />
                  <ProjectSkeleton />
                  <ProjectSkeleton />
                  <ProjectSkeleton />
                </>
              ) : (
                otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                  >
                    <ProjectCard
                      project={project}
                      index={index + featuredProjects.length}
                      inView={inView}
                    />
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center pt-8"
          >
            <Button
              size="lg"
              className="cyber-button px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://github.com/venu1011" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
