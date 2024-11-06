
import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks, SiGithub, SiCodingninjas } from 'react-icons/si';

const profiles = [
  { 
    name: 'LeetCode', 
    icon: SiLeetcode, 
    url: 'https://leetcode.com/u/Shreyas_Wagire/', 
    solved: '29+',
    color: 'bg-orange-400'
  },
  { 
    name: 'HackerRank', 
    icon: SiHackerrank, 
    url: 'https://www.hackerrank.com/profile/shreyaswagire071', 
    solved: '100+',
    color: 'from-green-400 to-emerald-500'
  },
  { 
    name: 'CodeChef', 
    icon: SiCodechef, 
    url: 'https://www.codechef.com/users/suwagire', 
    solved: '150+',
    color: 'from-brown-400 to-yellow-600'
  },
  { 
    name: 'GeeksforGeeks', 
    icon: SiGeeksforgeeks, 
    url: 'https://www.geeksforgeeks.org/user/shreyaswalg16/', 
    solved: '250+',
    color: 'from-green-500 to-green-600'
  },
  { 
    name: 'GitHub', 
    icon: SiGithub, 
    url: 'https://github.com/ShreyasCyber', 
    // solved: '25+',
    color: 'from-red-500 to-red-600'
  },
  { 
    name: 'Coding Ninja', 
    icon: SiCodingninjas, 
    url: '#', 
    solved: '250+',
    color: 'from-blue-500 to-blue-600'
  }
];

const CodingProfiles = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="card"
    >
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="section-title"
      >
        Coding Profiles
      </motion.h3>
      <div className="grid grid-cols-2 gap-4">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="relative bg-[#222222]/50 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <profile.icon className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <span className="block font-medium group-hover:text-white transition-colors">{profile.name}</span>
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-sm text-gray-400"
                  >
                    {profile.solved} problems
                  </motion.span>
                </div>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform origin-left"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default CodingProfiles;