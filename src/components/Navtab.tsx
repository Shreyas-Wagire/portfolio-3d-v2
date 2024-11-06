import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";

const projects = [
    {
        title: "3d Portfolio",
        description: "A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payments, and a responsive design for optimal user experience across all devices.",
        image: "/img/p1.jpeg",
        tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
        link: "https://github.com/yourusername/ecommerce-platform",
        color: "from-blue-500 to-purple-600"
    },
    {
        title: "Weather Dashboard",
        description: "An elegant weather forecasting application that provides real-time weather data, interactive maps, and detailed meteorological information with beautiful visualizations and alerts.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1600&h=900",
        tags: ["React", "TypeScript", "OpenWeather API", "D3.js"],
        link: "https://github.com/yourusername/weather-app",
        color: "from-emerald-500 to-teal-600"
    },
    {
        title: "Task Management System",
        description: "A sophisticated Kanban-style project management tool with real-time collaboration, customizable workflows, and detailed analytics to boost team productivity.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1600&h=900",
        tags: ["Vue.js", "Vuex", "Firebase", "Analytics"],
        link: "https://github.com/yourusername/task-manager",
        color: "from-amber-500 to-orange-600"
    },
    {
        title: "AI Chatbot Assistant",
        description: "An intelligent conversational AI powered by machine learning, capable of natural language processing, context awareness, and adaptive learning from user interactions.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&h=900",
        tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
        link: "https://github.com/yourusername/ai-chatbot",
        color: "from-rose-500 to-pink-600"
    }
];

export default function Portfolio() {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
                <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Portfolio
                        </span>
                    </h1>
                    <div className="space-x-2">
                        <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
                            About
                        </Button>
                        <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
                            Contact
                        </Button>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-16">
                <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
                    {/* Background Effect */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-indigo-900/50"></div>
                        <motion.div
                            className="absolute inset-0 opacity-20"
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 100%"],
                                backgroundSize: ["100% 100%", "200% 200%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 20,
                            }}
                            style={{
                                backgroundImage: `url(${projects[currentProject].image})`,
                                backgroundSize: "cover",
                                filter: "blur(40px)",
                            }}
                        />
                    </div>

                    {/* Project Content */}
                    <div className="relative z-10 container mx-auto px-6 py-20">
                        <motion.div
                            key={currentProject}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Project Info */}
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${projects[currentProject].color}`}>
                                        {projects[currentProject].title}
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {projects[currentProject].description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {projects[currentProject].tags.map((tag, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className={`bg-white/10 hover:bg-white/20 text-white`}
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className={`bg-gradient-to-r ${projects[currentProject].color} hover:opacity-90 transition-opacity`}
                                >
                                    <a
                                        href={projects[currentProject].link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        View Project
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>

                            {/* Project Image */}
                            <Card className="overflow-hidden bg-transparent border-0 shadow-2xl">
                                <motion.img
                                    src={projects[currentProject].image}
                                    alt={projects[currentProject].title}
                                    className="w-full aspect-video object-cover rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Card>
                        </motion.div>

                        {/* Navigation Buttons */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevProject}
                                className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextProject}
                                className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black/80 backdrop-blur-lg border-t border-white/10 py-4">
                <div className="container mx-auto px-6 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}