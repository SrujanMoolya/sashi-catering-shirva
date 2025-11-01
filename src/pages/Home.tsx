import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Users, Star, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";

const Home = () => {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Expert Chefs",
      description: "Professional culinary team with years of experience",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Custom Menus",
      description: "Tailored packages for every occasion and guest count",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Quality Assured",
      description: "Fresh ingredients and authentic recipes",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Event Planning",
      description: "Complete catering solutions from start to finish",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Elegant South Indian wedding feast with traditional dishes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Sashi Caterers
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-gold-light font-medium">
            Wedding, Corporate & Everyday Celebrations
          </p>
          <p className="text-lg mb-8 text-white/90">
            Authentic South Indian Cuisine • Shirva, Udupi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Book Now
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Sashi Caterers?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience exceptional catering services that make your events unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let us make your celebration memorable with our exceptional catering services
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
