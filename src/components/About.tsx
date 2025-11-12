import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-catering.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const missionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });

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
      <section ref={heroRef} className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 m-14 ">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={heroInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            src="https://blog.venuelook.com/wp-content/uploads/2025/06/Working-With-Caterers.webp"
            alt="Elegant South Indian wedding buffet setup with traditional decorations"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 rounded-3xl" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90"
          >
            Celebrating traditions, creating memories
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={storyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Shashi Caterers, has been Established for
              nearly 29years and is lead by Owner K.
              Ravindra shetty and his professional
              Management team, over the years.
              The Firm has built an enviable Reputation
              as one of the leading caterers in and around
              Udupi. Our company reputation is built on
              delivering innovative menus, using the best
              quality, fresh ingredients and providing
              attentive, friendly and professional Guests
              service.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Established in the heart of Shirva, Udupi, shashi Caterers has been serving authentic South Indian cuisine
              with dedication and passion for years. What started as a small family venture has grown into one of the
              most trusted catering services in Karnataka.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We specialize in wedding catering, corporate events, and everyday celebrations, bringing the rich flavors
              of traditional South Indian cooking to every occasion. Our commitment to quality, authenticity, and
              exceptional service has made us the preferred choice for thousands of satisfied customers.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="border-border hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={missionInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To preserve and celebrate the authentic flavors of South Indian cuisine while providing
                exceptional catering services that make every event truly special.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={missionInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background rounded-lg p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Fresh, locally-sourced ingredients prepared daily",
                  "Experienced chefs trained in traditional cooking methods",
                  "Customizable menus to suit all dietary preferences",
                  "Comprehensive event planning and execution",
                  "Affordable packages without compromising on quality"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={missionInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
