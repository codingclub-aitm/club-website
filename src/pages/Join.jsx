import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Users, Zap, Award, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import CardComponent from '../components/CardComponent';

const Join = () => {
  const benefits = [
    {
      icon: <Code2 size={32} className="text-accent" />,
      title: "Skill Development",
      description: "Enhance your programming skills through hands-on workshops, coding sessions, and mentorship from experienced peers."
    },
    {
      icon: <Users size={32} className="text-accent" />,
      title: "Networking",
      description: "Connect with like-minded students, alumni, and industry professionals who share your passion for technology."
    },
    {
      icon: <Zap size={32} className="text-accent" />,
      title: "Project Experience",
      description: "Work on real-world projects that solve actual problems and build a portfolio to showcase to future employers."
    },
    {
      icon: <Award size={32} className="text-accent" />,
      title: "Recognition",
      description: "Gain recognition for your skills through hackathons, coding competitions, and project showcases."
    },
    {
      icon: <BookOpen size={32} className="text-accent" />,
      title: "Learning Resources",
      description: "Access exclusive learning resources, tutorials, and materials curated by the club to accelerate your learning journey."
    }
  ];

  const faqs = [
    {
      question: "Who can join the AITM Coding Club?",
      answer: "Any student enrolled at AITM, regardless of department or year of study, can join the club. We welcome members of all skill levels, from beginners to advanced programmers."
    },
    {
      question: "Is there a membership fee?",
      answer: "Yes, there is an annual membership fee of ₹300 which helps us organize events, workshops, and provide resources to members."
    },
    {
      question: "What if I'm a complete beginner in programming?",
      answer: "We welcome beginners! We have dedicated sessions and mentorship programs to help newcomers get started with programming fundamentals."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Join', path: '/join' }
  ];

  return (
    <>
      <SEO 
        title="Join Our Coding Community"
        description="Become a member of AITM Coding Club and gain access to workshops, mentorship, projects, and a community of like-minded students passionate about technology."
        keywords={['join coding club', 'student tech community', 'programming club membership', 'coding workshops college']}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Club</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Become part of a vibrant community that learns, builds, and grows together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title text-center">Membership Benefits</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
              Here's what you gain when you join the AITM Coding Club
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                <CardComponent className="h-full">
                  <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimationWrapper animation="fade-right">
              <div>
                <h2 className="section-title">How to Join</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Joining the AITM Coding Club is a simple process:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary dark:bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary dark:text-white mb-1">
                        Fill out the registration form
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Complete the membership form with your details and areas of interest.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary dark:bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary dark:text-white mb-1">
                        Pay the membership fee
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        The annual membership fee is ₹300, payable online or to our Treasurer.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary dark:bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary dark:text-white mb-1">
                        Attend the orientation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Join our next orientation session to learn about club activities and meet other members.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary dark:bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary dark:text-white mb-1">
                        Get involved
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Start participating in club activities, workshops, and projects based on your interests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper animation="fade-left" delay={0.2}>
              <CardComponent className="p-8">
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">
                  Membership Registration
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl mb-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    We use Google Forms for our membership registration. Please click the button below to open the registration form.
                  </p>
                </div>
                <a 
                  href="https://forms.google.com/example-form" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full mb-4"
                >
                  Open Registration Form
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  If you have any issues with the form, please <Link to="/contact" className="text-accent hover:underline">contact us</Link>.
                </p>
              </CardComponent>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </ScrollAnimationWrapper>

          <div className="mt-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title text-center">Member Testimonials</h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollAnimationWrapper delay={0.1}>
              <CardComponent className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L8 13H6C5.44772 13 5 12.5523 5 12V7C5 6.44772 5.44772 6 6 6H10C10.5523 6 11 6.44772 11 7V10C11 10.5523 10.5523 11 10 11Z" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 11L16 13H14C13.4477 13 13 12.5523 13 12V7C13 6.44772 13.4477 6 14 6H18C18.5523 6 19 6.44772 19 7V10C19 10.5523 18.5523 11 18 11Z" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
                    "Joining the Coding Club was the best decision I made in college. I went from knowing basic HTML to building full-stack applications through their workshops and projects."
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Sarah Khan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-primary dark:text-white">Sarah Khan</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3rd Year, Computer Science</p>
                    </div>
                  </div>
                </div>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <CardComponent className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L8 13H6C5.44772 13 5 12.5523 5 12V7C5 6.44772 5.44772 6 6 6H10C10.5523 6 11 6.44772 11 7V10C11 10.5523 10.5523 11 10 11Z" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 11L16 13H14C13.4477 13 13 12.5523 13 12V7C13 6.44772 13.4477 6 14 6H18C18.5523 6 19 6.44772 19 7V10C19 10.5523 18.5523 11 18 11Z" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
                    "The club connected me with amazing peers and mentors. Our hackathon project actually turned into a startup! The skills and network I gained are invaluable."
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Rahul Mehta" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-primary dark:text-white">Rahul Mehta</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">4th Year, Electronics</p>
                    </div>
                  </div>
                </div>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <CardComponent className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L8 13H6C5.44772 13 5 12.5523 5 12V7C5 6.44772 5.44772 6 6 6H10C10.5523 6 11 6.44772 11 7V10C11 10.5523 10.5523 11 10 11Z" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 11L16 13H14C13.4477 13 13 12.5523 13 12V7C13 6.44772 13.4477 6 14 6H18C18.5523 6 19 6.44772 19 7V10C19 10.5523 18.5523 11 18 11Z" stroke="#26FFD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
                    "As a mechanical engineering student, I was intimidated by coding at first. The club's beginner-friendly approach helped me learn programming and even implement IoT projects!"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Priya Sharma" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-primary dark:text-white">Priya Sharma</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2nd Year, Mechanical</p>
                    </div>
                  </div>
                </div>
              </CardComponent>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary dark:bg-gray-800 text-white">
        <div className="container-custom text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold mb-6">Ready to start your coding journey?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join AITM Coding Club today and be part of a community that learns, builds, and grows together.
            </p>
            <a 
              href="https://forms.google.com/example-form" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Register Now
            </a>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
};

export default Join;