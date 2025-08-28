import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Share2, 
  Settings, 
  Smartphone, 
  ShoppingCart,
  BarChart3,
  Palette
} from 'lucide-react';

const ServicesPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Fast, responsive, user-friendly websites that convert visitors into customers with modern design and seamless functionality.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First']
    },
    {
      icon: Share2,
      title: 'Social Media & Content',
      description: 'Engaging design & content management to build your online presence and connect with your target audience effectively.',
      features: ['Content Strategy', 'Visual Design', 'Community Management', 'Analytics']
    },
    {
      icon: Settings,
      title: 'Automation Setup',
      description: 'Smart automations to save time & drive growth for your business with intelligent workflows and processes.',
      features: ['Workflow Automation', 'Email Marketing', 'Lead Generation', 'CRM Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Ensure your digital presence looks perfect on all devices with mobile-first design and development.',
      features: ['Mobile Responsive', 'Touch Friendly', 'App-like Experience', 'Fast Loading']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online store setup with secure payments, inventory management, and customer experience optimization.',
      features: ['Store Setup', 'Payment Gateway', 'Inventory Management', 'Order Processing']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track your digital performance with comprehensive analytics and actionable insights for continuous improvement.',
      features: ['Performance Metrics', 'User Behavior', 'Growth Tracking', 'Custom Reports']
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Develop a cohesive brand identity that resonates with your audience and stands out in the digital marketplace.',
      features: ['Brand Identity', 'Visual Guidelines', 'Logo Design', 'Brand Voice']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-16 sm:py-20 gradient-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 px-4">
              Our <span className="gradient-blue bg-clip-text text-transparent">Digital</span> Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 px-4">
              Comprehensive digital solutions designed to help your small business 
              compete and thrive in the modern marketplace
            </p>
            <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              What We <span className="gradient-gold bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              End-to-end digital solutions tailored for small business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="glass p-5 sm:p-6 rounded-xl hover:glow-blue transition-all duration-300 cursor-pointer group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 gradient-blue rounded-full flex items-center justify-center mb-4 group-hover:glow-blue transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 gradient-gold rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 px-4">
              Ready to Transform Your <span className="gradient-blue bg-clip-text text-transparent">Business</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 px-4">
              Let's discuss how our digital services can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="flex items-center space-x-2 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-600 transition-colors font-medium w-full sm:w-auto justify-center"
              >
                <Share2 className="w-5 h-5" />
                <span>Get Started Today</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:glow-blue transition-all font-medium w-full sm:w-auto justify-center"
              >
                View Our Packages
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;