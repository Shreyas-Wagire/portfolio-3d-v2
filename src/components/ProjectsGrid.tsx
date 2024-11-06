import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
    {
        title: '3D Portfolio',
        description: 'A  3d Portfolio that visualize the 3d world.',
        tech: ['React', 'Node.js', 'three.js', 'tailwind css'],
        github: 'https://github.com/ShreyasCyber/Three3D-Site',
        demo: 'https://shreyas3d.vercel.app/',
        image: 'https://camo.githubusercontent.com/ed1a8718a7da88aa5315bef18285fe62db05e96d7b3df0e35e5a73b5ee90b956/68747470733a2f2f692e6962622e636f2f39796b684c744d2f5468756d626e61696c2e706e67',
        category: 'web'
    },
    {
        title: 'Book Store',
        description: 'Real-time task management with collaborative features',
        tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Mongodb'],
        github: '#',
        demo: '#',
        image: '/img/3d.png',
        category: 'mobile'
    }
];

const ProjectsGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredProjects = projects.filter(project =>
        selectedCategory === 'all' || project.category === selectedCategory
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="section-title flex items-center gap-2"
                >
                    <FiFolder className="text-blue-400" />
                    Featured Projects
                </motion.h2>
                <div className="flex gap-2">
                    {['all', 'web', 'mobile'].map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-blue-500/10 text-blue-400'
                                    : 'hover:bg-white/5 text-gray-400'
                                }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1 }}
                            className="group card-hover bg-[#222222]/50 rounded-xl p-4 relative overflow-hidden"
                            // onHoverStart={() => setHoveredProject()}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                                    className="absolute inset-0 flex items-center justify-center gap-4"
                                >
                                    <motion.a
                                        href={project.github}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="icon-button p-3 bg-white/10 backdrop-blur-sm"
                                        aria-label="View GitHub repository"
                                    >
                                        <FiGithub size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="icon-button p-3 bg-white/10 backdrop-blur-sm"
                                        aria-label="View live demo"
                                    >
                                        <FiExternalLink size={20} />
                                    </motion.a>
                                </motion.div>
                            </div>

                            <motion.h3
                                className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors"
                                layout
                            >
                                {project.title}
                            </motion.h3>
                            <motion.p
                                className="text-gray-400 text-sm mb-4"
                                layout
                            >
                                {project.description}
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-2"
                                layout
                            >
                                {project.tech.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="tag text-xs"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectsGrid;