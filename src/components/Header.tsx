
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1e28ddc9-5c14-4ee3-8377-b86bf8d79720.png" 
            alt="InfoTechBrains Logo" 
            className="h-10 object-contain" 
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-primary font-medium">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium">
            Pricing
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
