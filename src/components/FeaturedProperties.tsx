import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock property data - in a real app this would come from an API
const mockProperties = [
  {
    id: "1",
    title: "Modern 4BR Villa in Karen",
    location: "Karen, Nairobi",
    price: "KSh 25,000,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "350m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    verified: true,
    type: "sale" as const,
    featured: true
  },
  {
    id: "2", 
    title: "Luxury 3BR Apartment with Ocean View",
    location: "Nyali, Mombasa",
    price: "KSh 85,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "180m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    verified: true,
    type: "rent" as const
  },
  {
    id: "3",
    title: "Family Townhouse in Lavington",
    location: "Lavington, Nairobi",
    price: "KSh 18,500,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "220m²",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    verified: true,
    type: "sale" as const
  },
  {
    id: "4",
    title: "Prime Commercial Plot in Westlands",
    location: "Westlands, Nairobi",
    price: "KSh 45,000,000",
    bedrooms: 0,
    bathrooms: 0,
    area: "1,200m²",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    verified: true,
    type: "sale" as const
  },
  {
    id: "5",
    title: "Penthouse with City Views",
    location: "Upper Hill, Nairobi",
    price: "KSh 150,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "145m²",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    verified: true,
    type: "rent" as const,
    featured: true
  },
  {
    id: "6",
    title: "Spacious Family Home in Runda",
    location: "Runda, Nairobi",
    price: "KSh 32,000,000",
    bedrooms: 5,
    bathrooms: 4,
    area: "420m²",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
    verified: true,
    type: "sale" as const
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Verified Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked properties that have passed our rigorous verification process
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="gap-2">
            View All Verified Properties
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;