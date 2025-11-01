import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-catering.jpg";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every dish",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passion",
      description: "Love for authentic South Indian cuisine drives everything we do",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Service",
      description: "Dedicated to making your event stress-free and memorable",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Blending traditional recipes with modern presentation",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="Elegant South Indian wedding buffet setup with traditional decorations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/90">Celebrating traditions, creating memories</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Established in the heart of Shirva, Udupi, Sashi Caterers has been serving authentic South Indian cuisine 
              with dedication and passion for years. What started as a small family venture has grown into one of the 
              most trusted catering services in Karnataka.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We specialize in wedding catering, corporate events, and everyday celebrations, bringing the rich flavors 
              of traditional South Indian cooking to every occasion. Our commitment to quality, authenticity, and 
              exceptional service has made us the preferred choice for thousands of satisfied customers.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To preserve and celebrate the authentic flavors of South Indian cuisine while providing 
                exceptional catering services that make every event truly special.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fresh, locally-sourced ingredients prepared daily</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Experienced chefs trained in traditional cooking methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Customizable menus to suit all dietary preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comprehensive event planning and execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Affordable packages without compromising on quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
