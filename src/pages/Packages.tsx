import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      name: "Wedding Package",
      description: "Comprehensive catering for your special day",
      price: "Starting from ₹500/plate",
      features: [
        "Full vegetarian & non-vegetarian menu",
        "Welcome drinks and appetizers",
        "Main course (5-7 dishes)",
        "Variety of desserts",
        "Traditional South Indian sweets",
        "Professional service staff",
        "Elegant buffet setup",
        "Custom menu consultation",
      ],
      popular: true,
    },
    {
      name: "Corporate Package",
      description: "Perfect for business events and meetings",
      price: "Starting from ₹300/plate",
      features: [
        "Breakfast/Lunch/Dinner options",
        "Variety of vegetarian dishes",
        "Selected non-vegetarian items",
        "Tea/Coffee with snacks",
        "Professional presentation",
        "Timely service",
        "Flexible menu options",
        "Volume discounts available",
      ],
    },
    {
      name: "Events Package",
      description: "Ideal for birthdays and celebrations",
      price: "Starting from ₹350/plate",
      features: [
        "Customizable menu",
        "Appetizers and starters",
        "Main course (3-5 dishes)",
        "Desserts and beverages",
        "Birthday cake arrangement",
        "Decoration assistance",
        "Flexible guest count",
        "Theme-based catering available",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully curated packages or let us create a custom solution for your event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-shadow ${
                pkg.popular ? 'border-primary border-2' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-muted-foreground mb-6">
            We understand that every event is unique. Our team can create a personalized package 
            tailored to your specific requirements, guest count, and budget.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">
              Contact Us for Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
