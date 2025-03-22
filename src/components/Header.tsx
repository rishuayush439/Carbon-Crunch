
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight transition-opacity hover:opacity-80"
        >
          luminous
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Products", "Features", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="rounded-full px-6 transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button - only shown on mobile */}
        {isMobile && (
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground transition-opacity hover:opacity-80" />
            ) : (
              <Menu className="h-6 w-6 text-foreground transition-opacity hover:opacity-80" />
            )}
          </button>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 py-6 px-6">
            {["Products", "Features", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base py-2 text-foreground hover:text-muted-foreground transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              variant="outline" 
              className="w-full mt-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
