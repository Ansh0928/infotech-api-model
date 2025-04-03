
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/1e28ddc9-5c14-4ee3-8377-b86bf8d79720.png" 
              alt="InfoTechBrains Logo" 
              className="h-12 mb-4" 
            />
            <p className="text-gray-600 mt-4 max-w-xs">
              Fast-Growing Next-Gen IT Services Company
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/whatsapp" className="text-gray-600 hover:text-primary">WhatsApp API</Link></li>
              <li><Link to="/instagram" className="text-gray-600 hover:text-primary">Instagram API</Link></li>
              <li><Link to="/facebook" className="text-gray-600 hover:text-primary">Meta API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-600">Email: </span>
                <a href="mailto:support@infotechbrains.com" className="ml-1 text-primary hover:underline">
                  support@infotechbrains.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600">Phone: </span>
                <a href="tel:+1234567890" className="ml-1 text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} InfoTechBrains. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-600 hover:text-primary text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
