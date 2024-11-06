
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certifications = [
    {
        name: 'Html, Css and JavaScript Certification',
        issuer: 'udemy.com',
        date: 'Jan 2024',
        link: 'https://www.udemy.com/certificate/UC-6973b1a2-6d9b-4627-9983-6cdf5cca09cf/',
        badge: 'https://pageflows.com/media/logos/udemy.png'
    },
    {
        name: 'python_basic certificate',
        issuer: 'Hackerrank',
        date: 'Dec 2023',
        link: '#',
        badge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png'
    },
    {
        name: 'CERTIFICATE OF COMPLETION - C++ DSA',
        issuer: 'Apna College',
        date: 'Nov 2023',
        link: '#',
        badge: 'https://media.licdn.com/dms/image/v2/D560BAQErmENhQVwGag/company-logo_200_200/company-logo_200_200/0/1712369795023?e=2147483647&v=beta&t=6AFJxndNYfBvuVUogl7q2MOOxUqFcNnJOZJo4QWRtYo'
    }
];

const Certifications = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="col-span-12 bg-[#1A1A1A] rounded-3xl p-8  "
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Certifications</h2>
                <FiAward className="text-2xl text-blue-500" />
            </div>

            <div className="space-y-4">
                {certifications.map((cert, index) => (
                    <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 bg-[#222222] p-4 rounded-xl hover:bg-[#2A2A2A] transition-colors"
                    >
                        <img
                            src={cert.badge}
                            alt={cert.name}
                            className="w-12 h-12 rounded-lg"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold">{cert.name}</h3>
                            <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default Certifications;