import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <footer ref={footerRef} className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={footerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              shashi Caterers
            </h3>
            <p className="text-muted-foreground text-sm">
              Making your celebrations memorable with authentic South Indian cuisine and exceptional service.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={footerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/menu", label: "Menu" },
                { to: "/packages", label: "Packages" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={footerInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={footerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Wedding Catering",
                "Corporate Events",
                "Birthday Celebrations",
                "Custom Packages"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={footerInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="text-muted-foreground"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={footerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <motion.li 
                initial={{ x: -20, opacity: 0 }}
                animate={footerInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Shirva, Udupi, Karnataka</span>
              </motion.li>
              <motion.li 
                initial={{ x: -20, opacity: 0 }}
                animate={footerInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+919448128132" className="text-muted-foreground hover:text-primary transition-colors">
                      Ravindra: +91 9448128132
                    </a>
                    <a href="tel:+918197968868" className="text-muted-foreground hover:text-primary transition-colors">
                      Varun: +91 8197968868
                    </a>
                  </div>
                </div>
              </motion.li>
              <motion.li 
                initial={{ x: -20, opacity: 0 }}
                animate={footerInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:shashi.caterers.shirva@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  shashi.caterers.shirva@gmail.com
                </a>
              </motion.li>
              <motion.li 
                initial={{ x: -20, opacity: 0 }}
                animate={footerInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://instagram.com/shashicaterers" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @shashicaterers
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={footerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} shashi Caterers. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
