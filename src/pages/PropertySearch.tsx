import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PropertyCard from "../components/PropertyCard";

const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Mock data for demonstration
  const mockProperties = [
    {
      id: "1",
      title: "Luxury Villa in Karen",
      location: "Karen, Nairobi",
      price: "KSh 45,000,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "350 sqm",
      image: "/placeholder.svg",
      verified: true,
      type: "sale" as const
    },
    {
      id: "2",
      title: "Modern Apartment in Westlands",
      location: "Westlands, Nairobi",
      price: "KSh 12,000,000",
      bedrooms: 2,
      bathrooms: 2,  
      area: "120 sqm",
      image: "/placeholder.svg",
      verified: true,
      type: "sale" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Search Properties</h1>
          
          {/* Search Filters */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type
                </label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Price Range
                </label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5m">KSh 0 - 5M</SelectItem>
                    <SelectItem value="5m-15m">KSh 5M - 15M</SelectItem>
                    <SelectItem value="15m-30m">KSh 15M - 30M</SelectItem>
                    <SelectItem value="30m+">KSh 30M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Search Results ({mockProperties.length} properties)</h2>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertySearch;