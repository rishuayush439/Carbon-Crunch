
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Layers, Shield, RefreshCcw, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Optimized performance ensures your experience is always smooth and responsive."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Modular Design",
    description: "Flexible components that can be combined in countless ways to suit your needs."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Architecture",
    description: "Built with security in mind at every level of the development process."
  },
  {
    icon: <RefreshCcw className="h-6 w-6" />,
    title: "Continuous Updates",
    description: "Regular improvements and new features to keep your experience cutting-edge."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Quality Focused",
    description: "Meticulously crafted with attention to every detail for a flawless experience."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User Centered",
    description: "Designed around how people actually use products, not how we think they should."
  }
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => (
  <div 
    className={cn(
      "group relative bg-white p-8 rounded-lg transition-all duration-300",
      "hover:shadow-lg hover:-translate-y-1",
      "border border-border"
    )}
    style={{ 
      animationDelay: `${0.1 * index}s`,
    }}
  >
    <div className="absolute -top-3 -left-3 bg-secondary text-primary p-3 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-medium mt-5 mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-secondary text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
            <span>Why choose us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Thoughtfully crafted features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every aspect of our design system has been carefully considered to enhance both functionality and aesthetic appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
