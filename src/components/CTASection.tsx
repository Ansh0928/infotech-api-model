
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute right-10 bottom-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of businesses using InfoTechBrains to automate their social media marketing.
            Get started today with our 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium">
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white bg-primary/80 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
          <img
            src="/lovable-uploads/7bb8945d-a2a4-4520-b940-f45a363beebd.png"
            alt="Marketing Automation"
            className="mt-12 mx-auto max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
