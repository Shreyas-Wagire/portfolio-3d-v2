
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Prathamesh Sutar',
    role: 'Photographer',
    text: 'An exceptional developer with strong problem-solving skills. Always delivers high-quality code.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Ketan Girmal',
    role: 'Developer',
    text: 'Great team player with excellent communication skills. Technical expertise is outstanding.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Gourav Hiravaker',
    role: 'Video Editor',
    text: 'Consistently exceeds expectations. Strong technical skills and great attention to detail.',
    image: 'https://via.placeholder.com/60'
  }
];

const Testimonials = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="col-span-12 bg-[#1A1A1A] rounded-3xl p-8 "
    >
      <h2 className="text-2xl font-bold mb-8">What People Say</h2>
      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#222222] p-6 rounded-xl hover:bg-[#2A2A2A] transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;