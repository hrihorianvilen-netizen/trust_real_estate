import { Button } from "@/components/ui/button";
import { Shield, Search, MapPin, Menu, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import shieldLogo from "@/assets/shield-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={shieldLogo} alt="PropertyHub" className="w-8 h-8" />
            <div className="text-xl font-bold text-primary">
              PropertyHub
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  Properties
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3"
                          onClick={() => navigate('/search')}
                        >
                          <div className="text-left">
                            <div className="font-medium">Properties for Sale</div>
                            <div className="text-sm text-muted-foreground">Browse houses, apartments, and land for purchase</div>
                          </div>
                        </Button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3"
                          onClick={() => navigate('/search')}
                        >
                          <div className="text-left">
                            <div className="font-medium">Properties for Rent</div>
                            <div className="text-sm text-muted-foreground">Find rental properties in your area</div>
                          </div>
                        </Button>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3"
                          onClick={() => navigate('/agents')}
                        >
                          <div className="text-left">
                            <div className="font-medium">Find Agents</div>
                            <div className="text-sm text-muted-foreground">Connect with verified real estate professionals</div>
                          </div>
                        </Button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3"
                        >
                          <div className="text-left">
                            <div className="font-medium">Property Valuation</div>
                            <div className="text-sm text-muted-foreground">Get accurate property value estimates</div>
                          </div>
                        </Button>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">
                  News & Guides
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="space-y-3">
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3"
                          onClick={() => navigate('/news')}
                        >
                          <div className="text-left">
                            <div className="font-medium">Property News</div>
                            <div className="text-sm text-muted-foreground">Latest market trends and insights</div>
                          </div>
                        </Button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3"
                        >
                          <div className="text-left">
                            <div className="font-medium">Buying Guides</div>
                            <div className="text-sm text-muted-foreground">Step-by-step guides for property buyers</div>
                          </div>
                        </Button>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/login')}>
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="default" onClick={() => navigate('/login')}>
              List Your Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/search')}>
                Properties for Sale
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/search')}>
                Properties for Rent
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/agents')}>
                Find Agents
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/news')}>
                Property News
              </Button>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" onClick={() => navigate('/login')}>
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="default" className="w-full" onClick={() => navigate('/login')}>
                  List Your Property
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;