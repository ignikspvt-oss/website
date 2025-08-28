import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Store, 
  UtensilsCrossed, 
  Heart, 
  Shirt, 
  Star,
  Home,
  Building2,
  ShoppingBag
} from 'lucide-react';

const IndustriesPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: industriesRef, inView: industriesInView } = useInView({ threshold: 0.1 });

  const industries = [
    {
      icon: Store,
      title: 'Business Owners',
      description: 'Transform your traditional business into a digital powerhouse with comprehensive online solutions.',
      examples: ['Local Services', 'Consultancy', 'Professional Services', 'Small Retail'],
      color: 'blue'
    },
    {
      icon: UtensilsCrossed,
      title: 'Food & Beverage',
      description: 'Boost your restaurant, cafe, or cloud kitchen with online ordering, social media, and delivery integration.',
      examples: ['Restaurants', 'Cafes', 'Cloud Kitchens', 'Food Delivery'],
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Hospitals & Clinics',
      description: 'Enhance patient experience with online appointments, digital presence, and healthcare automation.',
      examples: ['Clinics', 'Hospitals', 'Dental Practices', 'Healthcare Services'],
      color: 'red'
    },
    {
      icon: Shirt,
      title: 'Fashion & Apparel',
      description: 'Showcase your fashion brand with stunning visuals, e-commerce solutions, and social media marketing.',
      examples: ['Clothing Brands', 'Fashion Boutiques', 'Accessories', 'Jewelry'],
      color: 'purple'
    },
    {
      icon: Star,
      title: 'Seasonal Businesses',
      description: 'Maximize seasonal sales with targeted campaigns for festivals, holidays, and special occasions.',
      examples: ['Rakhi Stores', 'Diwali Gifts', 'Holiday Decor', 'Seasonal Products'],
      color: 'yellow'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Generate more leads with professional property websites, virtual tours, and digital marketing.',
      examples: ['Property Agents', 'Real Estate Firms', 'Property Developers', 'Rental Services'],
      color: 'indigo'
    },
    {
      icon: Building2,
      title: 'Interior Designers',
      description: 'Display your portfolio beautifully and attract clients with professional websites and social presence.',
      examples: ['Interior Designers', 'Architects', 'Home Decorators', 'Furniture Stores'],
      color: 'pink'
    },
    {
      icon: ShoppingBag,
      title: 'Grocery Sellers',
      description: 'Expand your reach with online grocery platforms, delivery systems, and customer management tools.',
      examples: ['Local Grocery', 'Organic Stores', 'Specialty Foods', 'Wholesale Suppliers'],
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
      green: { bg: 'bg-green-500', text: 'text-green-600', gradient: 'from-green-500 to-green-600' },
      red: { bg: 'bg-red-500', text: 'text-red-600', gradient: 'from-red-500 to-red-600' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', gradient: 'from-yellow-500 to-yellow-600' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', gradient: 'from-indigo-500 to-indigo-600' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-600', gradient: 'from-pink-500 to-pink-600' },
      emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', gradient: 'from-emerald-500 to-emerald-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
              <span className="gradient-blue bg-clip-text text-transparent">Seekers</span> of Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              We partner with diverse industries to help small businesses across sectors 
              achieve their digital transformation goals
            </p>
            <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section ref={industriesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="gradient-gold bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Specialized digital solutions tailored to your industry's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const colorClasses = getColorClasses(industry.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={industriesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${colorClasses.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className={`text-xl font-bold ${colorClasses.text} mb-3`}>
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {industry.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Examples:
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {industry.examples.map((example, exampleIndex) => (
                        <div 
                          key={exampleIndex}
                          className="flex items-center space-x-1"
                        >
                          <div className={`w-1.5 h-1.5 ${colorClasses.bg} rounded-full`}></div>
                          <span className="text-xs text-gray-600">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Join Our <span className="gradient-blue bg-clip-text text-transparent">Success</span> Stories?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Regardless of your industry, we have the expertise to help your business 
              thrive in the digital landscape
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-medium"
              >
                <Heart className="w-5 h-5" />
                <span>Discuss Your Industry</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-blue text-white px-8 py-4 rounded-full hover:glow-blue transition-all font-medium"
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;