
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const circles = heroRef.current.querySelectorAll('.floating-circle');
      circles.forEach((circle, index) => {
        const depth = 0.05 + (index * 0.01);
        const moveX = (x - 0.5) * depth * 50;
        const moveY = (y - 0.5) * depth * 50;
        
        (circle as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "floating-circle absolute rounded-full opacity-10",
              i % 2 === 0 ? "bg-primary" : "bg-accent"
            )}
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-secondary text-sm font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
          <span>Introducing our latest design system</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Beautiful design meets <br className="hidden md:block" />
          <span className="text-primary font-semibold">functional simplicity</span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          A minimalist approach to design that prioritizes function while delivering an exceptional experience. Crafted with attention to every detail.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <Button className="rounded-full px-8 py-6 text-base shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
            Explore products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base transition-all duration-300 hover:bg-secondary">
            Learn more
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 rounded-full border-2 border-muted flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
