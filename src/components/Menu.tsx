import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, Drumstick, Soup, Coffee, Salad, Cookie, Download, Flame, IceCream, Wine, Pizza, Fish, ChefHat, Dessert, Apple, Candy, Search, ChevronDown, ChevronUp, Filter, BookOpen, X } from "lucide-react";
import MenuPDF from "@/assets/ShashiMenu.pdf";

const Menu = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [showAllCategories, setShowAllCategories] = useState(false);

  const menuCategories = {
    juices: {
      icon: Wine,
      color: "from-cyan-500 to-blue-500",
      title: "Live Floating Juice Counter",
      items: [
        "Fresh Juice",
        "Welcome Drink",
        "Tender Coconut Juice",
        "Fresh Watermelon Juice",
        "Fresh Guava Juice",
        "Watermelon with Grape Mix Juice",
        "Fresh Musk Melon Juice",
        "Fresh Sugarcane Juice",
        "Fruit Punch Juice",
        "Fresh Lime Soda Counter"
      ]
    },
    milkshakes: {
      icon: Coffee,
      color: "from-pink-400 to-purple-400",
      title: "Milkshakes & Drinks",
      items: [
        "Lemon Mint",
        "Blue Hawaiian",
        "Pinacoloda",
        "Butterscotch Milkshake",
        "Anjeer Milkshake",
        "Mango Milkshake",
        "Pista Milkshake",
        "Vanilla Milkshake",
        "Strawberry Milkshake",
        "Chicku Milkshake"
      ]
    },
    salads: {
      icon: Salad,
      color: "from-green-500 to-emerald-500",
      title: "Salad Counter",
      items: [
        "Russian Salad",
        "Caeser Salad",
        "Waldorf Salad",
        "Kimchi Salad",
        "Papaya Cheese Salad",
        "Classic Green Salad",
        "Coleslaw Salad",
        "Watermelon Feta Salad",
        "Pasta Salad",
        "Corn Salad",
        "Mix Veg Salad with Honey Vinegar",
        "Aloo Papdi Chat",
        "Tossed Salad",
        "Bhoondi Raitha",
        "Mix Vegetable Raitha"
      ]
    },
    vegStarters: {
      icon: Pizza,
      color: "from-orange-500 to-red-500",
      title: "Vegetarian Party Starters",
      items: [
        "Veg Crispy",
        "Veg Spring Roll",
        "Veg Fingers",
        "Cheese Balls",
        "Cheese Triangles",
        "Veg Hara Bhara Kabab",
        "French Fries",
        "Potato Wedges",
        "Cheese Corn Nuggets",
        "Paneer Momos",
        "Veg Momos",
        "Mozzarella Cheese Sticks",
        "Creamy Garlic Mushroom"
      ]
    },
    chickenStarters: {
      icon: Drumstick,
      color: "from-red-600 to-orange-600",
      title: "Chicken Starters",
      sections: [
        {
          title: "Tandoor",
          items: [
            "Tikka",
            "Kalmi Tikka",
            "Reshmi Tikka",
            "Hariyali Tikka",
            "Malai Tikka",
            "Kali Mirchi",
            "Afghani Tikka",
            "Achari Tikka",
            "Karachi Tikka",
            "Chicken Irani Tikka"
          ]
        },
        {
          title: "Chinese Style",
          items: [
            "Chilly Chicken",
            "Manchurian",
            "Honey Chicken",
            "Hotpan Chicken",
            "Chicken Chatpat",
            "Dragon Chicken",
            "Butter Garlic",
            "Shezwan",
            "Pudina",
            "Hangkong Chicken",
            "Singapore Chicken",
            "Honey Chilly Chicken",
            "Saslic Chicken",
            "Chicken Hunan",
            "Garlic Chicken",
            "Ginger Chicken",
            "Chicken Broasted"
          ]
        },
        {
          title: "South Indian",
          items: [
            "Kabab",
            "Ghee Roast",
            "Uruval",
            "Tava Fry",
            "Hyderabadi",
            "Gulhari",
            "Peri Peri Chicken",
            "Chicken Kheemavada",
            "Nati Koli Bannamanjal"
          ]
        }
      ]
    },
    seafoodMutton: {
      icon: Flame,
      color: "from-blue-600 to-purple-600",
      title: "Seafood & Mutton",
      sections: [
        {
          title: "Mutton",
          items: [
            "Mutton Pepper",
            "Mutton Kheemavada",
            "Mutton South Indian Sukka"
          ]
        },
        {
          title: "Prawns",
          items: [
            "Silver Fish Rava Fry",
            "Prawns Koliwada",
            "Grilled Prawns",
            "Prawns Ghee Roast",
            "Prawns Tava Fry"
          ]
        },
        {
          title: "Fish",
          items: [
            "King Fish - Tava/Masala/Rava/Tandoori/Pudi Fry",
            "Pomfret - Tava/Masala/Rava/Tandoori/Pudi Fry",
            "Lady Fish - Rava/Naked/Tava/Masala Fry",
            "Crab Claw",
            "Fish and Chips"
          ]
        }
      ]
    },
    breads: {
      icon: Leaf,
      color: "from-amber-500 to-yellow-500",
      title: "Breads & Rotis",
      sections: [
        {
          title: "Indian Breads",
          items: [
            "Akki Rotti",
            "Chapatii",
            "Coin Parota (Methi, Palak)",
            "Rumali Rotti",
            "Tandoori Rotti",
            "Tava Naan",
            "Kashmiri Naan",
            "Veg Stuffed Naan",
            "Naan",
            "Pulka"
          ]
        },
        {
          title: "Dosa Varieties",
          items: [
            "Honey Dosa",
            "Sabakki Dosa",
            "Appam",
            "Neer Dosa",
            "Set Dosa",
            "Palak Dosa",
            "Ragi Dosa"
          ]
        },
        {
          title: "South Indian Specials",
          items: [
            "Rice Rotti",
            "Pathrodde",
            "Moode",
            "Gunda",
            "Pundi",
            "Gujje (Jackfruit) Gatti"
          ]
        }
      ]
    },
    rice: {
      icon: Soup,
      color: "from-yellow-600 to-orange-500",
      title: "Rice & Biryani",
      items: [
        "Ghee Rice",
        "Jeera Rice",
        "Peas Pulav",
        "Pulav",
        "Kashmiri Pulav",
        "Tomato Bhat",
        "Dum Biryani (Chicken/Mutton/Prawns)",
        "Plain Rice (Boiled, White)",
        "Ganji",
        "Herbed Rice with Oyster Sauce"
      ]
    },
    southGravy: {
      icon: Soup,
      color: "from-red-500 to-pink-500",
      title: "South Indian Gravies",
      items: [
        "Yetti Gassi",
        "Bangude Puli Munchi",
        "Bolinjer Saaru",
        "Kundapura Chicken",
        "Chicken Bannamanjal",
        "Chicken Chettinad",
        "Chicken Gassi",
        "Chicken Green Masala",
        "Nati Chicken Bannamanjal",
        "Mutton Red Masala",
        "Mutton Green Masala"
      ]
    },
    northGravy: {
      icon: Drumstick,
      color: "from-purple-600 to-pink-600",
      title: "North Indian Gravies",
      sections: [
        {
          title: "Chicken",
          items: [
            "Chicken Makkanwala",
            "Chicken Maharaja",
            "Chicken Handi",
            "Chicken Saagwala",
            "Coriander Chicken",
            "Chicken Saagwani",
            "Chicken Hyderabadi Gravy",
            "Chicken Shahee Murg Masala",
            "Chicken Koftha",
            "Butter Chicken",
            "Tikka Masala"
          ]
        },
        {
          title: "Mutton",
          items: [
            "Mutton Rogan Josh",
            "Mutton Kale Mirch",
            "Mutton Hundi"
          ]
        }
      ]
    },
    vegGravy: {
      icon: Salad,
      color: "from-green-600 to-teal-500",
      title: "Vegetarian Gravies",
      items: [
        "Paneer Makkanwala",
        "Paneer Kadai",
        "Mushroom Handi",
        "Mushroom Coriander Gravy",
        "Dal Tadka",
        "Dal Fry",
        "Palak Dal",
        "Tomato Rasam",
        "Brinjal Sambar"
      ]
    },
    vegDry: {
      icon: Flame,
      color: "from-lime-500 to-green-500",
      title: "Vegetarian Dry Items",
      items: [
        "Gobi Manchurian",
        "Gobi Uruval",
        "Gobi Butter Garlic",
        "Mushroom Pepper Fry",
        "Mushroom Chilly",
        "Paneer Ghee Roast",
        "Baby Corn Rava Fry",
        "Baby Corn Bazule",
        "Tendli Channa Dry",
        "Long Beans Dry",
        "Bendi Fry",
        "Mix Vegetable with Garlic Butter Sauce"
      ]
    },
    chaat: {
      icon: Cookie,
      color: "from-orange-500 to-red-400",
      title: "Chaat Counter",
      items: [
        "Pani Puri",
        "Sev Puri",
        "Dahi Puri",
        "Bhel Puri",
        "Aloo Papdi Chat",
        "Kachori Chat",
        "Masala Puri"
      ]
    },
    chinese: {
      icon: Soup,
      color: "from-red-600 to-orange-500",
      title: "Chinese Counter",
      sections: [
        {
          title: "Soups",
          items: [
            "Cream of Mushroom",
            "Sweet Corn Soup",
            "Cream of Broccoli",
            "Cream of Chicken"
          ]
        },
        {
          title: "Main Items",
          items: [
            "Fried Rice (Veg/Non-Veg)",
            "Noodles (Veg/Non-Veg)",
            "Dry Items (Veg/Non-Veg)",
            "Gravy Items (Veg/Non-Veg)"
          ]
        }
      ]
    },
    pasta: {
      icon: Pizza,
      color: "from-yellow-500 to-orange-400",
      title: "Pasta Counter",
      sections: [
        {
          title: "Pasta Selection",
          items: ["Spaghetti", "Macaroni", "Penne", "Fusilli"]
        },
        {
          title: "Sauce Selection",
          items: [
            "Cream Sauce (Alfredo)",
            "Tomato Sauce (Marinara)",
            "Pink Sauce",
            "Lighter Chicken Fettuccine Alfredo"
          ]
        }
      ]
    },
    desserts: {
      icon: IceCream,
      color: "from-pink-500 to-purple-500",
      title: "Desserts",
      sections: [
        {
          title: "Hot Desserts",
          items: [
            "Gulab Jamun",
            "Gajar Halwa",
            "Dry Gulab Jamun",
            "Jilebi Rabdi",
            "Ghee Malpua Rabdi",
            "Gevar Rabdi",
            "Sheera",
            "Shahee Tukda",
            "Malai Gulla",
            "Katori Malpua with Kesar Rabdi"
          ]
        },
        {
          title: "Cold Desserts",
          items: [
            "Tender Coconut Pudding",
            "Mango Souflee",
            "Pineapple Souflee",
            "Caramel Custard",
            "Fruits Custard",
            "Mix Fruits Salad"
          ]
        },
        {
          title: "Payasam & Traditional",
          items: [
            "Moong Dal Payasam",
            "Vermicelli Kheer",
            "Appi Payasam",
            "Godi Kadi Payasam",
            "Sarnadde",
            "Raagi Manni",
            "Genda Da Adde",
            "Holige (Kadlebele/Pineapple/Mango)"
          ]
        },
        {
          title: "Ice Cream",
          items: [
            "Ice Cream Slab",
            "Ice Cream Scoop",
            "Fruits with Ice Cream",
            "Matka Kulfi",
            "Mini Gudbud",
            "Arabian Delight",
            "Ideal Sundae",
            "Ice Cream Live Sundaes - Hangyo"
          ]
        },
        {
          title: "Bengali Sweets",
          items: [
            "Assorted Bengali Sweets",
            "Kheer Kadam",
            "Kesar Chenna Roll",
            "Papaya Roll"
          ]
        }
      ]
    },
    specialCounters: {
      icon: Flame,
      color: "from-indigo-500 to-purple-500",
      title: "Special Counters",
      items: [
        "Live Shawarma Counter (Chicken)",
        "Kheema Pav (Chicken/Paneer)",
        "Chaats Counter",
        "Chocolate Fountain Counter",
        "Rabdi Fountain Counter",
        "Sweet Corn Counter",
        "Cotton Candy Counter",
        "Lime Soda Counter",
        "Sugarcane Counter",
        "Ice Gola Counter",
        "Goli Soda Counter",
        "Egg Lollipop Counter",
        "Chai Counter (10 varieties)",
        "Paan Counter (Bombay/Fire/Chocolate/Maghai/Ghanta)",
        "Fruits Counter (5 varieties)"
      ]
    }
  };

  const CategorySection = ({ categoryKey, category, index }: any) => {
    const Icon = category.icon;
    const isExpanded = expandedCategories[categoryKey] ?? false;
    
    // Filter items based on search
    const filterItems = (items: string[]) => {
      if (!searchTerm) return items;
      return items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    // Get filtered sections or items
    const getFilteredContent = () => {
      if (category.sections) {
        return category.sections.map((section: any) => ({
          ...section,
          items: filterItems(section.items)
        })).filter((section: any) => section.items.length > 0);
      }
      return filterItems(category.items);
    };

    const filteredContent = getFilteredContent();
    
    // Don't show category if no items match search
    if ((Array.isArray(filteredContent) && filteredContent.length === 0) || 
        (!Array.isArray(filteredContent) && filteredContent.every((s: any) => s.items.length === 0))) {
      return null;
    }

    // Limit items shown when collapsed
    const ITEMS_LIMIT = 8;
    const shouldShowViewMore = category.items && category.items.length > ITEMS_LIMIT;
    
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-8 lg:mb-12"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold capitalize bg-gradient-to-r ${category.color} bg-clip-text text-transparent">
              {category.title || categoryKey.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
          </div>
          {shouldShowViewMore && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpandedCategories(prev => ({
                ...prev,
                [categoryKey]: !prev[categoryKey]
              }))}
              className="gap-2"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  View More
                </>
              )}
            </Button>
          )}
        </div>

        {category.sections ? (
          // Categories with subsections
          <div className="space-y-6">
            {filteredContent.map((section: any, sectionIndex: number) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold mb-4 text-foreground/90 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b ${category.color} rounded-full" />
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {section.items.map((item: string, itemIndex: number) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.02 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card className="h-full hover:shadow-md transition-all border-l-4 hover:border-l-primary cursor-pointer">
                        <CardContent className="p-4">
                          <p className="font-medium text-sm md:text-base">{item}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Regular categories
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {(isExpanded || !shouldShowViewMore ? filteredContent : filteredContent.slice(0, ITEMS_LIMIT)).map((item: string, itemIndex: number) => (
              <motion.div
                key={itemIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: itemIndex * 0.02 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-full hover:shadow-md transition-all border-l-4 hover:border-l-primary cursor-pointer">
                  <CardContent className="p-4">
                    <p className="font-medium text-sm md:text-base">{item}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          ref={headerRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full shadow-xl">
              <Drumstick className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Our Complete Menu
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            Discover our extensive collection of authentic dishes, crafted with fresh ingredients and traditional recipes. 
            From appetizers to desserts, we have something for everyone!
          </p>

          {/* Download PDF Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg"
              asChild
            >
              <a href={MenuPDF} download="Shashi-Caterers-Menu.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Menu PDF
              </a>
            </Button>

            {/* Read Menu Button with Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/20 shadow-lg"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Menu
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl h-[90vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-4 border-b bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                    Shashi Caterers Menu
                  </DialogTitle>
                </DialogHeader>
                <div className="w-full h-full overflow-auto p-4">
                  <iframe
                    src={MenuPDF}
                    className="w-full h-full rounded-lg border-2 border-border"
                    title="Menu PDF Viewer"
                    style={{ minHeight: '70vh' }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 md:mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border border-border">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for dishes... (e.g., Biryani, Paneer, Ice Cream)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 rounded-md border border-input bg-background text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">All Categories</option>
                  <option value="juices">Juices & Drinks</option>
                  <option value="milkshakes">Milkshakes</option>
                  <option value="salads">Salads</option>
                  <option value="vegStarters">Veg Starters</option>
                  <option value="chickenStarters">Chicken Starters</option>
                  <option value="seafoodMutton">Seafood & Mutton</option>
                  <option value="breads">Breads & Rotis</option>
                  <option value="rice">Rice & Biryani</option>
                  <option value="southGravy">South Indian Gravies</option>
                  <option value="northGravy">North Indian Gravies</option>
                  <option value="vegGravy">Veg Gravies</option>
                  <option value="vegDry">Veg Dry Items</option>
                  <option value="chaat">Chaat</option>
                  <option value="chinese">Chinese</option>
                  <option value="pasta">Pasta</option>
                  <option value="desserts">Desserts</option>
                  <option value="specialCounters">Special Counters</option>
                </select>
              </div>
            </div>

            {/* Search Results Info */}
            {searchTerm && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-sm text-muted-foreground"
              >
                Searching for "{searchTerm}"...
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* All Categories */}
        <div className="space-y-8 md:space-y-12">
          {Object.entries(menuCategories)
            .filter(([key]) => selectedCategory === "all" || selectedCategory === key)
            .slice(0, showAllCategories || searchTerm || selectedCategory !== "all" ? undefined : 4)
            .map(([key, category], index) => (
              <CategorySection 
                key={key} 
                categoryKey={key} 
                category={category} 
                index={index}
              />
            ))}
        </div>

        {/* View More Categories Button */}
        {!showAllCategories && !searchTerm && selectedCategory === "all" && Object.entries(menuCategories).length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8 md:mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAllCategories(true)}
              className="gap-2 border-2 hover:border-primary hover:bg-primary/10"
            >
              <ChevronDown className="w-5 h-5" />
              View More Categories ({Object.entries(menuCategories).length - 4} more)
            </Button>
          </motion.div>
        )}

        {/* Show Less Categories Button */}
        {showAllCategories && !searchTerm && selectedCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8 md:mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setShowAllCategories(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="gap-2 border-2 hover:border-primary hover:bg-primary/10"
            >
              <ChevronUp className="w-5 h-5" />
              Show Less Categories
            </Button>
          </motion.div>
        )}

        {/* No Results Message */}
        {searchTerm && Object.entries(menuCategories)
          .filter(([key]) => selectedCategory === "all" || selectedCategory === key)
          .every(([key, category]) => {
            const filterItems = (items: string[]) => 
              items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
            
            if ('sections' in category && category.sections) {
              return category.sections.every((section: any) => 
                filterItems(section.items).length === 0
              );
            }
            if ('items' in category && category.items) {
              return filterItems(category.items).length === 0;
            }
            return true;
          }) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No dishes found</h3>
              <p className="text-muted-foreground">
                We couldn't find any dishes matching "{searchTerm}". 
                Try searching with different keywords or browse all categories.
              </p>
              <Button
                onClick={() => setSearchTerm("")}
                variant="outline"
                className="mt-4"
              >
                Clear Search
              </Button>
            </div>
          </motion.div>
        )}

        {/* Footer Note */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 text-center bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-2xl p-6 md:p-8 border border-orange-200 dark:border-orange-800"
        >
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
            ✨ All menu items can be customized according to your preferences and dietary requirements
          </p>
          <p className="text-xs md:text-sm text-muted-foreground/80">
            * Menu availability may vary based on season and location. Contact us for special requests!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
