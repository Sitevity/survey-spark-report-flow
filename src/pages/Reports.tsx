
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, BarChart, PieChart } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState('traffic-light');
  
  const handleDownload = (format: 'pdf' | 'excel') => {
    toast.success(`Report downloading as ${format.toUpperCase()}`);
  };
  
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Reports</h1>
              <p className="text-muted-foreground">View and analyze survey results</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleDownload('pdf')}>
                <Download size={16} className="mr-2" /> PDF
              </Button>
              <Button variant="outline" onClick={() => handleDownload('excel')}>
                <Download size={16} className="mr-2" /> Excel
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="employee-satisfaction" className="space-y-6">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="employee-satisfaction">Employee Satisfaction</TabsTrigger>
                <TabsTrigger value="customer-feedback">Customer Feedback</TabsTrigger>
                <TabsTrigger value="website-usability">Website Usability</TabsTrigger>
              </TabsList>
              
              <div>
                <Button 
                  variant={selectedReport === 'traffic-light' ? 'default' : 'outline'} 
                  className="mr-2"
                  onClick={() => setSelectedReport('traffic-light')}
                >
                  Traffic Light
                </Button>
                <Button 
                  variant={selectedReport === 'accumulated' ? 'default' : 'outline'}
                  onClick={() => setSelectedReport('accumulated')}
                >
                  Accumulated
                </Button>
              </div>
            </div>
            
            <TabsContent value="employee-satisfaction">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Employee Satisfaction Survey Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedReport === 'traffic-light' ? (
                      <div className="space-y-6">
                        <TrafficLightReport />
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <AccumulatedReport />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="customer-feedback">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Feedback Survey Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-12 min-h-[400px] text-center">
                    <div>
                      <FileText size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                      <h3 className="text-xl font-medium">Select another report type</h3>
                      <p className="text-muted-foreground mt-2 mb-4">This report is only available in accumulated format.</p>
                      <Button onClick={() => setSelectedReport('accumulated')}>View Accumulated Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="website-usability">
              <Card>
                <CardHeader>
                  <CardTitle>Website Usability Survey Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-12 min-h-[400px] text-center">
                    <div>
                      <FileText size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                      <h3 className="text-xl font-medium">No responses yet</h3>
                      <p className="text-muted-foreground mt-2">There aren't any responses to this survey yet. Check back later.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const TrafficLightReport = () => {
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Q1: How would you rate your overall job satisfaction?</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-md">
            <span>Very Satisfied (5)</span>
            <span className="w-6 h-6 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-md">
            <span>Satisfied (4)</span>
            <span className="w-6 h-6 bg-green-400 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <span>Neutral (3)</span>
            <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-md">
            <span>Dissatisfied (2)</span>
            <span className="w-6 h-6 bg-red-400 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-md">
            <span>Very Dissatisfied (1)</span>
            <span className="w-6 h-6 bg-red-600 rounded-full"></span>
          </div>
        </div>
      </div>
      
      <div className="space-y-6 mt-8">
        <h3 className="text-lg font-semibold">Q2: How likely are you to recommend our company as a place to work?</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-md">
            <span>Extremely Likely (9-10)</span>
            <span className="w-6 h-6 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <span>Somewhat Likely (7-8)</span>
            <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <span>Neutral (5-6)</span>
            <span className="w-6 h-6 bg-yellow-500 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-md">
            <span>Somewhat Unlikely (3-4)</span>
            <span className="w-6 h-6 bg-red-400 rounded-full"></span>
          </div>
          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-md">
            <span>Extremely Unlikely (1-2)</span>
            <span className="w-6 h-6 bg-red-600 rounded-full"></span>
          </div>
        </div>
      </div>
    </>
  );
};

const AccumulatedReport = () => {
  // Dummy data for chart
  const data = [
    { name: 'Very Satisfied', value: 15 },
    { name: 'Satisfied', value: 20 },
    { name: 'Neutral', value: 8 },
    { name: 'Dissatisfied', value: 4 },
    { name: 'Very Dissatisfied', value: 1 },
  ];
  
  const recommendData = [
    { name: 'Extremely Likely', value: 12 },
    { name: 'Somewhat Likely', value: 18 },
    { name: 'Neutral', value: 10 },
    { name: 'Somewhat Unlikely', value: 5 },
    { name: 'Extremely Unlikely', value: 3 },
  ];
  
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Q1: How would you rate your overall job satisfaction?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>{item.value} responses</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-surveyspark-teal" 
                    style={{ width: `${(item.value / 48) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 relative rounded-full bg-gray-200 flex items-center justify-center">
              <PieChart size={32} className="text-gray-500" />
              <div className="absolute text-xs text-center">
                Pie Chart Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6 mt-8">
        <h3 className="text-lg font-semibold">Q2: How likely are you to recommend our company as a place to work?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {recommendData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>{item.value} responses</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-surveyspark-teal" 
                    style={{ width: `${(item.value / 48) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
              <BarChart size={32} className="text-gray-500" />
              <div className="text-xs text-center ml-3">
                Bar Chart Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
