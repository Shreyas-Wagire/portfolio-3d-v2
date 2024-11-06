
import { motion } from 'framer-motion';
import { FiCode, FiExternalLink, FiClock, FiTrendingUp } from 'react-icons/fi';

const DailyCodingChallenge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="card"
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="section-title flex items-center gap-2"
        >
          <FiCode className="text-blue-400" />
          Today's Challenge
        </motion.h2>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <FiClock className="text-blue-400" />
          <span>4 hours left</span>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-[#222222]/50 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">Medium</span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <FiTrendingUp className="text-green-400" />
              85% Success Rate
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">Two Sum</h3>
          <p className="text-gray-400 mb-4">
            Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {['Array', 'Hash Table', 'Two Pointers'].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="tag"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <motion.a 
            href="https://leetcode.com/problems/two-sum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
            whileHover={{ x: 5 }}
          >
            Solve on LeetCode
            <FiExternalLink className="group-hover:rotate-45 transition-transform duration-300" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DailyCodingChallenge;