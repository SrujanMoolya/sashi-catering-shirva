import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuCategories = {
    vegetarian: [
      { name: "Sambar Rice", description: "Traditional lentil-based vegetable stew with rice" },
      { name: "Bisi Bele Bath", description: "Spicy Karnataka-style rice with lentils and vegetables" },
      { name: "Paneer Butter Masala", description: "Rich and creamy cottage cheese curry" },
      { name: "Vegetable Biryani", description: "Aromatic basmati rice with mixed vegetables" },
      { name: "Gobi Manchurian", description: "Indo-Chinese style cauliflower appetizer" },
      { name: "Palak Paneer", description: "Cottage cheese in spinach gravy" },
      { name: "Chole", description: "Chickpeas in tangy tomato gravy" },
      { name: "Masala Dosa", description: "Crispy rice crepe with potato filling" },
    ],
    nonVegetarian: [
      { name: "Chicken Biryani", description: "Fragrant basmati rice with tender chicken pieces" },
      { name: "Mutton Curry", description: "Slow-cooked mutton in aromatic spices" },
      { name: "Fish Fry", description: "Coastal-style fried fish with traditional masala" },
      { name: "Butter Chicken", description: "Creamy tomato-based chicken curry" },
      { name: "Prawn Ghee Roast", description: "Mangalorean-style prawns in spicy coconut masala" },
      { name: "Egg Curry", description: "Boiled eggs in rich curry sauce" },
      { name: "Chicken 65", description: "Spicy deep-fried chicken appetizer" },
      { name: "Mutton Biryani", description: "Premium mutton layered with fragrant rice" },
    ],
    desserts: [
      { name: "Gulab Jamun", description: "Soft milk dumplings in rose-flavored syrup" },
      { name: "Rasmalai", description: "Cottage cheese patties in sweetened milk" },
      { name: "Kheer", description: "Traditional rice pudding with cardamom" },
      { name: "Mysore Pak", description: "Rich chickpea flour sweet with ghee" },
      { name: "Jalebi", description: "Crispy sweet spirals in sugar syrup" },
      { name: "Ice Cream", description: "Assorted flavors" },
    ],
    beverages: [
      { name: "Filter Coffee", description: "Authentic South Indian filter coffee" },
      { name: "Masala Chai", description: "Spiced milk tea" },
      { name: "Buttermilk", description: "Traditional spiced yogurt drink" },
      { name: "Fresh Juices", description: "Seasonal fruit juices" },
      { name: "Soft Drinks", description: "Assorted carbonated beverages" },
      { name: "Lemonade", description: "Fresh lime with mint" },
    ],
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse selection of authentic South Indian dishes, crafted with fresh ingredients and traditional recipes
          </p>
        </div>

        <Tabs defaultValue="vegetarian" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="vegetarian">Vegetarian</TabsTrigger>
            <TabsTrigger value="nonVegetarian">Non-Vegetarian</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
          </TabsList>

          <TabsContent value="vegetarian">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuCategories.vegetarian.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nonVegetarian">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuCategories.nonVegetarian.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuCategories.desserts.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuCategories.beverages.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All menu items can be customized according to your preferences and dietary requirements
          </p>
          <p className="text-sm text-muted-foreground">
            * Menu availability may vary based on season and location
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
