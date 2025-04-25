
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FileText, Plus, Search, BarChart, Download, CheckCircle, Settings } from 'lucide-react';
import SurveyCard, { Survey } from '@/components/SurveyCard';

// Mock data
const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Employee Satisfaction Survey',
    description: 'Annual survey to gauge employee satisfaction and collect feedback',
    questions: 12,
    responses: 48,
    createdAt: '2025-03-15',
    reportType: 'traffic-light'
  },
  {
    id: '2',
    title: 'Customer Feedback Form',
    description: 'Gathering insights on our new product launch',
    questions: 8,
    responses: 124,
    createdAt: '2025-04-02',
    reportType: 'accumulated'
  },
  {
    id: '3',
    title: 'Website Usability Survey',
    description: 'Testing the usability of our redesigned website',
    questions: 10,
    responses: 75,
    createdAt: '2025-04-10',
    reportType: 'traffic-light'
  },
  {
    id: '4',
    title: 'Post-Event Feedback',
    description: 'Collecting feedback from our annual conference attendees',
    questions: 15,
    responses: 87,
    createdAt: '2025-03-28',
    reportType: 'accumulated'
  },
  {
    id: '5',
    title: 'Product Feature Survey',
    description: 'Understanding which features are most important to users',
    questions: 6,
    responses: 210,
    createdAt: '2025-03-25',
    reportType: 'traffic-light'
  },
  {
    id: '6',
    title: 'Team Collaboration Assessment',
    description: 'Evaluating how well different teams work together',
    questions: 14,
    responses: 32,
    createdAt: '2025-04-15',
    reportType: 'accumulated'
  }
];

const Surveys = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredSurveys = mockSurveys.filter(survey => 
    survey.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Surveys</h1>
              <p className="text-muted-foreground">Manage your surveys and review responses</p>
            </div>
            <Button 
              className="bg-surveyspark-teal hover:bg-surveyspark-teal/90"
              onClick={() => navigate('/create-survey')}
            >
              <Plus size={18} className="mr-2" /> Create Survey
            </Button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Search surveys..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Settings size={16} className="mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      <span>Active Surveys</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BarChart className="mr-2 h-4 w-4" />
                      <span>Traffic Light Reports</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BarChart className="mr-2 h-4 w-4" />
                      <span>Accumulated Reports</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Surveys</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {filteredSurveys.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSurveys.map((survey) => (
                    <SurveyCard key={survey.id} survey={survey} />
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 bg-muted/50 rounded-lg">
                  <FileText size={48} className="mx-auto text-muted-foreground/50" />
                  <h3 className="text-xl font-medium mt-4">No surveys found</h3>
                  <p className="text-muted-foreground mt-2">Try changing your search or create a new survey.</p>
                  <Button 
                    className="mt-4 bg-surveyspark-teal hover:bg-surveyspark-teal/90"
                    onClick={() => navigate('/create-survey')}
                  >
                    <Plus size={16} className="mr-2" /> Create Survey
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="active">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSurveys.slice(0, 4).map((survey) => (
                  <SurveyCard key={survey.id} survey={survey} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="drafts">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSurveys.slice(4, 5).map((survey) => (
                  <SurveyCard key={survey.id} survey={survey} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="archived">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSurveys.slice(5, 6).map((survey) => (
                  <SurveyCard key={survey.id} survey={survey} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Surveys;
