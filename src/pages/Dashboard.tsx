
import React from 'react';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import SurveyCard from '@/components/SurveyCard';
import { FileText, BarChart, Users, Bell } from 'lucide-react';
import { Survey } from '@/components/SurveyCard';

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
  }
];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to SurveySpark</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Surveys" 
              value="12" 
              icon={<FileText size={20} />} 
              color="teal"
              trend={{ value: 10, isPositive: true }}
            />
            <StatCard 
              title="Survey Questions" 
              value="48" 
              icon={<FileText size={20} />} 
            />
            <StatCard 
              title="Survey Results" 
              value="25" 
              icon={<BarChart size={20} />} 
            />
            <StatCard 
              title="Pending Feedback" 
              value="6" 
              icon={<Bell size={20} />} 
              color="warning"
              trend={{ value: 2, isPositive: false }}
            />
          </div>
          
          {/* Recent Surveys */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Surveys</h2>
              <button className="text-sm text-surveyspark-teal hover:text-surveyspark-teal/80">
                View all
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {mockSurveys.map((survey) => (
                <SurveyCard key={survey.id} survey={survey} />
              ))}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <button className="text-sm text-surveyspark-teal hover:text-surveyspark-teal/80">
                View all
              </button>
            </div>
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-surveyspark-teal/10 flex items-center justify-center mr-3">
                      <Users size={18} className="text-surveyspark-teal" />
                    </div>
                    <div>
                      <p className="font-medium">New response submitted</p>
                      <p className="text-sm text-muted-foreground">{i * 2} hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
