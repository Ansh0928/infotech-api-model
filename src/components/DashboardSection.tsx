
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const DashboardSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Connect Your Platforms</h2>
          <p className="text-lg text-gray-600">
            Link your social accounts to start automating your marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="platform-card">
            <CardHeader>
              <div className="flex items-center mb-2">
                <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                <CardTitle>WhatsApp</CardTitle>
              </div>
              <CardDescription>
                Connect your WhatsApp Business API to send automated messages, campaigns, and handle customer queries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number ID
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Enter Phone Number ID" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API Key
                  </label>
                  <Input 
                    type="password" 
                    placeholder="Enter API Key" 
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="btn-connect w-full">
                <MessageCircle className="h-4 w-4" />
                Connect WhatsApp
              </Button>
            </CardFooter>
          </Card>

          <Card className="platform-card">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Instagram className="h-8 w-8 text-purple-600 mr-3" />
                <CardTitle>Instagram</CardTitle>
              </div>
              <CardDescription>
                Link your Instagram account to automate DMs, schedule posts, and analyze engagement metrics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instagram Username
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Enter Username" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Access Token
                  </label>
                  <Input 
                    type="password" 
                    placeholder="Enter Access Token" 
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="btn-connect w-full">
                <Instagram className="h-4 w-4" />
                Connect Instagram
              </Button>
            </CardFooter>
          </Card>

          <Card className="platform-card">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Facebook className="h-8 w-8 text-blue-600 mr-3" />
                <CardTitle>Meta</CardTitle>
              </div>
              <CardDescription>
                Connect your Facebook Page to manage ads, automate messages, and track campaign performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Facebook Page ID
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Enter Page ID" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API Key
                  </label>
                  <Input 
                    type="password" 
                    placeholder="Enter API Key" 
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="btn-connect w-full">
                <Facebook className="h-4 w-4" />
                Connect Meta
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Need help connecting your accounts? Check our <a href="#" className="text-primary hover:underline">setup guide</a> or <a href="#" className="text-primary hover:underline">contact support</a>.
          </p>
          <Button variant="outline" className="mx-auto">
            View All Integrations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
