import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import CardComponent from '../components/CardComponent';

const About = () => {
  const faqs = [
    {
      question: "How can I join the AITM Coding Club?",
      answer: "You can join by filling out the membership form on our Join page. Membership is open to all AITM students regardless of their department or year of study."
    },
    {
      question: "Are there any membership fees?",
      answer: "We have a nominal annual membership fee of ₹300 which helps us organize events, workshops, and provide resources to members. The fee can be paid online during registration or in person to our Treasurer."
    },
    {
      question: "Do I need prior coding experience to join?",
      answer: "No, we welcome members of all skill levels! We have beginner-friendly workshops and mentorship programs to help you get started on your coding journey."
    },
    {
      question: "How frequently does the club organize events?",
      answer: "We typically organize 2-3 events per month, including workshops, coding sessions, guest lectures, and hackathons. Our calendar is regularly updated on the Events page."
    },
    {
      question: "Can I suggest or lead a workshop on a specific topic?",
      answer: "Absolutely! We encourage members to share their knowledge. If you have expertise in a particular area and would like to conduct a workshop, please reach out to any Executive Committee member or the Events Manager."
    }
  ];

  const values = [
    {
      title: "Inclusivity & Diversity",
      description: "We welcome students from all backgrounds, departments, and skill levels, fostering a supportive environment where everyone can learn and grow."
    },
    {
      title: "Collaboration & Peer Learning",
      description: "We believe in the power of collaborative learning, where students teach and learn from each other through projects and knowledge sharing."
    },
    {
      title: "Innovation & Excellence",
      description: "We encourage creative thinking and maintain high standards in all our activities, pushing the boundaries of what students can achieve."
    },
    {
      title: "Community Impact",
      description: "We strive to create solutions that positively impact our college, local community, and beyond through technology."
    },
    {
      title: "Transparency & Accountability",
      description: "We maintain open communication about club activities and resources, ensuring responsible management of club affairs."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ];

  return (
    <>
      <SEO 
        title="About Our Coding Community"
        description="Learn about AITM Coding Club's vision, mission, values, and objectives. Discover how we empower students through technology and foster innovation."
        keywords={['engineering college coding club', 'peer learning community', 'coding club values', 'student tech innovation']}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About AITM Coding Club</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Fostering a vibrant coding culture that empowers students to become innovators through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimationWrapper>
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Foster a vibrant coding culture at AITM that empowers students to become innovators and problem-solvers through technology.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.1}>
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Create impact—impact students and enable them to impact their communities by bridging theory and practice through peer learning, real-world projects and industry mentorship.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title text-center">Our Core Values</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto">
              These principles guide all our activities and interactions
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                <CardComponent className="h-full">
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Our Objectives</h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <ScrollAnimationWrapper animation="fade-right">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary dark:bg-accent/20 text-white dark:text-accent rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary dark:text-white">Hands-on Workshops & Hackathons</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Organize regular skill-building workshops and competitive hackathons to foster practical learning and innovation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary dark:bg-accent/20 text-white dark:text-accent rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary dark:text-white">Real-world & Open-source Projects</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Develop solutions for real-world problems and contribute to open-source initiatives to build practical experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary dark:bg-accent/20 text-white dark:text-accent rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary dark:text-white">Alumni & Industry Mentorship</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Connect students with alumni and industry professionals for guidance, mentorship, and career opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-left" delay={0.2}>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary dark:bg-accent/20 text-white dark:text-accent rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary dark:text-white">Interview & Competitive-Programming Prep</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Prepare students for technical interviews and competitive programming contests through structured practice sessions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary dark:bg-accent/20 text-white dark:text-accent rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary dark:text-white">Leadership & Networking Opportunities</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Provide students with opportunities to develop leadership skills and build professional networks in the tech community.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
          </ScrollAnimationWrapper>

          <div className="mt-12 max-w-3xl mx-auto">
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
    </>
  );
};

export default About;