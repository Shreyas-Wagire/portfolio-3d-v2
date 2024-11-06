
import { motion } from 'framer-motion';
import Avatar3D from './Avatar3D';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const ProfileCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card card-hover fixed w-1/4"
    >
      <motion.div 
        className="aspect-square max-h-[300px] w-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Avatar3D />
      </motion.div>
      
      <div className="mt-6">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-500 font-medium bg-blue-500/10 inline-block px-3 py-1 rounded-full"
        >
          Web Developer
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Shreyas Wagire
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-4"
        >
          Full-stack developer passionate about creating impactful web applications 
          and solving complex problems.
        </motion.p>
      </div>

      <div className="mt-6 space-y-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <FiDownload />
          Download Resume
        </motion.button>
        
        {/* <div className="flex justify-center gap-3">
          {[
            { icon: FiMail, href: 'mailto:contact@example.com' },
            { icon: FiGithub, href: '#' },
            { icon: FiLinkedin, href: '#' }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="icon-button glow"
            >
              <item.icon className="text-xl" />
            </motion.a>
          ))}
        </div> */}
      </div>

      {/* <div className="mt-6 grid grid-cols-2 gap-3">
        {[
          { value: '5+', label: 'Years of Experience' },
          { value: '50+', label: 'Projects Completed' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="bg-[#222222]/50 p-4 rounded-xl backdrop-blur-sm hover:bg-[#2A2A2A]/50 transition-colors"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div> */}
    </motion.div>
  );
};

export default ProfileCard;