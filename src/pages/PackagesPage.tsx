import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Check, 
  Globe, 
  Share2, 
  MessageSquare, 
  Star,
  ArrowRight,
  Gift
} from 'lucide-react';

const PackagesPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: packageRef, inView: packageInView } = useInView({ threshold: 0.1 });

  const packageFeatures = [
    {
      icon: Globe,
      title: '1 Business Website',
      description: 'Professional website with up to 5 pages including Home, About, Services, Contact, and one additional page'
    },
    {
      icon: Share2,
      title: 'Social Media Setup',
      description: 'Complete setup and optimization of 2 social media platforms (Facebook, Instagram, LinkedIn, or Twitter)'
    },
    {
      icon: MessageSquare,
      title: '1 Month Content Support',
      description: 'Content creation, posting schedule, and engagement management for the first month'
    }
  ];

  const bonusFeatures = [
    'Mobile-responsive design',
    'SEO-optimized content',
    'Contact form integration',
    'Google Maps integration',
    'Social media integration',
    'Basic analytics setup',
    'WhatsApp business integration',
    '30-day support included'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 gradient-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-blue bg-clip-text text-transparent">Package</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Everything you need to establish your digital presence and start growing online
            </p>
            <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Package Section */}
      <section ref={packageRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={packageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Package Card */}
            <div className="glass rounded-2xl p-8 md:p-12 hover:glow-blue transition-all duration-300 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 text-sm font-bold">
                <Gift className="w-4 h-4 inline mr-1" />
                MOST POPULAR
              </div>

              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                  Basic Digital Presence Package
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Perfect starter package for small businesses ready to go digital
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-5xl md:text-6xl font-bold gradient-blue bg-clip-text text-transparent">
                    ₹25,000
                  </span>
                  <div className="text-left">
                    <span className="block text-gray-500 line-through">₹35,000</span>
                    <span className="block text-green-600 font-semibold">Save ₹10,000</span>
                  </div>
                </div>
              </div>

              {/* Main Features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {packageFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={packageInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bonus Features */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-center text-blue-600 mb-8">
                  <Star className="w-6 h-6 inline mr-2 text-yellow-500" />
                  Bonus Features Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bonusFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={packageInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={packageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-center mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Transform your business with our comprehensive digital presence package
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://wa.me/1234567890?text=Hi! I\'m interested in the Basic Digital Presence Package. Can you provide more details?', '_blank')}
                    className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-medium text-lg"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Order on WhatsApp</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 gradient-blue text-white px-8 py-4 rounded-full hover:glow-blue transition-all font-medium text-lg"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <p className="text-sm text-gray-600 mt-6">
                  🔒 Secure payment options available • ⚡ 7-14 days delivery • 💬 24/7 support
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="gradient-gold bg-clip-text text-transparent">Package</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Complete Solution</h3>
                <p className="text-gray-700">Everything you need in one comprehensive package</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-600 mb-2">Great Value</h3>
                <p className="text-gray-700">Premium services at an affordable price point</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Ongoing Support</h3>
                <p className="text-gray-700">Dedicated support to ensure your success</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;