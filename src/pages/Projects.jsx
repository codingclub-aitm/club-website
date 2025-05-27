import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import CardComponent from '../components/CardComponent';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <>
      <SEO 
        title="Student-Led Software Projects"
        description="Explore AITM Coding Club's innovative software projects developed by students. From web applications to AI solutions, see how we apply our skills to real-world problems."
        keywords={['open source student projects', 'engineering student projects', 'coding club projects', 'student software development']}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Innovative solutions developed by our student community to solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Flagship Projects</h2>
            <p className="section-subtitle max-w-3xl">
              These are our primary ongoing projects that showcase the skills and creativity of our members.
            </p>
          </ScrollAnimationWrapper>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg text-center">
              {error}
            </div>
          ) : (
            <div className="mt-12 space-y-16">
              {projects.map((project, index) => (
                <ScrollAnimationWrapper key={project.id} delay={index * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image and order depends on index */}
                    <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary dark:text-white mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center btn btn-primary"
                      >
                        <Github size={18} className="mr-2" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other Projects */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Other Notable Projects</h2>
            <p className="section-subtitle max-w-3xl">
              Smaller yet impactful projects developed by our members.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollAnimationWrapper delay={0.1}>
              <CardComponent className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Attendance Tracker
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  A mobile app that allows students to mark their attendance using QR codes, reducing paper waste and administrative overhead.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    Firebase
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    QR Code
                  </span>
                </div>
                <a 
                  href="https://github.com/AITM-Coding-Club/attendance-tracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  View Project
                </a>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <CardComponent className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Student Resource Hub
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  A centralized platform where students can access study materials, previous year question papers, and academic resources.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    Vue.js
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    Express
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <a 
                  href="https://github.com/AITM-Coding-Club/resource-hub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  View Project
                </a>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <CardComponent className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Campus Navigation App
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  An interactive map application to help new students navigate the campus and locate classrooms, labs, and other facilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    Leaflet.js
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
                <a 
                  href="https://github.com/AITM-Coding-Club/campus-navigator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  View Project
                </a>
              </CardComponent>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="section bg-primary dark:bg-gray-800 text-white">
        <div className="container-custom text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold mb-6">Explore Our GitHub Organization</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover all our open-source projects, contribute to ongoing development, and join our coding community.
            </p>
            <a 
              href="https://github.com/AITM-Coding-Club" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center btn btn-primary"
            >
              <Github size={20} className="mr-2" />
              Visit Our GitHub
            </a>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="fade-right">
              <div>
                <h2 className="section-title">Want to Contribute?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We welcome contributions from all members, regardless of experience level. Here's how you can get involved:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Join an existing project team</strong> - Reach out to the project lead to express your interest.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Propose a new project</strong> - Have an idea? Present it to the Executive Committee.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Fix bugs and add features</strong> - Check our GitHub issues for "Good First Issue" tags.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Improve documentation</strong> - Help make our projects more accessible to newcomers.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper animation="fade-left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Students collaborating on code" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-xl font-semibold">Building better software, together</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;