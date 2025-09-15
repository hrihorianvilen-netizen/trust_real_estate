import { useParams } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Calendar, Phone, Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VerificationBadge from "../components/VerificationBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock property data
  const property = {
    id: 1,
    title: "Luxury Villa in Karen",
    location: "Karen, Nairobi",
    price: "KSh 45,000,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "350 sqm",
    description: "This stunning luxury villa offers modern living in one of Nairobi's most prestigious neighborhoods. Features include a spacious living area, modern kitchen, beautiful garden, and security.",
    features: ["Swimming Pool", "Garden", "Parking", "Security", "Modern Kitchen", "Spacious Living Room"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    isVerified: true,
    agent: {
      name: "John Mwangi",
      phone: "+254 700 123 456",
      email: "john@propertyhub.ke"
    },
    yearBuilt: 2020
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-6">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="grid grid-cols-3 gap-2 mt-2">
                {property.images.slice(1).map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">{property.title}</h1>
                  {property.isVerified && <VerificationBadge variant="small" />}
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
                <div className="text-3xl font-bold text-primary">{property.price}</div>
              </div>

              {/* Property Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span>{property.area}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span>Built {property.yearBuilt}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="bg-secondary text-secondary-foreground px-3 py-2 rounded text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">{property.agent.name}</div>
                    <div className="text-sm text-muted-foreground">Property Agent</div>
                  </div>
                  <Button className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Property Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property ID:</span>
                    <span>PH{property.id.toString().padStart(6, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Type:</span>
                    <span>Villa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year Built:</span>
                    <span>{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-success">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;