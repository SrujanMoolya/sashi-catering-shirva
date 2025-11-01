import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Rajesh",
      event: "Wedding Reception",
      rating: 5,
      text: "Sashi Caterers made our wedding day absolutely perfect! The food was exceptional, and all our guests were impressed with the authentic South Indian flavors. The team was professional and handled everything smoothly.",
      date: "December 2024",
    },
    {
      name: "Mr. Suresh Kumar",
      event: "Corporate Annual Meet",
      rating: 5,
      text: "We've been using Sashi Caterers for our corporate events for the past three years. Their consistency in quality and punctuality is remarkable. Highly recommended for business events!",
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
      text: "Traditional authentic taste with modern presentation. Sashi Caterers understood exactly what we wanted and delivered beyond expectations. The guests are still talking about the food!",
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience with Sashi Caterers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
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
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-muted-foreground mb-6">
            Had a great experience with Sashi Caterers? We'd love to hear from you! 
            Your feedback helps us serve you better.
          </p>
          <p className="text-sm text-muted-foreground">
            Contact us to share your testimonial or leave a review on our social media pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
