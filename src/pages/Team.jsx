import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import CardComponent from '../components/CardComponent';

const Team = () => {
  const [team, setTeam] = useState({ executive: [], technical: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('/data/team.json');
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        const data = await response.json();
        setTeam(data);
      } catch (err) {
        console.error('Error fetching team data:', err);
        setError('Failed to load team information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' }
  ];

  return (
    <>
      <SEO 
        title="Meet Our Team"
        description="Meet the dedicated team behind AITM Coding Club. Our executive committee and technical domain leaders work together to create valuable learning experiences."
        keywords={['AITM student leaders', 'college coding club team', 'student tech organization leaders']}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Meet the passionate individuals who make the AITM Coding Club possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Executive Committee</h2>
            <p className="section-subtitle max-w-3xl">
              Our leadership team responsible for the club's vision, operations, and growth.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {team.executive.map((member, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                  <CardComponent className="h-full">
                    <div className="relative mb-6 h-60 overflow-hidden rounded-xl">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex justify-center space-x-4">
                            <a href="#" className="text-white hover:text-accent transition-colors">
                              <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-accent transition-colors">
                              <Github size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-accent transition-colors">
                              <Mail size={20} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {member.duty}
                      </p>
                    </div>
                  </CardComponent>
                </ScrollAnimationWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Technical Domain Leaders Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Technical Domain Leaders</h2>
            <p className="section-subtitle max-w-3xl">
              Specialists who lead specific technology domains and mentor other members.
            </p>
          </ScrollAnimationWrapper>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg text-center mt-8">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {team.technical.map((member, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                  <CardComponent className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="h-48 md:h-full overflow-hidden rounded-xl">
                        <img 
                          src={member.image} 
                          alt={member.lead}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-primary dark:text-white">
                        {member.domain}
                      </h3>
                      <p className="text-accent font-medium mb-2">
                        Lead: {member.lead}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {member.scope}
                      </p>
                    </div>
                  </CardComponent>
                </ScrollAnimationWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="fade-right">
              <div>
                <h2 className="section-title">Want to Join Our Team?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  The AITM Coding Club offers various leadership opportunities for passionate students:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Executive Committee</strong> - Elections are held annually at the end of the academic year.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Technical Domain Lead</strong> - Positions open based on expertise and commitment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Project Lead</strong> - Start or take over a project and lead a team.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong className="text-primary dark:text-white">Event Coordinator</strong> - Help organize and run club events and workshops.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper animation="fade-left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-xl font-semibold">Leadership opportunities for all members</p>
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

export default Team;