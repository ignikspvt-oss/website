import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Users, Zap } from 'lucide-react';

const AboutPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to help small businesses thrive in the digital landscape with innovative solutions.'
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Your success is our priority. We build lasting relationships through exceptional service.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work as your extended team, understanding your vision and making it reality.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Cutting-edge technology and creative solutions drive everything we do.'
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
              About <span className="gradient-blue bg-clip-text text-transparent">Igniks</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 px-4">
              We're a new-age digital partner dedicated to transforming small businesses 
              through innovative digital solutions and strategic growth initiatives.
            </p>
            <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="gradient-blue bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At Igniks, we believe every small business deserves to compete on the digital stage. 
                Our mission is to democratize digital transformation by providing world-class 
                websites, social media strategies, and automation tools that were once only 
                accessible to large corporations.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We're not just service providers – we're growth partners committed to your success. 
                Every solution we create is designed to help you reach new heights and achieve 
                sustainable digital growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="glass p-6 sm:p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-blue-600">Focused</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-amber-600">Passionate</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-blue-600">Collaborative</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-amber-600">Innovative</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 sm:py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              Our <span className="gradient-gold bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="glass p-5 sm:p-6 rounded-xl hover:glow-blue transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;