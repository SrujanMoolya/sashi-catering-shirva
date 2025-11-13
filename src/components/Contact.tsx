import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.eventType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Prepare WhatsApp message
    const whatsappMessage = `*New Booking Request*\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'Not provided'}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Expected Guests: ${formData.guests || 'Not specified'}\n` +
      `Event Date: ${formData.eventDate || 'Not specified'}\n` +
      `Additional Details: ${formData.message || 'None'}\n\n` +
      `Please confirm this booking.`;

    // WhatsApp number (Varun Shetty)
    const whatsappNumber = "918197968868";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Prepare email
    const emailSubject = `Booking Request - ${formData.eventType} - ${formData.name}`;
    const emailBody = `New Booking Request Details:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'Not provided'}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Expected Guests: ${formData.guests || 'Not specified'}\n` +
      `Event Date: ${formData.eventDate || 'Not specified'}\n` +
      `Additional Details: ${formData.message || 'None'}`;

    const mailtoUrl = `mailto:shashi.caterers.shirva@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Open email client
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 500);

    toast({
      title: "Booking Request Prepared!",
      description: "WhatsApp and Email will open. Please send both messages to complete your booking request.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      guests: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with us to discuss your catering needs or book our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: MapPin, title: "Address", content: "Shirva, Udupi\nKarnataka, India" },
                  { icon: Phone, title: "Phone", content: "Ravindra Shetty: +91 9448128132\nVarun Shetty: +91 8197968868" },
                  { icon: Mail, title: "Email", content: "shashi.caterers.shirva@gmail.com", link: "mailto:shashi.caterers.shirva@gmail.com" },
                  { icon: Clock, title: "Business Hours", content: "Mon - Sun: 9:00 AM - 8:00 PM" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      {item.title === "Phone" ? (
                        <div className="space-y-1">
                          <div>
                            <p className="text-xs text-muted-foreground">Ravindra Shetty</p>
                            <a href="tel:+919448128132" className="text-sm text-muted-foreground hover:text-primary">
                              +91 9448128132
                            </a>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Varun Shetty</p>
                            <a href="tel:+918197968868" className="text-sm text-muted-foreground hover:text-primary">
                              +91 8197968868
                            </a>
                          </div>
                        </div>
                      ) : item.link ? (
                        <a href={item.link} className="text-sm text-muted-foreground hover:text-primary">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.content.split('\n').map((line, i) => (
                          <span key={i}>{line}<br /></span>
                        ))}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.101562954389!2d74.8121001!3d13.2189398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcaf001d58209f%3A0x4e2aa0d61998ee1b!2sShashi%20Caterers!5e0!3m2!1sen!2sin!4v1762059553322!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="shashi Caterers Location Map"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Booking Form</CardTitle>
                <CardDescription>
                  Fill in the details below and we'll get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="guests">Expected Guests</Label>
                      <Input
                        id="guests"
                        type="number"
                        placeholder="Number of guests"
                        value={formData.guests}
                        onChange={(e) => handleChange("guests", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => handleChange("eventType", value)}
                      >
                        <SelectTrigger id="eventType">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="birthday">Birthday</SelectItem>
                          <SelectItem value="anniversary">Anniversary</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleChange("eventDate", e.target.value)}
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your event requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full" size="lg">
                      Submit Booking Request
                    </Button>
                  </motion.div>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We'll contact you within 24 hours to discuss your requirements.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
