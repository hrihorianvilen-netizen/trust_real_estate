import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { useState } from "react";

const PropertySearch = () => {
  const [searchType, setSearchType] = useState("sale");

  return (
    <div className="bg-card rounded-xl shadow-medium p-6 border border-border">
      {/* Search Type Toggle */}
      <div className="flex mb-6">
        <Button
          variant={searchType === "sale" ? "default" : "ghost"}
          onClick={() => setSearchType("sale")}
          className="rounded-r-none"
        >
          For Sale
        </Button>
        <Button
          variant={searchType === "rent" ? "default" : "ghost"}
          onClick={() => setSearchType("rent")}
          className="rounded-l-none"
        >
          For Rent
        </Button>
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Location (e.g., Nairobi, Mombasa)"
            className="pl-10"
          />
        </div>

        {/* Property Type */}
        <Select>
          <SelectTrigger>
            <Home className="w-4 h-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="house">Houses</SelectItem>
            <SelectItem value="apartment">Apartments</SelectItem>
            <SelectItem value="townhouse">Townhouses</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range */}
        <Select>
          <SelectTrigger>
            <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Price</SelectItem>
            <SelectItem value="0-1m">Under KSh 1M</SelectItem>
            <SelectItem value="1m-5m">KSh 1M - 5M</SelectItem>
            <SelectItem value="5m-10m">KSh 5M - 10M</SelectItem>
            <SelectItem value="10m-20m">KSh 10M - 20M</SelectItem>
            <SelectItem value="20m+">KSh 20M+</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button className="w-full" size="lg">
          <Search className="w-4 h-4 mr-2" />
          Find Properties
        </Button>
      </div>

      {/* Additional Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          More Filters
        </Button>
        <Button variant="outline" size="sm">
          Verified Only
        </Button>
        <Button variant="outline" size="sm">
          New Listings
        </Button>
      </div>
    </div>
  );
};

export default PropertySearch;