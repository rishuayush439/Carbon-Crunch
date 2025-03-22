
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-medium tracking-tight mb-6 inline-block">
              Carbon Crunch
            </Link>
            <p className="text-muted-foreground mt-4 mb-6 text-sm">
              Beautiful design meets functional simplicity. A minimalist approach that prioritizes exceptional experience.
            </p>
            <div className="flex space-x-4">
              {["twitter", "instagram", "facebook", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                    "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  )}
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" aria-hidden="true">
                    <use xlinkHref={`#${social}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Products",
              links: ["Features", "Pricing", "Showcase", "Updates"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Contact"],
            },
            {
              title: "Resources",
              links: ["Blog", "Documentation", "Support", "Terms", "Privacy"],
            },
          ].map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-base font-medium mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Carbon Crunch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
