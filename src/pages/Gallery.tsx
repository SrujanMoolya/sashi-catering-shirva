import { useState } from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - in production, these would be actual gallery photos
  const galleryImages = [
    { id: 1, title: "Wedding Setup", category: "Weddings" },
    { id: 2, title: "Corporate Event", category: "Corporate" },
    { id: 3, title: "Buffet Display", category: "Setup" },
    { id: 4, title: "Traditional Dishes", category: "Food" },
    { id: 5, title: "Birthday Celebration", category: "Events" },
    { id: 6, title: "Dessert Table", category: "Food" },
    { id: 7, title: "Outdoor Catering", category: "Setup" },
    { id: 8, title: "Special Occasion", category: "Events" },
    { id: 9, title: "Elegant Presentation", category: "Weddings" },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at our recent events and the memorable moments we've helped create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <Card 
              key={image.id}
              className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelectedImage(image.title)}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-1">{image.title}</p>
                    <p className="text-sm text-muted-foreground">{image.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Follow us on Instagram for more photos and updates from our recent events
          </p>
          <a 
            href="https://instagram.com/sashicaterers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium mt-2 inline-block"
          >
            @sashicaterers
          </a>
        </div>
      </div>

      {/* Simple Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-background rounded-lg p-4 max-w-3xl w-full">
            <div className="aspect-video bg-muted rounded flex items-center justify-center">
              <p className="text-xl font-semibold">{selectedImage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
