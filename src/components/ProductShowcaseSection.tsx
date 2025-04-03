
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Instagram, Facebook, Users, BarChart, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductShowcaseSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Marketing Automation Hub</h2>
          <p className="text-lg text-gray-600">
            Seamlessly manage all your social media marketing campaigns from a single dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="order-2 md:order-1">
            <Tabs defaultValue="whatsapp" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="whatsapp" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </TabsTrigger>
                <TabsTrigger value="instagram" className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  <span className="hidden sm:inline">Instagram</span>
                </TabsTrigger>
                <TabsTrigger value="facebook" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4" />
                  <span className="hidden sm:inline">Facebook</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="whatsapp" className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">WhatsApp Business Automation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Broadcast messages to thousands of customers in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Track delivery, read, and response rates in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Schedule campaigns to send at optimal times</span>
                  </li>
                </ul>
                <Button className="mt-4">Connect WhatsApp</Button>
              </TabsContent>

              <TabsContent value="instagram" className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">Instagram Marketing Power</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automate responses to Instagram DMs and comments</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Analyze engagement metrics and follower growth</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Schedule and optimize post timings with AI assistance</span>
                  </li>
                </ul>
                <Button className="mt-4">Connect Instagram</Button>
              </TabsContent>

              <TabsContent value="facebook" className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">Facebook Marketing Suite</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manage customer conversations across Facebook Messenger</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monitor ad campaign performance in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Schedule and optimize content for maximum engagement</span>
                  </li>
                </ul>
                <Button className="mt-4">Connect Facebook</Button>
              </TabsContent>
            </Tabs>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-2xl blur-xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img
                  src="/lovable-uploads/1e28ddc9-5c14-4ee3-8377-b86bf8d79720.png"
                  alt="InfoTechBrains Marketing Dashboard"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <BarChart className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Unified Inbox</h3>
              <p className="text-gray-600">
                Manage all your customer conversations from WhatsApp, Instagram, and Facebook in one place.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Get detailed insights and performance metrics for all your marketing campaigns.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Campaign Automation</h3>
              <p className="text-gray-600">
                Schedule and automate your marketing campaigns across all platforms with ease.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
