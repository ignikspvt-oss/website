import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  Play,
  Globe,
  Share2,
  Settings,
  Zap,
} from 'lucide-react';

const HomePage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });

  const services = [
    'Website Development',
    'Social Media Management',
    'Content Creation',
    'Digital Marketing',
    'Automation Setup',
    'SEO Optimization',
    'Brand Strategy',
    'E-commerce Solutions',
  ];

  const floatingIcons = [
    { icon: Globe, delay: 0, position: 'top-20 left-20' },
    { icon: Share2, delay: 0.6, position: 'top-40 right-32' },
    { icon: Settings, delay: 1.2, position: 'bottom-40 left-16' },
    { icon: Zap, delay: 1.8, position: 'bottom-20 right-20' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - NO page-translate/parallax on the whole section */}
      <section
        ref={heroRef}
        className="relative min-h-screen gradient-bg flex items-center justify-center overflow-visible"
      >
        {/* Floating Icons (pure decorative) */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 0.12, y: 0 } : {}}
            transition={{ delay: item.delay, duration: 0.9 }}
            className={`absolute ${item.position} text-blue-600 floating hidden lg:block pointer-events-none`}
            style={{ transform: 'translateZ(0)' }}
          >
            <item.icon className="w-12 h-12" />
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-2">
              Helping Small Businesses Go{' '}
              <span className="gradient-blue bg-clip-text text-transparent">Big</span>,{' '}
              <span className="gradient-gold bg-clip-text text-transparent">Digitally!</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              Igniks helps small businesses establish their digital presence with websites,
              social media content, and automation.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-base sm:text-lg font-semibold text-blue-600 px-4"
            >
              Your trusted partner for digital growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mt-10 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="flex items-center space-x-2 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-600 transition-all font-medium text-sm sm:text-base lg:text-lg w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact on WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 glass-blue text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:glow-blue transition-all font-medium text-sm sm:text-base lg:text-lg w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Demo</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 gradient-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:glow-blue transition-all font-medium text-sm sm:text-base lg:text-lg w-full sm:w-auto justify-center"
              >
                <Play className="w-5 h-5" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Ticker / Dynamic Banner - placed IN-FLOW so it pushes the next section down */}
        
      </section>

      {/* Services Preview - stable, no vertical jump on hover */}
      <section className="py-16 sm:py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
              Our <span className="gradient-blue bg-clip-text text-transparent">Digital</span> Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              Comprehensive digital solutions to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Globe,
                title: 'Website Development',
                description:
                  'Fast, responsive, user-friendly websites that convert visitors into customers.',
              },
              {
                icon: Share2,
                title: 'Social Media & Content',
                description: 'Engaging design & content management to build your online presence.',
              },
              {
                icon: Settings,
                title: 'Automation Setup',
                description: 'Smart automations to save time & drive growth for your business.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }} // NO vertical 'y' movement on hover
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="glass p-6 sm:p-8 rounded-xl hover:glow-blue transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 gradient-blue rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
