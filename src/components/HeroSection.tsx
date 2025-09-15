import heroImage from "@/assets/hero-properties.jpg";
import PropertySearch from "./PropertySearch";
import VerificationBadge from "./VerificationBadge";
import { Shield, Users, CheckCircle, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Beautiful properties"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Most
            <span className="block bg-gradient-to-r from-trust-gold to-accent bg-clip-text text-transparent">
              Trusted Real Estate
            </span>
            Platform
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Every property verified by our team for your safety and security
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-success" />
              <span>100% Verified Properties</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-trust-gold" />
              <span>10,000+ Satisfied Customers</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-trust-gold" />
              <span>4.9/5 Trust Rating</span>
            </div>
          </div>
        </div>

        {/* Search Component */}
        <div className="max-w-5xl mx-auto">
          <PropertySearch />
        </div>

        {/* Verification Promise */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-card/20">
            <div className="flex justify-center mb-4">
              <VerificationBadge variant="large" />
            </div>
            <p className="text-primary-foreground/90 text-lg">
              Our team personally verifies every property listing to ensure legal compliance, 
              authentic ownership, and accurate information before it appears on our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;