
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600">
            Join thousands of businesses using InfoTechBrains to supercharge their marketing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <p className="text-4xl font-bold text-primary mb-2">10x</p>
              <p className="text-gray-600">Increase in Customer Engagement</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <p className="text-4xl font-bold text-primary mb-2">85%</p>
              <p className="text-gray-600">Reduction in Response Time</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-gray-600">Active Business Users</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-gray-600">Customer Support</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
