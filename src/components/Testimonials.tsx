import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const testimonials = [
    {
      name: "Priya & Rajesh",
      event: "Wedding Reception",
      rating: 5,
      text: "shashi Caterers made our wedding day absolutely perfect! The food was exceptional, and all our guests were impressed with the authentic South Indian flavors. The team was professional and handled everything smoothly.",
      date: "December 2024",
    },
    {
      name: "Mr. Suresh Kumar",
      event: "Corporate Annual Meet",
      rating: 5,
      text: "We've been using shashi Caterers for our corporate events for the past three years. Their consistency in quality and punctuality is remarkable. Highly recommended for business events!",
      date: "November 2024",
    },
    {
      name: "Anitha Shetty",
      event: "Birthday Celebration",
      rating: 5,
      text: "The team went above and beyond for my daughter's birthday party. The presentation was beautiful, and the food was delicious. Everyone kept asking for the caterer's contact!",
      date: "October 2024",
    },
    {
      name: "Vikram Rao",
      event: "Engagement Ceremony",
      rating: 5,
      text: "Outstanding service! From menu planning to execution, everything was handled professionally. The variety of dishes and the taste were simply amazing. Worth every penny!",
      date: "September 2024",
    },
    {
      name: "Lakshmi Nair",
      event: "House Warming",
      rating: 5,
      text: "Traditional authentic taste with modern presentation. shashi Caterers understood exactly what we wanted and delivered beyond expectations. The guests are still talking about the food!",
      date: "August 2024",
    },
    {
      name: "Dr. Ramesh Bhat",
      event: "Retirement Function",
      rating: 5,
      text: "Excellent coordination and delicious food. They accommodated all our special requests and dietary requirements. The staff was courteous and efficient. Highly satisfied!",
      date: "July 2024",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={headerRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience with shashi Caterers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <motion.div 
                    className="flex items-center gap-1 mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -180, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      >
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto bg-muted rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-muted-foreground mb-6">
            Had a great experience with shashi Caterers? We'd love to hear from you! 
            Your feedback helps us serve you better.
          </p>
          <Button asChild className="mt-2">
            <a href="https://maps.app.goo.gl/RbecYz81khGV3vSQA" target="_blank" rel="noopener noreferrer">
              Leave a Review on Google Maps
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
