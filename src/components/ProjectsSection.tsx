import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payments, and a responsive design for optimal user experience across all devices.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&h=900",
        tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
        github: "https://github.com/yourusername/ecommerce-platform",
        live: "https://your-ecommerce.com",
        color: "from-blue-500 to-purple-600",
        stats: {
            stars: "120+",
            commits: "450+",
            contributors: "4"
        }
    },
    {
        title: "Weather Dashboard",
        description: "An elegant weather forecasting application that provides real-time weather data, interactive maps, and detailed meteorological information with beautiful visualizations and alerts.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1600&h=900",
        tags: ["React", "TypeScript", "OpenWeather API", "D3.js"],
        github: "https://github.com/yourusername/weather-app",
        live: "https://your-weather.com",
        color: "from-emerald-500 to-teal-600",
        stats: {
            stars: "85+",
            commits: "280+",
            contributors: "2"
        }
    },
    {
        title: "Task Management System",
        description: "A sophisticated Kanban-style project management tool with real-time collaboration, customizable workflows, and detailed analytics to boost team productivity.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1600&h=900",
        tags: ["Vue.js", "Vuex", "Firebase", "Analytics"],
        github: "https://github.com/yourusername/task-manager",
        live: "https://your-tasks.com",
        color: "from-amber-500 to-orange-600",
        stats: {
            stars: "95+",
            commits: "320+",
            contributors: "3"
        }
    },
    {
        title: "AI Chatbot Assistant",
        description: "An intelligent conversational AI powered by machine learning, capable of natural language processing, context awareness, and adaptive learning from user interactions.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&h=900",
        tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
        github: "https://github.com/yourusername/ai-chatbot",
        live: "https://your-chatbot.com",
        color: "from-rose-500 to-pink-600",
        stats: {
            stars: "150+",
            commits: "380+",
            contributors: "5"
        }
    }
];

export default function ProjectsSection() {
    const [currentProject, setCurrentProject] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentProject((prev) => (prev + newDirection + projects.length) % projects.length);
    };

    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_100%)]" />

            <div className="container mx-auto px-6 py-20 relative">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Featured Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Explore my latest works and side projects that showcase my skills and passion for development
                    </motion.p>
                </div>

                <div className="relative h-[600px] md:h-[500px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentProject}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0"
                        >
                            <Card className="h-full bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden">
                                <div className="grid md:grid-cols-2 h-full">
                                    {/* Image Section */}
                                    <div className="relative h-64 md:h-full">
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br opacity-20"
                                            style={{
                                                backgroundImage: `url(${projects[currentProject].image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        />
                                        <motion.img
                                            src={projects[currentProject].image}
                                            alt={projects[currentProject].title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            initial={{ scale: 1.2 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 1.5 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col justify-between relative">
                                        <div>
                                            <h3 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${projects[currentProject].color}`}>
                                                {projects[currentProject].title}
                                            </h3>
                                            <p className="text-gray-300 mb-6 line-clamp-3">
                                                {projects[currentProject].description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {projects[currentProject].tags.map((tag, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="bg-white/10 hover:bg-white/20 text-white"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center p-3 rounded-lg bg-white/5">
                                                <div className="text-xl font-bold text-white">
                                                    {projects[currentProject].stats.stars}
                                                </div>
                                                <div className="text-xs text-gray-400">Stars</div>
                                            </div>
                                            <div className="text-center p-3 rounded-lg bg-white/5">
                                                <div className="text-xl font-bold text-white">
                                                    {projects[currentProject].stats.commits}
                                                </div>
                                                <div className="text-xs text-gray-400">Commits</div>
                                            </div>
                                            <div className="text-center p-3 rounded-lg bg-white/5">
                                                <div className="text-xl font-bold text-white">
                                                    {projects[currentProject].stats.contributors}
                                                </div>
                                                <div className="text-xs text-gray-400">Contributors</div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <Button
                                                asChild
                                                className={`flex-1 bg-gradient-to-r ${projects[currentProject].color} hover:opacity-90`}
                                            >
                                                <a
                                                    href={projects[currentProject].live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    Live Demo
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </Button>
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="flex-1 border-white/20 hover:bg-white/10"
                                            >
                                                <a
                                                    href={projects[currentProject].github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    Source
                                                    <Github className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => paginate(-1)}
                        className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => paginate(1)}
                        className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10"
                    >
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Project Counter */}
                <div className="text-center mt-4 text-sm text-gray-400">
                    {currentProject + 1} / {projects.length}
                </div>
            </div>
        </section>
    );
}