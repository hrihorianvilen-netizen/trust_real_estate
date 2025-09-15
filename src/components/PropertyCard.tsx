import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import VerificationBadge from "./VerificationBadge";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  verified: boolean;
  type: "sale" | "rent";
  featured?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  verified,
  type,
  featured = false
}: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {featured && (
            <Badge className="bg-trust-gold text-trust-gold-foreground">
              Featured
            </Badge>
          )}
          {verified && (
            <VerificationBadge variant="small" />
          )}
        </div>

        {/* Heart Icon */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <Heart 
            className={`w-4 h-4 ${isFavorited ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} 
          />
        </button>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="text-base font-bold">
            {price}
            {type === "rent" && <span className="text-sm font-normal">/month</span>}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title and Location */}
        <div className="mb-3">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            {bedrooms}
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            {bathrooms}
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            {area}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          onClick={() => navigate(`/property/${id}`)}
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;