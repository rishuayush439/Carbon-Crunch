
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    title: "Luminous Pro",
    description: "Our flagship product with all premium features and priority support.",
    price: "$199",
    features: ["Advanced analytics", "Unlimited projects", "24/7 support", "Custom integrations"],
    isPopular: true,
  },
  {
    id: 2,
    title: "Luminous Standard",
    description: "Perfect for small teams and individual professionals.",
    price: "$99",
    features: ["Basic analytics", "Up to 10 projects", "Business hours support", "Standard integrations"],
    isPopular: false,
  },
  {
    id: 3,
    title: "Luminous Lite",
    description: "Essential features for those just getting started.",
    price: "$49",
    features: ["Basic analytics", "Up to 3 projects", "Email support", "Core integrations"],
    isPopular: false,
  },
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-secondary text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
            <span>Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Choose the perfect plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include core features with different levels of support and capability.
          </p>
          
          <div className="inline-flex p-1 mt-8 bg-secondary rounded-full">
            <button
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "monthly" ? "bg-white shadow" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab("monthly")}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "yearly" ? "bg-white shadow" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab("yearly")}
            >
              Yearly <span className="text-xs opacity-75">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={cn(
                "relative bg-white rounded-xl overflow-hidden transition-all duration-300",
                "border border-border hover:shadow-lg",
                product.isPopular ? "shadow-md" : ""
              )}
            >
              {product.isPopular && (
                <div className="absolute top-6 right-6 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-semibold">{product.price}</span>
                  <span className="text-muted-foreground">/{activeTab}</span>
                </div>
                
                <Button 
                  className={cn(
                    "w-full rounded-full mb-8",
                    product.isPopular ? "" : "bg-primary/90 hover:bg-primary"
                  )}
                >
                  Get started
                </Button>
                
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
