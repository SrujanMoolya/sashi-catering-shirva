import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, UtensilsCrossed, Package, Image, Star, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "../assets/sashi-logo.jpg"; // Ensure you have a logo image at this path
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Menu", path: "/menu", icon: UtensilsCrossed },
    { name: "Packages", path: "/packages", icon: Package },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Testimonials", path: "/testimonials", icon: Star },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Mobile bottom nav items (showing only most important pages)
  const bottomNavItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Menu", path: "/menu", icon: UtensilsCrossed },
    { name: "Packages", path: "/packages", icon: Package },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <>
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95 w-full"
    >
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="flex items-center justify-between h-20 w-full">
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo image - place your logo at public/logo.png */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={logo}
              alt="Shashi Caterers"
              className="h-16 w-auto mr-2 rounded-full"
              loading="lazy"
            />
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-black bg-clip-text "
            >
               SHASHI CATERERS
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link to="/admin">
                <Button variant="outline" size="sm" className="ml-4">
                  Admin
                </Button>
              </Link>
            </motion.div> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-2 overflow-hidden"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link to="/admin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Admin
                  </Button>
                </Link>
              </motion.div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>

    {/* Mobile Bottom Navigation */}
    <motion.nav 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 max-w-[calc(100vw-2rem)] mx-auto"
    >
      <div className="bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl overflow-hidden w-full">
        <div className="flex items-center justify-around px-1 sm:px-2 py-2.5 sm:py-3 max-w-screen-sm mx-auto w-full">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex-1 max-w-[80px]"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={`relative flex flex-col items-center justify-center py-1.5 sm:py-2 px-0.5 sm:px-1 rounded-xl transition-all duration-200 ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <motion.div
                    animate={active ? { 
                      scale: [1, 1.15, 1],
                      rotate: [0, -5, 5, 0]
                    } : {}}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <Icon 
                      size={20} 
                      className={`${active ? "stroke-[2.5]" : "stroke-2"} sm:w-[22px] sm:h-[22px]`}
                    />
                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -inset-1 bg-primary/20 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                  <span className={`text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 font-medium leading-tight ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {item.name}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="bottomNavIndicator"
                      className="absolute -top-[1px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 35 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>

    {/* Spacer for bottom nav on mobile */}
    {/* <div className="md:hidden h-20" /> */}
    </>
  );
};

export default Navbar;
