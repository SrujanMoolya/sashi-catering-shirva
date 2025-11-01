import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  LogOut,
  Menu as MenuIcon,
  Package,
  Image,
  Star,
  Settings
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin");
  };

  const stats = [
    { title: "Total Bookings", value: "24", icon: Calendar, change: "+12%" },
    { title: "This Month Orders", value: "8", icon: ShoppingBag, change: "+8%" },
    { title: "Active Clients", value: "156", icon: Users, change: "+23%" },
    { title: "Revenue", value: "₹4.2L", icon: TrendingUp, change: "+15%" },
  ];

  const quickLinks = [
    { title: "Manage Menu", icon: MenuIcon, path: "/admin/menu", description: "Add, edit or remove menu items" },
    { title: "Packages", icon: Package, path: "/admin/packages", description: "Manage catering packages" },
    { title: "Bookings", icon: Calendar, path: "/admin/bookings", description: "View and manage bookings" },
    { title: "Gallery", icon: Image, path: "/admin/gallery", description: "Upload event photos" },
    { title: "Testimonials", icon: Star, path: "/admin/testimonials", description: "Manage customer reviews" },
    { title: "Settings", icon: Settings, path: "/admin/settings", description: "Update contact info" },
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sashi Caterers Admin</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.path}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <link.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{link.title}</h3>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Wedding - Sharma Family", date: "Jan 15, 2025", guests: "500", status: "Confirmed" },
                { name: "Corporate Event - Tech Corp", date: "Jan 20, 2025", guests: "150", status: "Pending" },
                { name: "Birthday - Kumar", date: "Jan 25, 2025", guests: "80", status: "Confirmed" },
              ].map((booking, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{booking.name}</p>
                    <p className="text-sm text-muted-foreground">{booking.date} • {booking.guests} guests</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    booking.status === "Confirmed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
