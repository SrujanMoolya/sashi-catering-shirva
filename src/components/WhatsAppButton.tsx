import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "918197968868"; // Varun Shetty
  const message = "Hi! I'm interested in your catering services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA59] text-white p-4 rounded-full shadow-2xl group"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -8, 0]
      }}
      transition={{ 
        scale: { duration: 0.5, delay: 1 },
        opacity: { duration: 0.5, delay: 1 },
        y: { 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2,
          repeatDelay: 3
        }}
        className="relative z-10"
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2} />
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg font-medium"
      >
        Chat with us on WhatsApp
      </motion.span>
    </motion.a>
  );
};

export default WhatsAppButton;
