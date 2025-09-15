import { Shield, FileCheck, Users, Clock, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustFeatures = [
  {
    icon: Shield,
    title: "100% Property Verification",
    description: "Every property undergoes thorough legal and ownership verification before listing",
    color: "text-success"
  },
  {
    icon: FileCheck,
    title: "Document Authentication",
    description: "We verify all legal documents including title deeds and ownership certificates",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Seller Background Check",
    description: "All property sellers are verified and must meet our strict criteria",
    color: "text-accent"
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Our dedicated team is always available to assist with your property journey",
    color: "text-trust-gold"
  }
];

const stats = [
  { number: "10,000+", label: "Verified Properties" },
  { number: "50,000+", label: "Happy Customers" },
  { number: "99.8%", label: "Success Rate" },
  { number: "4.9/5", label: "Customer Rating" }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Most Trusted Property Platform
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose PropertyHub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another property platform. We're your shield against fraud and your 
            gateway to legitimate real estate opportunities.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4">
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Trusted by Thousands of Users
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              Our numbers speak for our commitment to trust and security
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Process */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Our Verification Process
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Property Submission</h4>
                <p className="text-muted-foreground text-sm">Seller submits property details</p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Document Review</h4>
                <p className="text-muted-foreground text-sm">Legal team verifies all documents</p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-success text-success-foreground rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Property Listed</h4>
                <p className="text-muted-foreground text-sm">Verified property goes live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import ArrowRight for the verification process
import { ArrowRight } from "lucide-react";

export default TrustSection;