import { useState } from "react";
import { Search, MapPin, Filter, Star, Phone, Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AgentFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterType, setFilterType] = useState("agents");

  // Mock agent data
  const mockAgents = [
    {
      id: "1",
      name: "Sarah Kamau",
      company: "Prime Properties",
      image: "/placeholder.svg",
      soldInArea: 28,
      soldTotal: 85,
      activeListings: 12,
      rating: 4.9,
      reviews: 124,
      phone: "+254 700 123 456",
      email: "sarah.kamau@prime.co.ke",
      specialties: ["Karen", "Westlands", "Luxury Properties"]
    },
    {
      id: "2", 
      name: "David Njoroge",
      company: "Elite Realty Group",
      image: "/placeholder.svg",
      soldInArea: 19,
      soldTotal: 67,
      activeListings: 8,
      rating: 4.8,
      reviews: 89,
      phone: "+254 701 234 567",
      email: "david.njoroge@elite.co.ke",
      specialties: ["Kilimani", "Lavington", "Commercial"]
    },
    {
      id: "3",
      name: "Grace Wanjiku",
      company: "Nairobi Property Solutions",
      image: "/placeholder.svg", 
      soldInArea: 15,
      soldTotal: 42,
      activeListings: 15,
      rating: 4.7,
      reviews: 56,
      phone: "+254 702 345 678",
      email: "grace.wanjiku@nps.co.ke",
      specialties: ["Kileleshwa", "Parklands", "First Time Buyers"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Find a Real Estate Agent</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thinking of selling? We help you find agents who are experts in your area!
          </p>
        </div>

        {/* Search Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="area" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
              <TabsTrigger value="area">Area Search</TabsTrigger>
              <TabsTrigger value="name">Name Search</TabsTrigger>
            </TabsList>
            
            <TabsContent value="area">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Enter area or address"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Show
                      </label>
                      <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agents">Agents (1,250)</SelectItem>
                          <SelectItem value="agencies">Agencies (180)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Sort by
                      </label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recent">Recent Sales</SelectItem>
                          <SelectItem value="mostSold">Most Sold in Area</SelectItem>
                          <SelectItem value="totalSold">Most Sold Total</SelectItem>
                          <SelectItem value="rating">Highest Rated</SelectItem>
                          <SelectItem value="nameAZ">Name A-Z</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="name">
              <Card>
                <CardContent className="p-6">
                  <div className="max-w-md mx-auto">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Agent or Agency Name
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Sales in the area the last 6 months on PropertyHub
          </p>
        </div>

        {/* Agent Cards */}
        <div className="space-y-6">
          {mockAgents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Agent Info */}
                  <div className="lg:col-span-2 flex items-start space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={agent.image} alt={agent.name} />
                      <AvatarFallback className="text-lg">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {agent.name}
                      </h3>
                      <p className="text-muted-foreground mb-2">{agent.company}</p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm font-medium">{agent.rating}</span>
                          <span className="text-sm text-muted-foreground ml-1">
                            ({agent.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {agent.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-1" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Sold in search area:</p>
                      <p className="text-2xl font-bold text-primary">{agent.soldInArea}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Sold total:</p>
                      <p className="text-lg font-semibold">{agent.soldTotal}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Active listings:</p>
                      <p className="text-lg font-semibold">{agent.activeListings}</p>
                    </div>
                  </div>
                  
                  {/* Action */}
                  <div className="flex items-center justify-center lg:justify-end">
                    <Button size="lg" className="w-full lg:w-auto">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentFinder;