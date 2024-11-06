import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
    {
        year: '2024',
        title: 'Senior Full Stack Developer',
        description: 'Leading development of enterprise applications',
        achievements: ['AWS Certification', 'Team Lead', 'Architecture Design']
    },
    {
        year: '2023',
        title: 'Full Stack Developer',
        description: 'Full stack development with React and Node.js',
        achievements: ['React Advanced Certification', 'MongoDB Certification']
    },
    {
        year: '2022',
        title: 'Frontend Developer',
        description: 'Started journey with web development',
        achievements: ['JavaScript Fundamentals', 'HTML/CSS Mastery']
    }
];

const Timeline = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 bg-[#1A1A1A] rounded-3xl p-8 mt-6"
        >
            <h2 className="text-2xl font-bold mb-8">Experience Timeline</h2>
            <div className="relative">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex gap-6 mb-8 relative"
                    >
                        <div className="w-24 text-2xl font-bold text-blue-500">{item.year}</div>
                        <div className="flex-1">
                            <div className="bg-[#222222] p-6 rounded-xl hover:bg-[#2A2A2A] transition-colors">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.achievements.map((achievement, i) => (
                                        <span key={i} className="text-sm bg-[#333333] px-3 py-1 rounded-full">
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Timeline;