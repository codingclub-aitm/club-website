import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Users, Cpu, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Home = () => {
  const features = [
    {
      icon: <Code2 size={36} className="text-accent" />,
      title: 'Hands-on Workshops',
      description: 'Learn practical coding skills through interactive workshops led by experienced mentors and industry professionals.',
      link: '/events'
    },
    {
      icon: <Users size={36} className="text-accent" />,
      title: 'Collaborative Projects',
      description: 'Work on real-world projects with peers to build your portfolio and gain valuable team experience.',
      link: '/projects'
    },
    {
      icon: <Calendar size={36} className="text-accent" />,
      title: 'Hackathons & Competitions',
      description: 'Participate in coding competitions and hackathons to challenge yourself and showcase your skills.',
      link: '/events'
    }
  ];

  return (
    <>
      <SEO
        title="Code • Collaborate • Create"
        description="AITM Coding Club - Fostering a vibrant coding culture that empowers students to become innovators through technology. Join us for workshops, projects, and hackathons."
        keywords={['student coding workshops', 'college hackathon', 'coding competitions Karnataka', 'open source student projects']}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary dark:bg-gray-900 pt-16">
        {/* Background image from first code */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center lg:justify-start items-center gap-2 text-accent mb-4">
                <Code2 size={24} />
                <span className="text-lg">AITM Coding Club</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Code • Collaborate<br />• Create
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Fostering a vibrant coding culture at AITM empowering students to become innovators and problem-solvers through technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/join">
                  <motion.button
                    className="btn btn-primary text-lg px-6 py-3 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join the Club
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    className="btn btn-outline text-lg px-6 py-3 border-2 text-white w-full sm:w-auto group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <pre className="text-sm md:text-base font-mono">
                <code className="text-gray-300">
                  <span className="text-cyan-400">function</span>{" "}
                  <span className="text-yellow-400">joinCodingClub</span>() {"{"}
                  <br />
                  {"  "}<span className="text-cyan-400">const</span> student = <span className="text-cyan-400">new</span> <span className="text-yellow-400">Student</span>();
                  <br /><br />
                  {"  "}student.<span className="text-yellow-400">skills</span>.add(<span className="text-green-400">"programming"</span>);
                  <br />
                  {"  "}student.<span className="text-yellow-400">network</span>.expand();
                  <br />
                  {"  "}student.<span className="text-yellow-400">opportunities</span>.unlock();
                  <br /><br />
                  {"  "}<span className="text-cyan-400">return</span> student.success();
                  <br />
                  {"}"}
                  <br /><br />
                  <span className="text-gray-500">// Start your journey today!</span>
                  <br />
                  <span className="text-yellow-400">joinCodingClub</span>();
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <h2 className="section-title text-center">What We Offer</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
              Join our community to enhance your programming skills and connect with like-minded individuals.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                <CardComponent className="h-full flex flex-col">
                  <div className="p-4 rounded-full bg-primary/10 dark:bg-primary/20 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  <Link to={feature.link} className="text-accent hover:text-accent-dark font-medium">
                    Learn more →
                  </Link>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="fade-right">
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Create impact—impact students and enable them to impact their communities by bridging theory and practice through peer learning, real-world projects and industry mentorship.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  We aim to foster a vibrant coding culture at AITM that empowers students to become innovators and problem-solvers through technology.
                </p>
                <Link to="/about">
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More About Us
                  </motion.button>
                </Link>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Students collaborating on code"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-xl font-semibold">Building the tech leaders of tomorrow</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <h2 className="section-title text-center">Our Impact</h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <ScrollAnimationWrapper delay={0.1}>
              <CardComponent className="text-center">
                <h3 className="text-4xl font-bold text-accent mb-2">500+</h3>
                <p className="text-gray-600 dark:text-gray-300">Active Members</p>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <CardComponent className="text-center">
                <h3 className="text-4xl font-bold text-accent mb-2">50+</h3>
                <p className="text-gray-600 dark:text-gray-300">Workshops Conducted</p>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <CardComponent className="text-center">
                <h3 className="text-4xl font-bold text-accent mb-2">20+</h3>
                <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.4}>
              <CardComponent className="text-center">
                <h3 className="text-4xl font-bold text-accent mb-2">15+</h3>
                <p className="text-gray-600 dark:text-gray-300">Hackathons Organized</p>
              </CardComponent>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your coding journey?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join AITM Coding Club today and be part of a community that learns, builds, and grows together.
            </p>
            <Link to="/join">
              <motion.button
                className="btn btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Member
              </motion.button>
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
};

export default Home;
