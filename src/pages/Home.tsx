import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Users, Star, Calendar, Utensils, Package, Quote } from "lucide-react";
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

      {/* Menu Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Authentic South Indian flavors crafted with fresh ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { name: "Traditional Thali", desc: "Complete meal with variety of dishes", icon: Utensils },
              { name: "Special Biryani", desc: "Aromatic rice with authentic spices", icon: ChefHat },
              { name: "South Indian Sweets", desc: "Traditional desserts and delicacies", icon: Star }
            ].map((item, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button size="lg" variant="default">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Catering Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible packages designed for every occasion and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { 
                name: "Wedding Catering", 
                desc: "Grand feasts for your special day",
                features: ["Custom menus", "Full service", "100+ guests"],
                icon: Star
              },
              { 
                name: "Corporate Events", 
                desc: "Professional catering for business",
                features: ["Timely service", "Formal setup", "50+ guests"],
                icon: Package
              },
              { 
                name: "Social Events", 
                desc: "Perfect for parties & celebrations",
                features: ["Flexible menu", "Quick setup", "20+ guests"],
                icon: Users
              }
            ].map((pkg, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <pkg.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm text-center mb-4">{pkg.desc}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/packages">
              <Button size="lg" variant="outline">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by families and businesses across Udupi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                quote: "Excellent food quality and service for our wedding. Everyone loved the authentic South Indian dishes!",
                author: "Priya & Raj",
                event: "Wedding Ceremony"
              },
              {
                quote: "Professional service and delicious food. Perfect for our corporate event. Highly recommend!",
                author: "Suresh Kumar",
                event: "Corporate Event"
              },
              {
                quote: "Amazing experience! The team was punctual, courteous, and the food was absolutely delicious.",
                author: "Meera Shetty",
                event: "Family Function"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <Button size="lg" variant="outline">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of our beautifully catered events
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square rounded-lg bg-muted overflow-hidden hover:opacity-90 transition-opacity">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <Star className="w-12 h-12" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button size="lg" variant="default">
                View Gallery
              </Button>
            </Link>
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
