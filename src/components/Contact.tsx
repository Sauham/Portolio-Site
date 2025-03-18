import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  //const formRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_i4jhzx8',  // Your EmailJS service ID
        'template_041g9yc',  // Your EmailJS template ID
        formRef.current!,
        't006vvYCoq44jybOm' // Your EmailJS user ID
      );
      setSubmitStatus('success');
      if (formRef.current) {
        (formRef.current as HTMLFormElement).reset();
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-400 mr-3" />
                <a href="mailto:sauhamv28@gmail.com" className="hover:text-blue-400 transition-colors">
                  sauhamv28@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-400 mr-3" />
                <a href="tel:+917000202271" className="hover:text-blue-400 transition-colors">
                  +91 7000202271
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="title"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;