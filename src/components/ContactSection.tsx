
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMessageCircle } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="card mt-8 w-1/2"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2">
            <FiMessageCircle className="text-blue-400 text-xl" />
            <h2 className="text-4xl font-bold">
              Let's work{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                together
              </span>
              .
            </h2>
          </div>
          <p className="text-gray-400">Open for opportunities and collaborations</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          {[
            { icon: FiMail, href: 'mailto:contact@example.com', label: 'Email' },
            { icon: FiGithub, href: '#', label: 'GitHub' },
            { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
            { icon: FiTwitter, href: '#', label: 'Twitter' }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
              aria-label={item.label}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-[#222222]/80 p-4 rounded-full backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all duration-300">
                <item.icon className="text-xl group-hover:text-blue-400 transition-colors" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent transform origin-left"
      />
    </motion.div>
  );
};

export default ContactSection;