import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import CardComponent from '../components/CardComponent';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/data/events.json');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const faqs = [
    {
      question: "How can I participate in these events?",
      answer: "Most events are open to all AITM students. Club members get priority registration. You can register for specific events through the links provided in the event descriptions or by contacting our Events Manager."
    },
    {
      question: "Are these events only for experienced programmers?",
      answer: "Not at all! We organize events for all skill levels, from beginner-friendly workshops to advanced hackathons. Each event description indicates the recommended experience level."
    },
    {
      question: "Can I propose an event idea?",
      answer: "Yes! We welcome event suggestions from our members. Please contact our Events Manager or any Executive Committee member with your proposal."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' }
  ];

  return (
    <>
      <SEO 
        title="Workshops, Hackathons & Coding Events"
        description="Participate in AITM Coding Club's workshops, hackathons, and coding competitions. View our upcoming and past events calendar."
        keywords={['coding competitions Karnataka', 'college hackathon', 'student coding workshops', 'programming events Bhatkal']}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events & Workshops</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join our hands-on workshops, hackathons, and coding competitions to enhance your skills and connect with the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Upcoming Events</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {events.map((event, index) => (
                <ScrollAnimationWrapper key={event.id} delay={index * 0.1}>
                  <CardComponent className="h-full flex flex-col overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image || 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {event.description || 'Join us for this exciting event! More details will be announced soon.'}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <button className="text-accent hover:text-accent-dark font-medium transition-colors">
                          Register →
                        </button>
                      </div>
                    </div>
                  </CardComponent>
                </ScrollAnimationWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Event */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title">Featured Event</h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.1}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="HackAITM 24-Hour Hackathon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full mb-4">
                    Flagship Event
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4">
                    HackAITM 24-Hour Hackathon
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar size={18} className="mr-2 text-accent" />
                    <span>12-13 October 2025</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin size={18} className="mr-2 text-accent" />
                    <span>AITM Campus, Main Auditorium</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our annual flagship hackathon! Form teams of 3-4 members and build innovative solutions within 24 hours. 
                    Win exciting prizes, gain mentorship from industry experts, and showcase your skills.
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary">
                      Pre-register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
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

      {/* CTA Section */}
      <section className="section bg-primary dark:bg-gray-900">
        <div className="container-custom text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to propose an event?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Have an idea for a workshop, competition, or tech talk? Let us know and we'll work together to make it happen!
            </p>
            <Link to="/contact">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
};

export default Events;