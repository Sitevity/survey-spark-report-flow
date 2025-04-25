
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Save, Plus } from 'lucide-react';
import { toast } from 'sonner';

const CreateSurvey = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reportType, setReportType] = useState<'traffic-light' | 'accumulated'>('traffic-light');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title) {
      toast.error('Please enter a survey title');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Survey created successfully');
      setIsSubmitting(false);
      navigate('/surveys');
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" onClick={() => navigate('/surveys')}>
              <ArrowLeft size={18} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Create Survey</h1>
              <p className="text-muted-foreground">Set up your survey details and questions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="title" className="text-base">Survey Title</Label>
                      <Input 
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter survey title"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description" className="text-base">Description</Label>
                      <Textarea 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter survey description"
                        className="mt-2"
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label className="text-base mb-2 block">Report Type</Label>
                      <RadioGroup value={reportType} onValueChange={(value) => setReportType(value as 'traffic-light' | 'accumulated')}>
                        <div className="flex items-start space-x-2 mb-3">
                          <RadioGroupItem value="traffic-light" id="traffic-light" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="traffic-light" className="font-medium">Traffic Light</Label>
                            <p className="text-sm text-muted-foreground">
                              Risk factors per answer, visualized with color indicators
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="accumulated" id="accumulated" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="accumulated" className="font-medium">Accumulated Answers</Label>
                            <p className="text-sm text-muted-foreground">
                              Shows totals for each answer choice (e.g., 10 people said yes)
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="bg-surveyspark-teal hover:bg-surveyspark-teal/90 w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Creating Survey...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Save size={18} /> Create Survey
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </Card>
            </div>
            
            <div>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Survey Questions</h3>
                <p className="text-muted-foreground mb-6">Add questions to your survey after creating the basic details.</p>
                <Button className="w-full" variant="outline" disabled>
                  <Plus size={16} className="mr-2" /> Add Question
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSurvey;
