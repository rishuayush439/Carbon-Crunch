
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThreeDAnimation from "@/components/ThreeDAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <header className="w-full py-4 border-b border-green-500">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-bold text-xl">CarbonCrunch</a>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm">Home</a>
            <a href="#" className="text-sm">Services</a>
            <a href="#" className="text-sm">Blog</a>
            <a href="#" className="text-sm">About Us</a>
            <a href="#" className="text-sm">Contact</a>
          </nav>
          <div className="flex space-x-3">
            <Button variant="outline" className="text-sm rounded">Login</Button>
            <Button className="text-sm bg-green-500 hover:bg-green-600 rounded">Book Demo</Button>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-20 bg-green-500/80 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              >
                GHG Accounting
                <br />
                Scope 1, Scope 2, Scope 3
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-800 mb-8"
              >
                Track, minimize, offset, and report your carbon emissions effortlessly
                <br />to drive faster decarbonization progress.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Why CarbonCrunch Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-green-500 mb-4">Why CarbonCrunch</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading Sustainability with CarbonCrunch
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                GHG (Greenhouse Gas) Accounting is a framework used to measure and
                report greenhouse gas emissions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Regulatory Compliance and Reporting",
                  description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
                },
                {
                  title: "Meeting Sustainability Goals and Net-Zero Targets",
                  description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
                },
                {
                  title: "Cost Savings and Operational Efficiency",
                  description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
                },
                {
                  title: "Investor and Consumer Expectations",
                  description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
                },
                {
                  title: "Climate Risk Management",
                  description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
                },
                {
                  title: "Strengthening Brand Reputation and Market Leadership",
                  description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
                }
              ].map((feature, idx) => (
                <Card key={idx} className="border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Leaf className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-green-600">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-green-50 text-green-500 text-sm font-medium mb-6">
                How It works?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Getting Started is easy
              </h2>
              <p className="text-gray-600">
                How carboncrunch SAAS works
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="relative">
                    <div className="text-green-500 font-bold mb-4">
                      {step.toString().padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-medium mb-3 text-green-600">
                      Track and manage your Net Zero Pathway
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Set decarbonisation targets, obtain insights on the 
                      amount of emissions to be emitted by the target year
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Our Dashboard
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                Track and manage your emissions with our comprehensive dashboard
              </p>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/uploads/15a6d4e7-c033-45ba-a5cb-fbcf7ac2c6e2.png" 
                  alt="Dashboard Preview" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Animation Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl font-bold mb-6">
                Interactive Visualization
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our 3D visualizations help you understand your carbon footprint more intuitively.
              </p>
            </motion.div>
            <ThreeDAnimation className="rounded-xl border border-gray-200 shadow-lg overflow-hidden" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-green-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to reduce your carbon footprint?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Join thousands of companies making a difference with our powerful carbon accounting tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="w-full sm:w-auto rounded-md px-8 py-6 text-lg bg-green-500 hover:bg-green-600 transition-all duration-300">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto rounded-md px-8 py-6 text-lg border-2 border-green-500 text-green-500">
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
