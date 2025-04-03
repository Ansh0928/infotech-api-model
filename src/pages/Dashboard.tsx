
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Facebook, Instagram, MessageCircle, Plus, BarChart3, Settings, Users, List } from 'lucide-react';

const Dashboard = () => {
  const [username] = useState('John');
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Welcome, {username}</h1>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" /> New Campaign
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Campaigns</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <List className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Subscribers</p>
                    <p className="text-2xl font-bold">1,248</p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Messages Sent</p>
                    <p className="text-2xl font-bold">8,942</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Conversion Rate</p>
                    <p className="text-2xl font-bold">24.8%</p>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Connected Platforms</h2>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                <TabsTrigger value="instagram">Instagram</TabsTrigger>
                <TabsTrigger value="facebook">Meta</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-green-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                      <CardTitle className="text-lg">WhatsApp Business</CardTitle>
                    </div>
                    <CardDescription>Connected on Apr 1, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">
                      <p className="flex justify-between py-1 border-b">
                        <span>Account:</span>
                        <span className="font-medium text-gray-700">+1 (234) 567-8901</span>
                      </p>
                      <p className="flex justify-between py-1 border-b">
                        <span>Status:</span>
                        <span className="text-green-600 font-medium">Active</span>
                      </p>
                      <p className="flex justify-between py-1">
                        <span>Messages:</span>
                        <span className="font-medium text-gray-700">4,521 sent</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-purple-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <Instagram className="h-5 w-5 text-purple-600 mr-2" />
                      <CardTitle className="text-lg">Instagram</CardTitle>
                    </div>
                    <CardDescription>Connected on Mar 28, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">
                      <p className="flex justify-between py-1 border-b">
                        <span>Account:</span>
                        <span className="font-medium text-gray-700">@yourbusiness</span>
                      </p>
                      <p className="flex justify-between py-1 border-b">
                        <span>Status:</span>
                        <span className="text-green-600 font-medium">Active</span>
                      </p>
                      <p className="flex justify-between py-1">
                        <span>DMs:</span>
                        <span className="font-medium text-gray-700">1,832 sent</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-blue-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <Facebook className="h-5 w-5 text-blue-600 mr-2" />
                      <CardTitle className="text-lg">Facebook Page</CardTitle>
                    </div>
                    <CardDescription>Connected on Mar 25, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">
                      <p className="flex justify-between py-1 border-b">
                        <span>Page:</span>
                        <span className="font-medium text-gray-700">Your Business</span>
                      </p>
                      <p className="flex justify-between py-1 border-b">
                        <span>Status:</span>
                        <span className="text-green-600 font-medium">Active</span>
                      </p>
                      <p className="flex justify-between py-1">
                        <span>Messages:</span>
                        <span className="font-medium text-gray-700">2,589 sent</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="whatsapp" className="mt-0">
              <Card className="border border-green-200">
                <CardHeader>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                    <CardTitle>WhatsApp Business</CardTitle>
                  </div>
                  <CardDescription>Manage your WhatsApp business account</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Your WhatsApp Business account is connected and active.</p>
                  <Button variant="outline" size="sm" className="mr-2">
                    <Settings className="h-4 w-4 mr-2" /> Configure
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                    Disconnect
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="instagram" className="mt-0">
              <Card className="border border-purple-200">
                <CardHeader>
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-purple-600 mr-2" />
                    <CardTitle>Instagram</CardTitle>
                  </div>
                  <CardDescription>Manage your Instagram business account</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Your Instagram business account is connected and active.</p>
                  <Button variant="outline" size="sm" className="mr-2">
                    <Settings className="h-4 w-4 mr-2" /> Configure
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                    Disconnect
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="facebook" className="mt-0">
              <Card className="border border-blue-200">
                <CardHeader>
                  <div className="flex items-center">
                    <Facebook className="h-5 w-5 text-blue-600 mr-2" />
                    <CardTitle>Meta</CardTitle>
                  </div>
                  <CardDescription>Manage your Facebook page and Meta connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Your Facebook page is connected and active.</p>
                  <Button variant="outline" size="sm" className="mr-2">
                    <Settings className="h-4 w-4 mr-2" /> Configure
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                    Disconnect
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
