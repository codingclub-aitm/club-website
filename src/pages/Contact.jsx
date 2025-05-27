import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/data/contact.json');
        if (!response.ok) {
          throw new Error('Failed to fetch contact information');
        }
        const data = await response.json();
        setContactInfo(data);
      } catch (err) {
        console.error('Error fetching contact information:', err);
        setError('Failed to load contact information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with AITM Coding Club. Reach out to us for questions, collaborations, event proposals, or to join our community."
        keywords={['contact coding club', 'AITM student clubs', 'programming club contact', 'coding community bhatkal']}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Have questions or want to collaborate? Reach out to us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollAnimationWrapper animation="fade-right">
              <div>
                <h2 className="section-title">Get in Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We'd love to hear from you! Whether you have a question about our events, want to propose a collaboration, or are interested in joining the club, feel free to reach out.
                </p>

                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                ) : error ? (
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg">
                    {error}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mr-4">
                        <MapPin className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white mb-1">Our Location</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {contactInfo.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mr-4">
                        <Mail className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white mb-1">Email Us</h3>
                        <a 
                          href={`mailto:${contactInfo.email}`} 
                          className="text-accent hover:underline"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mr-4">
                        <Phone className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white mb-1">Club Hours</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday: 4:00 PM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {contactInfo.github && (
                      <motion.a 
                        href={contactInfo.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary/10 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-gray-600 p-3 rounded-lg text-primary dark:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="GitHub"
                      >
                        <Github size={24} />
                      </motion.a>
                    )}
                    {contactInfo.linkedin && (
                      <motion.a 
                        href={contactInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary/10 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-gray-600 p-3 rounded-lg text-primary dark:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={24} />
                      </motion.a>
                    )}
                    {contactInfo.instagram && (
                      <motion.a 
                        href={contactInfo.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary/10 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-gray-600 p-3 rounded-lg text-primary dark:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Instagram"
                      >
                        <Instagram size={24} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Form */}
            <ScrollAnimationWrapper animation="fade-left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50 dark:bg-gray-900 pb-0">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <h2 className="section-title text-center">Find Us</h2>
            <p className="section-subtitle text-center max-w-3xl mx-auto mb-8">
              We're located in the AITM Campus in Bhatkal, Karnataka
            </p>
          </ScrollAnimationWrapper>
        </div>
        
        <ScrollAnimationWrapper delay={0.2}>
          <div className="h-96 w-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.2858331629384!2d74.55!3d14.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAwJzAwLjAiTiA3NMKwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1627896254320!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AITM Campus Map"
            ></iframe>
          </div>
        </ScrollAnimationWrapper>
      </section>
    </>
  );
};

export default Contact;